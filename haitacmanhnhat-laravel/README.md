# Hải Tặc Mạnh Nhất – Laravel 12

Dự án này chuyển toàn bộ website PHP thuần của Hải Tặc Mạnh Nhất sang kiến trúc Laravel 12 (PHP 8.2+), giữ nguyên giao diện, URL, luồng thao tác và tài sản tĩnh. Repo bao gồm backend Laravel, Blade view chuyển đổi từ source cũ, và dữ liệu cấu hình JSON để dễ bảo trì.

## 1. Yêu cầu hệ thống
| Thành phần | MacOS | Ubuntu / Debian | Windows |
|------------|-------|-----------------|---------|
| PHP        | `brew install php@8.3` | `sudo apt install php8.3 php8.3-xml php8.3-curl php8.3-mbstring php8.3-zip` | Cài [PHP 8.3](https://windows.php.net/download/) và thêm vào `PATH`
| Composer   | `brew install composer` | `sudo apt install composer` hoặc tải từ [getcomposer.org] | Tải installer từ [getcomposer.org]
| Node.js    | `brew install node@18` | `curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - && sudo apt install nodejs` | Cài [Node.js 18 LTS](https://nodejs.org)
| NPM        | đi kèm Node | đi kèm Node | đi kèm Node |
| MySQL      | `brew install mysql` hoặc dùng Docker | `sudo apt install mysql-server` | Dùng MySQL trong XAMPP (khuyến nghị) hoặc MySQL Community Server |

> ⚠️ **Windows khuyến nghị dùng WSL2** để chạy PHP/Node. MySQL có thể dùng từ XAMPP (mở cổng 3306). Đặt `DB_HOST=127.0.0.1` để ép kết nối TCP.

## 2. Thiết lập dự án
```bash
# Clone nguồn
git clone https://github.com/…/haitacmanhnhat-laravel.git
cd haitacmanhnhat-laravel

# Cài dependencies PHP & Node
composer install
npm install

# Tạo file .env
cp .env.example .env
php artisan key:generate
```

### 2.1 Cấu hình `.env`
Thiết lập các biến sau để kết nối MySQL (ví dụ dùng XAMPP):
```
APP_NAME="Hải Tặc Mạnh Nhất"
APP_URL=http://localhost

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nro
DB_USERNAME=root
DB_PASSWORD=
```
- Nếu MySQL chạy trên cổng khác, sửa `DB_PORT` tương ứng.
- Laravel sử dụng `spatie/laravel-csp` nên nếu cần tắt CSP trong phát triển, đặt `APP_ENV=local`, `APP_DEBUG=true`.

### 2.2 Nhập dữ liệu
Trong thư mục `resources/sql` có file `nro.sql` (database gốc). Thực hiện:
```bash
# Mac / Linux
mysql -u root -p -e "CREATE DATABASE IF NOT EXISTS nro CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;"
mysql -u root -p nro < resources/sql/nro.sql

# Windows (PowerShell)
mysql -u root -p -e "CREATE DATABASE IF NOT EXISTS nro CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;"
mysql -u root -p nro < resources/sql/nro.sql
```

Sau khi import, chạy migrate/seed để bổ sung bảng mới:
```bash
php artisan migrate
php artisan db:seed
```

### 2.3 Build assets
Laravel sử dụng Vite để copy toàn bộ asset gốc:
```bash
# build chế độ dev (watch)
npm run dev

# build production
npm run build  # build production
```

dev server cần chạy song song Vite (`npm run dev`) để load CSS/JS.

### 2.4 Khởi chạy ứng dụng
```bash
php artisan serve --host=0.0.0.0 --port=8000
```
Mở trình duyệt tại `http://127.0.0.1:8000`. Trang chủ, tin tức, sự kiện, update… sẽ hiển thị giống bản PHP thuần.

## 3. Kiến trúc & dữ liệu giao diện
- **Blade layout** (`resources/views/layouts/main.blade.php`) gom toàn bộ phần chung (meta, header, footer, menu cố định, modal đăng nhập).
- **Partial** trong `resources/views/partials` tái sử dụng top-nav, menu, analytics, global-config script… giống source cũ.
- **Dữ liệu giao diện** (hero video, sliders, top players…) lưu ở `resources/data`. Ví dụ:
  - `resources/data/common/page.json`: meta + structured data dùng cho mọi trang.
  - `resources/data/home/layout.json` & `resources/data/home/content.json`: cấu hình layout + data riêng trang chủ.
- **Posts** đọc trực tiếp từ DB (bảng `posts`). Các trang khác (ví dụ giftcode, nap tiền) sẽ lấy dữ liệu từ JSON tương ứng, tránh hard-code trong Blade.

## 4. Tình trạng tích hợp
- Các luồng thanh toán (Stripe, VNPay) đã được stub và tạm vô hiệu hoá trong controller & route để tránh lỗi khi chưa cấu hình khóa/thư viện. Khi cần kích hoạt, cài lại gói tương ứng và cập nhật controller.
- CSP mặc định bật qua `spatie/laravel-csp`. Nếu cần mở rộng domain cho script/style, sửa file `config/csp.php`.

## 5. Lệnh hữu ích
```bash
# Chạy toàn bộ test
php artisan test

# Dọn cache khi đổi cấu hình
php artisan config:clear
php artisan view:clear

# Format code PHP (nếu cần)
./vendor/bin/pint
```

## 6. Hỗ trợ hệ điều hành
- **macOS**: ưu tiên Homebrew cho PHP/MySQL. Khi dùng Valet cần tắt `php artisan serve`.
- **Ubuntu**: nhớ cài extension cần thiết (`php8.3-mysql` …). Nếu MySQL yêu cầu socket, đổi `DB_HOST=127.0.0.1` để dùng TCP.
- **Windows**: chạy Laravel trong WSL2 để đồng bộ file và permission. Dùng MySQL Windows (XAMPP) hoặc Docker; expose cổng 3306 & dùng `DB_HOST=127.0.0.1`.

## 7. Đóng góp
Mọi thay đổi nên thông qua pull request, tuân thủ PSR-12/Pint. JSON cấu hình nằm trong `resources/data`, vui lòng giữ đúng format để các service đọc được.

---
Sau khi hoàn thành các bước trên, bạn có thể phát triển giao diện/logic mới trên nền Laravel mà vẫn giữ nguyên trải nghiệm người dùng của website Hải Tặc Mạnh Nhất.
