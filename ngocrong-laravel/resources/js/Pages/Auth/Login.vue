<script setup>
import AccountAuthLayout from "@/Components/AccountAuthLayout.vue";
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
    navItems: {
        type: Array,
        default: () => [],
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
    })).post(route("login"), {
        onFinish: () => form.reset("password"),
    });
};
</script>

<template>
    <Head title="Đăng nhập" />
    <AccountAuthLayout :nav-items="navItems">
        <div class="breadcrumb d-flex flex-column mb-4">
            <h4 class="text-blue">Đăng nhập</h4>
            <p>Đăng nhập tài khoản để tiếp tục trải nghiệm Hải Tặc Mạnh Nhất.</p>
        </div>
        <div class="col-12 col-sm-6 wrap-form">
            <form class="form-login" @submit.prevent="submit">
                <div class="mb-3">
                    <label class="form-label" for="accountLoginUsername"
                        >Tên tài khoản</label
                    >
                    <input
                        id="accountLoginUsername"
                        v-model="form.login"
                        class="form-control"
                        name="login"
                        placeholder="Nhập tên tài khoản"
                        type="text"
                        autocomplete="username"
                        required
                    />
                    <InputError class="text-danger small mt-2" :message="form.errors.login" />
                </div>
                <div class="mb-3">
                    <label class="form-label" for="accountLoginPassword">Mật khẩu</label>
                    <input
                        id="accountLoginPassword"
                        v-model="form.password"
                        class="form-control"
                        name="password"
                        placeholder="Nhập mật khẩu"
                        type="password"
                        autocomplete="current-password"
                        required
                    />
                    <InputError class="text-danger small mt-2" :message="form.errors.password" />
                </div>
                <div class="mb-3 form-check">
                    <input
                        id="accountLoginRemember"
                        v-model="form.remember"
                        class="form-check-input"
                        type="checkbox"
                        name="remember"
                    />
                    <label class="form-check-label" for="accountLoginRemember">
                        Lưu thông tin đăng nhập
                    </label>
                </div>
                <button
                    class="btn btn-secondary"
                    type="submit"
                    :disabled="form.processing"
                >
                    <span v-if="form.processing" class="spinner-border spinner-border-sm me-2" />
                    Đăng nhập
                </button>
                <p v-if="props.status" class="text-success mt-3">
                    {{ props.status }}
                </p>
                <p v-if="form.errors.general || form.errors.auth" class="text-danger mt-3">
                    {{ form.errors.general || form.errors.auth }}
                </p>
                <p v-if="canResetPassword" class="mt-3">
                    <Link :href="route('password.request')">Quên mật khẩu?</Link>
                </p>
            </form>
        </div>
    </AccountAuthLayout>
</template>
