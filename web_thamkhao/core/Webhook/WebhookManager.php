<?php

/**
 * Webhook Manager
 * Handles webhook callbacks from Doithe1s and Sepay
 */

class WebhookManager
{
    private $database;
    private $config;

    public function __construct($database = null, $config = null)
    {
        $this->database = $database;
        $this->config = $config;
    }

    /**
     * Handle Doithe1s webhook callback
     */
    public function handleDoithe1s($data)
    {
        $this->logWebhook('doithe1s', $data);

        // Validate required fields
        if (!isset($data['request_id']) || !isset($data['status'])) {
            return Response::error('Missing required fields');
        }

        $requestId = $data['request_id'];
        $status = $data['status'];

        // Update transaction status
        $this->updateCardTransactionStatus($requestId, $status);

        // If successful, add money to user account
        if ($status == 'success' && isset($data['amount'])) {
            $this->addMoneyToUser($requestId, $data['amount']);
        }

        return Response::success('Webhook processed successfully');
    }

    /**
     * Handle Sepay webhook callback
     */
    public function handleSepay($data)
    {
        $this->logWebhook('sepay', $data);

        $requiredFields = ['gateway', 'accountNumber', 'content', 'transferAmount', 'referenceCode', 'id'];
        foreach ($requiredFields as $field) {
            if (!isset($data[$field]) || empty($data[$field])) {
                return Response::error("Missing required field: {$field}");
            }
        }

        $gateway = $data['gateway'];
        $accountNumber = $data['accountNumber'];
        $content = $data['content'];
        $transferAmount = $data['transferAmount'];
        $referenceCode = $data['referenceCode'];
        $transactionId = $data['id'];

        $sepayConfig = $this->config->getSepayConfig();
        if ($accountNumber !== $sepayConfig['bank_account']) {
            return Response::error('Invalid account number');
        }

        $username = null;
        if (preg_match('/naptien([a-zA-Z0-9_]+)/', $content, $matches)) {
            $username = $matches[1];
        }

        if (!$username) {
            return Response::error('Cannot extract username from content');
        }

        $existingCode = $this->findBankTransactionByReferenceCode($referenceCode);

        if ($existingCode) {
            $this->logWebhook('sepay_duplicate', [
                'username' => $username,
                'amount' => $transferAmount,
                'code' => $existingCode,
                'reference_code' => $referenceCode,
                'transaction_id' => $transactionId
            ]);
            return Response::success('Transaction already processed');
        }

        $code = 'BANK' . time() . rand(1000, 9999);
        $description = 'naptien' . $username . ' ' . $referenceCode;

        // Calculate amount_ruby (cash) based on exchange rate
        $rates = $this->getExchangeRates();
        $exchangeRate = $rates['bank_rate'] ?? 1.0;
        $amountRuby = intval($transferAmount * $exchangeRate);

        // Log the transaction with correct amount_ruby
        $this->logBankTransaction($username, $code, $transferAmount, $amountRuby, $description, 'success');

        // Add money to user account with error checking
        $result = $this->addMoneyToUserAccount($username, $transferAmount);
        
        if ($result === false) {
            $this->logWebhook('sepay_error', [
                'username' => $username,
                'amount' => $transferAmount,
                'code' => $code,
                'error' => 'Failed to add money to user account',
                'reference_code' => $referenceCode,
                'transaction_id' => $transactionId
            ]);
            return Response::error('Failed to add money to user account');
        }

        $this->logWebhook('sepay_success', [
            'username' => $username,
            'amount' => $transferAmount,
            'code' => $code,
            'reference_code' => $referenceCode,
            'transaction_id' => $transactionId
        ]);

        return Response::success('Webhook processed successfully');
    }

    /**
     * Update card transaction status
     * @param string $requestId
     * @param string $status
     */
    private function updateCardTransactionStatus($requestId, $status)
    {
        $sql = "UPDATE history_card SET status = ? WHERE request_id = ?";
        $stmt = $this->database->prepare($sql);
        $stmt->bind_param("ss", $status, $requestId);
        $stmt->execute();
    }

    /**
     * Update bank transaction status
     */
    private function updateBankTransactionStatus($code, $status)
    {
        $sql = "UPDATE history_bank SET status = ? WHERE code = ?";
        $stmt = $this->database->prepare($sql);
        $stmt->bind_param("ss", $status, $code);
        $stmt->execute();
    }

    /**
     * Add money to user account by request ID
     */
    private function addMoneyToUser($requestId, $amount)
    {
        // Get transaction details
        $sql = "SELECT username, amount_received FROM history_card WHERE request_id = ?";
        $stmt = $this->database->prepare($sql);
        $stmt->bind_param("s", $requestId);
        $stmt->execute();
        $result = $stmt->get_result();
        $transaction = $result->fetch_assoc();

        if ($transaction) {
            $this->addMoneyToUserAccount($transaction['username'], $transaction['amount_received']);
        }
    }

    /**
     * Add money to user account by code
     */
    private function addMoneyToUserByCode($code, $amount)
    {
        // Get transaction details
        $sql = "SELECT username, amount_ruby FROM history_bank WHERE code = ?";
        $stmt = $this->database->prepare($sql);
        $stmt->bind_param("s", $code);
        $stmt->execute();
        $result = $stmt->get_result();
        $transaction = $result->fetch_assoc();

        if ($transaction) {
            $this->addMoneyToUserAccount($transaction['username'], $transaction['amount_ruby']);
        }
    }

    /**
     * Find bank transaction by username and amount
     */
    private function findBankTransactionByUsernameAndAmount($username, $amount)
    {
        $sql = "SELECT code FROM history_bank WHERE username = ? AND amount_vnd = ? AND status = 'pending' ORDER BY id DESC LIMIT 1";
        $stmt = $this->database->prepare($sql);
        $stmt->bind_param("si", $username, $amount);
        $stmt->execute();
        $result = $stmt->get_result();
        $transaction = $result->fetch_assoc();

        return $transaction ? $transaction['code'] : null;
    }

    /**
     * Find bank transaction by reference code
     */
    private function findBankTransactionByReferenceCode($referenceCode)
    {
        $sql = "SELECT code FROM history_bank WHERE description LIKE ? ORDER BY id DESC LIMIT 1";
        $searchPattern = '%' . $referenceCode . '%';
        $stmt = $this->database->prepare($sql);
        $stmt->bind_param("s", $searchPattern);
        $stmt->execute();
        $result = $stmt->get_result();
        $transaction = $result->fetch_assoc();

        return $transaction ? $transaction['code'] : null;
    }

    /**
     * Add money to user account
     */
    /**
     * Add money to user account - ĐÃ SỬA VỚI ERROR CHECKING
     */
    private function addMoneyToUserAccount($username, $amountVND, $paymentType = 'bank')
    {
        try {
            // Verify user exists first
            $checkSql = "SELECT id, cash FROM account WHERE username = ?";
            $checkStmt = $this->database->prepare($checkSql);
            if (!$checkStmt) {
                $conn = $this->database->getConnection();
                $errorMsg = ($conn && isset($conn->error)) ? $conn->error : 'Unknown database error';
                $this->logWebhook('add_money_error', [
                    'username' => $username,
                    'error' => 'Failed to prepare check statement: ' . $errorMsg
                ]);
                return false;
            }
            
            $checkStmt->bind_param("s", $username);
            $checkStmt->execute();
            $result = $checkStmt->get_result();
            $user = $result->fetch_assoc();
            
            if (!$user) {
                $this->logWebhook('add_money_error', [
                    'username' => $username,
                    'error' => 'User not found',
                    'amount_vnd' => $amountVND
                ]);
                return false;
            }
            
            // Get exchange rates from database
            $rates = $this->getExchangeRates();
            
            if ($paymentType === 'card') {
                $exchangeRate = $rates['card_rate'] ?? 1.0;
            } else {
                $exchangeRate = $rates['bank_rate'] ?? 1.0;
            }
            
            $cashToAdd = intval($amountVND * $exchangeRate);
            
            if ($cashToAdd <= 0) {
                $this->logWebhook('add_money_error', [
                    'username' => $username,
                    'error' => 'Invalid cash amount to add',
                    'amount_vnd' => $amountVND,
                    'exchange_rate' => $exchangeRate,
                    'cash_to_add' => $cashToAdd
                ]);
                return false;
            }
            
            // Update user cash
            $sql = "UPDATE account SET cash = cash + ? WHERE username = ?";
            $stmt = $this->database->prepare($sql);
            if (!$stmt) {
                $conn = $this->database->getConnection();
                $errorMsg = ($conn && isset($conn->error)) ? $conn->error : 'Unknown database error';
                $this->logWebhook('add_money_error', [
                    'username' => $username,
                    'error' => 'Failed to prepare update statement: ' . $errorMsg
                ]);
                return false;
            }
            
            $stmt->bind_param("is", $cashToAdd, $username);
            $stmt->execute();
            
            // Check if update was successful
            if ($stmt->affected_rows > 0) {
                $oldCash = $user['cash'];
                $newCash = $oldCash + $cashToAdd;
                
                $this->logWebhook('add_money_success', [
                    'username' => $username,
                    'amount_vnd' => $amountVND,
                    'exchange_rate' => $exchangeRate,
                    'cash_added' => $cashToAdd,
                    'old_cash' => $oldCash,
                    'new_cash' => $newCash
                ]);
                
                return $cashToAdd;
            } else {
                $this->logWebhook('add_money_error', [
                    'username' => $username,
                    'error' => 'No rows affected by UPDATE',
                    'amount_vnd' => $amountVND,
                    'cash_to_add' => $cashToAdd
                ]);
                return false;
            }
        } catch (Exception $e) {
            $this->logWebhook('add_money_error', [
                'username' => $username,
                'error' => $e->getMessage(),
                'amount_vnd' => $amountVND
            ]);
            return false;
        }
    }

    /**
     * Get exchange rates from database
     */
    private function getExchangeRates()
    {
        try {
            $sql = "SELECT * FROM exchange_rates WHERE id = 1";
            $result = $this->database->query($sql);
            
            if ($result && $rates = mysqli_fetch_assoc($result)) {
                return $rates;
            }
        } catch (Exception $e) {
            $this->logWebhook('exchange_rate_error', [
                'error' => $e->getMessage()
            ]);
        }
        
        // Return default rates if not exists
        return [
            'card_rate' => 1.0,
            'bank_rate' => 1.0,
            'min_amount' => 10000,
            'max_amount' => 1000000
        ];
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
     * Validate Sepay signature
     */
    private function validateSepaySignature($data)
    {
        $sepayConfig = $this->config->getSepayConfig();
        $secret = $sepayConfig['secret'];

        if (!isset($data['signature'])) {
            return false;
        }

        $expectedSignature = $this->generateSepaySignature($data, $secret);
        return hash_equals($expectedSignature, $data['signature']);
    }

    /**
     * Generate Sepay signature
     */
    private function generateSepaySignature($data, $secret)
    {
        // Remove signature from data
        unset($data['signature']);

        // Sort data by key
        ksort($data);

        // Create signature string
        $signatureString = '';
        foreach ($data as $key => $value) {
            $signatureString .= $key . '=' . $value . '&';
        }
        $signatureString .= 'secret=' . $secret;

        return md5($signatureString);
    }

    /**
     * Log webhook data
     */
    private function logWebhook($type, $data)
    {
        $logData = [
            'timestamp' => date('Y-m-d H:i:s'),
            'type' => $type,
            'data' => $data,
            'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown'
        ];

        $logFile = dirname(__DIR__, 2) . '/debug_log_webhook.txt';
        file_put_contents($logFile, json_encode($logData) . "\n", FILE_APPEND);
    }
}
