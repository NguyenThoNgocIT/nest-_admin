# Redis Queue Integration Guide

## Tổng quan

Hệ thống Redis Queue được tích hợp để xử lý việc đồng bộ dữ liệu từ các nền tảng bên thứ 3 như Shopify, TikTok, Amazon, WooCommerce, eBay một cách hiệu quả và đáng tin cậy.

## Kiến trúc hệ thống

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   API Request   │───▶│   Queue Service │───▶│  Redis Queue    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                │
                                ▼
                       ┌─────────────────┐
                       │   Processors    │
                       └─────────────────┘
                                │
                                ▼
                       ┌─────────────────┐
                       │ 3rd Party APIs  │
                       │ (Shopify, etc.) │
                       └─────────────────┘
```

## Các thành phần chính

### 1. Queue Service (`src/shared/queue/queue.service.ts`)
- Quản lý các job trong queue
- Thêm job vào queue với priority và retry logic
- Theo dõi trạng thái queue

### 2. Queue Processors (`src/shared/queue/processors/`)
- Xử lý các job đồng bộ dữ liệu
- Tích hợp với API của các nền tảng bên thứ 3
- Xử lý lỗi và retry logic

### 3. Queue Controller (`src/modules/queue/queue.controller.ts`)
- API endpoints để quản lý queue
- Thêm job thủ công
- Theo dõi trạng thái job

### 4. Scheduler Service (`src/modules/tasks/sync-scheduler.service.ts`)
- Lên lịch tự động đồng bộ dữ liệu
- Các cron jobs cho đồng bộ định kỳ

## Cách sử dụng

### 1. Thêm job đồng bộ thủ công

```typescript
// Thêm job đồng bộ sản phẩm Shopify
const job = await queueService.addSyncProductsJob({
  platform: 'shopify',
  type: 'products',
  storeId: 'your-store-id',
  options: {
    limit: 100,
    syncAll: false,
  },
  metadata: {
    userId: 'user123',
    reason: 'manual_sync',
  },
});
```

### 2. API Endpoints

#### Thêm job đồng bộ sản phẩm
```bash
POST /queue/sync/products
{
  "platform": "shopify",
  "type": "products",
  "storeId": "your-store-id",
  "options": {
    "limit": 100,
    "syncAll": false
  }
}
```

#### Thêm job đồng bộ đơn hàng
```bash
POST /queue/sync/orders
{
  "platform": "tiktok",
  "type": "orders",
  "storeId": "your-store-id",
  "options": {
    "dateFrom": "2024-01-01T00:00:00Z",
    "dateTo": "2024-01-31T23:59:59Z"
  }
}
```

#### Xem trạng thái queue
```bash
GET /queue/status
```

#### Xem chi tiết job
```bash
GET /queue/job/sync-products/job-id
```

### 3. Lịch trình tự động

Hệ thống có các lịch trình tự động:

- **Sản phẩm**: Đồng bộ hàng ngày lúc 2:00 AM
- **Đơn hàng**: Đồng bộ mỗi 30 phút
- **Tồn kho**: Đồng bộ mỗi giờ
- **Người dùng**: Đồng bộ hàng tuần
- **Toàn bộ**: Đồng bộ toàn bộ dữ liệu hàng tuần vào Chủ nhật lúc 3:00 AM

## Cấu hình

### 1. Environment Variables

```env
# Redis Configuration
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=your-redis-password
REDIS_DB=0

# Platform API Keys
SHOPIFY_ACCESS_TOKEN_store1=your-shopify-token
TIKTOK_ACCESS_TOKEN_store1=your-tiktok-token
AMAZON_ACCESS_TOKEN_store1=your-amazon-token
```

### 2. Queue Configuration

```typescript
// src/shared/queue/queue.module.ts
BullModule.forRootAsync({
  redis: {
    host: configService.get('REDIS_HOST', 'localhost'),
    port: configService.get('REDIS_PORT', 6379),
    password: configService.get('REDIS_PASSWORD'),
    db: configService.get('REDIS_DB', 0),
  },
  defaultJobOptions: {
    removeOnComplete: 100,
    removeOnFail: 50,
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 2000,
    },
  },
})
```

## Xử lý lỗi và Retry

### 1. Retry Logic
- Tối đa 3 lần thử lại cho mỗi job
- Exponential backoff với delay 2 giây
- Job bị xóa sau 50 lần thất bại

### 2. Error Handling
```typescript
try {
  const result = await this.syncShopifyProducts(storeId, options);
  return result;
} catch (error) {
  this.logger.error(`Sync failed for ${platform} store: ${storeId}`, error.stack);
  throw error; // Job sẽ được retry
}
```

## Monitoring và Logging

### 1. Queue Monitoring
- Theo dõi số lượng job trong queue
- Theo dõi job đang xử lý, thành công, thất bại
- API endpoint để xem trạng thái

### 2. Logging
- Log chi tiết cho mỗi job
- Log lỗi với stack trace
- Log thời gian xử lý

## Tích hợp với nền tảng bên thứ 3

### 1. Shopify
```typescript
// src/shared/queue/services/shopify-sync.service.ts
async syncProducts(storeId: string, options?: any): Promise<SyncJobResult> {
  const shopifyApi = new ShopifyApi({
    shopName: storeId,
    accessToken: await this.getAccessToken(storeId),
  });
  
  const products = await shopifyApi.product.list({
    limit: options?.limit || 50,
    since_id: options?.offset || 0,
  });
  
  await this.saveProductsToDatabase(products, storeId);
  
  return {
    success: true,
    processedCount: products.length,
    totalCount: products.length,
  };
}
```

### 2. TikTok
```typescript
// TODO: Implement TikTok API integration
async syncProducts(storeId: string, options?: any): Promise<SyncJobResult> {
  // Implement TikTok Shop API integration
}
```

### 3. Amazon
```typescript
// TODO: Implement Amazon API integration
async syncProducts(storeId: string, options?: any): Promise<SyncJobResult> {
  // Implement Amazon Selling Partner API integration
}
```

## Best Practices

### 1. Job Design
- Chia nhỏ job lớn thành nhiều job nhỏ
- Sử dụng priority để ưu tiên job quan trọng
- Thêm metadata để tracking

### 2. Error Handling
- Log đầy đủ thông tin lỗi
- Implement retry logic phù hợp
- Graceful degradation khi API bên thứ 3 lỗi

### 3. Performance
- Sử dụng batch processing
- Implement rate limiting
- Cache kết quả API calls

### 4. Monitoring
- Set up alerts cho job failures
- Monitor queue size và processing time
- Track API rate limits

## Troubleshooting

### 1. Job không được xử lý
- Kiểm tra Redis connection
- Kiểm tra processor có đang chạy không
- Kiểm tra logs

### 2. Job thất bại liên tục
- Kiểm tra API credentials
- Kiểm tra rate limits
- Kiểm tra network connectivity

### 3. Queue bị đầy
- Tăng số lượng worker processes
- Tối ưu hóa job processing time
- Implement job prioritization

## Mở rộng

### 1. Thêm nền tảng mới
1. Tạo service cho nền tảng mới
2. Thêm vào processor
3. Cập nhật queue service
4. Thêm vào scheduler

### 2. Thêm loại dữ liệu mới
1. Tạo queue mới
2. Thêm processor method
3. Cập nhật queue service
4. Thêm API endpoint

### 3. Custom Scheduling
1. Tạo cron expression mới
2. Thêm method vào scheduler
3. Cấu hình trong environment
