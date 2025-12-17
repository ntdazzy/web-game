<script setup>
import TopLogin from "@/Components/TopLogin.vue";
import BottomStrip from "@/Components/BottomStrip.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";
import { computed } from "vue";

const props = defineProps({
    profile: {
        type: Object,
        default: () => ({}),
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
    full_name: props.profile?.full_name ?? "",
    birthday: props.profile?.birthday ?? "",
    gender: props.profile?.gender ?? 0,
    phone: props.profile?.phone ?? "",
});

const submit = () => {
    form.put(route("account.profile.update"));
};
</script>

<template>
    <div class="account-page">
        <Head title="Cập nhật tài khoản" />
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
                                    <h4 class="text-blue">Cập nhật tài khoản</h4>
                                </div>
                                <div class="col-12 col-sm-6 wrap-form">
                                    <form
                                        class="form-change-profile"
                                        @submit.prevent="submit"
                                    >
                                        <div class="mb-3">
                                            <label class="form-label"
                                                >Họ tên đầy đủ</label
                                            >
                                            <input
                                                class="form-control"
                                                name="fullname"
                                                type="text"
                                                placeholder="Nhập họ tên"
                                                autocomplete="off"
                                                v-model="form.full_name"
                                            />
                                            <small
                                                v-if="form.errors.full_name"
                                                class="text-danger"
                                                >{{ form.errors.full_name }}</small
                                            >
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label"
                                                >Sinh nhật</label
                                            >
                                            <input
                                                class="form-control"
                                                type="date"
                                                name="birthday"
                                                v-model="form.birthday"
                                            />
                                            <small
                                                v-if="form.errors.birthday"
                                                class="text-danger"
                                                >{{ form.errors.birthday }}</small
                                            >
                                        </div>
                                        <div class="mb-3">
                                            <label
                                                class="form-label d-block mb-2"
                                                >Giới tính:</label
                                            >
                                            <div class="form-check form-check-inline">
                                                <input
                                                    class="form-check-input"
                                                    type="radio"
                                                    name="gender"
                                                    :value="1"
                                                    v-model="form.gender"
                                                    id="gender-male"
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="gender-male"
                                                    >Nam</label
                                                >
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input
                                                    class="form-check-input"
                                                    type="radio"
                                                    name="gender"
                                                    :value="2"
                                                    v-model="form.gender"
                                                    id="gender-female"
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="gender-female"
                                                    >Nữ</label
                                                >
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input
                                                    class="form-check-input"
                                                    type="radio"
                                                    name="gender"
                                                    :value="0"
                                                    v-model="form.gender"
                                                    id="gender-unknown"
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="gender-unknown"
                                                    >Khác/Không xác định</label
                                                >
                                            </div>
                                            <div v-if="form.errors.gender" class="text-danger mt-2">
                                                {{ form.errors.gender }}
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Số điện thoại</label>
                                            <input
                                                class="form-control"
                                                type="text"
                                                name="phone"
                                                autocomplete="off"
                                                placeholder="Nhập số điện thoại"
                                                v-model="form.phone"
                                            />
                                            <small
                                                v-if="form.errors.phone"
                                                class="text-danger"
                                                >{{ form.errors.phone }}</small
                                            >
                                        </div>
                                        <button
                                            class="btn btn-secondary"
                                            type="submit"
                                            :disabled="form.processing"
                                        >
                                            Cập nhật
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
