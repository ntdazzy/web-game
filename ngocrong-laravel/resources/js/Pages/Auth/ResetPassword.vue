<script setup>
import AuthModalLayout from "@/Components/AuthModalLayout.vue";
import InputError from "@/Components/InputError.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";

const props = defineProps({
    email: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
});

const form = useForm({
    token: props.token,
    email: props.email,
    password: "",
    password_confirmation: "",
});

const submit = () => {
    form.post(route("password.store"), {
        onFinish: () => form.reset("password", "password_confirmation"),
    });
};
</script>

<template>
    <div class="auth-page">
        <Head title="Đặt lại mật khẩu" />

        <AuthModalLayout
            title="Đặt lại mật khẩu"
            :close-href="route('home')"
            aria-id="pageResetModalTitle"
        >
            <template #default="{ headingId }">
                <h2 :id="headingId" class="login-modal__title">Đặt lại mật khẩu</h2>
                <p class="login-modal__subtitle">
                    Nhập mật khẩu mới cho tài khoản của bạn.
                </p>

                <form class="login-modal__form" @submit.prevent="submit">
                    <input type="hidden" name="token" :value="form.token" />

                    <div class="login-modal__field">
                        <label for="resetEmail" class="login-modal__label">
                            Email
                        </label>
                        <div class="login-modal__input">
                            <i class="fa-light fa-envelope"></i>
                            <input
                                id="resetEmail"
                                v-model="form.email"
                                type="email"
                                name="email"
                                autocomplete="email"
                                placeholder="Email đăng ký"
                                required
                            />
                        </div>
                        <InputError
                            class="login-modal__error"
                            :message="form.errors.email"
                        />
                    </div>

                    <div class="login-modal__field">
                        <label for="resetPassword" class="login-modal__label">
                            Mật khẩu mới
                        </label>
                        <div class="login-modal__input">
                            <i class="fa-light fa-lock"></i>
                            <input
                                id="resetPassword"
                                v-model="form.password"
                                type="password"
                                name="password"
                                autocomplete="new-password"
                                placeholder="Mật khẩu mới"
                                required
                            />
                        </div>
                        <InputError
                            class="login-modal__error"
                            :message="form.errors.password"
                        />
                    </div>

                    <div class="login-modal__field">
                        <label for="resetPasswordConfirm" class="login-modal__label">
                            Nhập lại mật khẩu
                        </label>
                        <div class="login-modal__input">
                            <i class="fa-light fa-lock-keyhole"></i>
                            <input
                                id="resetPasswordConfirm"
                                v-model="form.password_confirmation"
                                type="password"
                                name="password_confirmation"
                                autocomplete="new-password"
                                placeholder="Nhập lại mật khẩu"
                                required
                            />
                        </div>
                        <InputError
                            class="login-modal__error"
                            :message="form.errors.password_confirmation"
                        />
                    </div>

                    <button
                        type="submit"
                        class="login-modal__submit"
                        :class="{ 'is-loading': form.processing }"
                        :disabled="form.processing"
                    >
                        <span>Xác nhận</span>
                        <span class="login-modal__spinner" aria-hidden="true"></span>
                    </button>

                    <div class="login-modal__links">
                        <Link :href="route('login')">Đăng nhập</Link>
                        <span>·</span>
                        <Link :href="route('register')">Đăng ký</Link>
                    </div>
                </form>
            </template>
        </AuthModalLayout>
    </div>
</template>
