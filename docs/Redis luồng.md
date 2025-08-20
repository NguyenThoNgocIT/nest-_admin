# Phân tích luồng hoạt động Redis trong hệ thống NestJS

## 1. Kiến trúc tổng quan

### 1.1 Các thành phần chính
- **RedisService**: Quản lý kết nối Redis
- **LockService**: Xử lý distributed locking
- **Cacher**: Base class cho các cache service
- **Các Cache Services**: Specialized cache cho từng domain

### 1.2 Mô hình hoạt động
```
Application Start
       ↓
RedisService.onModuleInit()
       ↓
Kết nối Redis + Clear SETTING keys
       ↓
Cache Services khởi tạo
       ↓
Sẵn sàng xử lý request
```

## 2. Chi tiết từng thành phần

### 2.1 RedisService - Core Connection Manager

#### Khởi tạo:
1. **Constructor**: Tạo Redis client từ `REDIS_URL`
2. **onModuleInit()**: 
   - Ping để test connection
   - Gọi `deleteSettingKeys()` để clear cache cũ
3. **onModuleDestroy()**: Đóng connection khi app shutdown

#### Chức năng chính:
```typescript
// Clear tất cả keys có pattern SETTING_*
private async deleteSettingKeys(): Promise<void> {
    let cursor = '0'
    do {
        const [newCursor, keys] = await this.getClient.scan(
            cursor, 'MATCH', 'SETTING_*', 'COUNT', 100
        )
        cursor = newCursor
        if (keys.length > 0) {
            await this.getClient.del(...keys)
        }
    } while (cursor !== '0')
}
```

### 2.2 Cacher - Abstract Base Class

#### Pattern Template Method:
```typescript
abstract class Cacher<TCache> {
    protected readonly keyPrefix: string
    protected readonly ttlInMinutes: number
    
    // Core operations
    async setCache(key: string, value: TCache): Promise<void>
    async getCache(key: string): Promise<TCache | null>
    async del(key: string): Promise<void>
}
```

#### Đặc điểm:
- **Key Prefixing**: Tự động thêm prefix để tránh conflict
- **TTL Management**: Quản lý thời gian sống của cache
- **Type Safety**: Generic type cho từng loại cache

### 2.3 Specialized Cache Services

#### AccessTokenCache:
```typescript
// Lưu access token với TTL = JWT expiry time
constructor() {
    super('ACCESS_TOKEN__', seconds(env.JWT_ACCESS_TOKEN_EXPIRED) / 60)
}
```

#### CurrentUserCache:
```typescript
// Cache thông tin user hiện tại, TTL = 5 phút
constructor() {
    super('CURRENT_USER__', 5)
}
```

#### SettingCache với Application Bootstrap:
```typescript
async onApplicationBootstrap(): Promise<void> {
    if (env.INSTANCE_ID === 0) {
        // Chỉ instance đầu tiên clear cache
        await this.cacheManager.mdel(
            Object.values(SETTING).map(x => `SETTING__${x}`)
        )
    }
}
```

### 2.4 LockService - Distributed Locking

#### Cấu hình Mutex:
```typescript
private LOCK_OPTIONS: LockOptions = {
    lockTimeout: 2000,      // Auto release sau 2s
    acquireTimeout: 10_000, // Timeout acquire lock
    retryInterval: 10,      // Retry mỗi 10ms
    refreshInterval: 4000   // Auto refresh lock
}
```

#### Pattern sử dụng:
```typescript
// Method 1: Manual lock/unlock
const mutex = await lockService.acquire('user:123')
try {
    // Critical section
} finally {
    await lockService.release(mutex)
}

// Method 2: Automatic với callback
const result = await lockService.lock('user:123', async () => {
    // Critical section
    return someResult
})
```

## 3. Luồng hoạt động chi tiết

### 3.1 Application Startup Flow

```
1. NestJS Module Initialization
   ↓
2. RedisService.constructor()
   - Tạo Redis client nếu có REDIS_URL
   ↓
3. RedisService.onModuleInit()
   - Test connection với ping()
   - Clear tất cả SETTING_* keys
   - Log connection status
   ↓
4. Cache Services Initialization
   - Mỗi cache service tạo với prefix riêng
   - Set TTL theo yêu cầu business
   ↓
5. Application Bootstrap Complete
   - SettingCache clear old settings (chỉ instance 0)
   - IpWhitelistCache clear whitelist
   ↓
6. Ready to serve requests
```

### 3.2 Request Processing Flow

#### Authentication Flow:
```
1. User Login Request
   ↓
2. LoginCache.setCache(sessionId, {userId})
   - Key: LOGIN__sessionId
   - TTL: 5 minutes
   ↓
3. Generate Access Token
   ↓
4. AccessTokenCache.setCache(token, tokenData)
   - Key: ACCESS_TOKEN__token
   - TTL: JWT expiry time
   ↓
5. CurrentUserCache.setCache(userId, userInfo)
   - Key: CURRENT_USER__userId
   - TTL: 5 minutes
```

#### MFA Flow:
```
1. MFA Setup Request
   ↓
2. MFASetupCache.setCache(sessionId, mfaData)
   - Key: MFA_SETUP__sessionId
   - TTL: 15 minutes
   - Data: TOTP secret, user info, method
   ↓
3. User verify MFA
   ↓
4. MFACache.setCache(token, verifiedData)
   - Key: MFA__token
   - TTL: 5 minutes
```

### 3.3 Distributed Locking Flow

#### Use Case: Prevent Race Condition
```
1. Critical Operation Request (e.g., balance update)
   ↓
2. LockService.acquire('user:123:balance')
   - Tạo Redis lock với key
   - Retry nếu lock đã tồn tại
   - Timeout sau 10s nếu không acquire được
   ↓
3. Execute Critical Section
   - Update database
   - Calculate new balance
   ↓
4. LockService.release()
   - Giải phóng lock
   - Auto-refresh dừng lại
```

## 4. Ứng dụng thực tế

### 4.1 Session Management
```typescript
// Lưu session sau login
await loginCache.setCache(sessionId, { userId })

// Check session validity
const session = await loginCache.getCache(sessionId)
if (!session) throw new UnauthorizedException()
```

### 4.2 Token Management
```typescript
// Cache access token
await accessTokenCache.setCache(token, tokenPayload)

// Validate token
const cachedToken = await accessTokenCache.getCache(token)
if (!cachedToken) {
    // Token expired or invalid
}
```

### 4.3 User Information Caching
```typescript
// Cache user info để giảm DB query
const user = await currentUserCache.getCache(userId)
if (!user) {
    const userFromDB = await userService.findById(userId)
    await currentUserCache.setCache(userId, userFromDB)
    return userFromDB
}
return user
```

### 4.4 Settings Management
```typescript
// Cache application settings
const setting = await settingCache.getCache(SETTING.SMTP_HOST)
if (!setting) {
    const settingFromDB = await settingService.findByKey(SETTING.SMTP_HOST)
    await settingCache.setCache(SETTING.SMTP_HOST, settingFromDB)
}
```

### 4.5 Rate Limiting & IP Whitelist
```typescript
// Cache IP whitelist
const whitelistIPs = await ipWhitelistCache.getCache('IPS')
if (whitelistIPs?.includes(clientIP)) {
    // Allow request
} else {
    // Check rate limit or block
}
```

### 4.6 Distributed Locking Examples

#### Prevent Double Spending:
```typescript
await lockService.lock(`wallet:${userId}`, async () => {
    const wallet = await walletService.findByUserId(userId)
    if (wallet.balance < amount) throw new Error('Insufficient balance')
    
    await walletService.deduct(userId, amount)
    await transactionService.create({userId, amount, type: 'DEBIT'})
})
```

#### Prevent Duplicate Operations:
```typescript
await lockService.lock(`operation:${operationId}`, async () => {
    const existing = await operationService.findById(operationId)
    if (existing) throw new Error('Operation already exists')
    
    return await operationService.create(operationData)
})
```

## 5. Best Practices được áp dụng

### 5.1 Error Handling
- Connection failure được log và handle gracefully
- Lock timeout throw specific error (TOO_MANY_REQUEST)
- Auto-retry mechanism cho lock acquisition

### 5.2 Memory Management
- TTL được set cho tất cả cache entries
- Auto cleanup khi app shutdown
- Periodic cleanup cho stale data

### 5.3 Scalability
- Key prefixing tránh collision
- Instance-specific cleanup (INSTANCE_ID = 0)
- Distributed locking cho multi-instance deployment

### 5.4 Security
- Sensitive data (tokens, sessions) có TTL ngắn
- MFA data auto-expire sau 15 phút
- IP whitelist có validation

## 6. Monitoring và Debugging

### 6.1 Logging Strategy
```typescript
// Connection status
this.logger.log('✅ Redis connected')
this.logger.error('❌ Redis connection failed:', error)

// Cache operations
this.logger.log('SETTING_CACHE cleared')
this.logger.log('IP_WHITELIST cleared')

// Lock operations
this.logger.error(`acquireLock ${key} \n ${error?.message}`)
```

### 6.2 Health Checks
- Redis ping() trong onModuleInit
- Connection status monitoring
- Lock acquisition timeout handling

Hệ thống này thiết kế rất tốt với separation of concerns rõ ràng, error handling comprehensive, và scalability được tính toán từ đầu.