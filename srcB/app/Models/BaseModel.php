<?php
namespace App\Models;

abstract class BaseModel
{
    protected static function dataPath(string $relative): string
    {
        return __DIR__ . '/../data/' . $relative;
    }

    protected static function loadJson(string $relative)
    {
        $path = static::dataPath($relative);
        if (!is_file($path)) {
            return null;
        }
        $data = json_decode(file_get_contents($path), true);
        return $data;
    }
}
