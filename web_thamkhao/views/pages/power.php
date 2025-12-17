<?php
// Get ranking manager from core (Core already initialized in index.php)
$rankingManager = $app->getRanking();
?>
<div class="table__container">
    <h4>Bảng xếp hạng đua top sức mạnh</h4>
    <div class="table__scroll">
        <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nhân vật</th>
                    <th>Sức Mạnh</th>
                    <th>Đệ Tử</th>
                    <th>Tổng</th>
                    <th>Hành Tinh</th>
                </tr>
            </thead>
            <tbody>
                <?php
                // Get top power ranking using core RankingManager
                $topPower = $rankingManager->getTopPower(10);

                if (!empty($topPower)) {
                    foreach ($topPower as $player) {
                        $shortName = $rankingManager->maskPlayerName($player['name']);
                ?>
                        <tr class="top_<?php echo $player['rank']; ?>">
                            <td><?php echo $player['rank']; ?></td>
                            <td><?php echo $shortName; ?></td>
                            <td><?php echo $rankingManager->formatPower($player['second_value']); ?></td>
                            <td>
                                <?php
                                if ($player['pet_power'] != '' && $player['pet_power'] != null) {
                                    echo $rankingManager->formatPower($player['pet_power']);
                                } else {
                                    echo 'Không đệ tử';
                                }
                                ?>
                            </td>
                            <td><?php echo $rankingManager->formatPower($player['total_power']); ?></td>
                            <td><?php echo $rankingManager->getPlanetName($player['gender']); ?></td>
                        </tr>
                <?php
                    }
                } else {
                    echo '<tr><td colspan="6">Chưa có thống kê bảng xếp hạng!</td></tr>';
                }
                ?>
            </tbody>
        </table>
    </div>
    <div class="text-right"><small>Cập nhật lúc: <?php echo date('H:i d/m/Y'); ?></small></div>
</div>