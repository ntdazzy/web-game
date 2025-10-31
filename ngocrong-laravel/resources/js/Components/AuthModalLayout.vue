<script setup>
import TopLogin from "@/Components/TopLogin.vue";
import BottomStrip from "@/Components/BottomStrip.vue";
import { computed } from "vue";

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    closeHref: {
        type: String,
        default: "/",
    },
    ariaId: {
        type: String,
        default: "authModalTitle",
    },
});

const headingId = computed(() => props.ariaId || "authModalTitle");
</script>

<template>
    <div
        id="root"
        class="auth-modal-page d-flex flex-column align-items-center w-100 position-relative"
    >
        <TopLogin />
        <div class="auth-modal-page__wrapper">
            <div class="login-modal login-modal--static is-open">
                <div class="login-modal__backdrop" aria-hidden="true"></div>
                <div
                    class="login-modal__dialog"
                    role="dialog"
                    aria-modal="true"
                    :aria-labelledby="headingId"
                >
                    <button
                        v-if="closeHref"
                        type="button"
                        class="login-modal__close"
                        :aria-label="`Đóng ${title}`"
                        @click="$inertia.visit(closeHref)"
                    ></button>
                    <slot :heading-id="headingId" />
                </div>
            </div>
        </div>
        <BottomStrip />
    </div>
</template>
