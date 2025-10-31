<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Http\Resources\TopupBonusResource;
use App\Models\TopupBonus;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Vite;
use Inertia\Inertia;
use Inertia\Response;

class WalletTopUpController extends Controller
{
    public function create(): Response
    {
        $user = Auth::user();

        $paymentTabs = [
            [
                'slug' => 'payment',
                'label' => 'Nạp tiền vào ví',
                'href' => route('wallet.topup'),
                'active' => true,
            ],
            [
                'slug' => 'package',
                'label' => 'Quà nạp web',
                'href' => null,
                'active' => false,
            ],
            [
                'slug' => 'convert',
                'label' => 'Nạp từ ví vào game',
                'href' => null,
                'active' => false,
            ],
        ];

        $paymentMethods = [
            [
                'id' => 1,
                'label' => 'ATM',
                'rate' => 50,
                'bonus_rate' => 0.2,
                'ribbon' => 'KM 20%',
                'image' => Vite::asset('resources/assets/images/payment/icon-payment-atm-2.png'),
                'image_variant' => 1,
            ],
            [
                'id' => 2,
                'label' => 'Ví',
                'rate' => 50,
                'bonus_rate' => 0.2,
                'ribbon' => 'KM 20%',
                'image' => Vite::asset('resources/assets/images/payment/icon-payment-wallet-2.png'),
                'image_variant' => 2,
            ],
            [
                'id' => 3,
                'label' => 'Ví MoMo',
                'rate' => 50,
                'bonus_rate' => 0.1,
                'ribbon' => 'KM 10%',
                'image' => Vite::asset('resources/assets/images/payment/icon-payment-momo-2.png'),
                'image_variant' => 3,
            ],
        ];

        $packages = [
            ['amount' => 10_000, 'gems' => 200, 'bonus_gems' => 40],
            ['amount' => 20_000, 'gems' => 400, 'bonus_gems' => 80],
            ['amount' => 50_000, 'gems' => 1_000, 'bonus_gems' => 200],
            ['amount' => 100_000, 'gems' => 2_000, 'bonus_gems' => 400],
            ['amount' => 200_000, 'gems' => 4_000, 'bonus_gems' => 800],
            ['amount' => 500_000, 'gems' => 10_000, 'bonus_gems' => 2_000],
            ['amount' => 1_000_000, 'gems' => 20_000, 'bonus_gems' => 4_000],
            ['amount' => 2_000_000, 'gems' => 40_000, 'bonus_gems' => 8_000],
            ['amount' => 3_000_000, 'gems' => 60_000, 'bonus_gems' => 12_000],
            ['amount' => 5_000_000, 'gems' => 100_000, 'bonus_gems' => 20_000],
            ['amount' => 10_000_000, 'gems' => 200_000, 'bonus_gems' => 40_000],
        ];

        $bonuses = TopupBonusResource::collection(
            TopupBonus::query()
                ->where('status', 'active')
                ->orderBy('sort_order')
                ->orderBy('name')
                ->get()
        );

        return Inertia::render('Account/Wallet/TopUp', [
            'user' => [
                'name' => $user?->name ?? 'Tân thủ',
                'gem_balance' => 0,
            ],
            'paymentTabs' => $paymentTabs,
            'paymentMethods' => $paymentMethods,
            'packages' => $packages,
            'bonuses' => $bonuses,
            'historyRoute' => route('wallet.history'),
            'meta' => [
                'body_class' => 'wrapper-subpage overflow-y-auto',
                'page_id' => 'wallet-topup',
            ],
        ]);
    }
}
