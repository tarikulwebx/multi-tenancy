<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use App\Http\Requests\App\StoreInvitationReq;
use App\Http\Resources\App\InvitationResource;
use App\Http\Resources\App\UserResource;
use App\Models\App\Invitation;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $invitations = Invitation::latest()->get();
        $users = User::latest()->get();
        return inertia('App/Users/Index', ['users' => UserResource::collection($users), 'invitations' => InvitationResource::collection($invitations)]);
    }

    public function invite(StoreInvitationReq $request)
    {
        $invitation = Invitation::create([
            'email' => $request->email,
            'token' => Str::random(32),
        ]);

        return Redirect::back();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
