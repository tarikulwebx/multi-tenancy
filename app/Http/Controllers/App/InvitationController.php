<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use App\Http\Requests\App\StoreInvitationReq;
use App\Models\App\Invitation;
use App\Notifications\SentInvitationNotification;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;

class InvitationController extends Controller
{

    /**
     * Store a newly created resource in storage.
     */
    public function sendInvitation(StoreInvitationReq $request)
    {
        $invitation = Invitation::create([
            'email' => $request->email,
            'token' => Str::random(32),
        ]);

        Notification::route('mail', $request->email)
            ->notify(new SentInvitationNotification($invitation));

        return Redirect::back();
    }

    /**
     * Accept invitation
     */
    public function acceptInvitation(Request $request, $token)
    {
        $invitation = Invitation::where('token', $token)->whereNull('accepted_at')->firstOrFail();

        // two cases occure
        // 1. user is already logged in;
        // logout the current user and register the new user

        // 2. Redirect to register
        // redirect to register form with token


        // if loggedin, logout and redirect to register form
        if (auth()->check()) {

            $user = auth()->user();

            if ($user->email == $invitation->email) {
                $invitation->update(['accepted_at' => now()]);
                return Redirect::route('home');
            } else {
                // logout
                Auth::guard('web')->logout();
                $request->session()->invalidate();
                $request->session()->regenerateToken();

                return Redirect::route('register', ['token' => $invitation->token]);
            }

            // $invitation->update(['accepted_at' => now()]);
            // $tenantDomain = str_replace('://', '://' . tenant()->domains->first()->domain . ".", config('app.url'));

        } else {
            return Redirect::route('register', ['token' => $invitation->token]);
        }
    }


    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
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
    public function destroy(Invitation $invitation)
    {
        $invitation->delete();

        return Redirect::back();
    }
}
