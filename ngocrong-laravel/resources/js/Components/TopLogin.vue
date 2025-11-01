<script setup>
import { Link } from '@inertiajs/vue3';
import { computed } from 'vue';

const logoWarning = new URL('../../assets/images/logo-warning.png', import.meta.url).href;

const accountRoutes = computed(() => ({
    profile: route('account.profile'),
    topup: route('wallet.topup'),
    history: route('wallet.history'),
    password: route('password.request'),
}));

const redirectTarget = computed(() => accountRoutes.value.topup);
</script>

<template>
    <div class="top-login">
        <img :src="logoWarning" alt="" class="logo-warning position-absolute" />
        <div class="wrap-login-mobile wrap-login position-absolute h-100">
            <div class="user-info h-100 d-flex align-items-center d-none">
                <div class="btn-group">
                    <button
                        class="btn dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <i class="fa-solid fa-user"></i>
                        <span class="display-name"></span>
                    </button>
                    <ul class="dropdown-menu">
                        <li class="dropdown-item d-flex align-items-center">
                            <Link :href="accountRoutes.value.profile">
                                <i class="fa-solid fa-user"></i>
                                Quản lý tài khoản
                            </Link>
                        </li>
                        <li class="dropdown-item d-flex align-items-center">
                            <Link
                                class="d-flex justify-content-between"
                                :href="accountRoutes.value.topup"
                            >
                                <i><span>GEM</span><span>0</span></i>
                                <button>Nạp</button>
                            </Link>
                        </li>
                        <li class="dropdown-item d-flex align-items-center">
                            <Link :href="accountRoutes.value.history">
                                <i class="fa-solid fa-clock-rotate-left"></i>
                                Lịch sử nạp
                            </Link>
                        </li>
                        <li class="dropdown-item d-flex align-items-center">
                            <Link :href="accountRoutes.value.password">
                                <i class="fa-solid fa-lock-keyhole-open"></i>
                                Đổi mật khẩu
                            </Link>
                        </li>
                        <li class="dropdown-item d-flex align-items-center">
                            <a href="#" class="logout-link">
                                <i class="fa-light fa-right-from-bracket"></i>
                                Đăng xuất
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <a
                href="#"
                class="btn-login login-required"
                data-open-auth="login"
                :data-redirect="redirectTarget"
            ></a>
        </div>
    </div>
</template>
