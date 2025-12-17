<script setup>
import TopLogin from "@/Components/TopLogin.vue";
import BottomStrip from "@/Components/BottomStrip.vue";
import { Head, Link } from "@inertiajs/vue3";
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
        disabled: !!item.disabled,
    }))
);

const defaultAvatar = new URL(
    "../../../../assets/images/avatar.png",
    import.meta.url
).href;
const avatarUrl = computed(() => props.profile?.avatar || defaultAvatar);

const genderLabel = computed(
    () => props.profile?.gender_label ?? "Chưa xác định"
);
const birthdayLabel = computed(
    () => props.profile?.birthday ?? "Chưa cập nhật"
);
const phoneLabel = computed(() => props.profile?.phone ?? "Chưa cập nhật");

const accountRoutes = computed(() => ({
    editProfile: route("account.profile.edit"),
    changePassword: route("account.password.edit"),
    changeEmail: route("account.email.edit"),
}));

const accountInfoRows = computed(() => [
    {
        icon: "fa-light fa-id-badge",
        label: "Tài khoản",
        value: props.profile?.username ?? "Đang cập nhật",
        action: null,
    },
    {
        icon: "fa-light fa-signature",
        label: "Họ tên",
        value: props.profile?.full_name ?? "Chưa cập nhật",
        action: accountRoutes.value.editProfile,
    },
    {
        icon: "fa-light fa-calendar-days",
        label: "Sinh nhật",
        value: birthdayLabel.value,
        action: accountRoutes.value.editProfile,
    },
    {
        icon: "fa-light fa-venus-mars",
        label: "Giới tính",
        value: genderLabel.value,
        action: accountRoutes.value.editProfile,
    },
    {
        icon: "fa-light fa-envelope",
        label: "Email",
        value: props.profile?.email ?? "Chưa cập nhật",
        action: accountRoutes.value.changeEmail,
    },
    {
        icon: "fa-light fa-phone",
        label: "Số điện thoại",
        value: phoneLabel.value,
        action: accountRoutes.value.editProfile,
    },
]);
</script>

<template>
    <div class="account-page">
        <Head title="Tài khoản" />
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
                                        :class="[
                                            { active: link.active },
                                            { disabled: link.disabled },
                                        ]"
                                    >
                                        <component
                                            :is="link.disabled ? 'span' : Link"
                                            :href="link.href"
                                        >
                                            {{ link.label }}
                                        </component>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-9 user-box">
                                <div class="breadcrumb d-flex flex-column">
                                    <h4 class="text-blue">
                                        Thông tin tài khoản
                                    </h4>
                                    <p>
                                        Bạn có thể cập nhật các thông tin công
                                        khai tại đây, hệ thống sẽ tự động liên
                                        kết với tài khoản game.
                                    </p>
                                    <div
                                        class="alert alert-warning mb-1 user-info-warning"
                                        role="alert"
                                    >
                                        Để bảo mật tài khoản của bạn, hãy sớm
                                        cập nhật đầy đủ thông tin cá nhân.
                                    </div>
                                </div>
                                <div class="user-table">
                                    <div
                                        class="row align-items-center info-row"
                                    >
                                        <div class="col-4 label-text">
                                            Hình đại diện
                                        </div>
                                        <div class="col-6 value-text">
                                            <img
                                                :src="avatarUrl"
                                                alt="Avatar"
                                                class="avatar-img"
                                            />
                                        </div>
                                        <div
                                            class="col-2 text-center p-0"
                                        ></div>
                                    </div>
                                    <div
                                        v-for="row in accountInfoRows"
                                        :key="row.label"
                                        class="row align-items-center info-row"
                                    >
                                        <div
                                            class="col-4 label-text d-flex align-items-center"
                                        >
                                            <i :class="row.icon"></i>
                                            {{ row.label }}
                                        </div>
                                        <div class="col-6 value-text">
                                            {{ row.value }}
                                        </div>
                                        <div class="col-2 text-center p-0">
                                            <Link
                                                v-if="row.action"
                                                :href="row.action"
                                                class="action-link"
                                            >
                                                Cập nhật
                                            </Link>
                                        </div>
                                    </div>
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
