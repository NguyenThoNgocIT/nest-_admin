# Redis Queue - Hướng dẫn đơn giản

## 🤔 **Tại sao API sync trả về Job ID thay vì sản phẩm?**

### **Vấn đề bạn gặp phải:**
```
❌ Bạn gọi: POST /shopify/products/sync
❌ Nhận được: { "jobId": "12345" }
❌ Thắc mắc: "Tại sao không trả về sản phẩm?"
```

### **Giải thích đơn giản:**

**1. API thường (đồng bộ):**
```bash
GET /shopify/products
# Trả về: [sản phẩm 1, sản phẩm 2, sản phẩm 3...]
# Thời gian: Ngay lập tức
# Phù hợp: Dữ liệu nhỏ (< 100 sản phẩm)
```

**2. API Queue (bất đồng bộ):**
```bash
POST /shopify/products/sync
# Trả về: { "jobId": "12345" }
# Thời gian: Ngay lập tức (chỉ tạo job)
# Phù hợp: Dữ liệu lớn (> 1000 sản phẩm)
```

## 🎯 **Cách sử dụng thực tế:**

### **Bước 1: Tạo job đồng bộ**
```bash
curl -X POST "http://localhost:3000/shopify/products/sync" \
  -G \
  -d "storeId=my-store" \
  -d "limit=1000"

# Response:
{
  "success": true,
  "jobId": "12345",
  "message": "Product sync job added to queue"
}
```

### **Bước 2: Kiểm tra trạng thái**
```bash
curl -X GET "http://localhost:3000/shopify/sync/status/12345"

# Response:
{
  "success": true,
  "data": {
    "status": "completed",
    "progress": 100
  }
}
```

### **Bước 3: Lấy dữ liệu đã đồng bộ**
```bash
curl -X GET "http://localhost:3000/shopify/products/synced"

# Response:
{
  "success": true,
  "data": {
    "products": [
      {
        "id": 1,
        "title": "Product 1",
        "price": "29.99",
        "status": "active"
      },
      {
        "id": 2,
        "title": "Product 2", 
        "price": "49.99",
        "status": "active"
      }
    ],
    "total": 1000
  }
}
```

## 📊 **So sánh 2 cách:**

| Tính năng | API Thường | API Queue |
|-----------|------------|-----------|
| **Thời gian phản hồi** | Ngay lập tức | Ngay lập tức (tạo job) |
| **Xử lý dữ liệu** | Đồng bộ | Bất đồng bộ (background) |
| **Phù hợp** | Dữ liệu nhỏ | Dữ liệu lớn |
| **Block UI** | Có | Không |
| **Retry tự động** | Không | Có |
| **Monitoring** | Không | Có |

## 🚀 **Khi nào dùng gì:**

### **Dùng API thường khi:**
- ✅ Lấy < 100 sản phẩm
- ✅ Cần dữ liệu ngay lập tức
- ✅ Tạo, cập nhật, xóa sản phẩm
- ✅ Truy vấn đơn giản

### **Dùng API Queue khi:**
- ✅ Đồng bộ > 1000 sản phẩm
- ✅ Không muốn chờ đợi
- ✅ Cần retry tự động
- ✅ Muốn theo dõi tiến trình

## 💡 **Ví dụ thực tế:**

### **Trường hợp 1: Lấy 10 sản phẩm**
```bash
# Dùng API thường
GET /shopify/products?limit=10
# Trả về: [sản phẩm 1, sản phẩm 2, ..., sản phẩm 10]
```

### **Trường hợp 2: Đồng bộ 5000 sản phẩm**
```bash
# Bước 1: Tạo job
POST /shopify/products/sync?limit=5000
# Trả về: { "jobId": "12345" }

# Bước 2: Kiểm tra tiến trình
GET /shopify/sync/status/12345
# Trả về: { "status": "active", "progress": 45 }

# Bước 3: Lấy kết quả
GET /shopify/products/synced
# Trả về: [5000 sản phẩm đã đồng bộ]
```

## 🎯 **Tóm tắt:**

1. **API thường** = Lấy dữ liệu ngay
2. **API Queue** = Tạo job → Chờ hoàn thành → Lấy dữ liệu
3. **Queue** = Xử lý dữ liệu lớn mà không block UI
4. **Kết quả** = Luôn lấy được dữ liệu sản phẩm cuối cùng

**Bạn vẫn nhận được thông tin sản phẩm, chỉ là qua 2 bước thay vì 1 bước!**
