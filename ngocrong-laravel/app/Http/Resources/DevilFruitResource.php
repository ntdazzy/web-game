<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DevilFruitResource extends JsonResource
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
            'legacy_id' => $this->legacy_id,
            'uid' => $this->uid,
            'name' => $this->name,
            'slug' => $this->slug,
            'category' => $this->category,
            'effect' => $this->effect,
            'quality' => $this->quality,
            'type' => $this->type,
            'status' => $this->status,
            'sort_order' => $this->sort_order,
            'image' => $this->image,
            'image_url' => $this->image_url,
            'description' => $this->description,
            'properties' => $this->properties,
            'metadata' => $this->metadata,
            'created_at' => optional($this->created_at)->toIso8601String(),
            'updated_at' => optional($this->updated_at)->toIso8601String(),
        ];
    }
}
