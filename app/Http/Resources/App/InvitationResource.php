<?php

namespace App\Http\Resources\App;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class InvitationResource extends JsonResource
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
            'email' => $this->email,
            'created_at' => Carbon::parse($this->created_at)->diffForHumans(),
            'accepted_at' => Carbon::parse($this->accepted_at)->diffForHumans(),
        ];
    }
}
