<?php

namespace Database\Seeders;

use App\Models\Giftcode;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;

class GiftcodeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $giftcodes = [
            [
                'code' => 'HAITAC-TANTHU',
                'type' => 'single',
                'payload' => [
                    'gems' => 500,
                    'items' => ['ticket_all_blue' => 1],
                ],
                'expired_at' => null,
                'max_uses' => 1,
                'used_count' => 0,
                'status' => 'active',
            ],
            [
                'code' => 'HAITAC-WEEKEND',
                'type' => 'multi',
                'payload' => [
                    'beri' => 20000,
                    'energy' => 50,
                ],
                'expired_at' => Carbon::now()->addDays(30),
                'max_uses' => 1000,
                'used_count' => 125,
                'status' => 'active',
            ],
            [
                'code' => 'HTMN-GIFT-REFUND',
                'type' => 'compensation',
                'payload' => [
                    'gems' => 300,
                    'message' => 'Đền bù sự cố đăng nhập 10/2025',
                ],
                'expired_at' => Carbon::now()->addDays(14),
                'max_uses' => 5000,
                'used_count' => 890,
                'status' => 'active',
            ],
        ];

        foreach ($giftcodes as $data) {
            Giftcode::updateOrCreate(
                ['code' => $data['code']],
                $data
            );
        }
    }
}
