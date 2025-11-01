<script setup>
import TopLogin from "@/Components/TopLogin.vue";
import { Link } from "@inertiajs/vue3";

const props = defineProps({
    navItems: {
        type: Array,
        default: () => [],
    },
});
</script>

<template>
    <div id="root" class="d-flex flex-column align-items-center w-100 position-relative">
        <TopLogin />

        <div class="subpage-container wrapper-id">
            <div class="container h-100 position-relative">
                <div class="d-flex flex-column align-items-center">
                    <h1 class="page-title">Tài khoản</h1>
                    <div class="row content">
                        <div class="col-3 wrap-left-side">
                            <ul class="left-side">
                                <li
                                    v-for="item in props.navItems"
                                    :key="item.label"
                                    :class="{ active: item.active }"
                                >
                                    <Link :href="item.href">{{ item.label }}</Link>
                                </li>
                            </ul>
                        </div>
                        <div class="col-9 user-box">
                            <slot />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
