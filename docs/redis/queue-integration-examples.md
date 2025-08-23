# Redis Queue Integration - Ví dụ thực tế

## 🎯 **Cách Queue tác động đến API hiện tại của bạn**

### **Trước khi có Queue (Hiện tại):**

```bash
# API hiện tại - đồng bộ ngay lập tức
GET /shopify/products          # Lấy sản phẩm từ Shopify API
POST /shopify/products         # Tạo sản phẩm trong Shopify
PUT /shopify/products/123      # Cập nhật sản phẩm
DELETE /shopify/products/123   # Xóa sản phẩm
```

**Vấn đề:**
- Phải chờ API Shopify phản hồi
- Nếu có lỗi, user phải thử lại
- Không thể xử lý số lượng lớn dữ liệu
- Không có retry logic

### **Sau khi có Queue:**

```bash
# API mới - bất đồng bộ với Queue
POST /shopify/products/sync    # Thêm job đồng bộ vào queue
POST /shopify/orders/sync      # Thêm job đồng bộ đơn hàng
POST /shopify/customers/sync   # Thêm job đồng bộ khách hàng
GET /shopify/sync/status/123   # Kiểm tra trạng thái job
```

**Lợi ích:**
- Trả về ngay lập tức với job ID
- Xử lý background không block user
- Tự động retry khi lỗi
- Có thể xử lý số lượng lớn dữ liệu

## 📝 **Ví dụ sử dụng thực tế**

### **1. Đồng bộ sản phẩm từ Shopify**

```bash
# Request
POST /shopify/products/sync?storeId=my-store&limit=100&syncAll=false

# Response ngay lập tức
{
  "success": true,
  "message": "Product sync job added to queue",
  "jobId": "12345",
  "data": {
    "platform": "shopify",
    "storeId": "my-store",
    "type": "products",
    "estimatedTime": "2-5 minutes"
  }
}
```

### **2. Kiểm tra trạng thái job**

```bash
# Request
GET /shopify/sync/status/12345

# Response
{
  "success": true,
  "data": {
    "id": "12345",
    "status": "completed",
    "progress": 100,
    "data": {
      "platform": "shopify",
      "storeId": "my-store",
      "type": "products"
    },
    "timestamp": "2024-01-15T10:30:00Z",
    "processedOn": "2024-01-15T10:30:05Z",
    "finishedOn": "2024-01-15T10:32:30Z",
    "failedReason": null
  }
}
```

### **3. Đồng bộ đơn hàng với filter thời gian**

```bash
# Request
POST /shopify/orders/sync?storeId=my-store&dateFrom=2024-01-01T00:00:00Z&dateTo=2024-01-15T23:59:59Z

# Response
{
  "success": true,
  "message": "Order sync job added to queue",
  "jobId": "12346",
  "data": {
    "platform": "shopify",
    "storeId": "my-store",
    "type": "orders",
    "estimatedTime": "1-3 minutes"
  }
}
```

## 🔄 **Luồng xử lý chi tiết**

### **Bước 1: User gọi API**
```typescript
// User gọi API
POST /shopify/products/sync

// Controller nhận request
async syncProducts() {
  // Thêm job vào queue
  const job = await this.queueService.addSyncProductsJob({
    platform: 'shopify',
    type: 'products',
    storeId: 'my-store',
    options: { limit: 100 }
  });

  // Trả về ngay lập tức
  return {
    success: true,
    jobId: job.id,
    message: 'Job added to queue'
  };
}
```

### **Bước 2: Queue xử lý background**
```typescript
// Processor xử lý job trong background
@Process('sync-products')
async handleSyncProducts(job: Job) {
  const { platform, storeId, options } = job.data;
  
  // Gọi Shopify API
  const products = await this.shopifyService.getProducts();
  
  // Lưu vào database
  await this.saveToDatabase(products);
  
  // Cập nhật progress
  job.progress(100);
}
```

### **Bước 3: User kiểm tra kết quả**
```typescript
// User kiểm tra trạng thái
GET /shopify/sync/status/12345

// Nhận kết quả
{
  "status": "completed",
  "progress": 100,
  "data": {
    "totalSynced": 150,
    "message": "Successfully synced 150 products"
  }
}
```

## 🎯 **So sánh trước và sau**

| Aspect | Trước (Sync) | Sau (Queue) |
|--------|-------------|-------------|
| **Response Time** | 10-30 giây | < 1 giây |
| **User Experience** | Phải chờ | Trả về ngay |
| **Error Handling** | User phải retry | Tự động retry |
| **Large Data** | Timeout | Xử lý được |
| **Monitoring** | Không có | Chi tiết |
| **Scalability** | Hạn chế | Cao |

## 🚀 **API Endpoints mới**

### **Queue Management**
```bash
# Thêm job đồng bộ
POST /queue/sync/products
POST /queue/sync/orders
POST /queue/sync/users
POST /queue/sync/inventory

# Kiểm tra trạng thái
GET /queue/status
GET /queue/job/:queueName/:jobId

# Xóa job
DELETE /queue/job/:queueName/:jobId
DELETE /queue/clear

# Bulk sync
POST /queue/sync/bulk
```

### **Platform-specific Sync**
```bash
# Shopify
POST /shopify/products/sync
POST /shopify/orders/sync
POST /shopify/customers/sync
GET /shopify/sync/status/:jobId

# TikTok (tương lai)
POST /tiktok/products/sync
POST /tiktok/orders/sync

# Amazon (tương lai)
POST /amazon/products/sync
POST /amazon/orders/sync
```

## 📊 **Monitoring và Logging**

### **Queue Dashboard**
```bash
# Xem trạng thái tất cả queue
GET /queue/status

# Response
{
  "success": true,
  "data": {
    "products": {
      "waiting": 5,
      "active": 2,
      "completed": 150,
      "failed": 3
    },
    "orders": {
      "waiting": 2,
      "active": 1,
      "completed": 80,
      "failed": 1
    }
  }
}
```

### **Job Details**
```bash
# Xem chi tiết job
GET /queue/job/sync-products/12345

# Response
{
  "success": true,
  "data": {
    "id": "12345",
    "status": "completed",
    "progress": 100,
    "data": {
      "platform": "shopify",
      "storeId": "my-store"
    },
    "timestamp": "2024-01-15T10:30:00Z",
    "processedOn": "2024-01-15T10:30:05Z",
    "finishedOn": "2024-01-15T10:32:30Z",
    "failedReason": null
  }
}
```

## 🔧 **Cấu hình thực tế**

### **Environment Variables**
```env
# Redis Configuration
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=your-password
REDIS_DB=0

# Queue Configuration
QUEUE_RETRY_ATTEMPTS=3
QUEUE_RETRY_DELAY=2000
QUEUE_REMOVE_ON_COMPLETE=100
QUEUE_REMOVE_ON_FAIL=50

# Platform API Keys
SHOPIFY_ACCESS_TOKEN_my-store=your-shopify-token
TIKTOK_ACCESS_TOKEN_my-store=your-tiktok-token
```

### **Cron Jobs (Tự động)**
```typescript
// Đồng bộ sản phẩm hàng ngày lúc 2:00 AM
@Cron('0 2 * * *')
async scheduleDailyProductSync() {
  // Tự động thêm job vào queue
}

// Đồng bộ đơn hàng mỗi 30 phút
@Cron('0 */30 * * * *')
async scheduleOrderSync() {
  // Tự động thêm job vào queue
}
```

## 🎯 **Kết luận**

Redis Queue sẽ **KHÔNG THAY THẾ** API hiện tại của bạn, mà sẽ **MỞ RỘNG** thêm các tính năng:

1. **API hiện tại vẫn hoạt động bình thường**
2. **Thêm API mới để đồng bộ dữ liệu**
3. **Xử lý background không block user**
4. **Tự động retry và monitoring**
5. **Scalable cho số lượng lớn dữ liệu**

Queue giúp bạn xử lý các tác vụ nặng một cách hiệu quả mà không ảnh hưởng đến trải nghiệm người dùng!
