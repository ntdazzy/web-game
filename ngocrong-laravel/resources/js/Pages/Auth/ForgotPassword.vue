<script setup>
import AuthModalLayout from "@/Components/AuthModalLayout.vue";
import InputError from "@/Components/InputError.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";

const props = defineProps({
    status: {
        type: String,
        default: null,
    },
});

const form = useForm({
    email: "",
});

const submit = () => {
    form.post(route("password.email"));
};
</script>

<template>
    <div class="auth-page">
        <Head title="Khôi phục mật khẩu" />

        <AuthModalLayout
            title="Khôi phục mật khẩu"
            :close-href="route('home')"
            aria-id="pageForgotModalTitle"
        >
            <template #default="{ headingId }">
                <h2 :id="headingId" class="login-modal__title">Khôi phục mật khẩu</h2>
                <p class="login-modal__subtitle">
                    Nhập email đã đăng ký, hệ thống sẽ gửi liên kết đặt lại mật khẩu.
                </p>

                <form class="login-modal__form" @submit.prevent="submit">
                    <div class="login-modal__field">
                        <label for="forgotEmail" class="login-modal__label">
                            Email
                        </label>
                        <div class="login-modal__input">
                            <i class="fa-light fa-envelope"></i>
                            <input
                                id="forgotEmail"
                                v-model="form.email"
                                type="email"
                                name="email"
                                autocomplete="email"
                                placeholder="Nhập email đăng ký"
                                required
                            />
                        </div>
                        <InputError
                            class="login-modal__error"
                            :message="form.errors.email"
                        />
                    </div>

                    <button
                        type="submit"
                        class="login-modal__submit"
                        :class="{ 'is-loading': form.processing }"
                        :disabled="form.processing"
                    >
                        <span>Gửi yêu cầu</span>
                        <span class="login-modal__spinner" aria-hidden="true"></span>
                    </button>

                    <p
                        v-if="props.status"
                        class="login-modal__status text-success fw-semibold mt-3 text-center"
                    >
                        {{ props.status }}
                    </p>

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
