<?php
header('Content-Type: text/html; charset=utf-8');

require_once '../core/Core.php';

$app = Core::getInstance();
$app->init();

// Check admin permission
if (!isset($GLOBALS['_is_admin']) || !$GLOBALS['_is_admin']) {
    header("Location: /");
    exit();
}

$admin = $app->admin;
$rates = $admin->getExchangeRates();
$message = '';

// ========== XỬ LÝ GIFTCODE ==========

// Phân trang giftcode
$giftcodes_per_page = 20;
$current_giftcode_page = isset($_GET['giftcode_page']) ? max(1, intval($_GET['giftcode_page'])) : 1;
$giftcode_offset = ($current_giftcode_page - 1) * $giftcodes_per_page;

// Lấy dữ liệu giftcode
$total_giftcodes = $admin->getTotalGiftcodes();
$total_giftcode_pages = ceil($total_giftcodes / $giftcodes_per_page);
$giftcodes = $admin->getGiftcodes($giftcodes_per_page, $giftcode_offset);

// ========== XỬ LÝ BUFF VND ==========

// Phân trang lịch sử buff VND
$buff_history_per_page = 20;
$current_buff_page = isset($_GET['buff_page']) ? max(1, intval($_GET['buff_page'])) : 1;
$buff_offset = ($current_buff_page - 1) * $buff_history_per_page;

// Lấy lịch sử buff VND
$total_buff_history = $admin->getTotalBuffVNDHistory();
$total_buff_pages = ceil($total_buff_history / $buff_history_per_page);
$buff_history = $admin->getBuffVNDHistory($buff_history_per_page, $buff_offset);

// Process form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Xử lý cập nhật tỉ lệ nạp
    if (isset($_POST['card_rate'])) {
        $cardRate = floatval($_POST['card_rate']);
        $bankRate = floatval($_POST['bank_rate']);
        $minAmount = intval($_POST['min_amount']);
        $maxAmount = intval($_POST['max_amount']);
        
        if ($admin->updateExchangeRates($cardRate, $bankRate, $minAmount, $maxAmount)) {
            $message = '<div style="background: #28a745; color: white; padding: 10px; border-radius: 5px; margin-bottom: 20px;">Cập nhật tỉ lệ thành công!</div>';
            $rates = $admin->getExchangeRates(); // Refresh rates
        } else {
            $message = '<div style="background: #dc3545; color: white; padding: 10px; border-radius: 5px; margin-bottom: 20px;">Lỗi khi cập nhật tỉ lệ!</div>';
        }
    }
    
    // Xử lý tạo giftcode mới
    if (isset($_POST['create_giftcode'])) {
        $code = trim($_POST['code']);
        $count_left = intval($_POST['count_left']);
        $expired = $_POST['expired'];
        $active = isset($_POST['active']) ? 1 : 0;
        $type = intval($_POST['type'] ?? 0);
        
        // Xử lý items
        $items = [];
        if (isset($_POST['item_id']) && is_array($_POST['item_id'])) {
            foreach ($_POST['item_id'] as $index => $item_id) {
                if (!empty($item_id)) {
                    $item = [
                        'temp_id' => intval($item_id),
                        'quantity' => intval($_POST['item_quantity'][$index] ?? 1)
                    ];
                    
                    // Xử lý options
                    $options = [];
                    if (isset($_POST['option_id'][$index]) && is_array($_POST['option_id'][$index])) {
                        foreach ($_POST['option_id'][$index] as $opt_index => $option_id) {
                            if (!empty($option_id)) {
                                $options[] = [
                                    'id' => intval($option_id),
                                    'param' => intval($_POST['option_param'][$index][$opt_index] ?? 0)
                                ];
                            }
                        }
                    }
                    
                    if (!empty($options)) {
                        $item['options'] = $options;
                    }
                    
                    $items[] = $item;
                }
            }
        }
        
        if (!empty($code) && $count_left > 0 && !empty($items)) {
            $detail = json_encode($items, JSON_UNESCAPED_UNICODE);
            
            if ($admin->createGiftcode($code, $count_left, $detail, $expired, $active, $type)) {
                $message = '<div style="background: #28a745; color: white; padding: 10px; border-radius: 5px; margin-bottom: 20px;">Tạo giftcode thành công!</div>';
                // Refresh danh sách giftcode
                $giftcodes = $admin->getGiftcodes($giftcodes_per_page, $giftcode_offset);
            } else {
                $message = '<div style="background: #dc3545; color: white; padding: 10px; border-radius: 5px; margin-bottom: 20px;">Lỗi khi tạo giftcode!</div>';
            }
        } else {
            $message = '<div style="background: #dc3545; color: white; padding: 10px; border-radius: 5px; margin-bottom: 20px;">Vui lòng điền đầy đủ thông tin và ít nhất một vật phẩm!</div>';
        }
    }
    
    // Xử lý xóa giftcode
    if (isset($_POST['delete_giftcode'])) {
        $giftcode_id = intval($_POST['delete_giftcode']);
        
        if ($admin->deleteGiftcode($giftcode_id)) {
            $message = '<div style="background: #28a745; color: white; padding: 10px; border-radius: 5px; margin-bottom: 20px;">Xóa giftcode thành công!</div>';
            // Refresh danh sách giftcode
            $giftcodes = $admin->getGiftcodes($giftcodes_per_page, $giftcode_offset);
        } else {
            $message = '<div style="background: #dc3545; color: white; padding: 10px; border-radius: 5px; margin-bottom: 20px;">Lỗi khi xóa giftcode!</div>';
        }
    }
    
    // Xử lý cập nhật trạng thái giftcode
    if (isset($_POST['update_giftcode_status'])) {
        $giftcode_id = intval($_POST['giftcode_id']);
        $active = intval($_POST['active']);
        
        if ($admin->updateGiftcodeStatus($giftcode_id, $active)) {
            $message = '<div style="background: #28a745; color: white; padding: 10px; border-radius: 5px; margin-bottom: 20px;">Cập nhật trạng thái thành công!</div>';
            // Refresh danh sách giftcode
            $giftcodes = $admin->getGiftcodes($giftcodes_per_page, $giftcode_offset);
        } else {
            $message = '<div style="background: #dc3545; color: white; padding: 10px; border-radius: 5px; margin-bottom: 20px;">Lỗi khi cập nhật trạng thái!</div>';
        }
    }
    
    // Xử lý buff VND
    if (isset($_POST['buff_vnd'])) {
        $username = trim($_POST['username']);
        $amountVND = intval($_POST['amount_vnd']);
        $paymentType = $_POST['payment_type']; // 'card' hoặc 'bank'
        $reason = trim($_POST['reason']);
        
        if (!empty($username) && $amountVND > 0) {
            // Kiểm tra username có tồn tại không
            $userExists = $admin->checkUserExists($username);
            
            if ($userExists) {
                // Lấy tỉ lệ từ database
                $rates = $admin->getExchangeRates();
                
                if ($paymentType === 'card') {
                    $exchangeRate = $rates['card_rate'];
                } else {
                    $exchangeRate = $rates['bank_rate'];
                }
                
                $cashToAdd = intval($amountVND * $exchangeRate);
                
                // Thực hiện buff VND
                if ($admin->addMoneyToUserAccount($username, $cashToAdd)) {
                    // Ghi log buff VND
                    $admin->logBuffVND($username, $amountVND, $cashToAdd, $paymentType, $reason);
                    
                    $message = '<div style="background: #28a745; color: white; padding: 10px; border-radius: 5px; margin-bottom: 20px;">Buff VND thành công! Username: ' . htmlspecialchars($username) . ' nhận được ' . number_format($cashToAdd) . ' cash</div>';
                    // Refresh lịch sử buff VND
                    $buff_history = $admin->getBuffVNDHistory($buff_history_per_page, $buff_offset);
                } else {
                    $message = '<div style="background: #dc3545; color: white; padding: 10px; border-radius: 5px; margin-bottom: 20px;">Lỗi khi buff VND!</div>';
                }
            } else {
                $message = '<div style="background: #dc3545; color: white; padding: 10px; border-radius: 5px; margin-bottom: 20px;">Username không tồn tại!</div>';
            }
        } else {
            $message = '<div style="background: #dc3545; color: white; padding: 10px; border-radius: 5px; margin-bottom: 20px;">Vui lòng điền đầy đủ thông tin!</div>';
        }
    }
}
?>

<!DOCTYPE html>
<html lang="vi">
<head>
    <title>Quản lý tỉ lệ nạp & Giftcode - Admin</title>
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="/assets/css/style.css">
    <style>
        /* CSS hiện tại giữ nguyên, thêm CSS mới cho giftcode và buff VND */
        
        .tab-container {
            margin-bottom: 20px;
        }
        
        .tab-buttons {
            display: flex;
            background: rgba(255, 204, 0, 0.1);
            border-radius: 8px;
            padding: 5px;
            margin-bottom: 20px;
        }
        
        .tab-button {
            flex: 1;
            padding: 12px;
            text-align: center;
            background: transparent;
            border: none;
            color: #fff;
            cursor: pointer;
            border-radius: 5px;
            transition: all 0.3s ease;
        }
        
        .tab-button.active {
            background: #ffcc00;
            color: #000;
            font-weight: bold;
        }
        
        .tab-content {
            display: none;
        }
        
        .tab-content.active {
            display: block;
        }
        
        .giftcodes-table, .buff-history-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        
        .giftcodes-table th, .giftcodes-table td,
        .buff-history-table th, .buff-history-table td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #444;
        }
        
        .giftcodes-table th, .buff-history-table th {
            background: rgba(255, 204, 0, 0.2);
            color: #ffcc00;
        }
        
        .giftcodes-table tr:hover, .buff-history-table tr:hover {
            background: rgba(255, 255, 255, 0.1);
        }
        
        .btn-edit {
            background: #4CAF50;
            color: white;
            padding: 8px 15px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            margin-right: 5px;
        }
        
        .btn-delete {
            background: #f44336;
            color: white;
            padding: 8px 15px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        
        .btn-add {
            background: #2196F3;
            color: white;
            padding: 8px 15px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin: 5px;
        }
        
        .btn-remove {
            background: #ff9800;
            color: white;
            padding: 5px 10px;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            margin-left: 10px;
        }
        
        .item-container {
            border: 1px solid #444;
            border-radius: 8px;
            padding: 15px;
            margin-bottom: 15px;
            background: rgba(255, 255, 255, 0.05);
        }
        
        .option-container {
            border: 1px dashed #666;
            border-radius: 5px;
            padding: 10px;
            margin: 10px 0;
            background: rgba(255, 255, 255, 0.02);
        }
        
        .form-row {
            display: flex;
            gap: 10px;
            margin-bottom: 10px;
            align-items: center;
        }
        
        .form-row .form-group {
            flex: 1;
            margin-bottom: 0;
        }
        
        .expired-soon {
            color: #ff9900;
            font-weight: bold;
        }
        
        .expired {
            color: #f44336;
            font-weight: bold;
        }
        
        .active-giftcode {
            color: #4CAF50;
            font-weight: bold;
        }
        
        .pagination {
            text-align: center;
            margin-top: 20px;
        }
        
        .pagination a {
            display: inline-block;
            padding: 8px 16px;
            margin: 0 4px;
            background: rgba(255, 204, 0, 0.2);
            color: #ffcc00;
            text-decoration: none;
            border-radius: 4px;
            transition: all 0.3s ease;
        }
        
        .pagination a:hover, .pagination a.active {
            background: #ffcc00;
            color: #000;
        }

        .rate-info-box {
            margin-top: 30px;
            padding: 15px;
            background: rgba(255, 204, 0, 0.1);
            border-radius: 8px;
            border-left: 4px solid #ffcc00;
        }

        .rate-info-box h4 {
            color: #ffcc00;
            margin-top: 0;
            margin-bottom: 10px;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin: 20px 0;
        }

        .stat-card {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 8px;
            padding: 15px;
            text-align: center;
            border: 1px solid #444;
        }

        .stat-card h4 {
            margin: 0 0 10px 0;
            color: #ffcc00;
            font-size: 14px;
        }

        .stat-card .value {
            font-size: 24px;
            font-weight: bold;
            color: #4CAF50;
        }
    </style>
</head>
<body>
    <?php include $_SERVER['DOCUMENT_ROOT'] . '/views/layout/header.php'; ?>
    
    <div class="admin-container">
        <div class="admin-header">
            <h1>⚙️ Quản lý tỉ lệ nạp & Giftcode</h1>
            <p>Điều chỉnh tỉ lệ chuyển đổi và quản lý giftcode</p>
        </div>

        <?php echo $message; ?>

        <!-- Tab container -->
        <div class="tab-container">
            <div class="tab-buttons">
                <button class="tab-button active" onclick="switchTab('rates')">Tỉ Lệ Nạp</button>
                <button class="tab-button" onclick="switchTab('giftcodes')">Quản Lý Giftcode</button>
                <button class="tab-button" onclick="switchTab('create-giftcode')">Tạo Giftcode</button>
                <button class="tab-button" onclick="switchTab('buff-vnd')">💰 Buff VND</button>
            </div>

            <!-- Tab Tỉ lệ nạp -->
            <div id="rates-tab" class="tab-content active">
                <!-- Thông tin tỉ lệ hiện tại -->
                <div class="current-rates">
                    <h3>📊 Tỉ lệ hiện tại:</h3>
                    <p><strong>Thẻ cào:</strong> <?php echo $rates['card_rate']; ?>x</p>
                    <p><strong>Chuyển khoản:</strong> <?php echo $rates['bank_rate']; ?>x</p>
                    <p><strong>Min amount:</strong> <?php echo number_format($rates['min_amount']); ?>đ</p>
                    <p><strong>Max amount:</strong> <?php echo number_format($rates['max_amount']); ?>đ</p>
                </div>

                <form method="POST">
                    <div class="form-group">
                        <label>🔢 Tỉ lệ nạp thẻ (x):</label>
                        <input type="number" name="card_rate" step="0.01" min="0.1" max="10" value="<?php echo $rates['card_rate']; ?>" required>
                        <div class="form-help">Ví dụ: 1.5 = nạp 10,000đ được 15,000 cash</div>
                    </div>
                    
                    <div class="form-group">
                        <label>🏦 Tỉ lệ chuyển khoản (x):</label>
                        <input type="number" name="bank_rate" step="0.01" min="0.1" max="10" value="<?php echo $rates['bank_rate']; ?>" required>
                        <div class="form-help">Ví dụ: 2.0 = nạp 10,000đ được 20,000 cash</div>
                    </div>
                    
                    <div class="form-group">
                        <label>💰 Số tiền nạp tối thiểu (VND):</label>
                        <input type="number" name="min_amount" min="1000" value="<?php echo $rates['min_amount']; ?>" required>
                    </div>
                    
                    <div class="form-group">
                        <label>💵 Số tiền nạp tối đa (VND):</label>
                        <input type="number" name="max_amount" min="10000" value="<?php echo $rates['max_amount']; ?>" required>
                    </div>
                    
                    <button type="submit" class="submit-btn">
                        💾 Lưu thay đổi
                    </button>
                </form>
            </div>

            <!-- Tab Quản lý giftcode -->
            <div id="giftcodes-tab" class="tab-content">
                <div class="section">
                    <h3>🎁 Quản Lý Giftcode (<?php echo $total_giftcodes; ?> giftcode)</h3>

                    <?php if (empty($giftcodes)): ?>
                    <p style="text-align: center; color: #888; padding: 20px;">Chưa có giftcode nào.</p>
                    <?php else: ?>
                    <table class="giftcodes-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Code</th>
                                <th>Số lượng</th>
                                <th>Trạng thái</th>
                                <th>Loại</th>
                                <th>Ngày tạo</th>
                                <th>Hết hạn</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($giftcodes as $giftcode): 
                                $expired_class = '';
                                $current_time = time();
                                $expired_time = strtotime($giftcode['expired']);
                                
                                if ($expired_time <= $current_time) {
                                    $expired_class = 'expired';
                                } elseif (($expired_time - $current_time) < (7 * 24 * 60 * 60)) {
                                    $expired_class = 'expired-soon';
                                } else {
                                    $expired_class = 'active-giftcode';
                                }
                            ?>
                            <tr>
                                <td><?php echo $giftcode['id']; ?></td>
                                <td><strong><?php echo htmlspecialchars($giftcode['code']); ?></strong></td>
                                <td><?php echo $giftcode['count_left']; ?></td>
                                <td>
                                    <form method="POST" style="display: inline;">
                                        <input type="hidden" name="giftcode_id" value="<?php echo $giftcode['id']; ?>">
                                        <input type="hidden" name="update_giftcode_status" value="1">
                                        <select name="active" onchange="this.form.submit()">
                                            <option value="1" <?php echo $giftcode['active'] == 1 ? 'selected' : ''; ?>>🟢 Active</option>
                                            <option value="0" <?php echo $giftcode['active'] == 0 ? 'selected' : ''; ?>>🔴 Inactive</option>
                                        </select>
                                    </form>
                                </td>
                                <td><?php echo $giftcode['type']; ?></td>
                                <td><?php echo $giftcode['datecreate']; ?></td>
                                <td class="<?php echo $expired_class; ?>">
                                    <?php echo $giftcode['expired']; ?>
                                </td>
                                <td>
                                    <button type="button" class="btn-edit" onclick="viewGiftcodeDetail(<?php echo $giftcode['id']; ?>)">👁️ Xem</button>
                                    <form method="POST" style="display: inline;">
                                        <input type="hidden" name="delete_giftcode" value="<?php echo $giftcode['id']; ?>">
                                        <button type="submit" class="btn-delete" onclick="return confirm('Bạn có chắc chắn muốn xóa giftcode này?')">🗑️ Xóa</button>
                                    </form>
                                </td>
                            </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>

                    <!-- Phân trang giftcode -->
                    <?php if ($total_giftcode_pages > 1): ?>
                    <div class="pagination">
                        <?php if ($current_giftcode_page > 1): ?>
                        <a href="?giftcode_page=<?php echo $current_giftcode_page - 1; ?>">‹ Trước</a>
                        <?php endif; ?>

                        <?php for ($i = 1; $i <= $total_giftcode_pages; $i++): ?>
                        <?php if ($i == $current_giftcode_page): ?>
                        <a href="?giftcode_page=<?php echo $i; ?>" class="active"><?php echo $i; ?></a>
                        <?php else: ?>
                        <a href="?giftcode_page=<?php echo $i; ?>"><?php echo $i; ?></a>
                        <?php endif; ?>
                        <?php endfor; ?>

                        <?php if ($current_giftcode_page < $total_giftcode_pages): ?>
                        <a href="?giftcode_page=<?php echo $current_giftcode_page + 1; ?>">Sau ›</a>
                        <?php endif; ?>
                    </div>
                    <?php endif; ?>
                    <?php endif; ?>
                </div>
            </div>

            <!-- Tab Tạo giftcode -->
            <div id="create-giftcode-tab" class="tab-content">
                <div class="section">
                    <h3>🎁 Tạo Giftcode Mới</h3>

                    <form method="POST" class="admin-form" id="giftcode-form">
                        <input type="hidden" name="create_giftcode" value="1">

                        <div class="form-row">
                            <div class="form-group">
                                <label for="code">Mã Giftcode:</label>
                                <input type="text" id="code" name="code" required placeholder="Nhập mã giftcode (ví dụ: SUMMER2024)">
                            </div>
                            <div class="form-group">
                                <label for="count_left">Số lượng:</label>
                                <input type="number" id="count_left" name="count_left" min="1" max="999999" value="100" required>
                            </div>
                            <div class="form-group">
                                <label for="type">Loại:</label>
                                <select id="type" name="type">
                                    <option value="0">Thường</option>
                                    <option value="1">Đặc biệt</option>
                                    <option value="2">Sự kiện</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label for="expired">Hết hạn:</label>
                                <input type="datetime-local" id="expired" name="expired" required>
                            </div>
                            <div class="form-group">
                                <label for="active">Trạng thái:</label>
                                <select id="active" name="active">
                                    <option value="1" selected>🟢 Active</option>
                                    <option value="0">🔴 Inactive</option>
                                </select>
                            </div>
                        </div>

                        <h4 style="color: #ffcc00; margin: 20px 0 10px 0;">📦 Danh sách vật phẩm</h4>

                        <div id="items-container">
                            <!-- Item mẫu sẽ được thêm bằng JavaScript -->
                        </div>

                        <button type="button" class="btn-add" onclick="addItem()">➕ Thêm vật phẩm</button>

                        <button type="submit" class="submit-btn" style="margin-top: 20px;">
                            🎁 Tạo Giftcode
                        </button>
                    </form>
                </div>
            </div>

            <!-- Tab Buff VND -->
            <div id="buff-vnd-tab" class="tab-content">
                <div class="section">
                    <h3>💰 Buff VND Cho Tài Khoản</h3>
                    
                    <form method="POST" class="admin-form">
                        <input type="hidden" name="buff_vnd" value="1">
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label for="username">Username:</label>
                                <input type="text" id="username" name="username" required placeholder="Nhập username cần buff VND">
                            </div>
                            <div class="form-group">
                                <label for="amount_vnd">Số VND:</label>
                                <input type="number" id="amount_vnd" name="amount_vnd" min="1000" required placeholder="Nhập số VND">
                            </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label for="payment_type">Loại buff:</label>
                                <select id="payment_type" name="payment_type">
                                    <option value="bank">🏦 Chuyển khoản (Rate: <?php echo $rates['bank_rate']; ?>x)</option>
                                    <option value="card">💳 Thẻ cào (Rate: <?php echo $rates['card_rate']; ?>x)</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="reason">Lý do:</label>
                                <input type="text" id="reason" name="reason" placeholder="Lý do buff VND (ví dụ: bù lỗi, khuyến mãi...)">
                            </div>
                        </div>
                        
                        <button type="submit" class="submit-btn">
                            💰 Buff VND
                        </button>
                    </form>
                    
                    <div class="rate-info-box">
                        <h4>📊 Thông tin tỉ lệ hiện tại:</h4>
                        <p><strong>Thẻ cào:</strong> <?php echo $rates['card_rate']; ?>x (nạp 10,000đ = <?php echo number_format(10000 * $rates['card_rate']); ?> cash)</p>
                        <p><strong>Chuyển khoản:</strong> <?php echo $rates['bank_rate']; ?>x (nạp 10,000đ = <?php echo number_format(10000 * $rates['bank_rate']); ?> cash)</p>
                    </div>
                </div>
                
                <!-- Lịch sử buff VND -->
                <div class="section" style="margin-top: 30px;">
                    <h3>📋 Lịch Sử Buff VND (<?php echo $total_buff_history; ?> giao dịch)</h3>
                    
                    <?php if (empty($buff_history)): ?>
                    <p style="text-align: center; color: #888; padding: 20px;">Chưa có lịch sử buff VND nào.</p>
                    <?php else: ?>
                    <table class="buff-history-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Username</th>
                                <th>VND Buff</th>
                                <th>Cash Nhận</th>
                                <th>Loại</th>
                                <th>Lý do</th>
                                <th>Thời gian</th>
                                <th>Admin</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($buff_history as $history): ?>
                            <tr>
                                <td><?php echo $history['id']; ?></td>
                                <td><strong><?php echo htmlspecialchars($history['username']); ?></strong></td>
                                <td style="color: #4CAF50;">+<?php echo number_format($history['amount_vnd']); ?>đ</td>
                                <td style="color: #ffcc00;">+<?php echo number_format($history['cash_added']); ?> cash</td>
                                <td>
                                    <?php if ($history['payment_type'] == 'card'): ?>
                                    <span style="color: #2196F3;">💳 Thẻ cào</span>
                                    <?php else: ?>
                                    <span style="color: #4CAF50;">🏦 Chuyển khoản</span>
                                    <?php endif; ?>
                                </td>
                                <td><?php echo htmlspecialchars($history['reason'] ?: 'Không có'); ?></td>
                                <td><?php echo $history['created_at']; ?></td>
                                <td><?php echo htmlspecialchars($history['admin_name'] ?: 'System'); ?></td>
                            </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                    
                    <!-- Phân trang lịch sử buff VND -->
                    <?php if ($total_buff_pages > 1): ?>
                    <div class="pagination">
                        <?php if ($current_buff_page > 1): ?>
                        <a href="?buff_page=<?php echo $current_buff_page - 1; ?>">‹ Trước</a>
                        <?php endif; ?>

                        <?php for ($i = 1; $i <= $total_buff_pages; $i++): ?>
                        <?php if ($i == $current_buff_page): ?>
                        <a href="?buff_page=<?php echo $i; ?>" class="active"><?php echo $i; ?></a>
                        <?php else: ?>
                        <a href="?buff_page=<?php echo $i; ?>"><?php echo $i; ?></a>
                        <?php endif; ?>
                        <?php endfor; ?>

                        <?php if ($current_buff_page < $total_buff_pages): ?>
                        <a href="?buff_page=<?php echo $current_buff_page + 1; ?>">Sau ›</a>
                        <?php endif; ?>
                    </div>
                    <?php endif; ?>
                    <?php endif; ?>
                </div>
            </div>
        </div>

        <a href="/" class="back-btn">← Quay lại trang chủ</a>
    </div>

    <?php 
    $footerPath = $_SERVER['DOCUMENT_ROOT'] . '/views/layout/footer.php';
    if (file_exists($footerPath)) {
        include $footerPath;
    }
    ?>

    <script>
        // Danh sách options mới
        const itemOptions = {
            0: "Tấn công+#",
            1: "Thời gian sử dụng # phút",
            2: "HP, KI+#000",
            3: "Vô hiệu và biến #% sát thương chưởng thành KI",
            4: "Hồi phục #% KI khi bị đánh",
            5: "+#% sức đánh chí mạng",
            6: "HP+#",
            7: "KI+#",
            8: "Hút #% HP, KI xung quanh mỗi 5 giây",
            9: "Hiệu lực trong # phút",
            10: "Sát thương chuẩn #%",
            11: "Công đức +#",
            12: "Số lần sử dụng còn lại +#",
            13: "Số yêu quái đã hạ +#",
            14: "Chí mạng+#%",
            15: "Phản đòn cận chiến+#",
            16: "Tốc độ di chuyển+#%",
            17: "Né đòn: +#",
            18: "Chính xác: +#%",
            19: "Tấn công+#% khi đánh quái",
            20: "PIN #",
            21: "Yêu cầu sức mạnh # tỉ",
            22: "HP+#K",
            23: "KI+#K",
            24: "Làm tăng trọng lực, gây chậm mọi người xung quanh",
            25: "Tàng hình mỗi 5 giây",
            26: "Hóa đá mọi người xung quanh mỗi 30 giây",
            27: "+# HP/30s",
            28: "+# KI/30s",
            29: "Biến Sôcôla mọi người xung quanh mỗi 30 giây",
            30: "Không giao dịch",
            31: "Số lượng #",
            32: "Không bị hóa Xương",
            33: "Dịch chuyển tức thời",
            34: "Tinh ấn",
            35: "Nguyệt ấn",
            36: "Nhật ấn",
            37: "Số lần đã ký gửi #",
            38: "Chỉ có tác dụng khi hợp thể",
            39: "<Cập nhật bản mới để xem>",
            40: "Siêu cải trang # đá ngũ sắc",
            41: "Chỉ số thưởng +#:",
            42: "Tấn công+#% lên quái bay",
            43: "Tấn công+#% lên quái khỉ",
            44: "Tấn công+#% lên quái mặt đất",
            45: "Tấn công+#% lên tộc Namếc",
            46: "Tấn công+#% lên tộc Trái đất",
            47: "Giáp+#",
            48: "HP, KI+#",
            49: "Tấn công+#%",
            50: "Sức đánh+#%",
            51: "Sôn Gô Ku ss#",
            52: "Ca Đic siêu ss#",
            53: "Broly",
            54: "Mr. Santa",
            55: "Broly ss#",
            56: "Ca Lích",
            57: "Thên Xin Hăng",
            58: "Pic",
            59: "Siêu na mếc #",
            60: "Sôn Gô Tên",
            61: "Sôn Gô Ku",
            62: "Phục hồi thể lực #%",
            63: "Còn lại # ngày",
            64: "Còn lại # giờ",
            65: "Còn lại # phút",
            66: "Chưa có",
            67: "Dùng nâng cấp găng tay",
            68: "Dùng để nâng cấp áo",
            69: "Dùng để nâng cấp quần",
            70: "Dùng để nâng cấp giày",
            71: "Dùng để nâng cấp rađa",
            72: "Cấp #",
            73: "",
            74: "Dùng để ép thành đá",
            75: "Dùng để làm phép",
            76: "Vip",
            77: "HP+#%",
            78: "Sức hủy diệt+#%",
            79: "Đệ tử #% sức đánh",
            80: "HP+#%/30s",
            81: "KI+#%/30s",
            82: "Không bị quái chủ động đánh và giảm 20% sát thương khi bị đánh",
            83: "Tăng 20% sức mạnh và tiềm năng nhận được khi đánh quái",
            84: "Dùng để bay không tốn KI",
            85: "Dùng để bay và phục hồi KI",
            86: "Ký gửi vàng",
            87: "Ký gửi ngọc",
            88: "Cộng #% exp khi đánh quái",
            89: "Dùng để bay và phục hồi HP, KI",
            90: "Tặng cho người khác (bỏ ra đất) sẽ được nhận may mắn",
            91: "Mở ra để nhận may mắn",
            92: "Chúc tết bang hội và mọi người kèm theo pháo hoa",
            93: "HSD # ngày",
            94: "Giảm #% sát thương",
            95: "Biến #% tấn công thành HP",
            96: "Biến #% tấn công thành KI",
            97: "Phản #% sát thương",
            98: "Xuyên giáp #% chưởng",
            99: "Xuyên giáp #% cận chiến",
            100: "+#% vàng rơi",
            101: "+#% tiềm năng, sức mạnh",
            102: "# Sao Pha Lê",
            103: "KI +#%",
            104: "Biến #% tấn công quái thành HP",
            105: "Vô hình khi không đánh quái và boss",
            106: "Chống lạnh",
            107: "# Sao Pha Lê",
            108: "#% Né đòn",
            109: "Hôi, giảm #% HP",
            110: "Dò pha lê",
            111: "Phân tâm",
            112: "Giảm #% khi mua Avatar hoặc Cải trang",
            113: "Ném cho Sói Hẹc Quyn",
            114: "+#% TĐ chạy",
            115: "Biến cà rốt",
            116: "Kháng TDHS",
            117: "Đẹp +#% SĐ cho mình và người xung quanh",
            118: "Tới ngay mục tiêu và gây choáng trong # mili giây",
            119: "Gây mù xung quanh trong # giây",
            120: "Ra đòn sau # giây",
            121: "Ru ngủ trong # giây",
            122: "Bảo vệ trong # giây",
            123: "Trói gô mục tiêu trong # giây",
            124: "Tỉnh giấc bị yếu đi -#% sức đánh trong 10 giây",
            125: "Tăng và hồi phục #% HP tạm thời cho mình và xung quanh trong 30 giây",
            126: "Biến sôcôla làm yếu đi -#% sức đánh trong 30 giây",
            127: "Set Thên Xin Hăng",
            128: "Set Kirin",
            129: "Set Sôngôku",
            130: "Set Picolo",
            131: "Set Ốc tiêu",
            132: "Set Pikkoro Daimao",
            133: "Set Kakarot",
            134: "Set Ca Đíc",
            135: "Set Nappa",
            136: "$(5 món +100% sát thương đấm Galick)",
            137: "$(5 món x5 thời gian hóa khỉ)",
            138: "$(5 món +80% HP)",
            139: "$(5 món x2 thời gian chói mắt)",
            140: "$(5 món +100% sát thương Quả Cầu Kênh Khi)",
            141: "$(5 món +100% sát thương Kamejoko)",
            142: "$(5 món +50% sát thương Masenkosappo)",
            143: "$(5 món Bất tử xung quanh khi đánh quái)",
            144: "$(5 món +100% sát thương và bất tử đệ từ Đẻ Trứng)",
            145: "$(Ở gần 1 CT Dr Slum khác loại +20% sức đánh +66% tốc độ chạy)",
            146: "$(Ở gần 2 CT Dr Slum khác loại +30% sức đánh +100% tốc độ chạy)",
            147: "+#% sức đánh",
            148: "+#% tốc độ chạy",
            149: "(Chỉ số tăng khi ở gần CT Hải Tặc khác loại)",
            150: "(Chỉ số tăng khi ở gần Android Sát Thủ khác loại)",
            151: "$(Ở gần 1 CT nhóm Piláp khác loại +20% sức đánh +66% tốc độ chạy)",
            152: "$(Ở gần 2 CT nhóm Piláp khác loại +30% sức đánh +100% tốc độ chạy)",
            153: "#% tỉ lệ phát nổ sau khi chết",
            154: "Không thể bán lại",
            155: "Giảm 50% sức đánh, HP, KI và +#% SM, TN, vàng từ quái",
            156: "Cộng dồn 1% sức đánh khi chỉ dùng chiêu đấm, tối đa #%",
            157: "Giảm #% mọi sát thương khi KI dưới 20%",
            158: "Khi ở trần và không đeo cải trang sẽ có cơ hội tìm thấy vật phẩm sự kiện",
            159: "x# sức đánh đòn chưởng cơ bản mỗi phút",
            160: "+#% TN, SM cho đệ tử khi sư phụ mặc",
            161: "Thêm # ngọc mỗi ngày khi đánh quái.",
            162: "Cute hồi #% KI/s bản thân và xung quanh",
            163: "Biến người xung quanh thành Bí Ngô",
            164: "Đổi bằng # điểm sự kiện",
            165: "Cơ hội ra đòn +#% sát thương lửa khi cận chiến quái",
            166: "Ngầu +#% sức đánh lên quái khi bay với Cải Trang Tàu Pảy Pảy",
            167: "Tạo không khí lạnh",
            168: "Hấp thụ sức mạnh rồi bộc phá",
            169: "Cơ hội hạ độc đối thủ",
            170: "Ngầu +#% sức đánh lên quái khi bay với Cải Trang nhà Fide",
            171: "Số lượng #K",
            172: "#",
            173: "Phục hồi #% HP và KI cho đồng đội",
            174: "Sự kiện năm #",
            175: "Giảm #% thời gian bị mù",
            176: "$(Ở gần đủ 5 loại +20% sức đánh +50% tốc độ chạy)",
            177: "$(Tối đa +2% tất cả khi ở gần Mabư mập)",
            178: "KI+#%/10s",
            179: "+2% sức đánh, tối đa 10% khi ở gần Cải Trang tộc Demons Frost",
            180: "+#% sức đánh khi ở gần Cải Trang Black Gohan Rose",
            181: "Dịch chuyển tức thời +#% sát thương",
            182: "+#% sát thương đệ từ trứng",
            183: "Giảm #% thời gian hồi Khiên",
            184: "+#% sức đánh, tối đa 10% khi ở gần Gohan xanh, Poc đỏ, Arale búp bê",
            185: "+# giờ sử dụng",
            186: "Biến kẹo 30 giây",
            187: "Giảm # giây thời gian bị mù",
            188: "Đệ tử chưởng kamejoko +#% sát thương",
            189: "Đệ tử chưởng antomic +#% sát thương",
            190: "Đệ tử chưởng masenko +#% sát thương",
            191: "Né chí mạng+#%",
            192: "+#% Chí mạng",
            193: "+#% sức đánh, tối đa 11% khi ở gần Cải trang cầu thủ khác",
            194: "+#% sức đánh, tối đa 10% khi ở gần Cải trang hè khác",
            195: "+#% sức đánh, tối đa 10% khi ở gần Cải trang siêu nhân khác",
            196: "Xinh +#% sức đánh, tối đa 18% khi ở gần Cải trang Thỏ khác",
            197: "Tấn công+#% lên tộc Xayda",
            198: "Giảm #% sát thương từ tộc Trái Đất",
            199: "Giảm #% sát thương từ tộc Namếc",
            200: "Giảm #% sát thương từ tộc Xayda",
            201: "Tấn công+#% gần 2 thành viên bang",
            202: "HP+#% gần 2 thành viên bang",
            203: "KI+#% gần 2 thành viên bang",
            204: "Tấn công+#% lên Boss",
            205: "Đi cùng CT Diệt Quỷ +#% SĐ, tối đa 18%",
            206: "Vật phẩm hiếm rơi từ quái (+#%)",
            207: "Vật phẩm hiếm rơi từ boss (+#%)",
            208: "Trang bị đã chuyển hóa",
            209: "Bị rớt cấp # lần",
            210: "# Dòng chỉ số ẩn",
            211: "Giám định #/5",
            212: "Độ bền #/1000",
            213: "Giá bán: # triệu vàng",
            214: "Phạm vi tuyệt kỹ +#%",
            215: "Số lượng mục tiêu +#",
            216: "Tuyệt kỹ +#% sát thương",
            217: "- Chưa giám định",
            218: " ---------",
            219: "Số lần tẩy #",
            220: "Hoàn thành #%",
            221: "Phục hồi #% HP và  KI mỗi 30 giây cho bản thân và đồng bang",
            222: "120 giây kích nộ sức đánh #% trong 30 giây",
            223: "120 giây kích hồi #% HP trong vòng 30 giây",
            224: "Giảm thời gian cooldown của tất cả kỹ năng về 0,1 giây",
            225: "Giảm # giây bị phong ấn của Ma Phong Ba",
            226: "Cute +#% SĐ cho mình và người xung quanh",
            227: "Giảm #% tác dụng của các đòn khống chế khi dùng khiên năng lượng",
            228: "Cường hóa tới ô sao pha lê #",
            229: "Lạnh gây giảm #% HP , KI mỗi 30s cho những người xung quanh",
            230: "+# triệu tiềm năng, sức mạnh",
            231: "Hạn sử dụng hoặc vĩnh viễn",
            232: "Số lần giao dịch còn lại: #",
            233: "Set Gohan",
            234: "$(5 món +150% may mắn +30% vàng rơi từ quái)",
            235: "Số lần ký gửi còn lại: #",
            236: "+#% May mắn",
            237: "Set Nail chiến binh Namếc",
            238: "$[2] Tăng nhẹ sát thương chí mạng",
            239: "$[4] Giảm nhẹ hồi chiêu Masenko",
            240: "$[5] Tăng sát thương Masenko, giảm mạnh hồi chiêu Masenko",
            241: "Set Cađic M",
            242: "$[2] Tăng nhẹ HP và phạm vi ảnh hưởng chiêu phát nổ",
            243: "$[4] Tăng nhẹ sát thương chiêu phát nổ",
            244: "$[5] Tăng mạnh sát thương chiêu phát nổ",
            245: "Set Thần Vũ Trụ Kaio",
            246: "$[2] Tăng mạnh chí mạng",
            247: "$[4] Giảm nhẹ hao HP,KI chiêu Kaioken",
            248: "$[5] Tăng mạnh sát thương và giảm mạnh hao HP,KI chiêu Kaioken",
            300: "Đổi bằng # điểm sự kiện",
            301: "Đổi bằng # điểm săn boss",
            302: "Ảo Hóa cấp #",
            303: "Pháp sư hóa # lần",
            304: "SĐ Pháp sư hóa +#%",
            305: "HP Pháp sư hóa +#%",
            306: "KI Pháp sư hóa +#%",
            307: "STCM Pháp sư hóa +#%",
            308: "Siêu hóa cấp #",
            309: "Siêu hóa sức đánh +#",
            310: "Siêu hóa máu +#",
            311: "Siêu hóa ki +#",
            312: "Siêu hóa Giáp +#",
            313: "Thiêu đốt #% HP, KI xung quanh, hút linh hồn đối thủ và cộng #% HP,KI",
            314: "Đóng băng gây bỏng",
            315: "Sát vong linh hồn +# (Tấn công gốc)",
            316: "Huyết linh hồn +# (HP gốc)",
            317: "Nội năng linh hồn +# (KI gốc)",
            318: "Khiên linh hồn +# (Giáp gốc)",
            319: "Độ bền #/1000",
            320: "Tỉ lệ trúng #%",
            321: "Ngẫu nhiên từ # - 27% chỉ số ( có chỉ số phụ )",
            322: "Ngẫu nhiên từ # - 12% chỉ số ( có chỉ số phụ )",
            323: "Quà có thể nhận khi đổi #",
            324: "Đế Vương Thạch -#% Sát thương",
            325: "Hỏa Hồn Thạch +#% Sức đánh",
            326: "Thiên Mệnh Thạch +#% Né",
            327: "Huyết Tinh Thạch +#% HP",
            328: "Linh Vân Thạch +#% KI",
            329: "Mịch Lâm Thạch +#% STCM",
            330: "Thiên Nguyệt thạch +#% Chí Mạng"
        };

        let itemCount = 0;
        let optionCounters = {};

        function switchTab(tabName) {
            // Ẩn tất cả các tab content
            const tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(tab => {
                tab.classList.remove('active');
            });

            // Bỏ active tất cả các tab button
            const tabButtons = document.querySelectorAll('.tab-button');
            tabButtons.forEach(button => {
                button.classList.remove('active');
            });

            // Hiển thị tab được chọn
            document.getElementById(tabName + '-tab').classList.add('active');

            // Active tab button tương ứng
            event.target.classList.add('active');
        }

        function addItem() {
            const container = document.getElementById('items-container');
            const itemId = itemCount++;

            const itemHTML = `
                <div class="item-container" id="item-${itemId}">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                        <h5 style="color: #ffcc00; margin: 0;">Vật phẩm #${itemId + 1}</h5>
                        <button type="button" class="btn-remove" onclick="removeItem(${itemId})">🗑️ Xóa</button>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="item_id_${itemId}">ID Vật phẩm:</label>
                            <input type="number" id="item_id_${itemId}" name="item_id[]" 
                                   placeholder="Nhập ID vật phẩm" required>
                        </div>
                        <div class="form-group">
                            <label for="item_quantity_${itemId}">Số lượng:</label>
                            <input type="number" id="item_quantity_${itemId}" name="item_quantity[]" 
                                   value="1" min="1" required>
                        </div>
                    </div>
                    
                    <h6 style="color: #ffcc00; margin: 15px 0 10px 0;">⚙️ Options (Tùy chọn)</h6>
                    <div id="options-container-${itemId}">
                        <!-- Options sẽ được thêm ở đây -->
                    </div>
                    <button type="button" class="btn-add" onclick="addOption(${itemId})">➕ Thêm Option</button>
                </div>
            `;

            container.insertAdjacentHTML('beforeend', itemHTML);
            optionCounters[itemId] = 0;
        }

        function removeItem(itemId) {
            const itemElement = document.getElementById(`item-${itemId}`);
            if (itemElement) {
                itemElement.remove();
            }
            delete optionCounters[itemId];
        }

        function addOption(itemId) {
            const container = document.getElementById(`options-container-${itemId}`);
            const optionId = optionCounters[itemId]++;

            const optionHTML = `
                <div class="option-container" id="option-${itemId}-${optionId}">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                        <span style="color: #ffcc00; font-size: 14px;">Option #${optionId + 1}</span>
                        <button type="button" class="btn-remove" onclick="removeOption(${itemId}, ${optionId})">🗑️</button>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="option_id_${itemId}_${optionId}">Loại Option:</label>
                            <select id="option_id_${itemId}_${optionId}" name="option_id[${itemId}][]" onchange="updateOptionDescription(${itemId}, ${optionId})">
                                <option value="">-- Chọn option --</option>
                                ${Object.entries(itemOptions).map(([id, name]) => 
                                    `<option value="${id}">${id}. ${name}</option>`
                                ).join('')}
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="option_param_${itemId}_${optionId}">Tham số (#):</label>
                            <input type="number" id="option_param_${itemId}_${optionId}" 
                                   name="option_param[${itemId}][]" value="0">
                        </div>
                    </div>
                    <div id="option-desc-${itemId}-${optionId}" style="font-size: 12px; color: #888; margin-top: 5px;">
                        <!-- Mô tả option sẽ hiển thị ở đây -->
                    </div>
                </div>
            `;

            container.insertAdjacentHTML('beforeend', optionHTML);
        }

        function removeOption(itemId, optionId) {
            const optionElement = document.getElementById(`option-${itemId}-${optionId}`);
            if (optionElement) {
                optionElement.remove();
            }
        }

        function updateOptionDescription(itemId, optionId) {
            const select = document.getElementById(`option_id_${itemId}_${optionId}`);
            const descElement = document.getElementById(`option-desc-${itemId}-${optionId}`);
            const selectedValue = select.value;

            if (selectedValue && itemOptions[selectedValue]) {
                descElement.textContent = `Mô tả: ${itemOptions[selectedValue]}`;
            } else {
                descElement.textContent = '';
            }
        }

        function viewGiftcodeDetail(giftcodeId) {
            alert('Tính năng xem chi tiết giftcode sẽ được triển khai sau!');
        }

        // Khởi tạo
        document.addEventListener('DOMContentLoaded', function() {
            // Đặt thời gian hết hạn mặc định là 30 ngày kể từ hôm nay
            const defaultExpired = new Date();
            defaultExpired.setDate(defaultExpired.getDate() + 30);
            document.getElementById('expired').value = defaultExpired.toISOString().slice(0, 16);

            // Thêm item mặc định khi vào tab tạo giftcode
            const createGiftcodeTab = document.getElementById('create-giftcode-tab');
            if (createGiftcodeTab) {
                const observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                            if (createGiftcodeTab.classList.contains('active') && itemCount === 0) {
                                addItem();
                            }
                        }
                    });
                });

                observer.observe(createGiftcodeTab, {
                    attributes: true,
                    attributeFilter: ['class']
                });
            }
        });
    </script>
</body>
</html>