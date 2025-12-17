<?php

/**
 * Admin Manager
 * Handles admin functions like exchange rate management and giftcode management
 */

class AdminManager
{
    private $database;
    private $config;

    public function __construct($database = null, $config = null)
    {
        $this->database = $database;
        $this->config = $config;
    }

    /**
     * Check if user is admin
     */
    public function isAdmin($username)
    {
        $sql = "SELECT is_admin FROM account WHERE username = ?";
        $stmt = $this->database->prepare($sql);
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $result = $stmt->get_result();
        
        if ($user = $result->fetch_assoc()) {
            return $user['is_admin'] == 1;
        }
        
        return false;
    }

    /**
     * Get current exchange rates
     */
    public function getExchangeRates()
    {
        $sql = "SELECT * FROM exchange_rates WHERE id = 1";
        $result = $this->database->query($sql);
        
        if ($result && $rates = mysqli_fetch_assoc($result)) {
            return $rates;
        }
        
        // Return default rates if not exists
        return [
            'card_rate' => 1.0,
            'bank_rate' => 1.0,
            'min_amount' => 10000,
            'max_amount' => 1000000,
            'updated_at' => date('Y-m-d H:i:s')
        ];
    }

    /**
     * Update exchange rates
     */
    public function updateExchangeRates($cardRate, $bankRate, $minAmount, $maxAmount)
    {
        // Check if record exists
        $checkSql = "SELECT id FROM exchange_rates WHERE id = 1";
        $checkResult = $this->database->query($checkSql);
        
        if ($checkResult && mysqli_num_rows($checkResult) > 0) {
            // Update existing
            $sql = "UPDATE exchange_rates SET card_rate = ?, bank_rate = ?, min_amount = ?, max_amount = ?, updated_at = NOW() WHERE id = 1";
        } else {
            // Insert new
            $sql = "INSERT INTO exchange_rates (id, card_rate, bank_rate, min_amount, max_amount, updated_at) VALUES (1, ?, ?, ?, ?, NOW())";
        }
        
        $stmt = $this->database->prepare($sql);
        $stmt->bind_param("ddii", $cardRate, $bankRate, $minAmount, $maxAmount);
        
        return $stmt->execute();
    }

    /**
     * Get payment statistics
     */
    public function getPaymentStats($dateRange = 'today')
    {
        $where = "";
        switch ($dateRange) {
            case 'today':
                $where = "WHERE DATE(created_at) = CURDATE()";
                break;
            case 'week':
                $where = "WHERE created_at >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)";
                break;
            case 'month':
                $where = "WHERE created_at >= DATE_SUB(CURDATE(), INTERVAL 30 DAY)";
                break;
        }

        $stats = [];

        // Card payments
        $cardSql = "SELECT COUNT(*) as count, COALESCE(SUM(amount_received), 0) as total 
                   FROM history_card 
                   WHERE status = 'success' $where";
        $cardResult = $this->database->query($cardSql);
        $cardData = mysqli_fetch_assoc($cardResult);
        $stats['card'] = $cardData;

        // Bank payments
        $bankSql = "SELECT COUNT(*) as count, COALESCE(SUM(amount_vnd), 0) as total 
                   FROM history_bank 
                   WHERE status = 'success' $where";
        $bankResult = $this->database->query($bankSql);
        $bankData = mysqli_fetch_assoc($bankResult);
        $stats['bank'] = $bankData;

        return $stats;
    }

    // ========== GIFTCODE MANAGEMENT METHODS ==========

    /**
     * Get giftcodes with pagination
     */
    public function getGiftcodes($limit = 20, $offset = 0)
    {
        $sql = "SELECT * FROM giftcode ORDER BY datecreate DESC LIMIT ? OFFSET ?";
        $stmt = $this->database->prepare($sql);
        $stmt->bind_param("ii", $limit, $offset);
        $stmt->execute();
        $result = $stmt->get_result();
        
        $giftcodes = [];
        while ($row = $result->fetch_assoc()) {
            $giftcodes[] = $row;
        }
        
        return $giftcodes;
    }

    /**
     * Get total number of giftcodes
     */
    public function getTotalGiftcodes()
    {
        $sql = "SELECT COUNT(*) as total FROM giftcode";
        $result = $this->database->query($sql);
        
        if ($result) {
            $data = $result->fetch_assoc();
            return $data['total'];
        }
        
        return 0;
    }

    /**
     * Create new giftcode
     */
    public function createGiftcode($code, $count_left, $detail, $expired, $active = 1, $type = 0)
    {
        $sql = "INSERT INTO giftcode (code, count_left, detail, expired, active, type) VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = $this->database->prepare($sql);
        $stmt->bind_param("sissii", $code, $count_left, $detail, $expired, $active, $type);
        
        return $stmt->execute();
    }

    /**
     * Delete giftcode
     */
    public function deleteGiftcode($id)
    {
        $sql = "DELETE FROM giftcode WHERE id = ?";
        $stmt = $this->database->prepare($sql);
        $stmt->bind_param("i", $id);
        
        return $stmt->execute();
    }

    /**
     * Update giftcode status
     */
    public function updateGiftcodeStatus($id, $active)
    {
        $sql = "UPDATE giftcode SET active = ? WHERE id = ?";
        $stmt = $this->database->prepare($sql);
        $stmt->bind_param("ii", $active, $id);
        
        return $stmt->execute();
    }

    /**
     * Get giftcode by ID
     */
    public function getGiftcodeById($id)
    {
        $sql = "SELECT * FROM giftcode WHERE id = ?";
        $stmt = $this->database->prepare($sql);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $result = $stmt->get_result();
        
        return $result->fetch_assoc();
    }

    /**
     * Check if giftcode exists
     */
    public function giftcodeExists($code)
    {
        $sql = "SELECT id FROM giftcode WHERE code = ?";
        $stmt = $this->database->prepare($sql);
        $stmt->bind_param("s", $code);
        $stmt->execute();
        $result = $stmt->get_result();
        
        return $result->num_rows > 0;
    }

    /**
     * Update giftcode
     */
    public function updateGiftcode($id, $code, $count_left, $detail, $expired, $active, $type)
    {
        $sql = "UPDATE giftcode SET code = ?, count_left = ?, detail = ?, expired = ?, active = ?, type = ? WHERE id = ?";
        $stmt = $this->database->prepare($sql);
        $stmt->bind_param("sissiii", $code, $count_left, $detail, $expired, $active, $type, $id);
        
        return $stmt->execute();
    }

    /**
     * Get active giftcodes
     */
    public function getActiveGiftcodes()
    {
        $sql = "SELECT * FROM giftcode WHERE active = 1 AND expired > NOW() AND count_left > 0 ORDER BY datecreate DESC";
        $result = $this->database->query($sql);
        
        $giftcodes = [];
        while ($row = $result->fetch_assoc()) {
            $giftcodes[] = $row;
        }
        
        return $giftcodes;
    }

    /**
     * Use giftcode (decrement count_left)
     */
    public function useGiftcode($code)
    {
        $sql = "UPDATE giftcode SET count_left = count_left - 1 WHERE code = ? AND count_left > 0";
        $stmt = $this->database->prepare($sql);
        $stmt->bind_param("s", $code);
        
        return $stmt->execute();
    }

    /**
     * Get giftcode usage statistics
     */
    public function getGiftcodeStats()
    {
        $stats = [];

        // Total giftcodes
        $totalSql = "SELECT COUNT(*) as total FROM giftcode";
        $totalResult = $this->database->query($totalSql);
        $stats['total'] = $totalResult->fetch_assoc()['total'];

        // Active giftcodes
        $activeSql = "SELECT COUNT(*) as active FROM giftcode WHERE active = 1 AND expired > NOW() AND count_left > 0";
        $activeResult = $this->database->query($activeSql);
        $stats['active'] = $activeResult->fetch_assoc()['active'];

        // Expired giftcodes
        $expiredSql = "SELECT COUNT(*) as expired FROM giftcode WHERE expired <= NOW() OR count_left <= 0";
        $expiredResult = $this->database->query($expiredSql);
        $stats['expired'] = $expiredResult->fetch_assoc()['expired'];

        // Total uses
        $usesSql = "SELECT SUM(initial_count - count_left) as total_uses FROM (SELECT count_left, (SELECT count_left FROM giftcode_history WHERE giftcode_id = giftcode.id ORDER BY id LIMIT 1) as initial_count FROM giftcode) as subquery";
        $usesResult = $this->database->query($usesSql);
        $stats['total_uses'] = $usesResult->fetch_assoc()['total_uses'] ?? 0;

        return $stats;
    }

    // ========== BUFF VND MANAGEMENT METHODS ==========

    /**
     * Check if user exists
     */
    public function checkUserExists($username)
    {
        $sql = "SELECT id FROM account WHERE username = ?";
        $stmt = $this->database->prepare($sql);
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $result = $stmt->get_result();
        return $result->num_rows > 0;
    }

    /**
     * Add money to user account
     */
    public function addMoneyToUserAccount($username, $cashToAdd)
    {
        $sql = "UPDATE account SET cash = cash + ? WHERE username = ?";
        $stmt = $this->database->prepare($sql);
        $stmt->bind_param("is", $cashToAdd, $username);
        return $stmt->execute();
    }

    /**
     * Log buff VND transaction
     */
    public function logBuffVND($username, $amountVND, $cashAdded, $paymentType, $reason)
    {
        $adminName = $_SESSION['username'] ?? 'System';
        $sql = "INSERT INTO buff_vnd_history (username, amount_vnd, cash_added, payment_type, reason, admin_name, created_at) 
                VALUES (?, ?, ?, ?, ?, ?, NOW())";
        $stmt = $this->database->prepare($sql);
        $stmt->bind_param("siisss", $username, $amountVND, $cashAdded, $paymentType, $reason, $adminName);
        return $stmt->execute();
    }

    /**
     * Get total number of buff VND history records
     */
    public function getTotalBuffVNDHistory()
    {
        $sql = "SELECT COUNT(*) as total FROM buff_vnd_history";
        $result = $this->database->query($sql);
        
        if ($result) {
            $data = $result->fetch_assoc();
            return $data['total'];
        }
        
        return 0;
    }

    /**
     * Get buff VND history with pagination
     */
    public function getBuffVNDHistory($limit = 20, $offset = 0)
    {
        $sql = "SELECT * FROM buff_vnd_history ORDER BY id DESC LIMIT ? OFFSET ?";
        $stmt = $this->database->prepare($sql);
        $stmt->bind_param("ii", $limit, $offset);
        $stmt->execute();
        $result = $stmt->get_result();
        
        $history = [];
        while ($row = $result->fetch_assoc()) {
            $history[] = $row;
        }
        
        return $history;
    }

    /**
     * Get buff VND statistics
     */
    public function getBuffVNDStats($dateRange = 'today')
    {
        $where = "";
        switch ($dateRange) {
            case 'today':
                $where = "WHERE DATE(created_at) = CURDATE()";
                break;
            case 'week':
                $where = "WHERE created_at >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)";
                break;
            case 'month':
                $where = "WHERE created_at >= DATE_SUB(CURDATE(), INTERVAL 30 DAY)";
                break;
        }

        $stats = [];

        // Total buff transactions
        $countSql = "SELECT COUNT(*) as count FROM buff_vnd_history $where";
        $countResult = $this->database->query($countSql);
        $stats['total_transactions'] = $countResult->fetch_assoc()['count'];

        // Total VND buffed
        $vndSql = "SELECT COALESCE(SUM(amount_vnd), 0) as total_vnd FROM buff_vnd_history $where";
        $vndResult = $this->database->query($vndSql);
        $stats['total_vnd'] = $vndResult->fetch_assoc()['total_vnd'];

        // Total cash added
        $cashSql = "SELECT COALESCE(SUM(cash_added), 0) as total_cash FROM buff_vnd_history $where";
        $cashResult = $this->database->query($cashSql);
        $stats['total_cash'] = $cashResult->fetch_assoc()['total_cash'];

        return $stats;
    }
}
?>