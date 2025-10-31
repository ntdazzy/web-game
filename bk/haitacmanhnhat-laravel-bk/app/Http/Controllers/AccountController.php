<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;

class AccountController extends Controller
{
    public function overview(): View
    {
        return view('account.overview', $this->profileData('overview'));
    }

    public function changePassword(): View
    {
        return view('account.change-password', $this->profileData('change-password'));
    }

    public function changeEmail(): View
    {
        return view('account.change-email', $this->profileData('change-email'));
    }

    public function updateProfile(): View
    {
        return view('account.update-profile', $this->profileData('overview'));
    }

    public function updateEmail(): View
    {
        return view('account.update-email', $this->profileData('change-email'));
    }

    public function login(): View
    {
        return view('account.login', $this->authData('login'));
    }

    public function register(): View
    {
        return view('account.register', $this->authData('register'));
    }

    public function forgotPassword(): View
    {
        return view('account.forgot-password', $this->authData('forgot'));
    }

    public function resetPassword(): View
    {
        return view('account.reset-password', $this->authData('forgot'));
    }

    /**
     * @return array<string, mixed>
     */
    private function profileData(string $active): array
    {
        return [
            'navItems' => $this->buildNav('profile', $active),
        ];
    }

    /**
     * @return array<string, mixed>
     */
    private function authData(string $active): array
    {
        return [
            'navItems' => $this->buildNav('auth', $active),
        ];
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    private function buildNav(string $group, string $active): array
    {
        $definitions = [
            'profile' => [
                ['key' => 'overview', 'route' => 'account.overview', 'label' => 'Thông tin tài khoản'],
                ['key' => 'change-password', 'route' => 'account.change-password', 'label' => 'Đổi mật khẩu'],
                ['key' => 'change-email', 'route' => 'account.change-email', 'label' => 'Đổi email'],
            ],
            'auth' => [
                ['key' => 'login', 'route' => 'account.login', 'label' => 'Đăng nhập'],
                ['key' => 'register', 'route' => 'account.register', 'label' => 'Đăng ký'],
                ['key' => 'forgot', 'route' => 'account.forgot-password', 'label' => 'Quên mật khẩu'],
            ],
        ];

        $items = $definitions[$group] ?? [];

        return array_map(static function (array $item) use ($active): array {
            return [
                'label' => $item['label'],
                'url' => route($item['route']),
                'active' => $item['key'] === $active,
            ];
        }, $items);
    }
}
