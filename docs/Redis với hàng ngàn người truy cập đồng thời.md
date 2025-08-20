# Xử lý Redis với hàng ngàn người truy cập đồng thời

## 1. Vấn đề khi có nhiều user cùng lúc

### Tình huống thực tế:
- Website có **5000 users** online cùng lúc
- Mỗi user làm **10 actions/phút** (click, scroll, load page)
- Total: **50,000 requests/phút** = **833 requests/giây**

### Vấn đề phát sinh:

#### 1.1 Connection Pool Exhausted
```javascript
// ❌ Sai: Tạo connection mới mỗi request
app.get('/api/user', async (req, res) => {
  const redis = new Redis() // Tạo connection mới!
  const user = await redis.get(`user:${req.userId}`)
  redis.disconnect() // Đóng connection
})

// Kết quả: 833 connections/giây → Redis quá tải
```

#### 1.2 Cache Stampede (Hiện tượng đua cache)
```javascript
// Tình huống: Cache "hot_products" hết hạn đúng lúc 1000 users truy cập

// ❌ Điều gì xảy ra:
User 1: Check cache → null → Query DB → Set cache
User 2: Check cache → null → Query DB → Set cache  
User 3: Check cache → null → Query DB → Set cache
...
User 1000: Check cache → null → Query DB → Set cache

// Kết quả: 1000 queries DB cùng lúc → DB crash
```

#### 1.3 Lock Contention (Tranh chấp lock)
```javascript
// 100 users cùng update wallet balance
await lockService.lock(`wallet:user123`, async () => {
  // Critical section - chỉ 1 user được vào
})

// 99 users phải chờ → Timeout → Error
```

## 2. Giải pháp tối ưu Redis cho high traffic

### 2.1 Connection Pooling & Clustering

```typescript
// ✅ Đúng: Sử dụng connection pool
@Injectable()
export class RedisService {
  private readonly cluster: Redis.Cluster
  
  constructor() {
    // Redis Cluster với multiple nodes
    this.cluster = new Redis.Cluster([
      { host: 'redis-node-1', port: 6379 },
      { host: 'redis-node-2', port: 6379 },
      { host: 'redis-node-3', port: 6379 },
    ], {
      // Connection pool settings
      lazyConnect: true,
      maxRetriesPerRequest: 3,
      retryDelayOnFailover: 100,
      
      // Pool configuration
      poolSize: 50, // 50 connections per node
      connectTimeout: 10000,
      commandTimeout: 5000,
    })
  }
}
```

### 2.2 Giải quyết Cache Stampede

#### Phương pháp 1: Probabilistic Early Expiration
```typescript
export class SmartCacher<T> extends Cacher<T> {
  async getCache(key: string): Promise<T | null> {
    const data = await this.cacheManager.get<{
      value: T,
      expiry: number,
      created: number
    }>(`${this.keyPrefix}${key}`)
    
    if (!data) return null
    
    const now = Date.now()
    const timeToExpiry = data.expiry - now
    const age = now - data.created
    
    // Probabilistic refresh: Refresh sớm hơn dựa trên tuổi của cache
    const refreshProbability = age / (data.expiry - data.created)
    
    if (timeToExpiry < 30000 && Math.random() < refreshProbability) {
      // Refresh cache in background, return current value
      this.backgroundRefresh(key)
    }
    
    return data.value
  }
  
  private async backgroundRefresh(key: string): Promise<void> {
    // Async refresh without blocking current request
    setImmediate(async () => {
      try {
        const fresh = await this.fetchFreshData(key)
        await this.setCache(key, fresh)
      } catch (error) {
        // Log error but don't throw
        console.error('Background refresh failed:', error)
      }
    })
  }
}
```

#### Phương pháp 2: Lock-based Cache Refresh
```typescript
export class LockingCache<T> extends Cacher<T> {
  private readonly refreshLocks = new Map<string, Promise<T>>()
  
  async getCache(key: string): Promise<T | null> {
    let data = await super.getCache(key)
    
    if (!data) {
      // Check if refresh is in progress
      if (this.refreshLocks.has(key)) {
        data = await this.refreshLocks.get(key)!
      } else {
        // Start refresh
        const refreshPromise = this.refreshData(key)
        this.refreshLocks.set(key, refreshPromise)
        
        try {
          data = await refreshPromise
        } finally {
          this.refreshLocks.delete(key)
        }
      }
    }
    
    return data
  }
  
  private async refreshData(key: string): Promise<T> {
    const freshData = await this.fetchFromSource(key)
    await this.setCache(key, freshData)
    return freshData
  }
}
```

### 2.3 Optimized Locking Strategy

#### Phương pháp 1: Queue-based Processing
```typescript
@Injectable()
export class QueuedLockService {
  private readonly queues = new Map<string, Array<{
    resolve: Function,
    reject: Function,
    task: Function
  }>>()
  
  async queuedLock<T>(key: string, task: () => Promise<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (!this.queues.has(key)) {
        this.queues.set(key, [])
        // Process immediately if queue is empty
        this.processQueue(key)
      }
      
      this.queues.get(key)!.push({ resolve, reject, task })
    })
  }
  
  private async processQueue(key: string): Promise<void> {
    const queue = this.queues.get(key)!
    
    while (queue.length > 0) {
      const { resolve, reject, task } = queue.shift()!
      
      try {
        const result = await task()
        resolve(result)
      } catch (error) {
        reject(error)
      }
    }
    
    this.queues.delete(key)
  }
}

// Usage
await queuedLockService.queuedLock(`wallet:${userId}`, async () => {
  // Critical section - processed sequentially
  return await updateWallet(userId, amount)
})
```

#### Phương pháp 2: Batch Processing
```typescript
@Injectable()
export class BatchProcessor {
  private readonly batches = new Map<string, {
    items: any[],
    timer: NodeJS.Timeout
  }>()
  
  async addToBatch(batchKey: string, item: any): Promise<any> {
    return new Promise((resolve) => {
      if (!this.batches.has(batchKey)) {
        this.batches.set(batchKey, {
          items: [],
          timer: setTimeout(() => this.processBatch(batchKey), 100) // 100ms batch window
        })
      }
      
      const batch = this.batches.get(batchKey)!
      batch.items.push({ item, resolve })
    })
  }
  
  private async processBatch(batchKey: string): Promise<void> {
    const batch = this.batches.get(batchKey)
    if (!batch) return
    
    this.batches.delete(batchKey)
    clearTimeout(batch.timer)
    
    // Process all items in batch
    const results = await this.batchOperation(batch.items.map(i => i.item))
    
    // Resolve all promises
    batch.items.forEach((item, index) => {
      item.resolve(results[index])
    })
  }
}
```

### 2.4 Caching Strategies cho High Traffic

#### Multi-level Cache
```typescript
@Injectable()
export class MultiLevelCache<T> {
  constructor(
    private readonly l1Cache: NodeCache, // Memory cache
    private readonly l2Cache: RedisService, // Redis cache
    private readonly database: DatabaseService // Source of truth
  ) {}
  
  async get(key: string): Promise<T | null> {
    // L1: Check memory cache first (fastest)
    let data = this.l1Cache.get<T>(key)
    if (data) {
      this.recordHit('L1')
      return data
    }
    
    // L2: Check Redis cache
    data = await this.l2Cache.getClient.get(key)
    if (data) {
      this.recordHit('L2')
      // Populate L1 cache
      this.l1Cache.set(key, data, 60) // 1 minute TTL
      return JSON.parse(data)
    }
    
    // L3: Check database (slowest)
    data = await this.database.findByKey(key)
    if (data) {
      this.recordHit('L3')
      // Populate both cache levels
      this.l1Cache.set(key, data, 60)
      await this.l2Cache.getClient.setex(key, 300, JSON.stringify(data)) // 5 minutes TTL
    }
    
    return data
  }
}
```

#### Cache Warming Strategy
```typescript
@Injectable()
export class CacheWarmer {
  @Cron('0 */5 * * * *') // Every 5 minutes
  async warmCache(): Promise<void> {
    const hotKeys = [
      'hot_products',
      'trending_posts', 
      'popular_categories',
      'system_settings'
    ]
    
    // Warm cache during low traffic periods
    for (const key of hotKeys) {
      try {
        await this.refreshCacheEntry(key)
        await this.sleep(100) // Prevent overwhelming the system
      } catch (error) {
        console.error(`Failed to warm cache for ${key}:`, error)
      }
    }
  }
  
  private async refreshCacheEntry(key: string): Promise<void> {
    const fresh = await this.fetchFreshData(key)
    await this.cacheService.setCache(key, fresh)
  }
}
```

## 3. Monitoring và Performance Tuning

### 3.1 Cache Hit Rate Monitoring
```typescript
@Injectable()
export class CacheMetrics {
  private hits = 0
  private misses = 0
  
  recordHit(): void {
    this.hits++
  }
  
  recordMiss(): void {
    this.misses++
  }
  
  getHitRate(): number {
    const total = this.hits + this.misses
    return total === 0 ? 0 : this.hits / total
  }
  
  @Cron('0 * * * * *') // Every minute
  reportMetrics(): void {
    const hitRate = this.getHitRate()
    console.log(`Cache hit rate: ${(hitRate * 100).toFixed(2)}%`)
    
    // Alert if hit rate is too low
    if (hitRate < 0.8) {
      this.alertService.send('Low cache hit rate detected')
    }
    
    // Reset counters
    this.hits = 0
    this.misses = 0
  }
}
```

### 3.2 Redis Health Monitoring
```typescript
@Injectable()
export class RedisHealthCheck {
  @Cron('0 */1 * * * *') // Every minute
  async checkRedisHealth(): Promise<void> {
    const startTime = Date.now()
    
    try {
      // Test basic operations
      await this.redisService.getClient.ping()
      await this.redisService.getClient.set('health_check', 'ok', 'EX', 60)
      await this.redisService.getClient.get('health_check')
      
      const responseTime = Date.now() - startTime
      
      if (responseTime > 100) {
        console.warn(`Redis slow response: ${responseTime}ms`)
      }
      
      // Check memory usage
      const info = await this.redisService.getClient.info('memory')
      const memoryUsed = this.parseMemoryUsage(info)
      
      if (memoryUsed > 0.8) { // 80% memory usage
        console.warn(`Redis memory usage high: ${(memoryUsed * 100).toFixed(1)}%`)
        await this.cleanupExpiredKeys()
      }
      
    } catch (error) {
      console.error('Redis health check failed:', error)
      this.alertService.send('Redis health check failed')
    }
  }
  
  private async cleanupExpiredKeys(): Promise<void> {
    // Implement cleanup logic for expired keys
    const keys = await this.redisService.getClient.keys('*')
    let cleanedCount = 0
    
    for (const key of keys) {
      const ttl = await this.redisService.getClient.ttl(key)
      if (ttl === -1) { // Keys without expiration
        // Set expiration for old keys
        await this.redisService.getClient.expire(key, 3600)
        cleanedCount++
      }
    }
    
    console.log(`Cleaned up ${cleanedCount} keys without expiration`)
  }
}
```

## 4. Architecture Pattern cho High Traffic

### 4.1 Read Replicas
```typescript
@Injectable()
export class RedisClusterService {
  private readonly writeClient: Redis
  private readonly readReplicas: Redis[]
  private currentReadIndex = 0
  
  constructor() {
    // Master for writes
    this.writeClient = new Redis(process.env.REDIS_MASTER_URL)
    
    // Read replicas for reads
    this.readReplicas = [
      new Redis(process.env.REDIS_REPLICA_1_URL),
      new Redis(process.env.REDIS_REPLICA_2_URL),
      new Redis(process.env.REDIS_REPLICA_3_URL),
    ]
  }
  
  async set(key: string, value: any): Promise<void> {
    // Always write to master
    await this.writeClient.set(key, JSON.stringify(value))
  }
  
  async get(key: string): Promise<any> {
    // Round-robin read from replicas
    const replica = this.getNextReadReplica()
    
    try {
      const data = await replica.get(key)
      return data ? JSON.parse(data) : null
    } catch (error) {
      // Fallback to master if replica fails
      const data = await this.writeClient.get(key)
      return data ? JSON.parse(data) : null
    }
  }
  
  private getNextReadReplica(): Redis {
    const replica = this.readReplicas[this.currentReadIndex]
    this.currentReadIndex = (this.currentReadIndex + 1) % this.readReplicas.length
    return replica
  }
}
```

### 4.2 Circuit Breaker Pattern
```typescript
@Injectable()
export class CircuitBreakerRedis {
  private failureCount = 0
  private lastFailureTime = 0
  private state: 'CLOSED' | 'OPEN' | 'HALF_OPEN' = 'CLOSED'
  
  private readonly failureThreshold = 5
  private readonly recoveryTimeout = 30000 // 30 seconds
  
  async execute<T>(operation: () => Promise<T>): Promise<T> {
    if (this.state === 'OPEN') {
      if (Date.now() - this.lastFailureTime > this.recoveryTimeout) {
        this.state = 'HALF_OPEN'
      } else {
        throw new Error('Circuit breaker is OPEN')
      }
    }
    
    try {
      const result = await operation()
      this.onSuccess()
      return result
    } catch (error) {
      this.onFailure()
      throw error
    }
  }
  
  private onSuccess(): void {
    this.failureCount = 0
    this.state = 'CLOSED'
  }
  
  private onFailure(): void {
    this.failureCount++
    this.lastFailureTime = Date.now()
    
    if (this.failureCount >= this.failureThreshold) {
      this.state = 'OPEN'
    }
  }
}
```

## 5. Best Practices cho High Traffic

### 5.1 Key Design
```typescript
// ✅ Good key naming
const userCacheKey = `user:${userId}:profile:v2`
const sessionKey = `session:${sessionId}:${timestamp}`

// ❌ Bad key naming  
const key1 = `user_data_${userId}_information`
const key2 = `very_long_key_name_that_wastes_memory_${id}`
```

### 5.2 Memory Optimization
```typescript
// ✅ Use appropriate data structures
// For counters
await redis.incr(`page_views:${pageId}`)

// For sets
await redis.sadd(`online_users`, userId)

// For sorted sets (leaderboards)
await redis.zadd(`leaderboard`, score, userId)

// ❌ Don't store large objects as single keys
// Bad: Store entire user object
await redis.set(`user:${userId}`, JSON.stringify(largeUserObject))

// Good: Store fields separately
await redis.hset(`user:${userId}`, {
  'name': user.name,
  'email': user.email,
  'last_login': user.lastLogin
})
```

### 5.3 TTL Strategy
```typescript
// Different TTL for different data types
const TTL_STRATEGY = {
  USER_SESSION: 3600,        // 1 hour
  USER_PROFILE: 1800,        // 30 minutes  
  PRODUCT_INFO: 300,         // 5 minutes
  REAL_TIME_DATA: 60,        // 1 minute
  STATIC_CONTENT: 86400,     // 24 hours
}

await redis.setex(key, TTL_STRATEGY.USER_PROFILE, data)
```

## Kết luận

Với **hàng ngàn users** cùng lúc:

1. **Sử dụng Redis Cluster** - Phân tán tải trên nhiều node
2. **Connection Pooling** - Tái sử dụng connection
3. **Cache Stampede Protection** - Tránh query DB cùng lúc
4. **Smart Locking** - Queue hoặc batch processing
5. **Multi-level Cache** - Memory + Redis + Database
6. **Monitoring** - Theo dõi performance và alert
7. **Circuit Breaker** - Tự động fallback khi Redis lỗi

**Kết quả**: Hệ thống có thể handle **10,000+ concurrent users** một cách ổn định.