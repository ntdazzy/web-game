<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Post extends Model
{
    use HasFactory;

    /**
     * Bảng gốc trong cơ sở dữ liệu (nro.sql) có tên `posts`.
     */
    protected $table = 'posts';

    /**
     * Bảng chỉ có cột `created_at`, không có `updated_at`.
     */
    public $timestamps = false;

    /**
     * Danh sách cột có thể gán hàng loạt.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'tieude',
        'noidung',
        'username',
        'created_at',
        'theloai',
        'ghimbai',
        'image',
        'trangthai',
        'tinhtrang',
    ];

    /**
     * Caster cho các cột cần định dạng.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'created_at' => 'datetime',
    ];

    /**
     * Các field append giúp view sử dụng tên quen thuộc.
     *
     * @var array<int, string>
     */
    protected $appends = [
        'title',
        'content',
        'slug',
        'category_slug',
        'category_label',
    ];

    /**
     * Lấy slug đọc được từ tiêu đề.
     */
    public function getSlugAttribute(): string
    {
        $slug = Str::slug($this->tieude);

        return $slug !== '' ? $slug : (string) $this->getKey();
    }

    /**
     * Trả về tiêu đề với key quen thuộc.
     */
    public function getTitleAttribute(): string
    {
        return $this->tieude;
    }

    /**
     * Trả về nội dung với key quen thuộc.
     */
    public function getContentAttribute(): string
    {
        return $this->noidung;
    }

    public function getThumbnailAttribute(): ?string
    {
        return $this->image;
    }

    /**
     * Trả về slug danh mục (tin-tuc / su-kien / update).
     */
    public function getCategorySlugAttribute(): string
    {
        $map = static::categoryMap();
        $defaultKey = array_key_first($map) ?? 'tin-tuc';

        return (string) array_search($this->theloai, $map, true) ?: $defaultKey;
    }

    /**
     * Trả về nhãn danh mục đọc được.
     */
    public function getCategoryLabelAttribute(): string
    {
        return match ($this->getCategorySlugAttribute()) {
            'su-kien' => 'Sự kiện',
            'update' => 'Cập nhật',
            default => 'Tin tức',
        };
    }

    /**
     * Scope lọc theo slug danh mục.
     */
    public function scopeCategorySlug(Builder $query, string $slug): Builder
    {
        $map = static::categoryMap();
        $defaultKey = array_key_first($map) ?? array_key_first(['tin-tuc' => 0]);
        $categoryId = $map[$slug] ?? ($map[$defaultKey] ?? reset($map) ?? 0);

        return $query->where('theloai', $categoryId);
    }

    /**
     * Tra về ánh xạ slug => id từ config/posts.php.
     */
    protected static function categoryMap(): array
    {
        return config('posts.categories', [
            'tin-tuc' => 0,
            'su-kien' => 1,
            'update' => 2,
        ]);
    }
}
