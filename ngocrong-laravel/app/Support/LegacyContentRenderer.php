<?php

namespace App\Support;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Vite;

class LegacyContentRenderer
{
    /**
     * Thay thế placeholder [[asset|path]] bằng URL Vite tương ứng.
     */
    public function render(?string $html): string
    {
        if (blank($html)) {
            return '';
        }

        $transformed = preg_replace_callback('/\[\[asset\|([^\]]+)\]\]/u', function (array $matches) {
            $relative = trim($matches[1]);

            if ($relative === '') {
                return '';
            }

            // Nếu đã bao gồm resources/assets -> sử dụng trực tiếp, ngược lại tự động prefix.
            if (Str::startsWith($relative, 'resources/assets/')) {
                $path = $relative;
            } else {
                $path = 'resources/assets/'.ltrim($relative, '/');
            }

            return Vite::asset($path);
        }, $html);

        return $transformed ?? (string) $html;
    }
}

