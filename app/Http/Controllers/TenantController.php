<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterTenantRequest;
use App\Http\Resources\TenantResource;
use App\Models\Sync\CentralUser;
use App\Models\Sync\TenantUser;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class TenantController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $user = $request->user();
        $centralUser = CentralUser::findOrFail($user->id);
        $tenants = $centralUser->tenants;

        return inertia('Tenants/Index', ['tenants' => TenantResource::collection($tenants)]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Tenants/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RegisterTenantRequest $request)
    {
        $data = $request->validated();
        $user = $request->user();

        $tenant = Tenant::create([
            'name' => $data['name'],
            'plan' => 'free',
        ]);

        $tenant->domains()->create(['domain' => $data['subdomain']]);

        tenancy()->initialize($tenant);

        TenantUser::create([
            'id'       => $user->id,
            'name'     => $user->name,
            'email'    => $user->email,
            'password' => $user->password,
        ]);

        return Redirect::route('tenant.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Tenant $tenant)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tenant $tenant)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Tenant $tenant)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tenant $tenant)
    {
        //
    }
}
