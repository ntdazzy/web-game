<?php

namespace Database\Seeders;

use App\Models\Account;
use App\Models\WalletTransaction;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;

class WalletTransactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = Account::first() ?? Account::create([
            'username' => 'captain',
            'email' => 'captain@example.com',
            'password' => '123456',
            'active' => 1,
        ]);

        $transactions = [
            [
                'type' => WalletTransaction::TYPE_TOPUP,
                'amount' => 500_000,
                'ref_code' => 'TOPUP-001',
                'status' => 'completed',
                'processed_at' => Carbon::now()->subDays(2),
                'meta' => [
                    'method' => 'momo',
                    'receipt' => 'MMO123456',
                ],
            ],
            [
                'type' => WalletTransaction::TYPE_SPEND,
                'amount' => 150_000,
                'ref_code' => 'SPEND-001',
                'status' => 'completed',
                'processed_at' => Carbon::now()->subDay(),
                'meta' => [
                    'description' => 'Mua gói All Blue',
                ],
            ],
            [
                'type' => WalletTransaction::TYPE_REFUND,
                'amount' => 50_000,
                'ref_code' => 'REFUND-001',
                'status' => 'pending',
                'processed_at' => null,
                'meta' => [
                    'reason' => 'Hoàn tiền lỗi giao dịch',
                ],
            ],
        ];

        foreach ($transactions as $transaction) {
            WalletTransaction::updateOrCreate(
                [
                    'ref_code' => $transaction['ref_code'],
                ],
                [
                    'account_id' => $user->id,
                    'type' => $transaction['type'],
                    'amount' => $transaction['amount'],
                    'meta' => $transaction['meta'],
                    'status' => $transaction['status'],
                    'processed_at' => $transaction['processed_at'],
                ]
            );
        }
    }
}
