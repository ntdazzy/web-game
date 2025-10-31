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
                'type' => 'news',
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
                'type' => 'news',
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
                'title' => 'Cập Nhật Điều Chỉnh Tướng Tháng 10',
                'slug' => 'cap-nhat-dieu-chinh-tuong-thang-10-199',
                'type' => 'update',
                'excerpt' => 'Thông báo điều chỉnh cân bằng tướng trong phiên bản tháng 10.',
                'cover_image' => 'resources/assets/files/uploads/images/Banner/Thumbnail 315x177/Update.jpg',
                'published_at' => Carbon::parse('2025-10-10 12:00:00'),
                'status' => 'published',
                'content' => <<<'HTML'
<p>Bản cập nhật tháng 10 mang đến một loạt điều chỉnh quan trọng cho dàn tướng, đảm bảo trường đấu công bằng hơn cho mọi Thuyền Trưởng.</p>
<ul>
    <li>Tăng sức mạnh của nhóm tướng hỗ trợ đường sau.</li>
    <li>Điều chỉnh sát thương và phòng thủ của một số tướng chủ lực.</li>
    <li>Bổ sung thêm hiệu ứng cho bộ kỹ năng đặc biệt.</li>
</ul>
HTML,
            ],
            [
                'title' => 'Cập Nhật Tính Năng Phiên Bản Tháng 9',
                'slug' => 'cap-nhat-tinh-nang-phien-ban-thang-9-151',
                'type' => 'update',
                'excerpt' => 'Phiên bản tháng 9 giới thiệu loạt tính năng giúp tối ưu trải nghiệm chuỗi hoạt động hàng ngày.',
                'cover_image' => 'resources/assets/files/uploads/images/Banner/Thumbnail 315x177/Update.jpg',
                'published_at' => Carbon::parse('2025-09-03 09:00:00'),
                'status' => 'published',
                'content' => <<<'HTML'
<p>Các tính năng mới trong bản cập nhật tháng 9 giúp Thuyền Trưởng theo dõi tiến trình dễ dàng và tìm kiếm tổ đội nhanh hơn.</p>
<ul>
    <li>Giao diện quản lý nhiệm vụ được làm mới.</li>
    <li>Thêm bộ lọc trang bị nâng cao.</li>
    <li>Cải tiến hệ thống thông báo hoạt động liên server.</li>
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
