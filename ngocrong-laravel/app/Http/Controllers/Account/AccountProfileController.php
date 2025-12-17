<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Vite;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
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
            'full_name' => $user->full_name,
            'birthday' => optional($user->birthday)->format('d-m-Y'),
            'gender' => $user->gender,
            'gender_label' => $this->genderLabel($user->gender),
            'phone' => $user->phone,
            'avatar' => Vite::asset('resources/assets/images/avatar.png'),
        ];

        return Inertia::render('Account/Profile/Index', [
            'profile' => $profile,
            'navItems' => $this->buildNav('profile'),
            'meta' => [
                'body_class' => 'wrapper-subpage overflow-y-auto',
                'page_id' => 'account-profile',
            ],
        ]);
    }

    public function edit(): Response
    {
        $user = Auth::user();

        return Inertia::render('Account/Profile/Edit', [
            'profile' => [
                'full_name' => $user->full_name,
                'birthday' => optional($user->birthday)->format('Y-m-d'),
                'gender' => $user->gender,
                'phone' => $user->phone,
                'email' => $user->email,
            ],
            'navItems' => $this->buildNav('edit'),
            'meta' => [
                'body_class' => 'wrapper-subpage overflow-y-auto',
                'page_id' => 'account-update',
            ],
        ]);
    }

    public function update(Request $request): RedirectResponse
    {
        $user = $request->user();

        $validated = $request->validate([
            'full_name' => ['nullable', 'string', 'max:100'],
            'birthday' => ['nullable', 'date', 'before:today'],
            'gender' => ['nullable', 'integer', Rule::in([0, 1, 2])],
            'phone' => ['nullable', 'string', 'max:20'],
        ]);

        $user->fill([
            'full_name' => $validated['full_name'] ?? null,
            'birthday' => $validated['birthday'] ?? null,
            'gender' => $validated['gender'] ?? null,
            'phone' => $validated['phone'] ?? null,
        ]);
        $user->save();

        return redirect()->route('account.profile')->with('status', 'Thông tin tài khoản đã được cập nhật.');
    }

    public function editPassword(): Response
    {
        return Inertia::render('Account/Profile/ChangePassword', [
            'navItems' => $this->buildNav('password'),
            'meta' => [
                'body_class' => 'wrapper-subpage overflow-y-auto',
                'page_id' => 'account-password',
            ],
        ]);
    }

    public function updatePassword(Request $request): RedirectResponse
    {
        $user = $request->user();

        $validated = $request->validate([
            'current_password' => ['required', 'string'],
            'password' => ['required', 'string', 'min:6', 'confirmed'],
        ]);

        if ($user->password !== $validated['current_password']) {
            throw ValidationException::withMessages([
                'current_password' => __('Mật khẩu hiện tại không chính xác.'),
            ]);
        }

        $user->password = $validated['password'];
        $user->save();

        return redirect()->route('account.profile')->with('status', 'Đổi mật khẩu thành công.');
    }

    public function editEmail(): Response
    {
        $user = Auth::user();

        return Inertia::render('Account/Profile/ChangeEmail', [
            'email' => $user->email,
            'hasEmail' => ! empty($user->email),
            'navItems' => $this->buildNav('email'),
            'meta' => [
                'body_class' => 'wrapper-subpage overflow-y-auto',
                'page_id' => 'account-email',
            ],
        ]);
    }

    public function updateEmail(Request $request): RedirectResponse
    {
        $user = $request->user();

        $validated = $request->validate([
            'email' => ['required', 'email:rfc,dns', Rule::unique('account', 'email')->ignore($user->id)],
        ]);

        $user->email = $validated['email'];
        $user->gmail = $validated['email'];
        $user->save();

        return redirect()->route('account.profile')->with('status', 'Cập nhật email thành công.');
    }

    protected function buildNav(string $active): array
    {
        return [
            [
                'label' => 'Thông tin tài khoản',
                'href' => route('account.profile'),
                'active' => $active === 'profile',
            ],
            [
                'label' => 'Đổi mật khẩu',
                'href' => route('account.password.edit'),
                'active' => $active === 'password',
            ],
            [
                'label' => 'Đổi email',
                'href' => route('account.email.edit'),
                'active' => $active === 'email',
            ],
        ];
    }

    protected function genderLabel(?int $gender): string
    {
        return match ((int) $gender) {
            1 => 'Nam',
            2 => 'Nữ',
            default => 'Chưa xác định',
        };
    }
}
