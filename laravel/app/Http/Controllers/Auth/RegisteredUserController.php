<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Illuminate\Validation\ValidationException;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): JsonResponse
    {
        try {
            $validator = $request->validate([
            'firstname' => ['required', 'string', 'max:255'],
            'lastname' => ['required', 'string', 'max:255'],
            'department' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.User::class],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'department' => $request->department,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));
       

        Auth::login($user);
         $token = $user->createToken($user->email.'api-token')->plainTextToken;    
        //  $token = $user->createToken('api-token');       
        return response()->json([
            'status' => 200,
            'user' => $user->firstname,
            'token' => $token,
            'message' => 'Registered Successfully'
        ], 200);
    }catch (ValidationException $e) {
        return response()->json([
            'status' => 422,
            'validation_errors' => $e->validator->getMessageBag(),
            'message' => 'Validation failed'
        ], 422);
    }
}
}   