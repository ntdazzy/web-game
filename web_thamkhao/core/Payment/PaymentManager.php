<?php

/**
 * Payment Manager
 * Handles Doithe1s card payment and Sepay bank transfer
 */

class PaymentManager
{
    private $database;
    private $config;

    public function __construct($database = null, $config = null)
    {
        $this->database = $database;
        $this->config = $config;
    }

    /**
     * Process Doithe1s card payment
     */
    public function processCard($cardType, $pin, $serial, $amount, $username)
    {
        $doithe1sConfig = $this->config->getDoithe1sConfig();
        // Stronger non-guessable request id
        $requestId = 'REQ-' . bin2hex(random_bytes(8));

        // Create signature
        $sign = md5($doithe1sConfig['partner_key'] . $pin . $serial);

        $url = "https://doithe1s.vn/chargingws/v2";
        $data = [
            'sign' => $sign,
            'telco' => strtoupper($cardType),
            'code' => $pin,
            'serial' => $serial,
            'amount' => $amount,
            'request_id' => $requestId,
            'partner_id' => $doithe1sConfig['partner_id'],
            'command' => 'charging'
        ];

        // Send request to Doithe1s
        $response = $this->sendRequest($url, $data);
        $result = json_decode($response, true);

        // Log the transaction
        $this->logCardTransaction($username, $cardType, $amount, $amount, $serial, $pin, $requestId, 'pending');

        if ($result['status'] == 99) {
            return Response::success('Nạp thẻ đang chờ xử lý!', ['request_id' => $requestId]);
        } else {
            // Update status to error
            $this->updateCardTransactionStatus($requestId, 'error');
            return Response::error('Nạp thẻ thất bại!');
        }
    }

    /**
     * Process Sepay bank transfer
     */
    public function processBank($amount, $username)
    {
        $sepayConfig = $this->config->getSepayConfig();
        $code = 'BANK' . time()  . rand(1000, 9999);
        $description = 'naptien' . $username;

        // Log the transaction
        $this->logBankTransaction($username, $code, $amount, $amount, $description, 'pending');

        return Response::success('Thông tin chuyển khoản đã được tạo!', [
            'qr_code' => $this->generateQRCode($sepayConfig, $amount, $description),
            'bank_info' => $sepayConfig,
            'code' => $code
        ]);
    }

    /**
     * Get payment history
     */
    public function getHistory($type = 'card', $username = null, $limit = 20)
    {
        if (!$username) {
            $username = $_SESSION['account'] ?? null;
        }

        if (!$username) {
            return [];
        }

        if ($type === 'card') {
            return $this->getCardHistory($username, $limit);
        } else {
            return $this->getBankHistory($username, $limit);
        }
    }

    /**
     * Get card payment history
     */
    private function getCardHistory($username, $limit)
    {
        $sql = "SELECT * FROM history_card WHERE username = ? ORDER BY id DESC LIMIT ?";
        $stmt = $this->database->prepare($sql);
        $stmt->bind_param("si", $username, $limit);
        $stmt->execute();
        $result = $stmt->get_result();

        $data = [];
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        return $data;
    }

    /**
     * Get bank payment history
     */
    private function getBankHistory($username, $limit)
    {
        $sql = "SELECT * FROM history_bank WHERE username = ? ORDER BY id DESC LIMIT ?";
        $stmt = $this->database->prepare($sql);
        $stmt->bind_param("si", $username, $limit);
        $stmt->execute();
        $result = $stmt->get_result();

        $data = [];
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        return $data;
    }

    /**
     * Log card transaction
     */
    private function logCardTransaction($username, $telco, $amount, $amountReceived, $serial, $code, $requestId, $status)
    {
        $sql = "INSERT INTO history_card (username, telco, amount, amount_received, serial, code, request_id, status, created_at) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())";
        $stmt = $this->database->prepare($sql);
        $stmt->bind_param("ssddssss", $username, $telco, $amount, $amountReceived, $serial, $code, $requestId, $status);
        $stmt->execute();
    }

    /**
     * Log bank transaction
     */
    private function logBankTransaction($username, $code, $amountVnd, $amountRuby, $description, $status)
    {
        $sql = "INSERT INTO history_bank (username, code, amount_vnd, amount_ruby, description, status, created_at) 
                VALUES (?, ?, ?, ?, ?, ?, NOW())";
        $stmt = $this->database->prepare($sql);
        $stmt->bind_param("ssiiss", $username, $code, $amountVnd, $amountRuby, $description, $status);
        $stmt->execute();
    }

    /**
     * Update card transaction status
     */
    private function updateCardTransactionStatus($requestId, $status)
    {
        $sql = "UPDATE history_card SET status = ? WHERE request_id = ?";
        $stmt = $this->database->prepare($sql);
        $stmt->bind_param("ss", $status, $requestId);
        $stmt->execute();
    }

    /**
     * Generate QR code for bank transfer
     */
    private function generateQRCode($sepayConfig, $amount, $description)
    {
        $qrUrl = "https://qr.sepay.vn/img?bank={$sepayConfig['bank_name']}&acc={$sepayConfig['bank_account']}&template=&amount={$amount}&des={$description}";
        return $qrUrl;
    }

    /**
     * Send HTTP request
     */
    private function sendRequest($url, $data)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
        curl_setopt($ch, CURLOPT_TIMEOUT, 30);

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        // Log the request and response
        $this->logPaymentRequest($url, $data, $response, $httpCode);

        return $response;
    }

    /**
     * Log payment request for debugging
     */
    private function logPaymentRequest($url, $data, $response, $httpCode)
    {
        $safeData = $data;
        if (isset($safeData['code'])) {
            $safeData['code'] = str_repeat('*', max(0, strlen($safeData['code']) - 4)) . substr($safeData['code'], -4);
        }
        if (isset($safeData['serial'])) {
            $safeData['serial'] = str_repeat('*', max(0, strlen($safeData['serial']) - 4)) . substr($safeData['serial'], -4);
        }
        $logData = [
            'timestamp' => date('Y-m-d H:i:s'),
            'url' => $url,
            'request_data' => $safeData,
            'response' => $response,
            'http_code' => $httpCode
        ];

        $logFile = dirname(__DIR__, 2) . '/debug_log_payment.txt';
        file_put_contents($logFile, json_encode($logData) . "\n", FILE_APPEND);
    }
}
