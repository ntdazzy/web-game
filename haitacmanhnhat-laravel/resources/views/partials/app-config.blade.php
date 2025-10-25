@php
    $cspNonce = function_exists('csp_nonce') ? csp_nonce() : null;
    $origin = config('app.url') ?: url('/');
    $primaryDomain = parse_url($origin, PHP_URL_HOST) ?: request()->getHost();
    $cookieDomain = config('session.domain');

    if (! $cookieDomain && $primaryDomain) {
        $cookieDomain = '.' . ltrim($primaryDomain, '.');
    }

    $analyticsEnabled = (bool) (config('services.analytics.enabled') ?? false);
@endphp

<script id="app-config-data" type="application/json" @if($cspNonce) nonce="{{ $cspNonce }}" @endif>
    {!! json_encode([
        'origin' => $origin,
        'cookieDomain' => $cookieDomain,
        'enableAnalytics' => $analyticsEnabled,
        'analyticsDomain' => $primaryDomain,
        'primaryDomain' => $primaryDomain,
    ], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) !!}
</script>
<script src="{{ asset('assets/js/runtime/app-config.js') }}" @if($cspNonce) nonce="{{ $cspNonce }}" @endif></script>
@if($cspNonce)
    <script nonce="{{ $cspNonce }}">
        window.__CSP_NONCE__ = "{{ $cspNonce }}";
    </script>
@endif
