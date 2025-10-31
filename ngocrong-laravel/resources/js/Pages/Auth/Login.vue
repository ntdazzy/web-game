<script setup>
import BottomStrip from "@/Components/BottomStrip.vue";
import InputError from "@/Components/InputError.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";

const props = defineProps({
    canResetPassword: {
        type: Boolean,
        default: false,
    },
    status: {
        type: String,
        default: null,
    },
    meta: {
        type: Object,
        default: () => ({}),
    },
});

const form = useForm({
    login: "",
    password: "",
    remember: false,
});

const submit = () => {
    form.transform((data) => ({
        ...data,
        remember: data.remember ? "on" : "",
    }))
        .post(route("login"), {
            onFinish: () => form.reset("password"),
        });
};
</script>

<template>
    <div class="auth-page">
        <Head title="Đăng nhập" />
        <div
            id="root"
            class="d-flex flex-column align-items-center w-100 position-relative"
        >
            <div class="login-page">
                <div class="login-page__overlay"></div>
                <div class="login-page__panel">
                    <h1 class="login-page__title">Đăng nhập</h1>

                    <p v-if="status" class="login-page__status">
                        {{ status }}
                    </p>

                    <form class="login-page__form" @submit.prevent="submit">
                        <div class="login-page__field">
                            <label for="pageLoginUsername">Tên đăng nhập</label>
                            <div class="login-page__input">
                                <i class="fa-light fa-user"></i>
                                <input
                                    id="pageLoginUsername"
                                    v-model="form.login"
                                    type="text"
                                    name="login"
                                    autocomplete="username"
                                    placeholder="Nhập tên đăng nhập hoặc email"
                                    required
                                />
                            </div>
                            <InputError
                                class="login-page__error"
                                :message="form.errors.login"
                            />
                        </div>

                        <div class="login-page__field">
                            <label for="pageLoginPassword">Mật khẩu</label>
                            <div class="login-page__input">
                                <i class="fa-light fa-lock"></i>
                                <input
                                    id="pageLoginPassword"
                                    v-model="form.password"
                                    type="password"
                                    name="password"
                                    autocomplete="current-password"
                                    placeholder="Nhập mật khẩu"
                                    required
                                />
                            </div>
                            <InputError
                                class="login-page__error"
                                :message="form.errors.password"
                            />
                        </div>

                        <div class="login-page__extras">
                            <label class="login-page__remember">
                                <input
                                    id="remember"
                                    v-model="form.remember"
                                    type="checkbox"
                                    name="remember"
                                />
                                <span>Lưu thông tin đăng nhập</span>
                            </label>
                            <Link
                                v-if="canResetPassword"
                                :href="route('password.request')"
                                class="login-page__forgot"
                            >
                                Quên mật khẩu?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            class="login-page__submit"
                            :disabled="form.processing"
                        >
                            {{ form.processing ? "Đang xử lý..." : "Đăng nhập" }}
                        </button>
                    </form>

                    <div class="login-page__register">
                        <span>Chưa có tài khoản?</span>
                        <Link :href="route('register')">Đăng ký ngay</Link>
                    </div>
                </div>
            </div>
            <BottomStrip />
        </div>
    </div>
</template>
