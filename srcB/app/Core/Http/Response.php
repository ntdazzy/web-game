<?php
namespace App\Core\Http;

class Response
{
    public static function json(mixed $data, int $status = 200, array $headers = []): void
    {
        http_response_code($status);
        header('Content-Type: application/json');
        foreach ($headers as $name => $value) {
            header($name . ': ' . $value, true);
        }
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
    }
}
