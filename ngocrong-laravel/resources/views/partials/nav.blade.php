@php
    $navItems = [
        [
            'label' => 'Trang chủ',
            'url' => route('home'),
        ],
        [
            'label' => 'Tin tức',
            'url' => route('news.index'),
        ],
        [
            'label' => 'Sự kiện',
            'url' => route('events.index'),
        ],
        [
            'label' => 'Tướng',
            'url' => route('characters.index'),
        ],
        [
            'label' => 'Trái Ác Quỷ',
            'url' => route('devilfruits.index'),
            'children' => [
                [
                    'label' => 'Trái Ác Quỷ',
                    'url' => route('devilfruits.index'),
                ],
                [
                    'label' => 'Trái Dung Hợp',
                    'url' => route('devilfruits.fusion'),
                ],
            ],
        ],
        [
            'label' => 'Hỗ trợ',
            'url' => 'https://www.facebook.com/haitacmanhnhat',
            'external' => true,
            'children' => [
                [
                    'label' => 'Facebook',
                    'url' => 'https://www.facebook.com/haitacmanhnhat',
                    'external' => true,
                ],
                [
                    'label' => 'Discord',
                    'url' => 'https://discord.com/invite/pRQaVmUj78',
                    'external' => true,
                ],
                [
                    'label' => 'Zalo',
                    'url' => 'https://zalo.me/g/snnzqo202',
                    'external' => true,
                ],
            ],
        ],
        [
            'label' => 'Cộng đồng',
            'url' => 'https://www.youtube.com/@haitacmanhnhat',
            'external' => true,
            'children' => [
                [
                    'label' => 'Youtube',
                    'url' => 'https://www.youtube.com/@haitacmanhnhat',
                    'external' => true,
                ],
                [
                    'label' => 'Group cộng đồng',
                    'url' => 'https://www.facebook.com/groups/dechehaitac',
                    'external' => true,
                ],
                [
                    'label' => 'Tiktok',
                    'url' => 'https://www.tiktok.com/@haitacmanhnhat',
                    'external' => true,
                ],
                [
                    'label' => 'Discord',
                    'url' => 'https://discord.com/invite/pRQaVmUj78',
                    'external' => true,
                ],
            ],
        ],
    ];
@endphp

<nav id="primary-nav" class="visually-hidden-focusable" aria-label="Điều hướng chính">
    <ul class="list-unstyled mb-0">
        @foreach ($navItems as $item)
            @php
                $href = $item['url'] ?? '#';
                $isExternal = $item['external'] ?? false;
            @endphp
            <li>
                <a href="{{ $href }}" @if ($isExternal) target="_blank" rel="noopener" @endif>
                    {{ $item['label'] }}
                </a>
                @if (!empty($item['children']))
                    <ul class="list-unstyled mb-0 ms-3">
                        @foreach ($item['children'] as $child)
                            @php
                                $childHref = $child['url'] ?? '#';
                                $childExternal = $child['external'] ?? false;
                            @endphp
                            <li>
                                <a href="{{ $childHref }}"
                                    @if ($childExternal) target="_blank" rel="noopener" @endif>
                                    {{ $child['label'] }}
                                </a>
                            </li>
                        @endforeach
                    </ul>
                @endif
            </li>
        @endforeach
    </ul>
</nav>
