<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $authorId = optional(User::first())->id;

        $posts = [
            [
                'title' => '10H 18/10 - Khai mở máy chủ S33',
                'slug' => '10h-18-10-khai-mo-may-chu-s33-179',
                'excerpt' => 'Máy chủ S33 chính thức ra mắt cùng loạt phần thưởng hấp dẫn dành cho tân thủ.',
                'cover_image' => 'resources/assets/files/uploads/images/Banner/Thumbnail 315x177/SERVER-mới.jpg',
                'cover_image_url' => null,
                'published_at' => Carbon::parse('2025-10-17 09:00:00'),
                'status' => 'published',
                'content' => <<<'HTML'
<p><strong>10h ngày 18/10/2025 – cánh cổng Đại hải trình mở ra!</strong> Máy chủ S33 chính thức khai hỏa, kêu gọi những hải tặc tinh anh lên đường chinh phục đại dương và viết nên huyền thoại của riêng mình.</p>
<ul>
    <li>Đăng nhập nhận quà khủng – combo tướng xịn và beri miễn phí.</li>
    <li>Đua top lực chiến nhận trang bị giới hạn.</li>
    <li>Chuỗi sự kiện cộng đồng xuyên suốt tuần lễ khai mở.</li>
</ul>
HTML,
            ],
            [
                'title' => 'Sự kiện Tuần 2 Tháng 10.2025',
                'slug' => 'su-kien-tuan-2-thang-10-2025-195',
                'excerpt' => 'Tổng hợp toàn bộ hoạt động đặc sắc và ưu đãi trong tuần 2 tháng 10.',
                'cover_image' => 'resources/assets/files/uploads/images/Banner/Thumbnail 315x177/Sự-kiện-tuần.jpg',
                'published_at' => Carbon::parse('2025-10-13 08:30:00'),
                'status' => 'published',
                'content' => <<<'HTML'
<p>Đừng bỏ lỡ chuỗi nhiệm vụ tuần với hàng loạt phần thưởng độc đáo. Hãy hoàn thành nhiệm vụ để nhận:</p>
<ol>
    <li>Combo nguyên liệu nâng cấp hiếm.</li>
    <li>Phiếu quay All Blue miễn phí.</li>
    <li>Ưu đãi nạp tích lũy quay trở lại cùng nhiều quà tặng bất ngờ.</li>
</ol>
HTML,
            ],
            [
                'title' => 'Vương Giả Chiến Lần 2',
                'slug' => 'vuong-gia-chien-lan-2-197',
                'excerpt' => 'Cuộc chiến Vương Giả trở lại với thể thức Liên Sever cùng kho phần thưởng giá trị.',
                'cover_image' => 'resources/assets/files/uploads/images/Banner/Thumbnail 315x177/Sự-kiện.jpg',
                'published_at' => Carbon::parse('2025-10-14 10:15:00'),
                'status' => 'published',
                'content' => <<<'HTML'
<p>Vương Giả Chiến lần 2 chính thức khởi tranh. Các Thuyền Trưởng hãy báo danh để:</p>
<ul>
    <li>Tranh tài với những đội hình mạnh nhất toàn máy chủ.</li>
    <li>Nhận gói quà cổ vũ độc quyền khi trợ uy quán quân.</li>
    <li>Ghi danh vào bảng vàng vinh quang của Hải Tặc Mạnh Nhất.</li>
</ul>
HTML,
            ],
        ];

        foreach ($posts as $data) {
            Post::updateOrCreate(
                ['slug' => $data['slug']],
                array_merge($data, [
                    'title' => $data['title'],
                    'excerpt' => $data['excerpt'],
                    'content' => $data['content'],
                    'cover_image' => $data['cover_image'] ?? null,
                    'cover_image_url' => $data['cover_image_url'] ?? null,
                    'published_at' => $data['published_at'],
                    'status' => $data['status'],
                    'author_id' => $authorId,
                ])
            );
        }
    }
}
