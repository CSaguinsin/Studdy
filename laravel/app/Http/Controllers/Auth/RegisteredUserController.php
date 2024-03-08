<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
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
    public function __construct()
    {
        $this->middleware('guest');
    }
    public function store(RegisterRequest $request): JsonResponse
    {
        $validated = $request->validated();
        try {
            $user = User::create([
                'firstname' =>  $validated['firstname'], // Access validated data as an array
                'lastname' =>  $validated['lastname'],
                'department' =>  $validated['department'],
                'email' =>  $validated['email'],
                'password' => Hash::make($validated['password']),
            ]);

            event(new Registered($user));


            Auth::login($user);
            $token = $user->createToken($user->email . 'api-token')->plainTextToken;
            //  $token = $user->createToken('api-token');       
            return response()->json([
                'status' => 200,
                'user' => $user->firstname,
                'token' => $token,
                'message' => 'Registered Successfully'
            ], 200);
            
        } catch (ValidationException $e) {
            return response()->json([
                'status' => 422,
                'validation_errors' => $e->validator->getMessageBag(),
                'message' => 'Validation failed'
            ], 422);
        }
    }
}
