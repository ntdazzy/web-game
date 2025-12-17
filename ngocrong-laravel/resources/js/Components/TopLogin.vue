<script setup>
import { Link, useForm, usePage } from '@inertiajs/vue3';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

const logoWarning = new URL('../../assets/images/logo-warning.png', import.meta.url).href;
const page = usePage();

const resolveRoute = (name, params = undefined, absolute = true, defaultValue = '#') => {
    if (typeof route === 'function') {
        try {
            return route(name, params, absolute);
        } catch (error) {
            if (import.meta.env.DEV) {
                console.warn(`[TopLogin] route(${name}) unavailable`, error);
            }
        }
    }

    return defaultValue;
};

const accountRoutes = computed(() => {
    const fallback = {
        profile: '#',
        topup: '#',
        history: '#',
        password: '#',
        email: '#',
        login: '#',
    };

    if (typeof route !== 'function') {
        return fallback;
    }

    return {
        profile: resolveRoute('account.profile', undefined, true, fallback.profile),
        topup: resolveRoute('wallet.topup', undefined, true, fallback.topup),
        history: resolveRoute('wallet.history', undefined, true, fallback.history),
        password: resolveRoute('account.password.edit', undefined, true, fallback.password),
        email: resolveRoute('account.email.edit', undefined, true, fallback.email),
        login: resolveRoute('auth.login.vi', undefined, true, fallback.login),
    };
});

const redirectTarget = computed(() => accountRoutes.value.topup || '#');
const loginUrl = computed(() => {
    const url = accountRoutes.value.login || '#';
    if (!redirectTarget.value || redirectTarget.value === '#') {
        return url;
    }
    const connector = url.includes('?') ? '&' : '?';
    return `${url}${connector}redirect=${encodeURIComponent(redirectTarget.value)}`;
});

const user = computed(() => page.props?.auth?.user || null);
const isLoggedIn = computed(() => !!user.value);
const displayName = computed(() => user.value?.username || user.value?.name || '');
const gemBalance = computed(() => user.value?.cash ?? 0);

const logoutForm = useForm({});

const submitLogout = () => {
    logoutForm.post(route('logout'));
};

const dropdownOpen = ref(false);
const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value;
};
const closeDropdown = () => {
    dropdownOpen.value = false;
};

const handleClickOutside = (event) => {
    if (!dropdownOpen.value) return;
    const trigger = event.target.closest('.top-login .btn-group');
    if (!trigger) {
        closeDropdown();
    }
};

const handleEscape = (event) => {
    if (event.key === 'Escape') {
        closeDropdown();
    }
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside, true);
    document.addEventListener('keydown', handleEscape, true);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside, true);
    document.removeEventListener('keydown', handleEscape, true);
});
</script>

<template>
    <div class="top-login">
        <img :src="logoWarning" alt="" class="logo-warning position-absolute" />
        <div class="wrap-login-mobile wrap-login position-absolute h-100">
            <div
                v-if="isLoggedIn"
                class="user-info h-100 d-flex align-items-center"
            >
                <div class="btn-group">
                    <button
                        class="btn dropdown-toggle"
                        type="button"
                        :aria-expanded="dropdownOpen ? 'true' : 'false'"
                        @click.stop="toggleDropdown"
                    >
                        <i class="fa-solid fa-user"></i>
                        <span class="display-name">{{ displayName }}</span>
                    </button>
                    <ul class="dropdown-menu" :class="{ show: dropdownOpen }">
                        <li class="dropdown-item d-flex align-items-center">
                            <Link :href="accountRoutes.profile" @click="closeDropdown">
                                <i class="fa-solid fa-user"></i>
                                Quản lý tài khoản
                            </Link>
                        </li>
                        <li class="dropdown-item d-flex align-items-center">
                            <Link
                                class="d-flex justify-content-between"
                                :href="accountRoutes.topup"
                                @click="closeDropdown"
                            >
                                <i><span>GEM</span><span>{{ gemBalance }}</span></i>
                                <button>Nạp</button>
                            </Link>
                        </li>
                        <li class="dropdown-item d-flex align-items-center">
                            <Link :href="accountRoutes.history" @click="closeDropdown">
                                <i class="fa-solid fa-clock-rotate-left"></i>
                                Lịch sử nạp
                            </Link>
                        </li>
                        <li class="dropdown-item d-flex align-items-center">
                            <Link :href="accountRoutes.password" @click="closeDropdown">
                                <i class="fa-solid fa-lock-keyhole-open"></i>
                                Đổi mật khẩu
                            </Link>
                        </li>
                        <li class="dropdown-item d-flex align-items-center">
                            <button
                                type="button"
                                class="bg-transparent border-0 p-0 logout-link"
                                @click="() => { closeDropdown(); submitLogout(); }"
                            >
                                <i class="fa-light fa-right-from-bracket"></i>
                                Đăng xuất
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <a
                v-else
                :href="loginUrl"
                class="btn-login login-required"
            ></a>
        </div>
    </div>
</template>
