<?php

/**
 * Core Package - Main Entry Point
 * Reusable package for game websites with authentication, payment, ranking, and webhook
 * 
 * @author Your Name
 * @version 1.0.0
 */

class Core
{
    private static $instance = null;
    private $config;
    private $database;
    private $auth;
    private $payment;
    private $ranking;
    private $webhook;

    private function __construct()
    {
        $this->initConfig();
        $this->initModules();
    }

    public static function getInstance()
    {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    public function init()
    {
        // Start session if not started
        if (session_status() === PHP_SESSION_NONE) {
            session_start();
        }

        // Set timezone
        date_default_timezone_set('Asia/Ho_Chi_Minh');

        // Initialize database connection first
        $this->database->connect();

        // Initialize database and check/create tables
        $this->database->init();

        // Set global variables for compatibility
        $this->setGlobalVariables();

        return $this;
    }

    private function setGlobalVariables()
    {
        // Set global config variables
        $GLOBALS['defaultTitle'] = $this->config->getDefaultTitle();
        $GLOBALS['favicon'] = $this->config->getFavicon();
        $GLOBALS['keywords'] = $this->config->getKeywords();
        $GLOBALS['logo'] = $this->config->getLogo();
        $GLOBALS['description'] = $this->config->getDescription();
        $GLOBALS['boxzalo'] = $this->config->getBoxzalo();
        $GLOBALS['pc'] = $this->config->getPcDownload();
        $GLOBALS['adr'] = $this->config->getAndroidDownload();
        $GLOBALS['ios'] = $this->config->getIosDownload();

        // Set database connection
        $GLOBALS['conn'] = $this->database->getConnection();

        // Set user session variables
        $this->setUserSessionVariables();
    }

    private function setUserSessionVariables()
    {
        $GLOBALS['_user'] = isset($_SESSION['account']) ? $_SESSION['account'] : null;

        if ($GLOBALS['_user'] != null) {
            $GLOBALS['_login'] = "on";
            $stmt = $this->database->prepare("SELECT * FROM account WHERE username = ?");
            $stmt->bind_param("s", $GLOBALS['_user']);
            $stmt->execute();
            $user_arr = $stmt->get_result();

            if ($user_arr && $user = mysqli_fetch_assoc($user_arr)) {
                $GLOBALS['_uid'] = $user['id'];
                $GLOBALS['_username'] = htmlspecialchars($user['username']);
                $GLOBALS['_cash'] = $user['cash'];
                $GLOBALS['_status'] = $user['active'];
                $GLOBALS['_is_admin'] = $user['is_admin'] == 1; 
            } else {
                header("location:/?out");
            }
        } else {
            $GLOBALS['_login'] = null;
            $GLOBALS['_is_admin'] = false; 
        }
    }

    private function initConfig()
    {
        $this->config = new ConfigManager();
    }

    private function initModules()
    {
        $this->database = new DatabaseManager($this->config);
        $this->auth = new AuthManager($this->database, $this->config);
        $this->payment = new PaymentManager($this->database, $this->config);
        $this->ranking = new RankingManager($this->database);
        $this->webhook = new WebhookManager($this->database, $this->config);
        $this->admin = new AdminManager($this->database, $this->config); 
    }

    // Getters for modules
    public function getAuth()
    {
        return $this->auth;
    }
    public function getPayment()
    {
        return $this->payment;
    }
    public function getRanking()
    {
        return $this->ranking;
    }
    public function getWebhook()
    {
        return $this->webhook;
    }
    public function getDatabase()
    {
        return $this->database;
    }
    public function getAdmin()
    {
        return $this->admin;
    }
    public function setDatabase($database)
    {
        $this->database = $database;
    }
    public function getConfig()
    {
        return $this->config;
    }

    // Helper functions for compatibility
    public function getPlayerInfo($username)
    {
        $sql = "SELECT p.gender, p.name, a.thoi_vang 
                FROM player p 
                JOIN account a ON p.account_id = a.id 
                WHERE a.username = '" . $this->database->escape($username) . "'";
        $result = $this->database->query($sql);

        if ($result && $player = mysqli_fetch_assoc($result)) {
            return [
                'name' => htmlspecialchars($player['name']),
                'gender' => $player['gender']
            ];
        }
        return null;
    }

    public function query($sql)
    {
        return $this->database->query($sql);
    }

    public function fetch($sql)
    {
        return mysqli_fetch_array($this->query($sql));
    }

    // Magic methods for easy access
    public function __get($name)
    {
        switch ($name) {
            case 'auth':
                return $this->getAuth();
            case 'payment':
                return $this->getPayment();
            case 'ranking':
                return $this->getRanking();
            case 'webhook':
                return $this->getWebhook();
            case 'database':
                return $this->getDatabase();
            case 'config':
                return $this->getConfig();
            default:
                throw new Exception("Property $name not found");
        }
    }
}

// Auto-load all modules
require_once __DIR__ . '/Config/ConfigManager.php';
require_once __DIR__ . '/Database/DatabaseManager.php';
require_once __DIR__ . '/Auth/AuthManager.php';
require_once __DIR__ . '/Payment/PaymentManager.php';
require_once __DIR__ . '/Ranking/RankingManager.php';
require_once __DIR__ . '/Webhook/WebhookManager.php';
require_once __DIR__ . '/Admin/AdminManager.php';
require_once __DIR__ . '/Utils/Response.php';
