<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\File;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

Artisan::command('app:sync-assets', function () {
    $mappings = [
        ['resources/css/legacy', 'assets/css'],
        ['resources/js/legacy', 'assets/js'],
        ['resources/data/legacy', 'assets/data'],
        ['resources/static/fonts', 'assets/fonts'],
        ['resources/static/webfonts', 'assets/webfonts'],
        ['resources/static/images', 'assets/images'],
        ['resources/static/imgs', 'assets/imgs'],
        ['resources/static/videos', 'assets/videos'],
        ['resources/static/files', 'assets/files'],
        ['resources/static/dl', 'assets/dl'],
        ['resources/static/stms', 'assets/stms'],
    ];

    $synced = 0;

    if (File::exists(public_path('assets'))) {
        File::deleteDirectory(public_path('assets'));
    }

    foreach ($mappings as [$source, $target]) {
        $absoluteSource = base_path(trim($source, '/'));

        if (! File::exists($absoluteSource)) {
            continue;
        }

        $destination = public_path($target);

        try {
            File::ensureDirectoryExists(dirname($destination), 0755);
            File::copyDirectory($absoluteSource, $destination);
            $synced++;
        } catch (\Throwable $exception) {
            $this->error("Không thể đồng bộ {$source} -> {$target}: {$exception->getMessage()}");
            return;
        }
    }

    if ($synced === 0) {
        $this->warn('Không tìm thấy thư mục legacy nào để đồng bộ.');
    } else {
        $this->info("Đã đồng bộ {$synced} thư mục legacy vào public/assets.");
    }
})->purpose('Đồng bộ assets legacy vào thư mục public/assets');
