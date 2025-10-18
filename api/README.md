# Hải Tặc Mạnh Nhất - REST API

API phục vụ cho website Hải Tặc Mạnh Nhất bản tự dựng, được xây dựng bằng Node.js (Express) kết nối tới MySQL.

## 1. Cài đặt

```bash
cd api
cp .env.example .env
# Chỉnh sửa lại thông tin kết nối trong file .env
npm install
```

## 2. Chạy server

```bash
npm run dev   # reload tự động với nodemon
# hoặc
npm start     # chạy production
```

Mặc định API lắng nghe tại `http://localhost:3001`. Có thể thay đổi cổng hoặc thông tin kết nối MySQL trong file `.env`.

## 3. Biến môi trường quan trọng

| Biến | Ý nghĩa |
|------|---------|
| `PORT` | Cổng chạy API |
| `APP_URL` | Origin của frontend, dùng cho CORS. Có thể nhập nhiều url, cách nhau bằng dấu phẩy. |
| `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME` | Thông tin kết nối MySQL |
| `JWT_SECRET`, `JWT_EXPIRES_IN` | Thiết lập chữ ký và thời gian sống cho JWT (mặc định 7 ngày) |
| `SESSION_DURATION_DAYS` | Thời gian hiệu lực của phiên đăng nhập (ngày) |

## 4. Danh sách endpoint

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| `POST` | `/api/auth/register` | Đăng ký tài khoản mới |
| `POST` | `/api/auth/login` | Đăng nhập |
| `POST` | `/api/auth/forgot-password` | Đặt lại mật khẩu (xác minh email, cập nhật mật khẩu mới) |
| `POST` | `/api/auth/logout` | Đăng xuất (xóa session phía client) |
| `GET` | `/api/leaderboard/top-power?limit=10` | Lấy danh sách top sức mạnh |
| `GET` | `/api/health` | Kiểm tra trạng thái API |

### Mẫu phản hồi

```json
{
  "success": true,
  "message": "Đăng nhập thành công.",
  "data": {
    "token": "jwt-token",
    "expiresAt": "2025-02-09T04:28:52.000Z",
    "user": {
      "id": 1,
      "username": "demo",
      "email": "demo@example.com",
      "server": 1,
      "lastLogin": "2025-02-02T04:28:52.000Z"
    }
  }
}
```

Front-end lưu `token`, `expiresAt` và `user` vào session storage, và mọi request sẽ tự đính kèm token qua header `Authorization`.

## 5. Gợi ý triển khai

1. import `database.sql` vào MySQL (`xampp/mysql/bin/mysql -u root -p < database.sql`).
2. Cập nhật `.env` trỏ tới database vừa import.
3. Chạy `npm run dev`.
4. Trong website (htdocs), đảm bảo thẻ `<meta name="api-base" content="http://localhost:3001/api">` được khai báo để JS nhận đúng endpoint.

API đã xử lý hashing mật khẩu với bcrypt, đồng thời tương thích với các tài khoản cũ lưu mật khẩu dạng plain text.
