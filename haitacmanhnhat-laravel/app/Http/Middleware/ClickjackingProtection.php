<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ClickjackingProtection
{
    public function handle(Request $request, Closure $next): Response
    {
        /** @var Response $response */
        $response = $next($request);

        $response->headers->set('X-Frame-Options', 'DENY', replace: true);
        $response->headers->set('X-Content-Type-Options', 'nosniff', replace: true);
        $response->headers->set('X-XSS-Protection', '1; mode=block', replace: true);

        return $response;
    }
}
