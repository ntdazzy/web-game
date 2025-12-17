# Ngọc Rồng Vô Cực - Hệ Thống Website Game

Hệ thống website game PHP toàn diện cho "Ngọc Rồng Vô Cực" với tính năng xác thực người dùng, xử lý thanh toán, bảng xếp hạng và thiết kế responsive.

## Mục Lục

- [Tính Năng](#tính-năng)
- [Yêu Cầu Hệ Thống](#yêu-cầu-hệ-thống)
- [Cài Đặt](#cài-đặt)
- [Cấu Hình](#cấu-hình)
- [Cấu Trúc Dự Án](#cấu-trúc-dự-án)
- [Hướng Dẫn Sử Dụng](#hướng-dẫn-sử-dụng)
- [Tài Liệu API](#tài-liệu-api)
- [Bảo Mật](#bảo-mật)
- [Khắc Phục Sự Cố](#khắc-phục-sự-cố)
- [Giấy Phép](#giấy-phép)

## Tính Năng

### Chức Năng Cốt Lõi

- **Xác Thực Người Dùng**: Đăng nhập, đăng ký, quản lý mật khẩu
- **Xử Lý Thanh Toán**: Phương thức thanh toán thẻ cào và chuyển khoản ngân hàng
- **Bảng Xếp Hạng**: Xếp hạng thời gian thực về sức mạnh, tiền nạp và nhiệm vụ
- **Thiết Kế Responsive**: Bố cục responsive ưu tiên mobile
- **Quản Lý Phiên**: Xử lý phiên người dùng an toàn
- **Tích Hợp Cơ Sở Dữ Liệu**: Cơ sở dữ liệu MySQL với prepared statements

### Tích Hợp Thanh Toán

- **Thanh Toán Thẻ Cào**: Xử lý thẻ Viettel, Mobifone, Vinaphone
- **Chuyển Khoản Ngân Hàng**: Tạo mã QR và lịch sử giao dịch
- **Lịch Sử Giao Dịch**: Theo dõi và báo cáo thanh toán đầy đủ

### Giao Diện Người Dùng

- **Thiết Kế Hiện Đại**: Giao diện sạch sẽ, theo chủ đề game
- **Điều Hướng Tab**: Tổ chức nội dung trực quan
- **Responsive Mobile**: Tối ưu cho mọi kích thước thiết bị
- **Cập Nhật Thời Gian Thực**: Cập nhật bảng xếp hạng và dữ liệu trực tiếp

## Yêu Cầu Hệ Thống

- **PHP**: 7.4 trở lên
- **MySQL**: 5.7 trở lên
- **Web Server**: Apache 2.4+ hoặc Nginx
- **Extensions**: mysqli, json, session, curl
- **Bộ Nhớ**: Tối thiểu 128MB giới hạn bộ nhớ PHP

## Cài Đặt

### 1. Tải Và Giải Nén

```bash
# Clone hoặc tải dự án
git clone [repository-url]
cd ngoc-rong-website
```

### 2. Thiết Lập Web Server

Đặt các file dự án vào thư mục gốc của web server:

- **XAMPP**: `htdocs/ngoc-rong-website/`
- **WAMP**: `www/ngoc-rong-website/`
- **Linux**: `/var/www/html/ngoc-rong-website/`

### 3. Thiết Lập Cơ Sở Dữ Liệu

```sql
-- Tạo cơ sở dữ liệu
CREATE DATABASE nro CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Import schema cơ sở dữ liệu (nếu có)
mysql -u root -p nro < database_schema.sql
```

### 4. Quyền File

```bash
# Thiết lập quyền phù hợp
chmod 755 /path/to/ngoc-rong-website/
chmod 644 /path/to/ngoc-rong-website/*.php
```

## Cấu Hình

### 1. Cấu Hình Cơ Sở Dữ Liệu

Chỉnh sửa `core/Config/ConfigManager.php`:

```php
// Cài đặt cơ sở dữ liệu
'DB_HOST' => 'localhost',
'DB_USER' => 'ten_nguoi_dung',
'DB_PASS' => 'mat_khau',
'DB_NAME' => 'nro',
'DB_CHARSET' => 'utf8',
```

### 2. Cấu Hình Thanh Toán

Cấu hình cổng thanh toán trong `ConfigManager.php`:

```php
// Thanh toán Doithe1s
'DOITHE1S_PARTNER_ID' => 'id_partner_cua_ban',
'DOITHE1S_PARTNER_KEY' => 'key_partner_cua_ban',

// Chuyển khoản Sepay
'SEPAY_BANK_ACCOUNT' => 'so_tai_khoan_ngan_hang',
'SEPAY_BANK_NAME' => 'ten_ngan_hang',
'SEPAY_BANK_CODE' => 'ma_ngan_hang',
'SEPAY_BANK_OWNER' => 'ten_chu_tai_khoan',
```

### 3. Cấu Hình Bảo Mật

```php
// Cloudflare Turnstile
'CF_SITE_KEY' => 'site_key_cua_ban',
'CF_SECRET_KEY' => 'secret_key_cua_ban',
```

### 4. Cài Đặt Ứng Dụng

```php
// Cấu hình ứng dụng
'APP_NAME' => 'Ngọc Rồng Vô Cực',
'APP_DESCRIPTION' => 'Website chính thức của Ngọc Rồng Vô Cực',
'APP_KEYWORDS' => 'Chú Bé Rồng Online,ngoc rong mobile, game ngoc rong',
```

## Cấu Trúc Dự Án

```
ngoc-rong-website/
├── assets/
│   ├── css/
│   │   └── style.css          # Stylesheet chính
│   ├── js/
│   │   ├── app.js            # Chức năng JavaScript
│   │   └── sweetalert2@11.js # Thư viện thông báo
│   └── images/               # Tài nguyên và hình ảnh game
├── core/                     # File hệ thống cốt lõi
│   ├── Auth/
│   │   └── AuthManager.php   # Xử lý xác thực
│   ├── Config/
│   │   └── ConfigManager.php # Quản lý cấu hình
│   ├── Database/
│   │   └── DatabaseManager.php # Thao tác cơ sở dữ liệu
│   ├── Payment/
│   │   └── PaymentManager.php # Xử lý thanh toán
│   ├── Ranking/
│   │   └── RankingManager.php # Hệ thống bảng xếp hạng
│   ├── Utils/
│   │   └── Response.php      # Tiện ích phản hồi
│   ├── Webhook/
│   │   └── WebhookManager.php # Xử lý webhook
│   └── Core.php             # Lớp ứng dụng chính
├── views/                    # Template giao diện
│   ├── layout/
│   │   ├── header.php       # Header trang web
│   │   └── foot.php         # Footer trang web
│   ├── pages/               # Template trang
│   └── payment/             # Template form thanh toán
├── callback.php             # Xử lý callback thanh toán
├── callback_bank.php        # Callback chuyển khoản ngân hàng
├── index.php               # Điểm vào chính
└── README.md               # File này
```

## Hướng Dẫn Sử Dụng

### 1. Truy Cập Website

Điều hướng đến domain hoặc localhost:

```
http://localhost/ngoc-rong-website/
```

### 2. Đăng Ký Người Dùng

- Nhấp nút "Đăng Ký" (Register)
- Điền thông tin bắt buộc
- Hoàn thành xác minh captcha
- Tài khoản sẽ được tạo và người dùng đăng nhập

### 3. Đăng Nhập Người Dùng

- Nhấp nút "Đăng Nhập" (Login)
- Nhập tên người dùng và mật khẩu
- Hoàn thành xác minh captcha
- Truy cập bảng điều khiển người dùng sau khi đăng nhập thành công

### 4. Xử Lý Thanh Toán

Điều hướng đến phần "Nạp Tiền" (Recharge):

- **Thanh Toán Thẻ**: Chọn loại thẻ, nhập serial và mã PIN
- **Chuyển Khoản Ngân Hàng**: Quét mã QR, sử dụng nội dung chuyển khoản được cung cấp

### 5. Bảng Xếp Hạng

Truy cập "Bảng Xếp Hạng" (Leaderboards) để xem:

- Xếp hạng sức mạnh hàng đầu
- Xếp hạng tiền nạp hàng đầu
- Xếp hạng nhiệm vụ hàng đầu

## Tài Liệu API

### Lớp Cốt Lõi

#### Lớp Core

Điểm vào ứng dụng chính và container dependency injection.

```php
$app = Core::getInstance();
$app->init();
```

#### AuthManager

Xử lý xác thực người dùng và quản lý phiên.

```php
// Đăng nhập người dùng
$result = $app->auth->login($username, $password, $captcha);

// Kiểm tra người dùng đã đăng nhập
$isLoggedIn = $app->auth->isLoggedIn();

// Lấy thông tin người chơi
$playerInfo = $app->auth->getPlayerInfo();
```

#### PaymentManager

Xử lý giao dịch thanh toán và quản lý lịch sử thanh toán.

```php
// Xử lý thanh toán thẻ
$result = $payment->processCard($cardType, $pin, $serial, $amount, $username);

// Lấy lịch sử thanh toán
$history = $payment->getHistory('card', $username, 20);
```

#### RankingManager

Quản lý dữ liệu bảng xếp hạng và xếp hạng người chơi.

```php
// Lấy người chơi sức mạnh hàng đầu
$topPower = $rankingManager->getTopPower(10);

// Lấy người chơi tiền nạp hàng đầu
$topMoney = $rankingManager->getTopMoney(10);

// Lấy người chơi nhiệm vụ hàng đầu
$topTask = $rankingManager->getTopTask(10);
```

### Tiện Ích Phản Hồi

#### Lớp Response

Xử lý phản hồi HTTP và thông báo người dùng.

```php
// Hiển thị thông báo thành công
Response::sweetAlert('success', 'Tiêu Đề', 'Thông Báo', '/url-chuyen-huong');

// Hiển thị thông báo lỗi
Response::sweetAlert('error', 'Tiêu Đề', 'Thông Báo');

// Chuyển hướng người dùng
Response::redirect('/trang-dich');

// Trả về phản hồi JSON
Response::json(['success' => true, 'data' => $data]);
```

## Bảo Mật

### Biện Pháp Bảo Mật Đã Triển Khai

- **Ngăn Chặn SQL Injection**: Tất cả truy vấn cơ sở dữ liệu sử dụng prepared statements
- **Bảo Vệ XSS**: Tất cả đầu ra được escape đúng cách bằng `htmlspecialchars()`
- **Bảo Vệ CSRF**: Token form và xác thực referrer
- **Bảo Mật Phiên**: Cấu hình và quản lý phiên an toàn
- **Xác Thực Đầu Vào**: Xác thực phía server cho tất cả đầu vào người dùng
- **Tích Hợp Captcha**: Cloudflare Turnstile để bảo vệ khỏi bot

### Thực Hành Bảo Mật Tốt Nhất

1. **Cập Nhật Dependencies**: Cập nhật PHP và MySQL thường xuyên
2. **Cấu Hình An Toàn**: Sử dụng mật khẩu mạnh và thông tin đăng nhập cơ sở dữ liệu an toàn
3. **Quyền File**: Thiết lập quyền file và thư mục phù hợp
4. **HTTPS**: Sử dụng mã hóa SSL/TLS cho môi trường sản xuất
5. **Sao Lưu Thường Xuyên**: Duy trì sao lưu cơ sở dữ liệu và file thường xuyên

## Khắc Phục Sự Cố

### Vấn Đề Thường Gặp

#### Lỗi Kết Nối Cơ Sở Dữ Liệu

```
Lỗi: Không thể kết nối cơ sở dữ liệu
```

**Giải pháp**: Xác minh thông tin đăng nhập cơ sở dữ liệu trong `ConfigManager.php` và đảm bảo dịch vụ MySQL đang chạy.

#### Xử Lý Thanh Toán Thất Bại

```
Lỗi: Cổng thanh toán không phản hồi
```

**Giải pháp**: Kiểm tra thông tin đăng nhập cổng thanh toán và endpoint API trong cấu hình.

#### Vấn Đề Phiên

```
Lỗi: Phiên không bắt đầu
```

**Giải pháp**: Đảm bảo cấu hình phiên đúng và extension PHP session được bật.

#### Lỗi Quyền File

```
Lỗi: Từ chối quyền
```

**Giải pháp**: Thiết lập quyền file phù hợp (755 cho thư mục, 644 cho file).

### Chế Độ Debug

Bật chế độ debug bằng cách chỉnh sửa báo cáo lỗi trong `index.php`:

```php
// Bật báo cáo lỗi để debug
error_reporting(E_ALL);
ini_set('display_errors', 1);
```

### File Log

Kiểm tra log lỗi web server để có thông tin lỗi chi tiết:

- **XAMPP**: `xampp/apache/logs/error.log`
- **Linux**: `/var/log/apache2/error.log`

## Giấy Phép

Dự án này là phần mềm độc quyền. Bảo lưu mọi quyền.

### Điều Khoản Sử Dụng

- Phần mềm này được cung cấp chỉ để sử dụng được ủy quyền
- Cấm chỉnh sửa, phân phối hoặc reverse engineering
- Sử dụng thương mại yêu cầu sự cho phép rõ ràng
- Người dùng phải tuân thủ tất cả luật và quy định hiện hành

### Hỗ Trợ

Để được hỗ trợ kỹ thuật hoặc thắc mắc về giấy phép, liên hệ nhóm phát triển.

---

**Phiên Bản**: 1.0.0  
**Cập Nhật Cuối**: 2024  
**Phiên Bản PHP**: 7.4+  
**Cơ Sở Dữ Liệu**: MySQL 5.7+
