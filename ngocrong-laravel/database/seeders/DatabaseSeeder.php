<?php

namespace Database\Seeders;

use App\Models\Account;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Account::firstOrCreate(
            ['username' => 'captain'],
            [
                'email' => 'captain@haitacmanhnhat.local',
                'password' => 'password',
                'active' => 1,
            ],
        );

        $this->call([
            EventSeeder::class,
            GiftcodeSeeder::class,
            WalletTransactionSeeder::class,
            CharacterSeeder::class,
            DevilFruitSeeder::class,
            TopupBonusSeeder::class,
        ]);
    }
}
