<?php
namespace App\Core\Data;

abstract class JsonRepository
{
    protected static function dataPath(string $relative): string
    {
        return __DIR__ . '/../../data/' . ltrim($relative, '/');
    }

    protected static function loadJson(string $relative): mixed
    {
        $path = static::dataPath($relative);
        if (!is_file($path)) {
            return null;
        }
        $contents = file_get_contents($path);
        if ($contents === false) {
            return null;
        }

        return json_decode($contents, true);
    }
}
