<script setup>
import AccountAuthLayout from "@/Components/AccountAuthLayout.vue";
import InputError from "@/Components/InputError.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";
import { computed } from "vue";

const props = defineProps({
    email: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
    navItems: {
        type: Array,
        default: () => [],
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

const navItems = computed(() => props.navItems ?? []);
</script>

<template>
    <Head title="Đặt lại mật khẩu" />
    <AccountAuthLayout :nav-items="navItems">
        <div class="breadcrumb d-flex flex-column mb-4">
            <h4 class="text-blue">Đặt lại mật khẩu</h4>
            <p>Nhập mật khẩu mới cho tài khoản của bạn.</p>
        </div>
        <div class="col-12 col-sm-6 wrap-form">
            <form class="form-login" @submit.prevent="submit">
                <input type="hidden" name="token" :value="form.token" />

                <div class="mb-3">
                    <label class="form-label" for="accountResetEmail">Email</label>
                    <input
                        id="accountResetEmail"
                        v-model="form.email"
                        class="form-control"
                        name="email"
                        placeholder="Email đăng ký"
                        type="email"
                        autocomplete="email"
                        required
                    />
                    <InputError class="text-danger small mt-2" :message="form.errors.email" />
                </div>

                <div class="mb-3">
                    <label class="form-label" for="accountResetPassword">Mật khẩu mới</label>
                    <input
                        id="accountResetPassword"
                        v-model="form.password"
                        class="form-control"
                        name="password"
                        placeholder="Nhập mật khẩu mới"
                        type="password"
                        autocomplete="new-password"
                        required
                    />
                    <InputError class="text-danger small mt-2" :message="form.errors.password" />
                </div>

                <div class="mb-3">
                    <label
                        class="form-label"
                        for="accountResetPasswordConfirm"
                    >
                        Nhập lại mật khẩu
                    </label>
                    <input
                        id="accountResetPasswordConfirm"
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

                <button
                    class="btn btn-secondary"
                    type="submit"
                    :disabled="form.processing"
                >
                    <span v-if="form.processing" class="spinner-border spinner-border-sm me-2" />
                    Xác nhận
                </button>
                <p class="mt-3">
                    <Link :href="route('login')">Đăng nhập</Link>
                    <span class="mx-2">·</span>
                    <Link :href="route('register')">Đăng ký</Link>
                </p>
            </form>
        </div>
    </AccountAuthLayout>
</template>
