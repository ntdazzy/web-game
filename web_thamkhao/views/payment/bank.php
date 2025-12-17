<?php
// Use core config (Core initialized in index.php)
$sepayConfig = $app->config->getSepayConfig();
$noidung = 'naptien';
$username = $_SESSION['account'] ?? '';
?>

<div class="recharge__content">
    <div class="qr__image">
        <img src="https://qr.sepay.vn/img?bank=<?= urlencode($sepayConfig['bank_name']) ?>&acc=<?= urlencode($sepayConfig['bank_account']) ?>&template=&amount=&des=<?= urlencode($noidung) ?>_<?= urlencode($username) ?>" alt="VietQR">
    </div>
    <div class="copy__row">
        <span class="copy__label">Nội dung</span>
        <input class="copy__input" type="text" value="<?= htmlspecialchars($noidung . $username) ?>" readonly>
    </div>
</div>

<div class="table__container">
    <h4>Lịch sử nạp tiền qua chuyển khoản</h4>
    <div class="table__scroll">
        <table class="table">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Mã giao dịch</th>
                    <th>Số tiền VND</th>
                    <th>Số tiền nhận</th>
                    <th>Nội dung</th>
                    <th>Thời gian</th>
                </tr>
            </thead>
            <tbody>
                <?php
                $stt = 1;
                if ($username) {
                    try {
                        $stmt = $app->database->prepare("SELECT code, amount_vnd, amount_ruby, description, created_at, status FROM history_bank WHERE username=? ORDER BY id DESC LIMIT 20");
                        if ($stmt) {
                            $stmt->bind_param('s', $username);
                            $stmt->execute();
                            $result = $stmt->get_result();

                            if ($result && $result->num_rows > 0) {
                                while ($row = $result->fetch_assoc()) {
                                    $statusClass = $row['status'] === 'success' ? 'success' : ($row['status'] === 'pending' ? 'warning' : 'error');
                                    echo "<tr>
                                            <td>{$stt}</td>
                                            <td>" . htmlspecialchars($row['code']) . "</td>
                                            <td>" . number_format($row['amount_vnd']) . " đ</td>
                                            <td>" . number_format($row['amount_ruby']) . " đ</td>
                                            <td>" . htmlspecialchars($row['description']) . "</td>
                                            <td>" . date('d/m/Y H:i:s', strtotime($row['created_at'])) . "</td>
                                        </tr>";
                                    $stt++;
                                }
                            } else {
                                echo "<tr><td colspan='6'>Chưa có lịch sử nạp tiền qua chuyển khoản</td></tr>";
                            }
                        } else {
                            echo "<tr><td colspan='6'>Lỗi khi tải lịch sử nạp tiền</td></tr>";
                        }
                    } catch (Exception $e) {
                        echo "<tr><td colspan='6'>Lỗi: " . htmlspecialchars($e->getMessage()) . "</td></tr>";
                    }
                } else {
                    echo "<tr><td colspan='6'>Vui lòng đăng nhập để xem lịch sử</td></tr>";
                }
                ?>
            </tbody>
        </table>
    </div>
</div>