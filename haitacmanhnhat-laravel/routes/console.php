<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\File;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

Artisan::command('app:sync-assets', function () {
    $source = resource_path('assets');
    $destination = public_path('assets');

    if (! File::exists($source)) {
        $this->error('Thư mục nguồn resources/assets không tồn tại.');
        return;
    }

    try {
        if (File::exists($destination)) {
            File::deleteDirectory($destination);
        }

        File::makeDirectory($destination, 0755, true);
        File::copyDirectory($source, $destination);
    } catch (\Throwable $exception) {
        $this->error('Không thể đồng bộ assets: ' . $exception->getMessage());
        return;
    }

    $this->info('Đã đồng bộ static assets sang public/assets.');
})->purpose('Đồng bộ assets legacy vào thư mục public/assets');
