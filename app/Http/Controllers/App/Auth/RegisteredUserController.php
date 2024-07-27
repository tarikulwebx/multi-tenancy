<?php

namespace App\Http\Controllers\App\Auth;

use App\Http\Controllers\Controller;
use App\Models\App\Invitation;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        $invitationEmail = NULL;
        $invitationToken = NULL;
        if (request('token')) {
            $invitation = Invitation::where('token', request('token'))->whereNull('accepted_at')->firstOrFail();
            $invitationEmail = $invitation->email;
            $invitationToken = $invitation->token;
        }

        return Inertia::render('App/Auth/Register', ['invitationEmail' => $invitationEmail, 'invitationToken' => $invitationToken]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $email = $request->email;
        if ($request->token) {
            $invitation = Invitation::where('token', $request->token)->whereNull('accepted_at')->first();

            if (!$invitation) {
                return Redirect::back()->withInput()->withErrors(['email' => 'Invitation link incorrect']);
            }

            $email = $invitation->email;
            $invitation->update(['accepted_at' => now()]);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('dashboard', absolute: false));
    }
}
