<script setup>
import TopLogin from '@/Components/TopLogin.vue';
import BottomStrip from '@/Components/BottomStrip.vue';
import InputError from '@/Components/InputError.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import { computed } from 'vue';

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};

const navigation = computed(() => [
    {
        label: 'Đăng nhập',
        href: route('login'),
        active: route().current('login'),
    },
    {
        label: 'Đăng ký',
        href: route('register'),
        active: route().current('register'),
    },
    {
        label: 'Quên mật khẩu',
        href: route('password.request'),
        active: route().current('password.request'),
    },
]);
</script>

<template>
    <div class="auth-page">
        <Head title="Đăng ký" />
        <div id="root" class="d-flex flex-column align-items-center w-100 position-relative">
            <TopLogin />
            <div class="subpage-container wrapper-id">
                <div class="container h-100 position-relative">
                    <div class="d-flex flex-column align-items-center">
                        <h1 class="page-title">Tài khoản</h1>
                        <div class="row content">
                            <div class="col-3">
                                <ul class="left-side">
                                    <li
                                        v-for="link in navigation"
                                        :key="link.label"
                                        :class="{ active: link.active }"
                                    >
                                        <Link :href="link.href">
                                            {{ link.label }}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-9 user-box">
                                <div class="breadcrumb d-flex flex-column">
                                    <h4 class="text-blue">Đăng ký</h4>
                                </div>
                                <div class="col-12 col-sm-6 wrap-form">
                                    <form class="form-login" @submit.prevent="submit">
                                        <div class="mb-3">
                                            <label for="registerName" class="form-label">Tên tài khoản</label>
                                            <input
                                                id="registerName"
                                                v-model="form.name"
                                                class="form-control"
                                                type="text"
                                                autocomplete="name"
                                                placeholder="Nhập tên tài khoản"
                                                required
                                            />
                                            <InputError class="mt-2" :message="form.errors.name" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="registerEmail" class="form-label">Email</label>
                                            <input
                                                id="registerEmail"
                                                v-model="form.email"
                                                class="form-control"
                                                type="email"
                                                autocomplete="email"
                                                placeholder="Nhập email"
                                                required
                                            />
                                            <InputError class="mt-2" :message="form.errors.email" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="registerPassword" class="form-label">Mật khẩu</label>
                                            <input
                                                id="registerPassword"
                                                v-model="form.password"
                                                class="form-control"
                                                type="password"
                                                autocomplete="new-password"
                                                placeholder="Nhập mật khẩu"
                                                required
                                            />
                                            <InputError class="mt-2" :message="form.errors.password" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="registerPasswordConfirm" class="form-label">Nhập lại mật khẩu</label>
                                            <input
                                                id="registerPasswordConfirm"
                                                v-model="form.password_confirmation"
                                                class="form-control"
                                                type="password"
                                                autocomplete="new-password"
                                                placeholder="Nhập lại mật khẩu"
                                                required
                                            />
                                            <InputError class="mt-2" :message="form.errors.password_confirmation" />
                                        </div>
                                        <button
                                            class="btn btn-secondary"
                                            type="submit"
                                            :class="{ disabled: form.processing }"
                                            :disabled="form.processing"
                                        >
                                            Đăng ký
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BottomStrip />
        </div>
    </div>
</template>
