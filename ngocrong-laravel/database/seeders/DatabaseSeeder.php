<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $user = User::firstOrCreate(
            ['email' => 'captain@haitacmanhnhat.local'],
            [
                'name' => 'Demo Captain',
                'password' => bcrypt('password'),
            ],
        );

        $this->call([
            PostSeeder::class,
            EventSeeder::class,
            GiftcodeSeeder::class,
            WalletTransactionSeeder::class,
        ]);
    }
}
