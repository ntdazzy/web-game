<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Account;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class PasswordResetLinkController extends Controller
{
    /**
     * Display the password reset link request view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/ForgotPassword', [
            'status' => session('status'),
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
                'page_id' => 'auth-forgot',
            ],
        ]);
    }

    /**
     * Handle an incoming password reset link request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'email' => ['required', 'email'],
            'captcha_token' => ['nullable', 'string'],
        ]);

        $account = Account::query()->where('email', $data['email'])->first();

        if (! $account) {
            $message = __('Email không tồn tại trong hệ thống.');

            if ($this->isLegacyAjax($request)) {
                return response()->json([
                    'status' => 0,
                    'msg' => $message,
                ], 422);
            }

            throw ValidationException::withMessages([
                'email' => [$message],
            ]);
        }

        $this->ensureCaptchaPasses($data['captcha_token'] ?? null, $request);

        $status = Password::broker('accounts')->sendResetLink(
            ['email' => $data['email']]
        );

        if ($status === Password::RESET_LINK_SENT) {
            $successMsg = __('Liên kết đặt lại mật khẩu đã được gửi đến email của bạn.');

            if ($this->isLegacyAjax($request)) {
                return response()->json([
                    'status' => 1,
                    'msg' => $successMsg,
                ]);
            }

            return back()->with('status', $successMsg);
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

    private function ensureCaptchaPasses(?string $token, Request $request): void
    {
        $enabled = (bool) config('services.turnstile.enabled', false);
        $secret = config('services.turnstile.secret_key');

        if (! $enabled || ! $secret) {
            return;
        }

        if (! $token) {
            throw ValidationException::withMessages([
                'captcha' => __('Vui lòng xác thực captcha.'),
            ]);
        }

        $response = \Illuminate\Support\Facades\Http::asForm()
            ->timeout(8)
            ->post('https://challenges.cloudflare.com/turnstile/v0/siteverify', [
                'secret' => $secret,
                'response' => $token,
                'remoteip' => $request->ip(),
            ]);

        if (! $response->ok() || ! data_get($response->json(), 'success')) {
            throw ValidationException::withMessages([
                'captcha' => __('Captcha không hợp lệ.'),
            ]);
        }
    }
}
