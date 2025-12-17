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
        if (Schema::hasTable('player')) {
            return;
        }

        Schema::create('player', function (Blueprint $table) {
            $table->id();
            $table->foreignId('account_id')->constrained('account')->cascadeOnDelete();
            $table->string('name', 20);
            $table->bigInteger('power')->default(0);
            $table->integer('head')->default(102);
            $table->integer('gender')->default(0);
            $table->boolean('have_tennis_space_ship')->default(false);
            $table->integer('clan_id')->default(-1);
            $table->string('server')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('player');
    }
};
