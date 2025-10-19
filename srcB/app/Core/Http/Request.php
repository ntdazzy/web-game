<?php
namespace App\Core\Http;

class Request
{
    private array $routeParams = [];
    private ?array $jsonCache = null;

    public function __construct(
        private readonly string $method,
        private readonly string $path,
        private readonly array $query,
        private readonly array $bodyParams,
        private readonly array $cookies,
        private readonly array $server
    ) {
    }

    public static function capture(): self
    {
        $method = strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET');
        $uri = $_SERVER['REQUEST_URI'] ?? '/';
        $path = parse_url($uri, PHP_URL_PATH) ?? '/';

        $routeParam = $_GET['route'] ?? null;
        if (is_string($routeParam) && $routeParam !== '') {
            $path = '/' . ltrim($routeParam, '/');
        }

        $normalizedPath = $path === '' ? '/' : '/' . ltrim($path, '/');
        if ($normalizedPath !== '/' && str_ends_with($normalizedPath, '/')) {
            $normalizedPath = rtrim($normalizedPath, '/');
        }

        $query = $_GET;
        unset($query['route']);

        return new self(
            $method,
            $normalizedPath,
            $query,
            $_POST,
            $_COOKIE,
            $_SERVER
        );
    }

    public function method(): string
    {
        return $this->method;
    }

    public function path(): string
    {
        return $this->path;
    }

    public function query(string $key, mixed $default = null): mixed
    {
        return $this->query[$key] ?? $default;
    }

    public function input(string $key, mixed $default = null): mixed
    {
        return $this->bodyParams[$key] ?? $this->query[$key] ?? $default;
    }

    public function json(): ?array
    {
        if ($this->jsonCache !== null) {
            return $this->jsonCache;
        }

        $raw = file_get_contents('php://input');
        if ($raw === false || $raw === '') {
            $this->jsonCache = null;
            return $this->jsonCache;
        }

        $decoded = json_decode($raw, true);
        $this->jsonCache = is_array($decoded) ? $decoded : null;

        return $this->jsonCache;
    }

    public function cookie(string $key, mixed $default = null): mixed
    {
        return $this->cookies[$key] ?? $default;
    }

    public function header(string $key, mixed $default = null): mixed
    {
        $serverKey = 'HTTP_' . strtoupper(str_replace('-', '_', $key));
        return $this->server[$serverKey] ?? $default;
    }

    public function allQuery(): array
    {
        return $this->query;
    }

    public function allInput(): array
    {
        return array_merge($this->bodyParams, $this->query);
    }

    public function setRouteParams(array $params): void
    {
        $this->routeParams = $params;
    }

    public function route(string $key, mixed $default = null): mixed
    {
        return $this->routeParams[$key] ?? $default;
    }
}
