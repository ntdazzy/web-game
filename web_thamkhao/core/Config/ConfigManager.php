<?php

/**
 * Configuration Manager
 * Handles environment variables and configuration
 */

class ConfigManager
{
    private $config = [];

    public function __construct()
    {
        $this->setDefaults();
    }

    private function setDefaults()
    {
        $defaults = [
            // Database
            'DB_HOST' => 'localhost',
            'DB_USER' => 'root',
            'DB_PASS' => '',
            'DB_NAME' => 'jar1',
            'DB_CHARSET' => 'utf8',

            // Payment - Doithe1s
            'DOITHE1S_PARTNER_ID' => '37634201229',
            'DOITHE1S_PARTNER_KEY' => '01a95b5fa220c8024825e367076935c3',
            'DOITHE1S_DISCOUNT' => '0',

            // Payment - Sepay
            'SEPAY_BANK_ACCOUNT' => '0000331855198',
            'SEPAY_BANK_NAME' => 'MBBANK',
            'SEPAY_BANK_CODE' => 'MB',
            'SEPAY_BANK_OWNER' => 'HO QUOC KHANG',
            'SEPAY_DISCOUNT' => '0',
            'SEPAY_SECRET' => 'tuanbinh',

            // Security
            'CF_SITE_KEY' => '',
            'CF_SECRET_KEY' => '',

            // App
            'APP_NAME' => 'Dịch Vụ Nro',
            'APP_LOGO' => '../assets/images/logo_light_XQE-removebg-preview.png',
            'APP_FAVICON' => 'https://i.imgur.com/leWWY5X.png',
            'APP_DESCRIPTION' => 'Website chính thức của Dịch Vụ Nro',
            'APP_KEYWORDS' => 'Chú Bé Rồng Online,ngoc rong mobile, game ngoc rong',

            // Social
            'ZALO_GROUP' => '',

            // Downloads
            'PC_DOWNLOAD' => '',
            'ANDROID_DOWNLOAD' => '',
            'IOS_DOWNLOAD' => '',
			'JAVA_DOWNLOAD' => '',

        ];

        foreach ($defaults as $key => $value) {
            if (!isset($this->config[$key])) {
                $this->config[$key] = $value;
            }
        }
    }

    public function get($key, $default = null)
    {
        return $this->config[$key] ?? $default;
    }

    public function set($key, $value)
    {
        $this->config[$key] = $value;
    }

    public function getAll()
    {
        return $this->config;
    }

    // Convenience methods
    public function getDatabaseConfig()
    {
        return [
            'host' => $this->get('DB_HOST'),
            'user' => $this->get('DB_USER'),
            'pass' => $this->get('DB_PASS'),
            'name' => $this->get('DB_NAME'),
            'charset' => $this->get('DB_CHARSET')
        ];
    }

    public function getDoithe1sConfig()
    {
        return [
            'partner_id' => $this->get('DOITHE1S_PARTNER_ID'),
            'partner_key' => $this->get('DOITHE1S_PARTNER_KEY'),
            'discount' => $this->get('DOITHE1S_DISCOUNT')
        ];
    }

    public function getSepayConfig()
    {
        return [
            'bank_account' => $this->get('SEPAY_BANK_ACCOUNT'),
            'bank_name' => $this->get('SEPAY_BANK_NAME'),
            'bank_code' => $this->get('SEPAY_BANK_CODE'),
            'bank_owner' => $this->get('SEPAY_BANK_OWNER'),
            'discount' => $this->get('SEPAY_DISCOUNT'),
            'secret' => $this->get('SEPAY_SECRET')
        ];
    }

    public function getCaptchaConfig()
    {
        return [
            'site_key' => $this->get('CF_SITE_KEY'),
            'secret_key' => $this->get('CF_SECRET_KEY')
        ];
    }

    public function getAppConfig()
    {
        return [
            'name' => $this->get('APP_NAME'),
            'logo' => $this->get('APP_LOGO'),
            'favicon' => $this->get('APP_FAVICON'),
            'description' => $this->get('APP_DESCRIPTION'),
            'keywords' => $this->get('APP_KEYWORDS')
        ];
    }

    public function getSocialConfig()
    {
        return [
            'zalo_group' => $this->get('ZALO_GROUP')
        ];
    }

    public function getDownloadConfig()
    {
        return [
            'pc' => $this->get('PC_DOWNLOAD'),
            'android' => $this->get('ANDROID_DOWNLOAD'),
            'ios' => $this->get('IOS_DOWNLOAD'),
            'java' => $this->get('JAVA_DOWNLOAD')
        ];
    }

    // Legacy compatibility methods
    public function getDefaultTitle()
    {
        return $this->get('APP_NAME');
    }

    public function getFavicon()
    {
        return $this->get('APP_FAVICON');
    }

    public function getKeywords()
    {
        return $this->get('APP_KEYWORDS');
    }

    public function getLogo()
    {
        return $this->get('APP_LOGO');
    }

    public function getDescription()
    {
        return $this->get('APP_DESCRIPTION');
    }

    public function getBoxzalo()
    {
        return $this->get('ZALO_GROUP');
    }

    public function getPcDownload()
    {
        return $this->get('PC_DOWNLOAD');
    }

    public function getAndroidDownload()
    {
        return $this->get('ANDROID_DOWNLOAD');
    }

    public function getIosDownload()
    {
        return $this->get('IOS_DOWNLOAD');
    }

    public function getJavaDownload()
    {
        return $this->get('JAVA_DOWNLOAD');
    }
}
