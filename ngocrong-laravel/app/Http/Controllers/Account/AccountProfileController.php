<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Vite;
use Inertia\Inertia;
use Inertia\Response;

class AccountProfileController extends Controller
{
    public function index(): Response
    {
        $user = Auth::user();

        $profile = [
            'username' => $user->name ?? 'Guest',
            'email' => $user->email,
            'full_name' => data_get($user, 'profile.full_name'),
            'birthday' => data_get($user, 'profile.birthday'),
            'gender_label' => data_get($user, 'profile.gender_label', 'Không xác định'),
            'phone' => data_get($user, 'profile.phone'),
            'avatar' => Vite::asset('resources/assets/images/avatar.png'),
        ];

        $navItems = [
            [
                'label' => 'Thông tin tài khoản',
                'href' => route('account.profile'),
                'active' => true,
            ],
            [
                'label' => 'Đổi mật khẩu',
                'href' => route('password.request'),
                'disabled' => true,
            ],
            [
                'label' => 'Đổi email',
                'href' => route('password.request'),
                'disabled' => true,
            ],
        ];

        return Inertia::render('Account/Profile/Index', [
            'profile' => $profile,
            'navItems' => $navItems,
            'meta' => [
                'body_class' => 'wrapper-subpage overflow-y-auto',
                'page_id' => 'account-profile',
            ],
        ]);
    }
}
