# Tác dụng thực tế của Redis trong hệ thống

## 1. Redis là gì và tại sao cần dùng?

### Vấn đề không có Redis:
Hãy tưởng tượng bạn có một website như Facebook:

**Tình huống 1: Không có cache**
```
User A đăng nhập → Server query database để lấy thông tin user
User A xem profile → Server query database lại để lấy thông tin user  
User A xem newsfeed → Server query database lại để lấy thông tin user
User A comment → Server query database lại để lấy thông tin user
```
➡️ **Kết quả**: Server phải query database rất nhiều lần, chậm và tốn tài nguyên

**Tình huống 2: Có Redis cache**
```
User A đăng nhập → Server query database 1 lần, lưu vào Redis
User A xem profile → Server lấy từ Redis (nhanh)
User A xem newsfeed → Server lấy từ Redis (nhanh)  
User A comment → Server lấy từ Redis (nhanh)
```
➡️ **Kết quả**: Server chỉ query database 1 lần, các lần sau lấy từ Redis (nhanh gấp 100 lần)

## 2. Tác dụng cụ thể của từng Cache Service

### 2.1 AccessTokenCache - Quản lý đăng nhập

**Không có cache:**
```
1. User gửi request với token ABC123
2. Server phải decode token ABC123
3. Server phải query database để check token có hợp lệ không
4. Server phải query database để lấy thông tin user
→ Mỗi request phải làm 3-4 bước này
```

**Có AccessTokenCache:**
```
1. User gửi request với token ABC123
2. Server check Redis: "Tôi có token ABC123 không?"
3. Redis trả về ngay: "Có, đây là thông tin user"
→ Chỉ 2 bước, nhanh gấp 10 lần
```

**Ví dụ code thực tế:**
```typescript
// Khi user đăng nhập thành công
const token = "abc123xyz"
const userInfo = { userId: "user1", email: "user@email.com" }
await accessTokenCache.setCache(token, userInfo)

// Khi user gửi request
const cachedUser = await accessTokenCache.getCache(token)
if (cachedUser) {
    // Có trong cache → trả về ngay
    return cachedUser
} else {
    // Không có → token hết hạn hoặc không hợp lệ
    throw new Error("Please login again")
}
```

### 2.2 CaptchaCache - Xác thực Captcha

**Vấn đề thực tế:**
- User thấy captcha: "5 + 3 = ?"
- User nhập: "8"  
- Server cần check xem captcha này có đúng không?

**Không có cache:**
```
Server phải lưu captcha vào database:
- Tạo record trong database
- User submit → query database để check
- Xóa record sau khi check
→ Database bị spam với hàng triệu captcha
```

**Có CaptchaCache:**
```
Server lưu captcha vào Redis:
- Set key: "captcha_xyz" = "8" (TTL: 5 phút)
- User submit → check Redis
- Redis tự động xóa sau 5 phút
→ Không spam database, tự động cleanup
```

### 2.3 CurrentUserCache - Cache thông tin user

**Scenario thực tế:**
User đăng nhập Facebook, xem 50 posts trong newsfeed

**Không có cache:**
```
Xem post 1 → Query database lấy thông tin user
Xem post 2 → Query database lấy thông tin user  
...
Xem post 50 → Query database lấy thông tin user
= 50 queries database chỉ để lấy cùng 1 thông tin user
```

**Có CurrentUserCache:**
```
Xem post 1 → Query database, lưu vào Redis
Xem post 2 → Lấy từ Redis
...  
Xem post 50 → Lấy từ Redis
= 1 query database + 49 lần lấy từ Redis (nhanh)
```

### 2.4 SettingCache - Cache cấu hình hệ thống

**Ví dụ thực tế:**
Website có 1000 cài đặt như: Logo, màu sắc, email SMTP, v.v.

**Không có cache:**
```
Trang chủ load → Query database lấy 20 settings
User A vào trang chủ → Query database lấy 20 settings
User B vào trang chủ → Query database lấy 20 settings  
1000 users → 20,000 queries cho cùng dữ liệu
```

**Có SettingCache:**
```
Lần đầu → Query database, lưu Redis
999 lần sau → Lấy từ Redis
= 20 queries database thay vì 20,000 queries
```

## 3. LockService - Ngăn chặn xung đột

### Vấn đề thực tế: Double Spending

**Tình huống:** User có 100$ trong ví, cố gắng mua 2 sản phẩm cùng lúc (mỗi cái 80$)

**Không có Lock:**
```
Request 1: Check balance = 100$ → OK → Trừ 80$ 
Request 2: Check balance = 100$ → OK → Trừ 80$
Kết quả: User mua được 2 sản phẩm 160$ với ví chỉ có 100$
```

**Có LockService:**
```
Request 1: Acquire lock "user123_wallet" → Check balance = 100$ → Trừ 80$ → Release lock
Request 2: Wait for lock → Check balance = 20$ → Reject (không đủ tiền)
Kết quả: User chỉ mua được 1 sản phẩm (đúng)
```

**Code thực tế:**
```typescript
// Ngăn chặn double spending
await lockService.lock(`wallet_${userId}`, async () => {
    const balance = await getBalance(userId)
    if (balance < amount) {
        throw new Error("Không đủ tiền")
    }
    await deductBalance(userId, amount)
    await createTransaction(userId, amount)
})
```

### Vấn đề thực tế: Duplicate Order

**Tình huống:** User click nút "Đặt hàng" 5 lần nhanh (vì trang web lag)

**Không có Lock:**
```
Click 1 → Tạo order ID: 001
Click 2 → Tạo order ID: 002  
Click 3 → Tạo order ID: 003
= User có 3 đơn hàng giống nhau
```

**Có LockService:**
```
Click 1 → Acquire lock → Tạo order → Release lock
Click 2,3,4,5 → Wait → Check order đã tồn tại → Skip
= User chỉ có 1 đơn hàng
```

## 4. Lợi ích tổng thể

### 4.1 Tốc độ (Performance)

**So sánh thời gian:**
- Database query: 50-100ms
- Redis query: 1-5ms  
- Memory access: 0.1ms

**Ví dụ thực tế:**
```
Trang web không có cache:
- Trang chủ load: 2-3 giây
- User experience: Chậm, khó chịu

Trang web có Redis cache:  
- Trang chủ load: 0.3-0.5 giây
- User experience: Nhanh, mượt mà
```

### 4.2 Giảm tải Database

**Không có cache:**
```
Database phải xử lý:
- 1000 users × 100 requests/user = 100,000 queries/ngày
- Server database quá tải, crash thường xuyên
```

**Có Redis cache:**
```
Database chỉ phải xử lý:  
- 10,000 queries/ngày (90% từ cache)
- Server ổn định, ít crash
```

### 4.3 Tiết kiệm chi phí

**Tính toán thực tế:**
```
Không có cache:
- Cần server database mạnh: $500/tháng
- Cần nhiều server web: $1000/tháng  
- Total: $1500/tháng

Có Redis cache:
- Server database nhẹ hơn: $200/tháng
- Server Redis: $100/tháng
- Ít server web hơn: $600/tháng
- Total: $900/tháng

Tiết kiệm: $600/tháng = $7200/năm
```

## 5. Ví dụ thực tế hoàn chỉnh

### Tình huống: User mua hàng trên website

**Luồng không có Redis:**
```
1. User vào trang sản phẩm
   → Query DB: Lấy thông tin sản phẩm (50ms)
   → Query DB: Lấy thông tin user (50ms)  
   → Query DB: Lấy setting website (50ms)
   = 150ms chỉ để load trang

2. User click "Thêm vào giỏ"  
   → Query DB: Check stock (50ms)
   → Query DB: Update giỏ hàng (50ms)
   = 100ms

3. User checkout
   → Query DB: Check balance (50ms)
   → Query DB: Create order (50ms)  
   → Query DB: Update stock (50ms)
   → Query DB: Update balance (50ms)
   = 200ms

Total: 450ms (chưa kể network delay)
```

**Luồng có Redis:**
```
1. User vào trang sản phẩm
   → Redis: Lấy thông tin sản phẩm (2ms)
   → Redis: Lấy thông tin user (2ms)
   → Redis: Lấy setting website (2ms)  
   = 6ms

2. User click "Thêm vào giỏ"
   → Redis: Check stock (2ms)  
   → DB: Update giỏ hàng + update Redis (52ms)
   = 54ms

3. User checkout (với Lock để tránh double spending)
   → Lock wallet
   → Redis: Check balance (2ms)
   → DB: Create order (50ms)
   → DB: Update stock (50ms)  
   → DB: Update balance (50ms)
   → Release lock
   = 152ms

Total: 212ms (nhanh hơn 2+ lần)
```

## Kết luận

**Redis giúp:**
1. **Tăng tốc độ**: Website load nhanh hơn 2-10 lần
2. **Giảm tải database**: Database ít phải làm việc hơn 80-90%  
3. **Tăng độ ổn định**: Ít crash, ít downtime
4. **Tiết kiệm chi phí**: Ít server, ít tài nguyên
5. **Tăng user experience**: User hài lòng hơn với website nhanh

**Tóm tắt bằng 1 câu:**
Redis như "bộ nhớ tạm" giúp website nhớ những thông tin thường xuyên sử dụng, thay vì phải hỏi database mỗi lần → Website nhanh hơn, ít tốn tài nguyên hơn.