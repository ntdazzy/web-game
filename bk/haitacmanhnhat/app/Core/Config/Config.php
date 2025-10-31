<?php
namespace App\Core\Config;

class Config
{
    private static array $items = [];
    private const CONFIG_PATH = __DIR__ . '/../../../config/config.php';

    public static function load(?string $path = null): void
    {
        $path = $path ?? self::CONFIG_PATH;
        if (!is_file($path)) {
            self::$items = [];
            return;
        }
        $data = require $path;
        if (is_array($data)) {
            self::$items = $data;
        }
    }

    public static function get(string $key, mixed $default = null): mixed
    {
        if (self::$items === []) {
            self::load();
        }

        $segments = explode('.', $key);
        $value = self::$items;
        foreach ($segments as $segment) {
            if (!is_array($value) || !array_key_exists($segment, $value)) {
                return $default;
            }
            $value = $value[$segment];
        }

        return $value;
    }
}
