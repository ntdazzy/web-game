<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EventResource extends JsonResource
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
            'excerpt' => $this->whenNotNull($this->excerpt),
            'content' => $this->when($request->routeIs('events.show'), $this->content),
            'banner' => $this->whenNotNull($this->banner),
            'banner_url' => $this->whenNotNull($this->banner_url),
            'starts_at' => optional($this->starts_at)->toIso8601String(),
            'ends_at' => optional($this->ends_at)->toIso8601String(),
            'published_at' => optional($this->published_at)->toIso8601String(),
            'status' => $this->status,
            'links' => [
                'web' => route('events.show', $this->slug),
            ],
        ];
    }
}
