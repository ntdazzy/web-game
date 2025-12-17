<?php
// Get ranking manager from core (Core already initialized in index.php)
$rankingManager = $app->getRanking();
?>

<div class="table__container">
    <h4>Bảng xếp hạng đua top nạp</h4>
    <div class="table__scroll">
        <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nhân Vật</th>
                    <th>Tổng Nạp</th>
                </tr>
            </thead>
            <tbody>
                <?php
                // Get top money ranking using core RankingManager
                $topMoney = $rankingManager->getTopMoney(10);

                if (!empty($topMoney)) {
                    foreach ($topMoney as $player) {
                        $shortName = $rankingManager->maskPlayerName($player['name']);
                        echo '<tr>
                                <td>' . $player['rank'] . '</td>
                                <td>' . $shortName . '</td>
                                <td>' . $rankingManager->formatMoney($player['danap']) . '</td>
                              </tr>';
                    }
                } else {
                    echo '<tr><td colspan="3">Chưa có thống kê bảng xếp hạng top nạp!</td></tr>';
                }
                ?>
            </tbody>
        </table>
    </div>
    <div class="text-right">
        <small>Cập nhật lúc: <?php echo date('H:i d/m/Y'); ?></small>
    </div>
</div>