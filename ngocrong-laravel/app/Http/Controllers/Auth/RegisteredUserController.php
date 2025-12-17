<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Account;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(Request $request): Response
    {
        $redirect = $this->cleanRedirect($request->query('redirect'));

        return Inertia::render('Auth/Register', [
            'redirect' => $redirect,
            'navItems' => [
                [
                    'label' => 'Dang nhap',
                    'href' => route('auth.login.vi'),
                    'active' => false,
                ],
                [
                    'label' => 'Dang ky',
                    'href' => route('auth.register.vi'),
                    'active' => true,
                ],
                [
                    'label' => 'Quen mat khau',
                    'href' => route('password.request.vi'),
                    'active' => false,
                ],
            ],
            'meta' => [
                'body_class' => 'wrapper-subpage overflow-y-auto',
                'page_id' => 'auth-register',
            ],
        ]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'username' => ['required', 'string', 'max:16', 'regex:/^[a-z0-9]{4,16}$/i', 'unique:account,username'],
            'email' => ['nullable', 'string', 'lowercase', 'email', 'max:255', 'unique:account,email'],
            'password' => ['required', 'confirmed', 'regex:/^[a-z0-9]{4,16}$/i'],
            'agree' => ['nullable'],
            'redirect' => ['nullable', 'string', 'max:2048'],
            'captcha_token' => ['nullable', 'string'],
        ], [
            'username.regex' => 'Tài khoản chỉ dùng a-z, 0-9 và 4-16 ký tự.',
            'password.regex' => 'Mật khẩu chỉ dùng a-z, 0-9 và 4-16 ký tự.',
        ]);

        $this->ensureCaptchaPasses($validated['captcha_token'] ?? null, $request);

        $account = Account::create([
            'username' => $validated['username'],
            'email' => $validated['email'] ?? null,
            'password' => $validated['password'], // giữ plain-text theo bảng account
            'active' => 1,
        ]);

        event(new Registered($account));

        Auth::guard('web')->login($account);

        $redirectTo = $this->cleanRedirect($validated['redirect'] ?? '') ?: route('home', absolute: false);

        if ($this->isLegacyAjax($request)) {
            return response()->json([
                'status' => 1,
                'msg' => __('Đăng ký thành công.'),
                'data' => [
                    'redirect_url' => url($redirectTo),
                ],
            ]);
        }

        return redirect($redirectTo);
    }

    private function cleanRedirect(?string $redirect): string
    {
        $redirect = trim((string) $redirect);

        if ($redirect === '') {
            return '';
        }

        if (Str::startsWith($redirect, ['http://', 'https://'])) {
            $parsed = parse_url($redirect);
            $host = $parsed['host'] ?? null;
            $appHost = parse_url(config('app.url'), PHP_URL_HOST) ?? request()->getHost();

            if ($host && $appHost && strcasecmp($host, $appHost) === 0) {
                $path = ($parsed['path'] ?? '/') ?: '/';
                $query = isset($parsed['query']) ? '?' . $parsed['query'] : '';
                $fragment = isset($parsed['fragment']) ? '#' . $parsed['fragment'] : '';

                return $path . $query . $fragment;
            }

            return '';
        }

        if (! Str::startsWith($redirect, '/')) {
            $redirect = '/' . ltrim($redirect, '/');
        }

        return $redirect;
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
