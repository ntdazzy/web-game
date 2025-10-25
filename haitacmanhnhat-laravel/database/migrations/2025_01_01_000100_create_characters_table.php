<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('characters', function (Blueprint $table): void {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->integer('power')->nullable();
            $table->string('thumbnail')->nullable();
            $table->timestamps();

            $table->index('power');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('characters');
    }
};
