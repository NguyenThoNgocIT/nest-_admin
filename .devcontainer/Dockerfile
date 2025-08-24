# Sử dụng image cơ sở
FROM ghcr.io/chatwoot/chatwoot_codespace:latest

# Chạy với user root để cài đặt pnpm toàn cục
USER root
RUN npm install -g pnpm

# Thiết lập thư mục làm việc
WORKDIR /workspace

# Sao chép tệp phụ thuộc để tận dụng caching
COPY package.json pnpm-lock.yaml ./

# Xóa thư mục node_modules nếu có
RUN rm -rf node_modules

# Cài đặt phụ thuộc
RUN pnpm install --frozen-lockfile

# Cài đặt cross-env
RUN pnpm add --save-dev cross-env

# Sao chép mã nguồn
COPY . /workspace

# Chạy ứng dụng
CMD ["pnpm", "dev"]