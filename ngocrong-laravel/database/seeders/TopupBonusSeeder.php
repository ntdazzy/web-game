<?php

namespace Database\Seeders;

use App\Models\TopupBonus;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class TopupBonusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $bonuses = [
            [
                'name' => 'Gói nạp ngày',
                'code' => 'daily-pack',
                'category' => 'web-topup',
                'description' => 'Bộ quà nạp ngày mang lại tài nguyên cơ bản để tăng tốc đội hình.',
                'rewards' => [
                    ['name' => '500 đá năng lượng', 'quantity' => 2],
                    ['name' => 'Bình Rượu Nort Blue', 'quantity' => 5],
                    ['name' => 'Túi N.Liệu bá khí thường', 'quantity' => 2],
                    ['name' => '100 Tử hồn', 'quantity' => 2],
                    ['name' => 'Túi K.cương cổ đại', 'quantity' => 2],
                ],
            ],
            [
                'name' => 'Gói nạp tuần',
                'code' => 'weekly-pack',
                'category' => 'web-topup',
                'description' => 'Gói nạp tuần cung cấp vật phẩm nâng cấp hiếm và đá khắc ấn.',
                'rewards' => [
                    ['name' => 'Mũi Tên TY', 'quantity' => 2],
                    ['name' => 'Túi nuôi cá AllBlue random', 'quantity' => 10],
                    ['name' => '300 Đá Nguyên tố', 'quantity' => 5],
                    ['name' => 'Đá khắc ấn', 'quantity' => 125],
                    ['name' => 'Mảnh Phiến Poneglyph', 'quantity' => 25],
                ],
            ],
            [
                'name' => 'Gói nạp tháng',
                'code' => 'monthly-pack',
                'category' => 'web-topup',
                'description' => 'Gói nạp tháng đặc biệt với tướng hiếm và tài nguyên cao cấp.',
                'rewards' => [
                    ['name' => 'Mảnh tướng SS tùy chọn', 'quantity' => 50],
                    ['name' => 'Tinh thể tăng sao', 'quantity' => 20],
                    ['name' => 'Đá thức tỉnh', 'quantity' => 100],
                    ['name' => 'Vé quay All Blue', 'quantity' => 30],
                    ['name' => 'Thẻ EXP cao cấp', 'quantity' => 30],
                ],
            ],
        ];

        foreach ($bonuses as $index => $bonus) {
            TopupBonus::updateOrCreate(
                ['slug' => Str::slug(Arr::get($bonus, 'code', Arr::get($bonus, 'name')))],
                [
                    'name' => Arr::get($bonus, 'name'),
                    'code' => Arr::get($bonus, 'code'),
                    'category' => Arr::get($bonus, 'category', 'web-topup'),
                    'description' => Arr::get($bonus, 'description'),
                    'rewards' => Arr::get($bonus, 'rewards', []),
                    'metadata' => Arr::get($bonus, 'metadata'),
                    'sort_order' => $index + 1,
                    'status' => 'active',
                ],
            );
        }
    }
}
