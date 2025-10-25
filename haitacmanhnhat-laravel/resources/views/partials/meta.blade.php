@php
    $defaultMeta = [
        'viewport' => 'width=device-width, initial-scale=1.0',
        'description' => 'Hải Tặc Mạnh Nhất – Game nhập vai chiến thuật chủ đề One Piece. Hóa thân biến hình - Mega Mall – đấu liên server cực gắt. Sẵn sàng chinh phục?',
        'og:title' => 'Hải Tặc Mạnh Nhất',
        'og:image' => asset('assets/imgs/600x315.jpg'),
        'og:image:width' => '600',
        'og:image:height' => '315',
        'facebook-domain-verification' => '6bko4jl76it4vql0pwhs6bmeudp8bo',
        'link:shortcut_icon' => asset('assets/imgs/32x32.png'),
    ];

    $meta = array_replace($defaultMeta, $meta ?? []);
    $pageTitle = $pageTitle ?? ($meta['og:title'] ?? 'Hải Tặc Mạnh Nhất');
    $canonical = $meta['canonical'] ?? canonical_url();
    $meta['og:url'] = $meta['og:url'] ?? $canonical;

    $structuredBlocks = $structuredData ?? [];
    if (! is_array($structuredBlocks) || ! array_is_list($structuredBlocks)) {
        $structuredBlocks = array_filter((array) $structuredBlocks);
    }

    $nonce = csp_nonce();
@endphp

<meta charset="utf-8">
<meta name="viewport" content="{{ $meta['viewport'] }}">
<title>{{ $pageTitle }}</title>

@if (! empty($meta['description']))
    <meta name="description" content="{{ $meta['description'] }}">
@endif

@foreach ($meta as $key => $value)
    @if (\Illuminate\Support\Str::startsWith($key, 'og:') && ! empty($value))
        @php
            $contentValue = \Illuminate\Support\Str::startsWith($key, 'og:image')
                ? legacy_asset($value)
                : $value;
        @endphp
        <meta property="{{ $key }}" content="{{ $contentValue }}">
    @endif
@endforeach

<link rel="canonical" href="{{ $canonical }}">

@if (! empty($meta['facebook-domain-verification']))
    <meta name="facebook-domain-verification" content="{{ $meta['facebook-domain-verification'] }}">
@endif

@if (! empty($meta['link:shortcut_icon']))
    <link rel="shortcut icon" href="{{ legacy_asset($meta['link:shortcut_icon']) }}">
@endif

@foreach ($structuredBlocks as $schema)
    <script type="application/ld+json" nonce="{{ $nonce }}">
        {!! json_encode($schema, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_HEX_TAG) !!}
    </script>
@endforeach

@if (should_enable_analytics())
    @include('partials.analytics-head', ['nonce' => $nonce])
@endif
