<?php

declare(strict_types=1);

use App\Http\Controllers\App\HomeController;
use App\Http\Controllers\App\InvitationController;
use App\Http\Controllers\App\ProfileController;
use App\Http\Controllers\App\UserController;
use Illuminate\Support\Facades\Route;
use Stancl\Tenancy\Middleware\InitializeTenancyByDomain;
use Stancl\Tenancy\Middleware\InitializeTenancyBySubdomain;
use Stancl\Tenancy\Middleware\PreventAccessFromCentralDomains;

/*
|--------------------------------------------------------------------------
| Tenant Routes
|--------------------------------------------------------------------------
|
| Here you can register the tenant routes for your application.
| These routes are loaded by the TenantRouteServiceProvider.
|
| Feel free to customize them however you want. Good luck!
|
*/

Route::middleware([
    'web',
    InitializeTenancyBySubdomain::class,
    PreventAccessFromCentralDomains::class,
])->group(function () {
    // Route::get('/', function () {
    //     return 'This is your multi-tenant application. The id of the current tenant is ' . tenant('id');
    // });


    Route::middleware('auth')->group(function () {
        Route::get("/", [HomeController::class, 'index'])->name('home');
        Route::redirect('/dashboard', '/', 301)->name('dashboard');
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

        Route::get('/users', [UserController::class, 'index'])->name('users.index');

        Route::post('/invitations', [InvitationController::class, 'sendInvitation'])->name('invitations.sent');
        Route::delete('/invitations/{invitation}', [InvitationController::class, 'destroy'])->name('invitations.delete');
    });

    Route::get('/invitations/{token}', [InvitationController::class, 'acceptInvitation'])->name('invitations.accept');

    require __DIR__ . '/tenant_auth.php';
});
