<script setup>
import AccountAuthLayout from "@/Components/AccountAuthLayout.vue";
import InputError from "@/Components/InputError.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";
import { computed } from "vue";

const props = defineProps({
    status: {
        type: String,
        default: null,
    },
    navItems: {
        type: Array,
        default: () => [],
    },
});

const form = useForm({
    email: "",
    captcha_token: "",
});

const submit = () => {
    form.post(route("password.email"), {
        onBefore: () => {
            form.captcha_token = form.captcha_token || window.__turnstileToken || "";
        },
    });
};

const navItems = computed(() => props.navItems ?? []);
const statusMessage = computed(() => props.status);
</script>

<template>
    <Head title="Khôi phục mật khẩu" />
    <AccountAuthLayout :nav-items="navItems">
        <div class="breadcrumb d-flex flex-column mb-4">
            <h4 class="text-blue">Khôi phục mật khẩu</h4>
            <p>Nhập email đã đăng ký để nhận liên kết đặt lại mật khẩu.</p>
        </div>
        <div class="col-12 col-sm-6 wrap-form">
            <form class="form-login" @submit.prevent="submit">
                <div class="mb-3">
                    <label class="form-label" for="accountForgotEmail">Email</label>
                    <input
                        id="accountForgotEmail"
                        v-model="form.email"
                        class="form-control"
                        name="email"
                        placeholder="Nhập email đăng ký"
                        type="email"
                        autocomplete="email"
                        required
                    />
                    <InputError class="text-danger small mt-2" :message="form.errors.email" />
                </div>
                <button
                    class="btn btn-secondary"
                    type="submit"
                    :disabled="form.processing"
                >
                    <span v-if="form.processing" class="spinner-border spinner-border-sm me-2" />
                    Gửi yêu cầu
                </button>
                <p v-if="statusMessage" class="text-success mt-3">{{ statusMessage }}</p>
                <p class="mt-3">
                    <Link :href="route('login')">Đăng nhập</Link>
                    <span class="mx-2">·</span>
                    <Link :href="route('register')">Đăng ký</Link>
                </p>
            </form>
        </div>
    </AccountAuthLayout>
</template>
