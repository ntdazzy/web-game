<?php
// Determine leaderboard type
$type = $_GET['type'] ?? 'power';
?>

<main><section class="leaderboard__section"><div class="recharge__tabs"><a class="recharge__tab <?php echo $type==='power' ? 'recharge__tab--active' : ''; ?>" href="/leaderboard?type=power">Top sức mạnh</a><a class="recharge__tab <?php echo $type==='money' ? 'recharge__tab--active' : ''; ?>" href="/leaderboard?type=money">Top nạp</a><a class="recharge__tab <?php echo $type==='task' ? 'recharge__tab--active' : ''; ?>" href="/leaderboard?type=task">Top nhiệm vụ</a></div><div class="recharge__content"><?php switch ($type){ case 'money': require 'views/pages/money.php'; break; case 'task': require 'views/pages/task.php'; break; case 'power': default: require 'views/pages/power.php'; break;} ?></div></section></main>