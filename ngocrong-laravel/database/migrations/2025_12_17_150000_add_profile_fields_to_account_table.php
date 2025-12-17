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
        Schema::table('account', function (Blueprint $table) {
            if (! Schema::hasColumn('account', 'full_name')) {
                $table->string('full_name', 120)->nullable()->after('username');
            }

            if (! Schema::hasColumn('account', 'gender')) {
                $table->tinyInteger('gender')->nullable()->after('full_name');
            }

            if (! Schema::hasColumn('account', 'birthday')) {
                $table->date('birthday')->nullable()->after('gender');
            }

            if (! Schema::hasColumn('account', 'phone')) {
                $table->string('phone', 20)->nullable()->after('birthday');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('account', function (Blueprint $table) {
            if (Schema::hasColumn('account', 'phone')) {
                $table->dropColumn('phone');
            }
            if (Schema::hasColumn('account', 'birthday')) {
                $table->dropColumn('birthday');
            }
            if (Schema::hasColumn('account', 'gender')) {
                $table->dropColumn('gender');
            }
            if (Schema::hasColumn('account', 'full_name')) {
                $table->dropColumn('full_name');
            }
        });
    }
};
