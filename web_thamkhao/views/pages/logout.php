<?php
// Handle logout (Core already initialized in index.php)
$app->auth->logout();
Response::redirect('index.php');
