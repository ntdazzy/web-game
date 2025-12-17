<?php
require_once '../core/Core.php';
$app = Core::getInstance();
$app->init();

if (!isset($GLOBALS['_is_admin']) || !$GLOBALS['_is_admin']) {
    header("Location: /");
    exit();
}

$admin = $app->admin;
$message = '';

// Xử lý thêm giftcode mới
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['add_giftcode'])) {
    $code = trim($_POST['code']);
    $countLeft = intval($_POST['count_left']);
    $expired = $_POST['expired'];
    $active = isset($_POST['active']) ? 1 : 0;
    $type = intval($_POST['type']);
    
    // Xử lý items
    $items = [];
    if (isset($_POST['items']) && is_array($_POST['items'])) {
        foreach ($_POST['items'] as $item) {
            if (!empty($item['temp_id'])) {
                $itemData = [
                    'temp_id' => intval($item['temp_id']),
                    'quantity' => intval($item['quantity']),
                    'options' => []
                ];
                
                // Xử lý options
                if (isset($item['options']) && is_array($item['options'])) {
                    foreach ($item['options'] as $option) {
                        if (!empty($option['param']) && !empty($option['id'])) {
                            $itemData['options'][] = [
                                'param' => intval($option['param']),
                                'id' => intval($option['id'])
                            ];
                        }
                    }
                }
                $items[] = $itemData;
            }
        }
    }
    
    $detail = json_encode($items, JSON_UNESCAPED_UNICODE);
    
    if ($admin->addGiftCode($code, $countLeft, $detail, $expired, $active, $type)) {
        $message = '<div style="background: #28a745; color: white; padding: 10px; border-radius: 5px; margin-bottom: 20px;">Thêm giftcode thành công!</div>';
    } else {
        $message = '<div style="background: #dc3545; color: white; padding: 10px; border-radius: 5px; margin-bottom: 20px;">Lỗi khi thêm giftcode!</div>';
    }
}

// Xử lý xóa giftcode
if (isset($_GET['delete'])) {
    $id = intval($_GET['delete']);
    if ($admin->deleteGiftCode($id)) {
        $message = '<div style="background: #28a745; color: white; padding: 10px; border-radius: 5px; margin-bottom: 20px;">Xóa giftcode thành công!</div>';
    } else {
        $message = '<div style="background: #dc3545; color: white; padding: 10px; border-radius: 5px; margin-bottom: 20px;">Lỗi khi xóa giftcode!</div>';
    }
}

// Lấy danh sách giftcode
$giftcodes = $admin->getAllGiftCodes();
?>
<!DOCTYPE html>
<html lang="vi">
<head>
    <title>Quản lý Giftcode - Admin</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="/assets/css/style.css">
    <style>
        .admin-container { max-width: 1200px; margin: 20px auto; padding: 20px; background: #1e2a3a; border-radius: 10px; }
        .admin-header { text-align: center; margin-bottom: 30px; color: #dc3545; }
        .form-group { margin-bottom: 20px; }
        .form-group label { display: block; margin-bottom: 5px; color: #ecf0f1; font-weight: bold; }
        .form-group input, .form-group select { width: 100%; padding: 10px; border: 1px solid #34495e; border-radius: 5px; background: #2c3e50; color: white; }
        .submit-btn { background: #28a745; color: white; padding: 12px 30px; border: none; border-radius: 5px; cursor: pointer; font-weight: bold; }
        .submit-btn:hover { background: #218838; }
        .delete-btn { background: #dc3545; color: white; padding: 5px 10px; border: none; border-radius: 3px; cursor: pointer; }
        .delete-btn:hover { background: #c82333; }
        .item-section { background: #2c3e50; padding: 15px; border-radius: 5px; margin-bottom: 10px; }
        .option-section { background: #34495e; padding: 10px; border-radius: 3px; margin-bottom: 5px; }
        .add-btn { background: #17a2b8; color: white; padding: 8px 15px; border: none; border-radius: 3px; cursor: pointer; margin: 5px 0; }
        .add-btn:hover { background: #138496; }
        .giftcode-table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        .giftcode-table th, .giftcode-table td { padding: 10px; text-align: left; border-bottom: 1px solid #34495e; color: white; }
        .giftcode-table th { background: #dc3545; color: white; }
        .toggle-form { background: #6c757d; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; margin-bottom: 20px; }
        .toggle-form:hover { background: #5a6268; }
    </style>
</head>
<body>
    <?php include $_SERVER['DOCUMENT_ROOT'] . '/views/layout/header.php'; ?>
    
    <div class="admin-container">
        <div class="admin-header">
            <h1>🎁 Quản lý Giftcode</h1>
            <p>Thêm, xóa và quản lý giftcode hệ thống</p>
        </div>

        <?php echo $message; ?>

        <button type="button" class="toggle-form" onclick="toggleAddForm()">➕ Thêm Giftcode Mới</button>

        <div id="addForm" style="display: none; background: #2c3e50; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <form method="POST">
                <input type="hidden" name="add_giftcode" value="1">
                
                <div class="form-group">
                    <label>🔤 Mã Giftcode:</label>
                    <input type="text" name="code" required placeholder="Nhập mã giftcode...">
                </div>
                
                <div class="form-group">
                    <label>🔢 Số lần sử dụng còn lại:</label>
                    <input type="number" name="count_left" value="1" min="1" required>
                </div>
                
                <div class="form-group">
                    <label>📅 Ngày hết hạn:</label>
                    <input type="datetime-local" name="expired" required>
                </div>
                
                <div class="form-group">
                    <label>🎯 Loại:</label>
                    <select name="type">
                        <option value="0">Thường</option>
                        <option value="1">Sự kiện</option>
                        <option value="2">VIP</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label>
                        <input type="checkbox" name="active" value="1" checked> 
                        ✅ Kích hoạt
                    </label>
                </div>

                <h3 style="color: white; margin-bottom: 15px;">📦 Items trong Giftcode</h3>
                <div id="items-container">
                    <div class="item-section">
                        <div class="form-group">
                            <label>🆔 ID Item:</label>
                            <input type="number" name="items[0][temp_id]" placeholder="Nhập ID item...">
                        </div>
                        <div class="form-group">
                            <label>📦 Số lượng:</label>
                            <input type="number" name="items[0][quantity]" value="1" min="1">
                        </div>
                        <h4 style="color: #bdc3c7; margin-bottom: 10px;">⚙️ Options</h4>
                        <div id="options-container-0">
                            <div class="option-section">
                                <div class="form-group">
                                    <label>Tham số:</label>
                                    <input type="number" name="items[0][options][0][param]" placeholder="Tham số...">
                                </div>
                                <div class="form-group">
                                    <label>ID Option:</label>
                                    <input type="number" name="items[0][options][0][id]" placeholder="ID option...">
                                </div>
                            </div>
                        </div>
                        <button type="button" class="add-btn" onclick="addOption(0)">➕ Thêm Option</button>
                    </div>
                </div>
                
                <button type="button" class="add-btn" onclick="addItem()">➕ Thêm Item</button>
                <br><br>
                
                <button type="submit" class="submit-btn">💾 Thêm Giftcode</button>
            </form>
        </div>

        <h2 style="color: white; margin-bottom: 15px;">📋 Danh sách Giftcode</h2>
        
        <table class="giftcode-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Mã</th>
                    <th>Số lần còn lại</th>
                    <th>Ngày tạo</th>
                    <th>Hết hạn</th>
                    <th>Trạng thái</th>
                    <th>Loại</th>
                    <th>Thao tác</th>
                </tr>
            </thead>
            <tbody>
                <?php if (!empty($giftcodes)): ?>
                    <?php foreach ($giftcodes as $gc): ?>
                        <tr>
                            <td><?php echo $gc['id']; ?></td>
                            <td><strong><?php echo htmlspecialchars($gc['code']); ?></strong></td>
                            <td><?php echo $gc['count_left']; ?></td>
                            <td><?php echo $gc['datecreate']; ?></td>
                            <td><?php echo $gc['expired']; ?></td>
                            <td>
                                <span style="color: <?php echo $gc['active'] ? '#28a745' : '#dc3545'; ?>">
                                    <?php echo $gc['active'] ? '✅ Active' : '❌ Inactive'; ?>
                                </span>
                            </td>
                            <td>
                                <?php 
                                $types = [0 => 'Thường', 1 => 'Sự kiện', 2 => 'VIP'];
                                echo $types[$gc['type']] ?? 'Unknown';
                                ?>
                            </td>
                            <td>
                                <a href="?delete=<?php echo $gc['id']; ?>" class="delete-btn" 
                                   onclick="return confirm('Bạn có chắc muốn xóa giftcode này?')">
                                   🗑️ Xóa
                                </a>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                <?php else: ?>
                    <tr>
                        <td colspan="8" style="text-align: center; color: #95a5a6;">Chưa có giftcode nào</td>
                    </tr>
                <?php endif; ?>
            </tbody>
        </table>

        <div style="text-align: center; margin-top: 20px;">
            <a href="/admin" class="back-btn">← Quay lại Admin Panel</a>
        </div>
    </div>

    <script>
        let itemCount = 1;
        let optionCounts = [1];

        function toggleAddForm() {
            const form = document.getElementById('addForm');
            form.style.display = form.style.display === 'none' ? 'block' : 'none';
        }

        function addItem() {
            const container = document.getElementById('items-container');
            const newItem = document.createElement('div');
            newItem.className = 'item-section';
            newItem.innerHTML = `
                <div class="form-group">
                    <label>🆔 ID Item:</label>
                    <input type="number" name="items[${itemCount}][temp_id]" placeholder="Nhập ID item...">
                </div>
                <div class="form-group">
                    <label>📦 Số lượng:</label>
                    <input type="number" name="items[${itemCount}][quantity]" value="1" min="1">
                </div>
                <h4 style="color: #bdc3c7; margin-bottom: 10px;">⚙️ Options</h4>
                <div id="options-container-${itemCount}">
                    <div class="option-section">
                        <div class="form-group">
                            <label>Tham số:</label>
                            <input type="number" name="items[${itemCount}][options][0][param]" placeholder="Tham số...">
                        </div>
                        <div class="form-group">
                            <label>ID Option:</label>
                            <input type="number" name="items[${itemCount}][options][0][id]" placeholder="ID option...">
                        </div>
                    </div>
                </div>
                <button type="button" class="add-btn" onclick="addOption(${itemCount})">➕ Thêm Option</button>
                <button type="button" class="delete-btn" onclick="this.parentElement.remove()">🗑️ Xóa Item</button>
            `;
            container.appendChild(newItem);
            optionCounts[itemCount] = 1;
            itemCount++;
        }

        function addOption(itemIndex) {
            const container = document.getElementById(`options-container-${itemIndex}`);
            const optionCount = optionCounts[itemIndex] || 0;
            
            const newOption = document.createElement('div');
            newOption.className = 'option-section';
            newOption.innerHTML = `
                <div class="form-group">
                    <label>Tham số:</label>
                    <input type="number" name="items[${itemIndex}][options][${optionCount}][param]" placeholder="Tham số...">
                </div>
                <div class="form-group">
                    <label>ID Option:</label>
                    <input type="number" name="items[${itemIndex}][options][${optionCount}][id]" placeholder="ID option...">
                </div>
                <button type="button" class="delete-btn" onclick="this.parentElement.remove()">🗑️ Xóa Option</button>
            `;
            container.appendChild(newOption);
            optionCounts[itemIndex]++;
        }
    </script>
</body>
</html>