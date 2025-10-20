<?php
namespace App\Core\Security;

use App\Core\Http\Request;

class CsrfTokenManager
{
    private const SESSION_KEY = '_csrf_tokens';
    private const TTL = 3600; // 1 hour

    public static function getToken(string $form = 'default'): string
    {
        self::ensureSession();
        $tokens = $_SESSION[self::SESSION_KEY] ?? [];
        $now = time();
        $record = $tokens[$form] ?? null;
        if (!is_array($record) || ($record['expires'] ?? 0) < $now) {
            $record = [
                'value' => bin2hex(random_bytes(32)),
                'expires' => $now + self::TTL,
            ];
            $tokens[$form] = $record;
            $_SESSION[self::SESSION_KEY] = $tokens;
        }

        return $record['value'];
    }

    public static function validateToken(?string $token, string $form = 'default'): bool
    {
        if (!is_string($token) || $token === '') {
            return false;
        }

        self::ensureSession();
        $tokens = $_SESSION[self::SESSION_KEY] ?? [];
        $record = $tokens[$form] ?? null;
        if (!is_array($record)) {
            return false;
        }

        $isValid = hash_equals($record['value'] ?? '', $token ?? '');

        if ($isValid) {
            unset($tokens[$form]);
            $_SESSION[self::SESSION_KEY] = $tokens;
        }

        return $isValid;
    }

    private static function ensureSession(): void
    {
        if (session_status() === PHP_SESSION_NONE) {
            session_start();
        }
    }

    public static function isValidRequest(Request $request): bool
    {
        $method = strtoupper($request->method());
        if (!in_array($method, ['POST', 'PUT', 'PATCH', 'DELETE'], true)) {
            return true;
        }

        $path = $request->path();
        if (str_starts_with($path, '/api/')) {
            return true;
        }
        if ($path === '/get-hero-detail') {
            return true;
        }

        $context = $request->input('_token_name', 'default');
        $token = $request->input('_token');

        if (!$token) {
            $headerToken = $request->header('X-CSRF-Token') ?? $request->header('X-CSRF-TOKEN');
            if (is_string($headerToken) && $headerToken !== '') {
                $token = $headerToken;
            }
        }

        if (!$token) {
            $json = $request->json();
            if (is_array($json)) {
                $token = $json['_token'] ?? $json['csrfToken'] ?? null;
                $context = $json['_token_name'] ?? $json['csrfContext'] ?? $context;
            }
        }

        if (!is_string($token) || $token === '') {
            return false;
        }

        $context = is_string($context) && $context !== '' ? $context : 'default';

        return self::validateToken($token, $context);
    }
}
