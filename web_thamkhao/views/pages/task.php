<?php
// Get ranking manager from core (Core already initialized in index.php)
$rankingManager = $app->getRanking();
?>

<div class="table__container">
    <h4>Bảng xếp hạng top nhiệm vụ</h4>
    <div class="table__scroll">
        <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nhân Vật</th>
                    <th>Nhiệm Vụ</th>
                    <th>Nhánh</th>
                    <th>Tiến Độ</th>
                </tr>
            </thead>
            <tbody>
                <?php
                // Get top task ranking using core RankingManager
                $topTask = $rankingManager->getTopTask(10);

                if (!empty($topTask)) {
                    foreach ($topTask as $player) {
                        $shortName = $rankingManager->maskPlayerName($player['name']);
                        echo '<tr>
                                <td>' . $player['rank'] . '</td>
                                <td>' . $shortName . '</td>
                                <td>' . $player['task_name'] . '</td>
                                <td>' . ($player['task_branch'] ? $player['task_branch'] : '0') . '</td>
                                <td>' . ($player['task_progress'] ? $player['task_progress'] : '0') . '</td>
                              </tr>';
                    }
                } else {
                    echo '<tr><td colspan="5">Chưa có thống kê bảng xếp hạng nhiệm vụ</td></tr>';
                }
                ?>
            </tbody>
        </table>
    </div>
    <div class="text-right">
        <small>Cập nhật lúc: <?php echo date('H:i d/m/Y'); ?></small>
    </div>
</div>