<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(Request $request): Response
    {
        $redirect = $this->cleanRedirect($request->query('redirect'));

        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
            'redirect' => $redirect,
            'navItems' => [
                [
                    'label' => 'Đăng nhập',
                    'href' => route('auth.login.vi'),
                    'active' => true,
                ],
                [
                    'label' => 'Đăng ký',
                    'href' => route('auth.register.vi'),
                    'active' => false,
                ],
                [
                    'label' => 'Quên mật khẩu',
                    'href' => route('password.request.vi'),
                    'active' => false,
                ],
            ],
            'meta' => [
                'body_class' => 'wrapper-subpage overflow-y-auto',
                'page_id' => 'auth-login',
            ],
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request)
    {
        try {
            $request->authenticate();
        } catch (ValidationException $exception) {
            if ($this->isLegacyAjax($request)) {
                $message = $exception->validator->errors()->first('login') ?: __('Không thể đăng nhập.');

                return response()->json([
                    'status' => 0,
                    'msg' => $message,
                ], 422);
            }

            throw $exception;
        }

        $request->session()->regenerate();

        $redirectTo = route('home', absolute: false);
        $requestedRedirect = $request->safeRedirect();

        if ($this->isLegacyAjax($request)) {
            return response()->json([
                'status' => 1,
                'msg' => __('Đăng nhập thành công.'),
                'data' => [
                    'redirect_url' => $requestedRedirect
                        ? url($requestedRedirect)
                        : url()->intended($redirectTo),
                ],
            ]);
        }

        if ($requestedRedirect) {
            return redirect()->intended($requestedRedirect);
        }

        return redirect()->intended($redirectTo);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
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
                $query = isset($parsed['query']) ? '?'.$parsed['query'] : '';
                $fragment = isset($parsed['fragment']) ? '#'.$parsed['fragment'] : '';

                return $path.$query.$fragment;
            }

            return '';
        }

        if (! Str::startsWith($redirect, '/')) {
            $redirect = '/'.ltrim($redirect, '/');
        }

        return $redirect;
    }

    private function isLegacyAjax(Request $request): bool
    {
        return ($request->ajax() || $request->expectsJson()) && ! $request->hasHeader('X-Inertia');
    }
}
