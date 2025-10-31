<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'type' => $this->type,
            'category_label' => $this->category_label,
            'excerpt' => $this->whenNotNull($this->excerpt),
            'content' => $this->when($request->routeIs('posts.show'), $this->content),
            'cover_image' => $this->whenNotNull($this->cover_image),
            'cover_image_url' => $this->whenNotNull($this->cover_image_url),
            'published_at' => optional($this->published_at)->toIso8601String(),
            'status' => $this->status,
            'author' => $this->whenLoaded('author', function () {
                return [
                    'id' => $this->author->id,
                    'name' => $this->author->name,
                ];
            }),
            'links' => [
                'web' => route('news.show', $this->slug),
            ],
        ];
    }
}
