<script setup>
import AccountAuthLayout from "@/Components/AccountAuthLayout.vue";
import InputError from "@/Components/InputError.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";

const props = defineProps({
    navItems: {
        type: Array,
        default: () => [],
    },
    redirect: {
        type: String,
        default: "",
    },
});

const form = useForm({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    agree: false,
    redirect: props.redirect || "",
    captcha_token: "",
});

const csrfToken = document.head.querySelector('meta[name="csrf-token"]')?.content ?? "";

const submit = () => {
    form
        .transform((data) => {
            const username = (data.username || "").trim();
            const email = (data.email || "").trim().toLowerCase();
            return {
                _token: csrfToken,
                username,
                email,
                password: data.password,
                password_confirmation: data.password_confirmation,
                agree: data.agree ? "on" : "",
                redirect: data.redirect || "",
                captcha_token: data.captcha_token || window.__turnstileToken || "",
            };
        })
        .post(route("register"), {
            onFinish: () => form.reset("password", "password_confirmation"),
        });
};
</script>

<template>
    <Head title="Đăng ký" />
    <AccountAuthLayout :nav-items="navItems">
        <div class="breadcrumb d-flex flex-column mb-4">
            <h4 class="text-blue">Đăng ký</h4>
            <p>
                Tạo tài khoản mới để nhận thêm nhiều ưu đãi độc quyền dành cho Thuyền Trưởng.
            </p>
        </div>
        <div class="col-12 col-sm-6 wrap-form">
            <form class="form-login" @submit.prevent="submit">
                <div class="mb-3">
                    <label class="form-label" for="accountRegisterUsername">Tên tài khoản</label>
                    <input
                        id="accountRegisterUsername"
                        v-model="form.username"
                        class="form-control"
                        name="username"
                        placeholder="Nhập tên tài khoản"
                        type="text"
                        autocomplete="username"
                        required
                    />
                    <InputError class="text-danger small mt-2" :message="form.errors.username" />
                </div>
                <div class="mb-3">
                    <label class="form-label" for="accountRegisterEmail">Email</label>
                    <input
                        id="accountRegisterEmail"
                        v-model="form.email"
                        class="form-control"
                        name="email"
                        placeholder="Nhập email"
                        type="email"
                        autocomplete="email"
                        required
                    />
                    <InputError class="text-danger small mt-2" :message="form.errors.email" />
                </div>
                <div class="mb-3">
                    <label class="form-label" for="accountRegisterPassword">Mật khẩu</label>
                    <input
                        id="accountRegisterPassword"
                        v-model="form.password"
                        class="form-control"
                        name="password"
                        placeholder="Nhập mật khẩu"
                        type="password"
                        autocomplete="new-password"
                        required
                    />
                    <InputError class="text-danger small mt-2" :message="form.errors.password" />
                </div>
                <div class="mb-3">
                    <label class="form-label" for="accountRegisterPasswordConfirm">
                        Nhập lại mật khẩu
                    </label>
                    <input
                        id="accountRegisterPasswordConfirm"
                        v-model="form.password_confirmation"
                        class="form-control"
                        name="password_confirmation"
                        placeholder="Nhập lại mật khẩu"
                        type="password"
                        autocomplete="new-password"
                        required
                    />
                    <InputError
                        class="text-danger small mt-2"
                        :message="form.errors.password_confirmation"
                    />
                </div>
                <div class="form-check mb-3">
                    <input
                        id="accountRegisterAgree"
                        v-model="form.agree"
                        class="form-check-input"
                        type="checkbox"
                        name="agree"
                    />
                    <label class="form-check-label" for="accountRegisterAgree">
                        Tôi đồng ý
                        <Link :href="route('news.show', 'dieu-khoan-dich-vu')">
                            Điều khoản &amp; Chính sách sử dụng
                        </Link>
                    </label>
                    <InputError class="text-danger small mt-2" :message="form.errors.agree" />
                </div>
                <button
                    class="btn btn-secondary"
                    type="submit"
                    :disabled="form.processing"
                >
                    <span v-if="form.processing" class="spinner-border spinner-border-sm me-2" />
                    Đăng ký
                </button>
                <p class="mt-3">
                    Đã có tài khoản?
                    <Link :href="route('login')">Đăng nhập ngay</Link>
                </p>
                <p v-if="form.errors.general || form.errors.auth" class="text-danger mt-3">
                    {{ form.errors.general || form.errors.auth }}
                </p>
            </form>
        </div>
    </AccountAuthLayout>
</template>
