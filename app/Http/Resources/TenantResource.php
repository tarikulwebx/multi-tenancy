<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TenantResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $centralDomains = config('tenancy.central_domains');

        return [
            'name' => $this->name,
            'plan' => $this->plan,
            'created_at' => Carbon::parse($this->created_at)->diffForHumans(),
            'domain' => "http://" . $this->domains()->pluck('domain')->first() . "." . $centralDomains[1] . ":8000",
        ];
    }
}
