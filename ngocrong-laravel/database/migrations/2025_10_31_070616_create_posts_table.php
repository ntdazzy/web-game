<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        if (Schema::hasTable('posts')) {
            return;
        }

        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('tieude', 75);
            $table->longText('noidung')->nullable();
            $table->string('username', 50)->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->integer('theloai')->default(0);
            $table->integer('ghimbai')->default(0);
            $table->string('image', 255)->nullable();
            $table->integer('trangthai')->default(0);
            $table->integer('tinhtrang')->default(0);
            $table->integer('like')->default(0);
            $table->integer('views')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
