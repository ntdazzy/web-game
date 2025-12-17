<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class NewPasswordController extends Controller
{
    /**
     * Display the password reset view.
     */
    public function create(Request $request): Response
    {
        return Inertia::render('Auth/ResetPassword', [
            'email' => $request->email,
            'token' => $request->route('token'),
            'navItems' => [
                [
                    'label' => 'Đăng nhập',
                    'href' => route('auth.login.vi'),
                    'active' => false,
                ],
                [
                    'label' => 'Đăng ký',
                    'href' => route('auth.register.vi'),
                    'active' => false,
                ],
                [
                    'label' => 'Quên mật khẩu',
                    'href' => route('password.request.vi'),
                    'active' => true,
                ],
            ],
            'meta' => [
                'body_class' => 'wrapper-subpage overflow-y-auto',
                'page_id' => 'auth-reset',
            ],
        ]);
    }

    /**
     * Handle an incoming new password request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        // Here we will attempt to reset the user's password. If it is successful we
        // will update the password on an actual user model and persist it to the
        // database. Otherwise we will parse the error and return the response.
        $status = Password::broker('accounts')->reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user) use ($request) {
                $user->forceFill([
                    'password' => $request->password, // plain-text theo DB account
                ])->save();

                event(new PasswordReset($user));
            }
        );

        // If the password was successfully reset, we will redirect the user back to
        // the application's home authenticated view. If there is an error we can
        // redirect them back to where they came from with their error message.
        if ($status == Password::PASSWORD_RESET) {
            if ($this->isLegacyAjax($request)) {
                return response()->json([
                    'status' => 1,
                    'msg' => __($status),
                    'data' => [
                        'redirect_url' => route('login'),
                    ],
                ]);
            }

            return redirect()->route('login')->with('status', __($status));
        }

        if ($this->isLegacyAjax($request)) {
            return response()->json([
                'status' => 0,
                'msg' => trans($status),
            ], 422);
        }

        throw ValidationException::withMessages([
            'email' => [trans($status)],
        ]);
    }

    private function isLegacyAjax(Request $request): bool
    {
        return ($request->ajax() || $request->expectsJson()) && ! $request->hasHeader('X-Inertia');
    }
}
