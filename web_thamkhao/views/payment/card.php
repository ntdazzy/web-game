<?php
// Use core payment manager (Core initialized in index.php)
$payment = $app->payment;

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['submit'])) {
    $username = $_SESSION['account'] ?? null;
    if (!$username) {
        Response::sweetAlert('warning', 'Thông Báo', 'Vui lòng đăng nhập!', '/login');
        exit;
    }

    $card_type = strtoupper(trim($_POST['card_type'] ?? ''));
    $pin = trim($_POST['code'] ?? '');
    $serial = trim($_POST['serial'] ?? '');
    $card_amount = intval($_POST['card_amount'] ?? 0);

    if (!$card_type || !$pin || !$serial || $card_amount <= 0) {
        Response::sweetAlert('error', 'Thông Báo', 'Vui lòng nhập đầy đủ thông tin thẻ!', '/naptien');
        exit;
    }

    // Delegate to core
    $result = $payment->processCard($card_type, $pin, $serial, $card_amount, $username);

    if (!empty($result['success'])) {
        Response::sweetAlert('info', 'Thông Báo', $result['message'] ?? 'Nạp thẻ đang chờ xử lý!', '/naptien');
    } else {
        Response::sweetAlert('error', 'Thông Báo', $result['message'] ?? 'Nạp thẻ thất bại!', '/naptien');
    }
}
?>

<form class="form__recharge" method="POST">
    <h3 class="recharge__title">Nạp thẻ cào</h3>
    <input type="text" name="serial" class="form__input" placeholder="Số seri thẻ..." required>
    <input type="text" name="code" class="form__input" placeholder="Mã thẻ..." required>
    <select name="card_type" class="form__input" required>
        <option value="" disabled selected>-- Chọn loại thẻ --</option>
        <option value="Viettel">Viettel (Chiết khấu 18%)</option>
        <option value="Mobifone">Mobifone (Chiết khấu 20%)</option>
        <option value="Vinaphone">Vinaphone (Chiết khấu 20%)</option>
    </select>
    <select name="card_amount" class="form__input" required>
        <option value="" disabled selected>-- Chọn mệnh giá --</option>
        <option value="10000">10,000 đ</option>
        <option value="20000">20,000 đ</option>
        <option value="50000">50,000 đ</option>
        <option value="100000">100,000 đ</option>
        <option value="200000">200,000 đ</option>
        <option value="500000">500,000 đ</option>
        <option value="1000000">1,000,000 đ</option>
    </select>
    <button class="btn__recharge" type="submit" name="submit">Nạp Thẻ</button>
</form>

<div class="table__container">
    <h4>Lịch sử nạp thẻ cào</h4>
    <div class="table__scroll">
        <table class="table">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Loại thẻ</th>
                    <th>Mệnh giá</th>
                    <th>Số tiền nhận</th>
                    <th>Mã thẻ</th>
                    <th>Serial</th>
                    <th>Trạng thái</th>
                    <th>Thời gian</th>
                </tr>
            </thead>
            <tbody>
                <?php
                $stt = 1;
                $username = $_SESSION['account'] ?? '';
                $history = $payment->getHistory('card', $username, 20);

                if (!empty($history)) {
                    foreach ($history as $row) {
                        echo "<tr>
                        <td>{$stt}</td>
                        <td>" . htmlspecialchars($row['telco']) . "</td>
                        <td>" . number_format($row['amount']) . " đ</td>
                        <td>" . number_format($row['amount_received']) . " đ</td>
                        <td>" . htmlspecialchars(substr($row['code'], 0, 8)) . "***</td>
                        <td>" . htmlspecialchars(substr($row['serial'], 0, 8)) . "***</td>
                        <td>" . htmlspecialchars($row['status']) . "</td>
                        <td>" . date('d/m/Y H:i:s', strtotime($row['created_at'])) . "</td>
                    </tr>";
                        $stt++;
                    }
                } else {
                    echo "<tr><td colspan='8'>Chưa có lịch sử nạp thẻ cào</td></tr>";
                }
                ?>
            </tbody>
        </table>
    </div>
</div>