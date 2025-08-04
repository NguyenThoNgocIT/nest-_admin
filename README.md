# 🌟 nest-admin - Hệ thống quản lý phân quyền đơn giản & hiệu quả

![Commit Activity](https://img.shields.io/github/commit-activity/m/buqiyuan/nest-admin)
![License](https://img.shields.io/github/license/buqiyuan/nest-admin)
![Repo Size](https://img.shields.io/github/repo-size/buqiyuan/nest-admin)
![Top Language](https://img.shields.io/github/languages/top/buqiyuan/nest-admin)

---

### ⚙️ Công nghệ sử dụng

> **NestJS + TypeScript + TypeORM + Redis + MySQL (Backend)**
> **Vue3 + Ant Design Vue (Frontend)**

Dự án fullstack tách biệt frontend và backend, dễ mở rộng, có thể dùng làm hệ thống quản lý nội bộ, CMS, CRM, hoặc học tập phát triển web hiện đại.

---

## 🚀 Demo

| Khu vực | Đường dẫn | Ghi chú |
|--------|-----------|--------|
 [https://vue3-antdv-admin.pages.dev](https://vue3-antdv-admin.pages.dev) | Chỉ xem, dữ liệu demo |
| Quốc tế | [https://vue3-antd-admin.vercel.app](https://vue3-antd-admin.vercel.app) | Có thể CRUD thoải mái, dữ liệu reset mỗi ngày lúc **04:30 (UTC+8)** |
| API Swagger | [https://nest-admin.buqiyuan.top/api-docs/](https://nest-admin.buqiyuan.top/api-docs/) | Tài liệu API backend |

---

## 🔧 Yêu cầu môi trường

| Phần mềm | Phiên bản |
|----------|------------|
| Node.js | >= 20 |
| Docker | >= 20.x |
| Docker Compose | >= 2.17.0 |
| MySQL | >= 8.x |
| Redis | (bắt buộc nếu dùng Redis Cache) |
| Trình quản lý gói | [pnpm](https://pnpm.io/zh/) |

---

## 💾 Chuẩn bị

- **SQL khởi tạo**: [`/deploy/sql/nest_admin.sql`](https://github.com/buqiyuan/nest-admin/tree/main/deploy/sql/nest_admin.sql)
- **Cấu hình**:
  - `.env`: Cấu hình chung
  - `.env.development`: Cấu hình môi trường phát triển
  - `.env.production`: Cấu hình môi trường sản xuất

---

## 👤 Tài khoản đăng nhập mặc định

| Tài khoản | Mật khẩu | Quyền |
|----------|----------|--------|
| `admin`  | `a123456` | Quản trị viên |

> Tất cả tài khoản mới tạo đều có mật khẩu mặc định là `a123456`.

---

## ⚡ Khởi chạy nhanh

```bash
pnpm docker:up
# hoặc
docker compose --env-file .env --env-file .env.production up -d --no-build
Truy cập: http://localhost:7001/api-docs/

🛑 Dừng & xóa container:

pnpm docker:down
# hoặc
docker compose --env-file .env --env-file .env.production down
🧼 Xóa image:

pnpm docker:rmi
# hoặc
docker rmi buqiyuan/nest-admin-server:stable
📜 Xem logs:

pnpm docker:logs
# hoặc
docker compose --env-file .env --env-file .env.production logs -f
💻 Phát triển local
1. Clone mã nguồn:

git clone https://github.com/buqiyuan/nest-admin
cd nest-admin
pnpm install
2. Khởi động nhanh các dịch vụ bằng Docker:
bash

# MySQL
docker compose --env-file .env --env-file .env.development run -d --service-ports mysql

# Redis
docker compose --env-file .env --env-file .env.development run -d --service-ports redis
3. Chạy backend:
bash

pnpm dev
Truy cập: http://localhost:7001/api-docs/

📦 Build & Deploy

pnpm build
🧬 Quản lý database (TypeORM Migration)
Chạy migration (tạo bảng, dữ liệu):

pnpm migration:run
Tạo migration mới:

pnpm migration:generate
Rollback migration:

pnpm migration:revert
💡 Lưu ý: Nếu bạn thay đổi Entity hoặc cấu hình database, hãy chạy pnpm build trước khi migrate.
