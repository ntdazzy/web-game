<?php
require_once '../core/Core.php';

$app = Core::getInstance();
$app->init();

// Check admin permission
if (!isset($GLOBALS['_is_admin']) || !$GLOBALS['_is_admin']) {
    header("Location: /");
    exit();
}

$admin = $app->getAdmin();
$rates = $admin->getExchangeRates();
$message = '';

// Process form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $cardRate = floatval($_POST['card_rate']);
    $bankRate = floatval($_POST['bank_rate']);
    $minAmount = intval($_POST['min_amount']);
    $maxAmount = intval($_POST['max_amount']);
    
    if ($admin->updateExchangeRates($cardRate, $bankRate, $minAmount, $maxAmount)) {
        $message = '<div class="success-message">C?p nh?t t? l? thành công!</div>';
        $rates = $admin->getExchangeRates(); // Refresh rates
    } else {
        $message = '<div class="error-message">L?i khi c?p nh?t t? l?!</div>';
    }
}
?>
<!DOCTYPE html>
<html lang="vi">
<head>
    <title>Qu?n lý t? l? n?p - <?php echo $GLOBALS['defaultTitle']; ?></title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="/assets/css/style.css">
    <style>
        .admin-container { max-width: 600px; margin: 20px auto; padding: 20px; background: #1e2a3a; border-radius: 10px; }
        .admin-header { text-align: center; margin-bottom: 30px; color: #dc3545; }
        .form-group { margin-bottom: 20px; }
        .form-group label { display: block; margin-bottom: 5px; color: #ecf0f1; }
        .form-group input { width: 100%; padding: 10px; border: 1px solid #34495e; border-radius: 5px; background: #2c3e50; color: white; }
        .submit-btn { background: #27ae60; color: white; padding: 12px 30px; border: none; border-radius: 5px; cursor: pointer; }
        .submit-btn:hover { background: #219652; }
        .success-message { background: #27ae60; color: white; padding: 10px; border-radius: 5px; margin-bottom: 20px; }
        .error-message { background: #dc3545; color: white; padding: 10px; border-radius: 5px; margin-bottom: 20px; }
    </style>
</head>
<body>
    <?php include '../header.php'; ?>
    
    <div class="admin-container">
        <div class="admin-header">
            <h1><i class="fas fa-percentage"></i> Qu?n lý t? l? n?p</h1>
        </div>

        <?php echo $message; ?>

        <form method="POST">
            <div class="form-group">
                <label>T? l? n?p th? (x):</label>
                <input type="number" name="card_rate" step="0.01" min="0.1" max="10" value="<?php echo $rates['card_rate']; ?>" required>
            </div>
            
            <div class="form-group">
                <label>T? l? chuy?n kho?n (x):</label>
                <input type="number" name="bank_rate" step="0.01" min="0.1" max="10" value="<?php echo $rates['bank_rate']; ?>" required>
            </div>
            
            <div class="form-group">
                <label>S? ti?n n?p t?i thi?u (VND):</label>
                <input type="number" name="min_amount" min="1000" max="10000000" value="<?php echo $rates['min_amount']; ?>" required>
            </div>
            
            <div class="form-group">
                <label>S? ti?n n?p t?i da (VND):</label>
                <input type="number" name="max_amount" min="10000" max="100000000" value="<?php echo $rates['max_amount']; ?>" required>
            </div>
            
            <button type="submit" class="submit-btn">
                <i class="fas fa-save"></i> C?p nh?t t? l?
            </button>
        </form>

        <div style="text-align: center; margin-top: 20px;">
            <a href="/admin" class="admin-btn">
                <i class="fas fa-arrow-left"></i> Quay l?i Admin Panel
            </a>
        </div>
    </div>

    <?php include '../footer.php'; ?>
</body>
</html>