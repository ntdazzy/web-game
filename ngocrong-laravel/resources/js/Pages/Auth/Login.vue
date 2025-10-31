<script setup>
import AuthModalLayout from "@/Components/AuthModalLayout.vue";
import InputError from "@/Components/InputError.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";
import { computed } from "vue";

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

const generalError = computed(() => form.errors.general || form.errors.auth);

const submit = () => {
    form.transform((data) => ({
        ...data,
        remember: data.remember ? "on" : "",
    })).post(route("login"), {
        onFinish: () => form.reset("password"),
    });
};
</script>

<template>
    <div class="auth-page">
        <Head title="Đăng nhập" />
        <AuthModalLayout
            title="Đăng nhập"
            :close-href="route('home')"
            aria-id="pageLoginModalTitle"
        >
            <template #default="{ headingId }">
                <h2 :id="headingId" class="login-modal__title">Đăng nhập</h2>

                <p v-if="status" class="login-modal__status text-success fw-semibold">
                    {{ status }}
                </p>

                <form class="login-modal__form" @submit.prevent="submit">
                    <div class="login-modal__field">
                        <label for="pageLoginUsername" class="login-modal__label">
                            Tên đăng nhập
                        </label>
                        <div class="login-modal__input">
                            <i class="fa-light fa-user"></i>
                            <input
                                id="pageLoginUsername"
                                v-model="form.login"
                                type="text"
                                name="login"
                                autocomplete="username"
                                placeholder="Tên đăng nhập"
                                required
                            />
                        </div>
                        <InputError
                            class="login-modal__error"
                            :message="form.errors.login"
                        />
                    </div>

                    <div class="login-modal__field">
                        <label for="pageLoginPassword" class="login-modal__label">
                            Mật khẩu
                        </label>
                        <div class="login-modal__input">
                            <i class="fa-light fa-lock"></i>
                            <input
                                id="pageLoginPassword"
                                v-model="form.password"
                                type="password"
                                name="password"
                                autocomplete="current-password"
                                placeholder="Mật khẩu"
                                required
                            />
                        </div>
                        <InputError
                            class="login-modal__error"
                            :message="form.errors.password"
                        />
                    </div>

                    <div class="login-modal__actions">
                        <label class="login-modal__checkbox">
                            <input
                                id="remember"
                                v-model="form.remember"
                                type="checkbox"
                                name="remember"
                            />
                            <span>Lưu thông tin đăng nhập</span>
                        </label>
                    </div>

                    <button
                        type="submit"
                        class="login-modal__submit"
                        :class="{ 'is-loading': form.processing }"
                        :disabled="form.processing"
                    >
                        <span>Đăng nhập</span>
                        <span class="login-modal__spinner" aria-hidden="true"></span>
                    </button>

                    <p
                        v-if="generalError"
                        class="login-modal__error login-modal__error--general"
                    >
                        {{ generalError }}
                    </p>

                    <div class="login-modal__links">
                        <span>Chưa có tài khoản?</span>
                        <Link :href="route('register')">Đăng ký ngay</Link>
                        <span>·</span>
                        <Link
                            v-if="canResetPassword"
                            :href="route('password.request')"
                        >
                            Quên mật khẩu?
                        </Link>
                    </div>
                </form>
            </template>
        </AuthModalLayout>
    </div>
</template>
