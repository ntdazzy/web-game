<?php
namespace App\Core\Routing;

use App\Core\Http\Request;

class Router
{
    /**
     * @var array<int, array{methods: array<int, string>, pattern: string, regex: string, handler: callable|array}>
     */
    private array $routes = [];

    public function get(string $pattern, callable|array $handler): self
    {
        return $this->addRoute(['GET'], $pattern, $handler);
    }

    public function post(string $pattern, callable|array $handler): self
    {
        return $this->addRoute(['POST'], $pattern, $handler);
    }

    public function match(array $methods, string $pattern, callable|array $handler): self
    {
        $methods = array_map('strtoupper', $methods);
        return $this->addRoute($methods, $pattern, $handler);
    }

    public function any(string $pattern, callable|array $handler): self
    {
        return $this->addRoute(['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'], $pattern, $handler);
    }

    public function dispatch(Request $request): bool
    {
        foreach ($this->routes as $route) {
            if (!in_array($request->method(), $route['methods'], true)) {
                continue;
            }

            if (!preg_match($route['regex'], $request->path(), $matches)) {
                continue;
            }

            $params = [];
            foreach ($matches as $key => $value) {
                if (!is_int($key)) {
                    $params[$key] = $value;
                }
            }

            $request->setRouteParams($params);
            $handler = $route['handler'];
            $arguments = array_values($params);
            array_unshift($arguments, $request);

            if (is_array($handler)) {
                [$class, $method] = $handler;
                if (is_string($class)) {
                    $class = new $class();
                }
                $handler = [$class, $method];
            }

            call_user_func_array($handler, $arguments);
            return true;
        }

        return false;
    }

    private function addRoute(array $methods, string $pattern, callable|array $handler): self
    {
        $regex = $this->compilePattern($pattern);
        $this->routes[] = [
            'methods' => $methods,
            'pattern' => $pattern,
            'regex' => $regex,
            'handler' => $handler,
        ];

        return $this;
    }

    private function compilePattern(string $pattern): string
    {
        $trimmed = $pattern !== '/' ? rtrim($pattern, '/') : $pattern;
        if ($trimmed === '') {
            $trimmed = '/';
        }

        $escaped = preg_replace_callback('#\{([^}/]+)\}#', static function (array $matches): string {
            $name = $matches[1];
            return '(?P<' . $name . '>[^/]+)';
        }, $trimmed);

        $suffix = $trimmed === '/' ? '' : '/?';

        return '#^' . $escaped . $suffix . '$#';
    }
}
