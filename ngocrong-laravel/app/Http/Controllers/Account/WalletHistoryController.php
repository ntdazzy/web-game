<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Http\Resources\WalletTransactionResource;
use App\Models\WalletTransaction;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class WalletHistoryController extends Controller
{
    public function index(): Response
    {
        $user = Auth::user();

        $transactions = WalletTransaction::query()
            ->where('user_id', $user?->id)
            ->latest('processed_at')
            ->latest('created_at')
            ->limit(20)
            ->get();

        $typeOptions = [
            ['value' => 'pay', 'label' => 'Nạp tiền vào ví'],
            ['value' => 'package', 'label' => 'Quà nạp web'],
            ['value' => 'convert', 'label' => 'Nạp từ ví vào game'],
        ];

        return Inertia::render('Account/Wallet/History', [
            'transactions' => WalletTransactionResource::collection($transactions),
            'filters' => [
                'typeOptions' => $typeOptions,
            ],
            'meta' => [
                'body_class' => 'wrapper-subpage overflow-y-auto',
                'page_id' => 'wallet-history',
            ],
        ]);
    }
}
