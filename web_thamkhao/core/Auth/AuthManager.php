<?php

/**
 * Authentication Manager
 * Handles login, register, logout, and session management
 */

class AuthManager
{
    private $database;
    private $config;

    public function __construct($database = null, $config = null)
    {
        $this->database = $database;
        $this->config = $config;
    }

    /**
     * Login user
     */
    public function login($username, $password, $captchaResponse = null)
    {
        // Verify captcha if provided
        if ($captchaResponse && !$this->verifyCaptcha($captchaResponse)) {
            return Response::error('Captcha không hợp lệ!');
        }

        // Get user from database
        $user = $this->getUserByUsername($username);

        if (!$user || $user['password'] !== $password) {
            return Response::error('Sai tài khoản hoặc mật khẩu!');
        }

        // Check if user has player character
        if (!$this->hasPlayer($user['id'])) {
            return Response::error('Bạn chưa tạo nhân vật. Vui lòng tạo nhân vật trước khi đăng nhập!');
        }

        // Login successful
        if (session_status() === PHP_SESSION_ACTIVE) {
            session_regenerate_id(true); // mitigate session fixation
        }
        $_SESSION['account'] = $username;
        $_SESSION['user_id'] = $user['id'];

        return Response::success('Đăng nhập thành công!', ['user' => $user]);
    }

    /**
     * Register new user
     */
    public function register($username, $password, $captchaResponse = null)
    {
        // Verify captcha if provided
        if ($captchaResponse && !$this->verifyCaptcha($captchaResponse)) {
            return Response::error('Captcha không hợp lệ!');
        }

        // Check if username already exists
        if ($this->usernameExists($username)) {
            return Response::error('Tên đăng nhập đã tồn tại!');
        }

        // Validate password
        if (!$this->validatePassword($password)) {
            return Response::error('Mật khẩu không hợp lệ! Chỉ chứa a-z, 0-9 và từ 4-16 ký tự.');
        }

        // Create user
        if ($this->createUser($username, $password)) {
            return Response::success('Tạo tài khoản thành công! Vui lòng đăng nhập.');
        } else {
            return Response::error('Lỗi: Không thể tạo tài khoản');
        }
    }

    /**
     * Logout user
     */
    public function logout()
    {
        session_unset();
        session_destroy();
        return true;
    }

    /**
     * Check if user is logged in
     */
    public function isLoggedIn()
    {
        return isset($_SESSION['account']) && !empty($_SESSION['account']);
    }

    /**
     * Get current user info
     */
    public function getCurrentUser()
    {
        if (!$this->isLoggedIn()) {
            return null;
        }

        $username = $_SESSION['account'];
        return $this->getUserByUsername($username);
    }

    /**
     * Get player info for current user
     */
    public function getPlayerInfo($username = null)
    {
        if (!$username) {
            $username = $_SESSION['account'] ?? null;
        }

        if (!$username) {
            return null;
        }

        $sql = "SELECT p.gender, p.name, p.power, a.cash 
                FROM player p 
                JOIN account a ON p.account_id = a.id 
                WHERE a.username = ?";

        $stmt = $this->database->prepare($sql);
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($player = $result->fetch_assoc()) {
            return [
                'name' => htmlspecialchars($player['name']),
                'gender' => $player['gender'],
                'power' => $player['power'],
                'cash' => $player['cash']
            ];
        }

        return null;
    }

    /**
     * Get user by username
     */
    private function getUserByUsername($username)
    {
        $sql = "SELECT * FROM account WHERE username = ?";
        $stmt = $this->database->prepare($sql);
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $result = $stmt->get_result();

        return $result->fetch_assoc();
    }

    /**
     * Check if username exists
     */
    private function usernameExists($username)
    {
        $sql = "SELECT 1 FROM account WHERE username = ?";
        $stmt = $this->database->prepare($sql);
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $result = $stmt->get_result();

        return $result->num_rows > 0;
    }

    /**
     * Create new user
     */
    private function createUser($username, $password)
    {
        $sql = "INSERT INTO account (username, password) VALUES (?, ?)";
        $stmt = $this->database->prepare($sql);
        $stmt->bind_param("ss", $username, $password);

        return $stmt->execute();
    }

    /**
     * Validate password format
     */
    private function validatePassword($password)
    {
        return preg_match('/^[a-z0-9]{4,16}$/', $password);
    }

    /**
     * Check if user has player character
     */
    private function hasPlayer($accountId)
    {
        $sql = "SELECT 1 FROM player WHERE account_id = ?";
        $stmt = $this->database->prepare($sql);
        $stmt->bind_param("i", $accountId);
        $stmt->execute();
        $result = $stmt->get_result();

        return $result->num_rows > 0;
    }

    /**
     * Change user password
     */
    public function changePassword($username, $oldPassword, $newPassword)
    {
        // Validate input
        if (empty($username) || empty($oldPassword) || empty($newPassword)) {
            return [
                'success' => false,
                'message' => 'Tất cả các trường đều bắt buộc!'
            ];
        }

        // Check if old password is correct
        $sql = "SELECT id FROM account WHERE username = ? AND password = ?";
        $stmt = $this->database->prepare($sql);
        $stmt->bind_param("ss", $username, $oldPassword);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows === 0) {
            return [
                'success' => false,
                'message' => 'Mật khẩu cũ không đúng!'
            ];
        }

        $row = $result->fetch_assoc();
        $accountId = $row['id'];

        // Update password
        $updateSql = "UPDATE account SET password = ? WHERE id = ?";
        $updateStmt = $this->database->prepare($updateSql);
        $updateStmt->bind_param("si", $newPassword, $accountId);
        $updateStmt->execute();

        if ($updateStmt->affected_rows > 0) {
            return [
                'success' => true,
                'message' => 'Thay đổi mật khẩu thành công!'
            ];
        } else {
            return [
                'success' => false,
                'message' => 'Không có gì thay đổi! Có thể mật khẩu mới trùng mật khẩu cũ.'
            ];
        }
    }

    /**
     * Verify Cloudflare Turnstile captcha
     */
    private function verifyCaptcha($response)
    {
        $captchaConfig = $this->config->getCaptchaConfig();
        $secretKey = $captchaConfig['secret_key'];
        $url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

        $data = http_build_query([
            'secret' => $secretKey,
            'response' => $response,
            'remoteip' => $_SERVER['REMOTE_ADDR']
        ]);

        // Prefer cURL with timeouts
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/x-www-form-urlencoded']);
        curl_setopt($ch, CURLOPT_TIMEOUT, 8);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);

        $result = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $err = curl_error($ch);
        curl_close($ch);

        if ($result === false || $httpCode !== 200) {
            // Fail closed softly: treat as invalid to avoid bypass
            error_log('Turnstile verify error: ' . ($err ?: 'HTTP ' . $httpCode));
            return false;
        }

        $verification = json_decode($result, true);
        return (bool)($verification['success'] ?? false);
    }
}
