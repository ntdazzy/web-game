<?php

namespace Database\Seeders;

use App\Models\Event;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $events = [
            [
                'title' => 'Vương Giả Chiến Lần 2',
                'slug' => 'vuong-gia-chien-lan-2-197',
                'excerpt' => 'Cuộc chiến Vương Giả Liên Server trở lại – sẵn sàng báo danh để nhận quà khủng!',
                'banner' => 'resources/assets/files/uploads/images/Banner/thumbnail-315x177/Sự-kiện.jpg',
                'published_at' => Carbon::parse('2025-10-14 10:00:00'),
                'starts_at' => Carbon::parse('2025-10-15 11:30:00'),
                'ends_at' => Carbon::parse('2025-10-28 23:59:00'),
                'status' => 'published',
                'content' => <<<'HTML'
<p><strong>Vương Giả Chiến</strong> mùa thứ 2 chính thức khởi tranh với 2 giai đoạn: vòng loại từng server và vòng chung kết liên server.</p>
<ul>
    <li>Đăng ký trực tiếp trong game từ 15/10 đến 16/10.</li>
    <li>Xếp hạng theo cơ chế Best-of-5, cập nhật lực chiến trước mỗi lượt đấu.</li>
    <li>Phần thưởng đặc biệt gồm danh vọng, nguyên liệu tăng tiến và quà trợ uy.</li>
</ul>
HTML,
            ],
            [
                'title' => 'Sự kiện Tuần 2 Tháng 10.2025',
                'slug' => 'su-kien-tuan-2-thang-10-2025-195',
                'excerpt' => 'Hoạt động tuần mới kèm ưu đãi nạp tích lũy và combo đăng nhập.',
                'banner' => 'resources/assets/files/uploads/images/Banner/thumbnail-315x177/Sự-kiện-tuần.jpg',
                'published_at' => Carbon::parse('2025-10-13 08:00:00'),
                'starts_at' => Carbon::parse('2025-10-13 00:00:00'),
                'ends_at' => Carbon::parse('2025-10-19 23:59:00'),
                'status' => 'published',
                'content' => <<<'HTML'
<p>Từ 13/10 tới 19/10, hoàn thành chuỗi nhiệm vụ tuần để nhận All Blue Ticket, vật phẩm thức tỉnh và hàng loạt quà cộng đồng.</p>
HTML,
            ],
            [
                'title' => 'Weekend 6-7/9',
                'slug' => 'weekend-6-7-9',
                'excerpt' => 'Weekend event với thời gian giới hạn – nhận ngay combo tăng lực chiến.',
                'banner' => 'resources/assets/files/uploads/images/Banner/thumbnail-315x177/Sự-kiện-đặc-biệt.jpg',
                'published_at' => Carbon::parse('2025-09-05 17:00:00'),
                'starts_at' => Carbon::parse('2025-09-06 00:00:00'),
                'ends_at' => Carbon::parse('2025-09-07 23:59:00'),
                'status' => 'published',
                'content' => <<<'HTML'
<p>Weekend 6-7/9 mang tới ưu đãi nạp 2 lần, quà đăng nhập đặc biệt và thử thách săn điểm đổi quà hiếm.</p>
HTML,
            ],
        ];

        foreach ($events as $data) {
            Event::updateOrCreate(
                ['slug' => $data['slug']],
                [
                    'title' => $data['title'],
                    'excerpt' => $data['excerpt'],
                    'content' => $data['content'],
                    'banner' => $data['banner'] ?? null,
                    'banner_url' => $data['banner_url'] ?? null,
                    'published_at' => $data['published_at'],
                    'starts_at' => $data['starts_at'],
                    'ends_at' => $data['ends_at'],
                    'status' => $data['status'],
                ]
            );
        }
    }
}
