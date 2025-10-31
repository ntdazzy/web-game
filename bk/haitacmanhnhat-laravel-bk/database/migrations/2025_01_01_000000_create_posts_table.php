<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('posts')) {
            return;
        }

        Schema::create('posts', function (Blueprint $table): void {
            $table->id();
            $table->string('tieude', 75);
            $table->text('noidung');
            $table->string('username', 50);
            $table->timestamp('created_at')->useCurrent();
            $table->unsignedTinyInteger('theloai')->default(0);
            $table->unsignedTinyInteger('ghimbai')->default(0);
            $table->string('image')->nullable();
            $table->unsignedTinyInteger('trangthai')->default(0);
            $table->unsignedTinyInteger('tinhtrang')->default(0);

            $table->index('theloai');
            $table->index('created_at');
            $table->index('ghimbai');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
