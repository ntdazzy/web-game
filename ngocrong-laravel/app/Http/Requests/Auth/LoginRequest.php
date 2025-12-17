<?php

namespace App\Http\Requests\Auth;

use App\Models\Account;
use Illuminate\Auth\Events\Lockout;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class LoginRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'login' => ['required_without:username', 'string'],
            'username' => ['sometimes', 'string'],
            'password' => ['required', 'string'],
            'redirect' => ['nullable', 'string', 'max:2048'],
            'captcha_token' => ['nullable', 'string'],
        ];
    }

    public function authenticate(): void
    {
        $this->ensureIsNotRateLimited();

        $loginInput = $this->string('login')->trim()->toString() ?: $this->string('username')->trim()->toString();
        $password = $this->input('password');
        $remember = $this->boolean('remember') && Schema::hasColumn('account', 'remember_token');

        $this->ensureCaptchaPasses($this->string('captcha_token')->toString());

        $account = Account::query()
            ->where(function ($query) use ($loginInput) {
                $query->where('username', $loginInput)
                    ->orWhere('email', $loginInput);
            })
            ->first();

        if (! $account || $account->password !== $password) {
            RateLimiter::hit($this->throttleKey());

            throw ValidationException::withMessages([
                'login' => trans('auth.failed'),
            ]);
        }

        if (! $account->players()->exists()) {
            throw ValidationException::withMessages([
                'login' => __('Bạn chưa tạo nhân vật. Vui lòng tạo nhân vật trước khi đăng nhập.'),
            ]);
        }

        if ((int) $account->ban === 1) {
            throw ValidationException::withMessages([
                'login' => __('TAÿi kho §œn b ¯< khA3a.'),
            ]);
        }

        Auth::guard('web')->login($account, $remember);

        RateLimiter::clear($this->throttleKey());
    }

    public function ensureIsNotRateLimited(): void
    {
        if (! RateLimiter::tooManyAttempts($this->throttleKey(), 5)) {
            return;
        }

        event(new Lockout($this));

        $seconds = RateLimiter::availableIn($this->throttleKey());

        throw ValidationException::withMessages([
            'login' => trans('auth.throttle', [
                'seconds' => $seconds,
                'minutes' => ceil($seconds / 60),
            ]),
        ]);
    }

    public function throttleKey(): string
    {
        return Str::transliterate(Str::lower($this->string('login')).'|'.$this->ip());
    }

    public function safeRedirect(): ?string
    {
        $redirect = $this->string('redirect')->trim()->value();

        if ($redirect === '') {
            return null;
        }

        if (Str::startsWith($redirect, ['http://', 'https://'])) {
            $parsed = parse_url($redirect);
            $host = $parsed['host'] ?? null;
            $appHost = parse_url(config('app.url'), PHP_URL_HOST) ?? $this->getHost();

            if ($host && $appHost && strcasecmp($host, $appHost) === 0) {
                $path = ($parsed['path'] ?? '/') ?: '/';
                $query = isset($parsed['query']) ? '?'.$parsed['query'] : '';
                $fragment = isset($parsed['fragment']) ? '#'.$parsed['fragment'] : '';

                return $path.$query.$fragment;
            }

            return null;
        }

        if (! Str::startsWith($redirect, '/')) {
            $redirect = '/'.ltrim($redirect, '/');
        }

        return $redirect;
    }

    private function ensureCaptchaPasses(?string $token): void
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

        $response = Http::asForm()
            ->timeout(8)
            ->post('https://challenges.cloudflare.com/turnstile/v0/siteverify', [
                'secret' => $secret,
                'response' => $token,
                'remoteip' => $this->ip(),
            ]);

        if (! $response->ok() || ! data_get($response->json(), 'success')) {
            throw ValidationException::withMessages([
                'captcha' => __('Captcha không hợp lệ.'),
            ]);
        }
    }
}
