<script setup>
import TopLogin from "@/Components/TopLogin.vue";
import BottomStrip from "@/Components/BottomStrip.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";
import { computed } from "vue";

const props = defineProps({
    email: {
        type: String,
        default: "",
    },
    hasEmail: {
        type: Boolean,
        default: false,
    },
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
    email: props.email || "",
});

const submit = () => {
    form.put(route("account.email.update"));
};
</script>

<template>
    <div class="account-page">
        <Head title="Cập nhật email" />
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
                                    <h4 class="text-blue">Cập nhật email</h4>
                                    <p v-if="!hasEmail" class="text-danger fw-semibold">
                                        Tài khoản của bạn chưa có Email. Vui
                                        lòng cập nhật Email trước!
                                    </p>
                                </div>
                                <div class="col-sm-8 col-12">
                                    <form
                                        method="POST"
                                        class="form-update-email"
                                        @submit.prevent="submit"
                                    >
                                        <div class="mb-3">
                                            <label class="form-label">Email</label>
                                            <input
                                                class="form-control"
                                                name="email"
                                                type="email"
                                                placeholder="Nhập email"
                                                autocomplete="off"
                                                v-model="form.email"
                                            />
                                            <small
                                                v-if="form.errors.email"
                                                class="text-danger"
                                                >{{ form.errors.email }}</small
                                            >
                                        </div>
                                        <button
                                            type="submit"
                                            class="btn btn-secondary"
                                            :disabled="form.processing"
                                        >
                                            Lưu email
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
