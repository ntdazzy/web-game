<script setup>
import AuthModalLayout from "@/Components/AuthModalLayout.vue";
import InputError from "@/Components/InputError.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";
import { computed } from "vue";

const form = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    agree: false,
});

const generalError = computed(
    () => form.errors.general || form.errors.auth || form.errors.agree
);

const submit = () => {
    form.transform((data) => ({
        ...data,
        agree: data.agree ? "on" : "",
    })).post(route("register"), {
        onFinish: () => form.reset("password", "password_confirmation"),
    });
};
</script>

<template>
    <div class="auth-page">
        <Head title="Đăng ký" />

        <AuthModalLayout
            title="Đăng ký"
            :close-href="route('home')"
            aria-id="pageRegisterModalTitle"
        >
            <template #default="{ headingId }">
                <h2 :id="headingId" class="login-modal__title">Đăng ký</h2>
                <p class="login-modal__subtitle">
                    Đã có tài khoản?
                    <Link :href="route('login')">Đăng nhập</Link>
                    hoặc
                    <Link :href="route('password.request')">
                        Khôi phục mật khẩu
                    </Link>
                </p>

                <form class="login-modal__form" @submit.prevent="submit">
                    <div class="login-modal__field">
                        <label for="registerName" class="login-modal__label">
                            Tên đăng nhập
                        </label>
                        <div class="login-modal__input">
                            <i class="fa-light fa-user"></i>
                            <input
                                id="registerName"
                                v-model="form.name"
                                type="text"
                                name="name"
                                autocomplete="username"
                                placeholder="Tên đăng nhập"
                                required
                            />
                        </div>
                        <InputError
                            class="login-modal__error"
                            :message="form.errors.name"
                        />
                    </div>

                    <div class="login-modal__field">
                        <label for="registerEmail" class="login-modal__label">
                            Email
                        </label>
                        <div class="login-modal__input">
                            <i class="fa-light fa-envelope"></i>
                            <input
                                id="registerEmail"
                                v-model="form.email"
                                type="email"
                                name="email"
                                autocomplete="email"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <InputError
                            class="login-modal__error"
                            :message="form.errors.email"
                        />
                    </div>

                    <div class="login-modal__field">
                        <label for="registerPassword" class="login-modal__label">
                            Mật khẩu
                        </label>
                        <div class="login-modal__input">
                            <i class="fa-light fa-lock"></i>
                            <input
                                id="registerPassword"
                                v-model="form.password"
                                type="password"
                                name="password"
                                autocomplete="new-password"
                                placeholder="Mật khẩu"
                                required
                            />
                        </div>
                        <InputError
                            class="login-modal__error"
                            :message="form.errors.password"
                        />
                    </div>

                    <div class="login-modal__field">
                        <label
                            for="registerPasswordConfirm"
                            class="login-modal__label"
                        >
                            Nhập lại mật khẩu
                        </label>
                        <div class="login-modal__input">
                            <i class="fa-light fa-lock-keyhole"></i>
                            <input
                                id="registerPasswordConfirm"
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

                    <div class="login-modal__actions">
                        <label class="login-modal__checkbox">
                            <input
                                id="agreeTerms"
                                v-model="form.agree"
                                type="checkbox"
                                name="agree"
                            />
                            <span>
                                Tôi đồng ý
                                <Link :href="route('news.index')">
                                    Điều khoản &amp; Chính sách sử dụng
                                </Link>
                            </span>
                        </label>
                    </div>

                    <button
                        type="submit"
                        class="login-modal__submit"
                        :class="{ 'is-loading': form.processing }"
                        :disabled="form.processing"
                    >
                        <span>Đăng ký</span>
                        <span class="login-modal__spinner" aria-hidden="true"></span>
                    </button>

                    <p
                        v-if="generalError"
                        class="login-modal__error login-modal__error--general"
                    >
                        {{ generalError }}
                    </p>
                </form>
            </template>
        </AuthModalLayout>
    </div>
</template>
