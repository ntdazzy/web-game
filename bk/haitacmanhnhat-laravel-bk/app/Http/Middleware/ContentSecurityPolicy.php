<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Symfony\Component\HttpFoundation\Response;

class ContentSecurityPolicy
{
    public function handle(Request $request, Closure $next): Response
    {
        /** @var Response $response */
        $response = $next($request);

        if (! config('csp.enabled', true)) {
            return $response;
        }

        $directives = $this->buildDirectives();

        if ($directives === '') {
            return $response;
        }

        $headerName = config('csp.report_only', false)
            ? 'Content-Security-Policy-Report-Only'
            : 'Content-Security-Policy';

        $response->headers->set($headerName, $directives, replace: true);

        return $response;
    }

    private function buildDirectives(): string
    {
        $configured = config('csp.directives', []);
        if (! is_array($configured)) {
            return '';
        }

        $nonce = csp_nonce();
        $nonces = config('csp.nonces', ['script' => false, 'style' => false]);

        if (! empty($nonces['script'])) {
            $configured['script-src'] = $this->appendNonce($configured, 'script-src', $nonce);
        }

        if (! empty($nonces['style'])) {
            $configured['style-src'] = $this->appendNonce($configured, 'style-src', $nonce);
        }

        $reportUri = config('csp.report_uri');
        if (! empty($reportUri)) {
            $configured['report-uri'] = [$reportUri];
        }

        $segments = [];

        foreach ($configured as $directive => $values) {
            $list = Arr::wrap($values);
            if (empty($list)) {
                continue;
            }

            $segments[] = $directive . ' ' . implode(' ', array_unique(array_filter($list)));
        }

        return implode('; ', $segments);
    }

    private function appendNonce(array $directives, string $key, string $nonce): array
    {
        $values = Arr::wrap($directives[$key] ?? []);

        $values[] = "'nonce-{$nonce}'";

        return $values;
    }
}
