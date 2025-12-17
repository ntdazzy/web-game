<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Http\Resources\TopupBonusResource;
use App\Models\TopupBonus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\Collection;
use Inertia\Inertia;
use Inertia\Response;

class WalletTopUpController extends Controller
{
    public function create(Request $request): Response
    {
        $user = Auth::user();

        $activeTab = $request->string('tab')->toString();
        $validTabs = ['payment', 'package', 'convert'];
        if (!in_array($activeTab, $validTabs, true)) {
            $activeTab = 'payment';
        }

        $paymentTabs = [
            [
                'slug' => 'payment',
                'label' => 'Nạp tiền vào ví',
                'href' => route('wallet.topup', ['tab' => 'payment']),
                'active' => $activeTab === 'payment',
            ],
            [
                'slug' => 'package',
                'label' => 'Quà nạp web',
                'href' => route('wallet.topup', ['tab' => 'package']),
                'active' => $activeTab === 'package',
            ],
            [
                'slug' => 'convert',
                'label' => 'Từ ví vào game',
                'href' => route('wallet.topup', ['tab' => 'convert']),
                'active' => $activeTab === 'convert',
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

        $bonusQuery = TopupBonus::query()
            ->where('status', 'active')
            ->orderBy('sort_order')
            ->orderBy('name')
            ->get();

        $bonuses = $bonusQuery->isNotEmpty()
            ? TopupBonusResource::collection($bonusQuery)
            : $this->fallbackBonuses();

        return Inertia::render('Account/Wallet/TopUp', [
            'user' => [
                'name' => $user?->name ?? 'Tân thủ',
                'gem_balance' => (int) ($user?->cash ?? 0),
            ],
            'paymentTabs' => $paymentTabs,
            'paymentMethods' => $paymentMethods,
            'packages' => $packages,
            'bonuses' => $bonuses,
            'historyRoute' => route('wallet.history'),
            'activeTab' => $activeTab,
            // Game chỉ có 1 server, cố định để không phát sinh lỗi thiếu cột/không có nhân vật
            'servers' => ['NRO Heroes'],
            'meta' => [
                'body_class' => 'wrapper-subpage overflow-y-auto',
                'page_id' => 'wallet-topup',
            ],
        ]);
    }

    /**
     * Dữ liệu dự phòng để UI quà nạp web không bị trống khi chưa nhập CMS.
     */
    protected function fallbackBonuses(): Collection
    {
        return collect([
            [
                'id' => 'daily-pack',
                'name' => 'Gói nạp ngày',
                'description' => 'Bộ quà nạp ngày mang lại tài nguyên cơ bản để tăng tiến.',
                'rewards' => [
                    ['name' => '500 Đá năng lượng', 'quantity' => 2],
                    ['name' => 'Bánh Rượu Nort Blue', 'quantity' => 5],
                    ['name' => 'Túi N.Liệu bậc thường', 'quantity' => 2],
                    ['name' => '100 Tử thần', 'quantity' => 2],
                    ['name' => 'Túi K.cường cỡ đại', 'quantity' => 2],
                ],
            ],
            [
                'id' => 'weekly-pack',
                'name' => 'Gói nạp tuần',
                'description' => 'Cung cấp vật phẩm nâng cấp hiếm và đá khác đòn.',
                'rewards' => [
                    ['name' => 'Mũi Tấn Công', 'quantity' => 2],
                    ['name' => 'Túi nuôi cá AllBlue random', 'quantity' => 10],
                    ['name' => '300 Đá Nguyên tử', 'quantity' => 5],
                    ['name' => 'Đá khác đòn', 'quantity' => 125],
                    ['name' => 'Mảnh Phiến Poneglyph', 'quantity' => 25],
                ],
            ],
            [
                'id' => 'monthly-pack',
                'name' => 'Gói nạp tháng',
                'description' => 'Quà nạp tháng đặc biệt với tướng hiếm và tài nguyên cao cấp.',
                'rewards' => [
                    ['name' => 'Mảnh tướng SS tùy chọn', 'quantity' => 50],
                    ['name' => 'Tinh thể tăng sao', 'quantity' => 20],
                    ['name' => 'Đá thức tỉnh', 'quantity' => 100],
                    ['name' => 'Vé quay All Blue', 'quantity' => 30],
                    ['name' => 'Thẻ EXP cao cấp', 'quantity' => 30],
                ],
            ],
        ]);
    }
}
