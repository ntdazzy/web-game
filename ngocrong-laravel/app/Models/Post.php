<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;

class Post extends Model
{
    use HasFactory;

    protected $table = 'posts';

    public $timestamps = false;

    protected $fillable = [
        'tieude',
        'noidung',
        'username',
        'theloai',
        'ghimbai',
        'image',
        'trangthai',
        'tinhtrang',
        'like',
        'views',
    ];

    protected $casts = [
        'created_at' => 'datetime',
    ];

    protected $appends = [
        'title',
        'content',
        'slug',
        'excerpt',
        'category_label',
        'type',
        'published_at',
        'cover_image',
        'cover_image_url',
    ];

    public function getTitleAttribute(): string
    {
        return (string) $this->tieude;
    }

    public function getContentAttribute(): ?string
    {
        return $this->noidung;
    }

    public function getSlugAttribute(): string
    {
        return Str::slug($this->title.'-'.$this->id);
    }

    public function getExcerptAttribute(): string
    {
        $plain = strip_tags((string) $this->noidung);

        return Str::limit($plain, 180);
    }

    public function getCategoryLabelAttribute(): string
    {
        return match ($this->theloai) {
            1 => 'Update',
            default => 'Tin tức',
        };
    }

    public function scopePublished(Builder $query): Builder
    {
        // Dữ liệu cũ không có cờ publish rõ ràng, ưu tiên không lọc để hiển thị đầy đủ
        return $query;
    }

    public function getTypeAttribute(): string
    {
        return match ($this->theloai) {
            1 => 'update',
            default => 'news',
        };
    }

    public function scopeOfType(Builder $query, string $type): Builder
    {
        $map = [
            'news' => 0,
            'update' => 1,
            'event' => 2,
        ];

        if (array_key_exists($type, $map)) {
            return $query->where('theloai', $map[$type]);
        }

        return $query;
    }

    public function resolveRouteBinding($value, $field = null)
    {
        if (is_numeric($value)) {
            return $this->whereKey($value)->first();
        }

        $id = (int) Str::afterLast($value, '-');

        if ($id > 0) {
            return $this->find($id);
        }

        return $this->where('id', $value)->first();
    }

    public function getPublishedAtAttribute()
    {
        return $this->created_at;
    }

    public function getCoverImageAttribute(): ?string
    {
        return $this->image ?? null;
    }

    public function getCoverImageUrlAttribute(): ?string
    {
        return null;
    }
}
