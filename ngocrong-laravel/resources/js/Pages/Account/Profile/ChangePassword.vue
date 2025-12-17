<script setup>
import TopLogin from "@/Components/TopLogin.vue";
import BottomStrip from "@/Components/BottomStrip.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";
import { computed } from "vue";

const props = defineProps({
    navItems: {
        type: Array,
        default: () => [],
    },
});

const sidebarLinks = computed(() =>
    (props.navItems || []).map((item) => ({
        label: item.label,
        href: item.href || "#",
        active: !!item.active,
    }))
);

const form = useForm({
    current_password: "",
    password: "",
    password_confirmation: "",
});

const submit = () => {
    form.put(route("account.password.update"));
};
</script>

<template>
    <div class="account-page">
        <Head title="Đổi mật khẩu" />
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
                            <div class="col-3 wrap-left-side">
                                <ul class="left-side">
                                    <li
                                        v-for="link in sidebarLinks"
                                        :key="link.label"
                                        :class="{ active: link.active }"
                                    >
                                        <Link :href="link.href">
                                            {{ link.label }}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-9 user-box">
                                <div class="breadcrumb d-flex flex-column">
                                    <h4 class="text-blue">Đổi mật khẩu</h4>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <form
                                        class="form-change-password"
                                        @submit.prevent="submit"
                                    >
                                        <div class="mb-3">
                                            <label class="form-label"
                                                >Mật khẩu cũ</label
                                            >
                                            <input
                                                class="form-control"
                                                type="password"
                                                name="current_password"
                                                placeholder="Nhập mật khẩu cũ"
                                                autocomplete="off"
                                                v-model="form.current_password"
                                            />
                                            <small
                                                v-if="form.errors.current_password"
                                                class="text-danger"
                                                >{{
                                                    form.errors.current_password
                                                }}</small
                                            >
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label"
                                                >Mật khẩu mới</label
                                            >
                                            <input
                                                class="form-control"
                                                type="password"
                                                name="password1"
                                                placeholder="Nhập mật khẩu mới"
                                                autocomplete="off"
                                                v-model="form.password"
                                            />
                                            <small
                                                v-if="form.errors.password"
                                                class="text-danger"
                                                >{{ form.errors.password }}</small
                                            >
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label"
                                                >Nhập lại mật khẩu mới</label
                                            >
                                            <input
                                                class="form-control"
                                                type="password"
                                                name="password2"
                                                placeholder="Nhập lại mật khẩu mới"
                                                autocomplete="off"
                                                v-model="
                                                    form.password_confirmation
                                                "
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            class="btn btn-secondary"
                                            :disabled="form.processing"
                                        >
                                            Xác nhận
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
