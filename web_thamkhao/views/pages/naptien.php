<?php
// Requires user login (Core is already initialized in index.php)
if (!$app->auth->isLoggedIn()) {
    Response::sweetAlert('warning', 'Thông Báo', 'Vui lòng đăng nhập trước!', '/login');
    exit;
}

$type = $_GET['type'] ?? 'card';

echo '<main>';
echo '<div class="recharge__tabs">';
echo '<a href="/naptien?type=card" class="recharge__tab' . ($type === 'card' ? ' recharge__tab--active' : '') . '">Nạp thẻ cào</a>';
echo '<a href="/naptien?type=bank" class="recharge__tab' . ($type === 'bank' ? ' recharge__tab--active' : '') . '">Nạp chuyển khoản</a>';
echo '</div>';

// Load payment form
if ($type === 'bank') {
    require_once('views/payment/bank.php');
} else {
    require_once('views/payment/card.php');
}
echo '</main>';
