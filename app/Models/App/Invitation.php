<?php

namespace App\Models\App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invitation extends Model
{
    use HasFactory;
    protected $fillable = [
        'email',
        'token',
        'accepted_at',
    ];
}
