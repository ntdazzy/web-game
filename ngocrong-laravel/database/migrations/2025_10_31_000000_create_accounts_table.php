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
        if (Schema::hasTable('account')) {
            return;
        }

        Schema::create('account', function (Blueprint $table) {
            $table->id();
            $table->string('username', 20)->unique();
            $table->string('password', 100);
            $table->string('email', 255)->nullable();
            $table->timestamp('create_time')->useCurrent();
            $table->timestamp('update_time')->useCurrent()->useCurrentOnUpdate();
            $table->smallInteger('ban')->default(0);
            $table->integer('point_post')->default(0);
            $table->integer('last_post')->default(0);
            $table->integer('role')->default(-1);
            $table->boolean('is_admin')->default(false);
            $table->timestamp('last_time_login')->default('2002-07-30 17:00:00');
            $table->timestamp('last_time_logout')->default('2002-07-30 17:00:00');
            $table->string('ip_address', 50)->nullable();
            $table->integer('active')->default(0);
            $table->integer('thoi_vang')->default(0);
            $table->integer('server_login')->default(-1);
            $table->integer('cash')->default(0);
            $table->integer('vnd')->default(0);
            $table->integer('tongnap')->default(0);
            $table->string('token')->nullable();
            $table->string('xsrf_token')->nullable();
            $table->string('newpass')->nullable();
            $table->integer('luotquay')->default(0);
            $table->bigInteger('vang')->default(0);
            $table->integer('event_point')->default(0);
            $table->integer('vip')->default(4);
            $table->string('mkc2')->nullable();
            $table->integer('admin')->default(0);
            $table->integer('gioithieu')->nullable();
            $table->string('gmail', 100)->nullable();
            $table->integer('tichdiem')->default(0);
            $table->rememberToken();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('account');
    }
};
