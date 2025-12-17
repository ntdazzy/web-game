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
        if (Schema::hasTable('wallet_transactions')) {
            return;
        }

        Schema::create('wallet_transactions', function (Blueprint $table) {
            $table->id();
            // Giữ kiểu int cho đồng bộ với bảng account gốc (id int(11))
            $table->integer('account_id')->index();
            $table->string('type', 20)->index();
            $table->decimal('amount', 12, 2);
            $table->string('ref_code')->nullable()->index();
            $table->json('meta')->nullable();
            $table->string('status', 20)->default('pending')->index();
            $table->timestamp('processed_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('wallet_transactions');
    }
};
