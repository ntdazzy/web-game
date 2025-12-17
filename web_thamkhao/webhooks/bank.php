<?php
// Load core components
require_once '../core/Core.php';

try {
    $app = Core::getInstance();
    $app->init();

    // Get webhook data - try multiple methods
    $data = [];
    
    // Try GET first
    if (!empty($_GET)) {
        $data = array_merge($data, $_GET);
    }
    
    // Try POST
    if (!empty($_POST)) {
        $data = array_merge($data, $_POST);
    }
    
    // Try raw JSON input
    if (empty($data)) {
        $raw_input = file_get_contents('php://input');
        if (!empty($raw_input)) {
            $jsonData = json_decode($raw_input, true);
            if ($jsonData !== null) {
                $data = $jsonData;
            }
        }
    }

    // Log incoming webhook for debugging
    if (!empty($data)) {
        $logFile = dirname(__DIR__) . '/debug_log_webhook.txt';
        $logData = [
            'timestamp' => date('Y-m-d H:i:s'),
            'type' => 'webhook_incoming',
            'data' => $data,
            'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown'
        ];
        file_put_contents($logFile, json_encode($logData) . "\n", FILE_APPEND);
    }

    // Validate required fields before processing
    if (empty($data)) {
        http_response_code(400);
        echo 'No data received';
        exit;
    }

    // Handle webhook using core
    $result = $app->webhook->handleSepay($data);

    // Return response
    if ($result['success']) {
        http_response_code(200);
        echo 'OK';
    } else {
        http_response_code(400);
        echo $result['message'] ?? 'Error processing webhook';
    }
} catch (Exception $e) {
    // Log exception
    $logFile = dirname(__DIR__) . '/debug_log_webhook.txt';
    $logData = [
        'timestamp' => date('Y-m-d H:i:s'),
        'type' => 'webhook_exception',
        'error' => $e->getMessage(),
        'trace' => $e->getTraceAsString(),
        'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown'
    ];
    file_put_contents($logFile, json_encode($logData) . "\n", FILE_APPEND);
    
    http_response_code(500);
    echo 'Internal server error';
}
