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
        Schema::create('devil_fruits', function (Blueprint $table): void {
            $table->id();
            $table->unsignedBigInteger('legacy_id')->nullable()->index();
            $table->string('uid')->nullable()->index();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('category', 30)->default('standard')->index();
            $table->string('effect')->nullable();
            $table->unsignedTinyInteger('quality')->nullable();
            $table->unsignedTinyInteger('type')->nullable();
            $table->unsignedTinyInteger('status')->nullable();
            $table->unsignedInteger('sort_order')->default(0)->index();
            $table->string('image')->nullable();
            $table->text('description')->nullable();
            $table->json('properties')->nullable();
            $table->json('metadata')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('devil_fruits');
    }
};
