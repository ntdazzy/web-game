<script setup>
import TopLogin from "@/Components/TopLogin.vue";
import BottomStrip from "@/Components/BottomStrip.vue";
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
    email: "",
    password: "",
    remember: false,
});

const submit = () => {
    form.post(route("login"), {
        onFinish: () => form.reset("password"),
    });
};

const navigation = computed(() => [
    {
        label: "Đăng nhập",
        href: route("login"),
        active: route().current("login"),
    },
    {
        label: "Đăng ký",
        href: route("register"),
        active: route().current("register"),
    },
    {
        label: "Quên mật khẩu",
        href: props.canResetPassword ? route("password.request") : "#",
        active: route().current("password.request"),
        disabled: !props.canResetPassword,
    },
]);
</script>

<template>
    <div class="auth-page">
        <Head title="Đăng nhập" />
        <div
            id="root"
            class="d-flex flex-column align-items-center w-100 position-relative"
        >
            <TopLogin />
            <div class="subpage-container wrapper-id">
                <div class="container h-100 position-relative">
                    <div class="d-flex flex-column align-items-center">
                        <h1 class="page-title">Tài khoản</h1>
                        <div class="row content">
                            <div class="col-3">
                                <ul class="left-side">
                                    <li
                                        v-for="item in navigation"
                                        :key="item.label"
                                        :class="[
                                            { active: item.active },
                                            { disabled: item.disabled },
                                        ]"
                                    >
                                        <component
                                            :is="item.disabled ? 'span' : Link"
                                            :href="
                                                item.disabled
                                                    ? undefined
                                                    : item.href
                                            "
                                        >
                                            {{ item.label }}
                                        </component>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-9 user-box">
                                <div class="breadcrumb d-flex flex-column">
                                    <h4 class="text-blue">Đăng nhập</h4>
                                    <p v-if="status" class="text-success mb-0">
                                        {{ status }}
                                    </p>
                                </div>
                                <div class="col-12 col-sm-6 wrap-form">
                                    <form
                                        class="form-login"
                                        @submit.prevent="submit"
                                    >
                                        <div class="mb-3">
                                            <label
                                                for="loginEmail"
                                                class="form-label"
                                                >Tên tài khoản</label
                                            >
                                            <input
                                                id="loginEmail"
                                                v-model="form.email"
                                                class="form-control"
                                                type="email"
                                                autocomplete="username"
                                                placeholder="Nhập tên tài khoản"
                                                required
                                            />
                                            <InputError
                                                class="mt-2"
                                                :message="form.errors.email"
                                            />
                                        </div>
                                        <div class="mb-3">
                                            <label
                                                for="loginPassword"
                                                class="form-label"
                                                >Mật khẩu</label
                                            >
                                            <input
                                                id="loginPassword"
                                                v-model="form.password"
                                                class="form-control"
                                                type="password"
                                                autocomplete="current-password"
                                                placeholder="Nhập mật khẩu"
                                                required
                                            />
                                            <InputError
                                                class="mt-2"
                                                :message="form.errors.password"
                                            />
                                        </div>
                                        <div
                                            class="d-flex justify-content-between align-items-center mb-3"
                                        >
                                            <div class="form-check">
                                                <input
                                                    id="remember"
                                                    v-model="form.remember"
                                                    class="form-check-input"
                                                    type="checkbox"
                                                    name="remember"
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="remember"
                                                >
                                                    Ghi nhớ đăng nhập
                                                </label>
                                            </div>
                                            <Link
                                                v-if="canResetPassword"
                                                class="text-decoration-underline"
                                                :href="
                                                    route('password.request')
                                                "
                                            >
                                                Quên mật khẩu?
                                            </Link>
                                        </div>
                                        <button
                                            type="submit"
                                            class="btn btn-secondary"
                                            :class="{
                                                disabled: form.processing,
                                            }"
                                            :disabled="form.processing"
                                        >
                                            Đăng nhập
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
