<script setup>
import TopLogin from "@/Components/TopLogin.vue";
import BottomStrip from "@/Components/BottomStrip.vue";
import { Head, Link } from "@inertiajs/vue3";
import { computed, ref } from "vue";

const props = defineProps({
    user: {
        type: Object,
        default: () => ({
            name: "Tân thủ",
            gem_balance: 0,
        }),
    },
    paymentTabs: {
        type: Array,
        default: () => [],
    },
    paymentMethods: {
        type: Array,
        default: () => [],
    },
    packages: {
        type: Array,
        default: () => [],
    },
    bonuses: {
        type: Array,
        default: () => [],
    },
    historyRoute: {
        type: String,
        default: "#",
    },
    activeTab: {
        type: String,
        default: "payment",
    },
    servers: {
        type: Array,
        default: () => [],
    },
});

const selectedMethodId = ref(props.paymentMethods[0]?.id ?? null);
const selectedAmount = ref(props.packages[0]?.amount ?? null);
const selectedServer = ref(props.servers[0] ?? "");

const activeTabSlug = computed(
    () =>
        props.paymentTabs.find((tab) => tab.active)?.slug ??
        props.activeTab ??
        "payment"
);
const isPaymentTab = computed(() => activeTabSlug.value === "payment");
const isPackageTab = computed(() => activeTabSlug.value === "package");
const isConvertTab = computed(() => activeTabSlug.value === "convert");
const showSubmitButton = computed(
    () => isPaymentTab.value || isConvertTab.value
);
const servers = computed(() => props.servers ?? []);
const submitLabel = computed(() =>
    isConvertTab.value ? "Xác nhận quy đổi" : "Xác nhận"
);
const submitName = computed(() => (isConvertTab.value ? "fconvert" : "fpay"));
const pageTitle = computed(() => {
    if (isPackageTab.value) return "Quà nạp Web";
    if (isConvertTab.value) return "Từ ví vào Game";
    return "Nạp tiền vào ví";
});

const selectedMethod = computed(
    () =>
        props.paymentMethods.find(
            (method) => method.id === selectedMethodId.value
        ) ?? null
);

const selectedPackage = computed(
    () =>
        props.packages.find((item) => item.amount === selectedAmount.value) ??
        null
);

const formattedNumber = (value) =>
    new Intl.NumberFormat("vi-VN").format(Number(value ?? 0));

const formattedCurrency = (value) => `${formattedNumber(value)} đ`;

const selectMethod = (methodId) => {
    selectedMethodId.value = methodId;
};

const selectPackage = (amount) => {
    selectedAmount.value = amount;
};

const loadSwal = async () => {
    if (typeof window !== "undefined" && window.Swal) {
        return window.Swal;
    }

    await import("@/vendor/sweetalert2.all.js");

    return typeof window !== "undefined" ? window.Swal : null;
};

const confirmTopUp = async () => {
    const summaryLines = [];

    if (selectedMethod.value) {
        summaryLines.push(`Phương thức: ${selectedMethod.value.label}`);
    }

    if (selectedPackage.value) {
        summaryLines.push(
            `Gói nạp: GEM ${formattedNumber(
                selectedPackage.value.gems
            )} (bonus ${formattedNumber(selectedPackage.value.bonus_gems ?? 0)})`
        );
        summaryLines.push(
            `Giá trị: ${formattedCurrency(selectedPackage.value.amount)}`
        );
    }

    const Swal = await loadSwal();

    if (!Swal) {
        window.alert(
            summaryLines.length
                ? summaryLines.join("\n")
                : "Vui lòng chọn gói nạp và phương thức thanh toán trước khi tiếp tục."
        );
        return;
    }

    Swal.fire({
        icon: "info",
        title: "Xác nhận nạp",
        html:
            summaryLines.join("<br>") ||
            "Vui lòng chọn gói nạp và phương thức thanh toán trước khi tiếp tục.",
        confirmButtonText: "Đồng ý",
    });
};

const confirmConvert = async () => {
    const summaryLines = [];

    if (selectedServer.value) {
        summaryLines.push(`Server: ${selectedServer.value}`);
    }

    if (selectedPackage.value) {
        summaryLines.push(
            `Quy đổi: ${formattedNumber(selectedPackage.value.gems)} GEM`
        );
    }

    const Swal = await loadSwal();

    if (!Swal) {
        window.alert(
            summaryLines.length
                ? summaryLines.join("\n")
                : "Vui lòng chọn server và gói quy đổi trước khi tiếp tục."
        );
        return;
    }

    Swal.fire({
        icon: "info",
        title: "Xác nhận quy đổi",
        html:
            summaryLines.join("<br>") ||
            "Vui lòng chọn server và gói quy đổi trước khi tiếp tục.",
        confirmButtonText: "Đồng ý",
    });
};

const submitAction = async (event) => {
    event?.stopImmediatePropagation?.();
    event?.preventDefault?.();

    if (isConvertTab.value) {
        return confirmConvert();
    }

    return confirmTopUp();
};
</script>

<template>
    <div class="wallet-topup-page">
        <Head :title="pageTitle" />
        <div
            id="root"
            class="d-flex flex-column align-items-center w-100 position-relative"
        >
            <TopLogin />
            <div class="subpage-container wrapper-id wrapper-payment">
                <div class="container h-100 position-relative">
                    <div class="d-flex flex-column align-items-center">
                        <h1 class="page-title">{{ pageTitle }}</h1>
                        <div class="payment w-100">
                            <ul class="payment-tab w-100">
                                <li
                                    v-for="tab in paymentTabs"
                                    :key="tab.slug"
                                    :class="[
                                        `link-to-${tab.slug}`,
                                        { active: tab.active },
                                        tab.class?.length ? tab.class : null,
                                    ]"
                                >
                                    <component
                                        :is="tab.href ? Link : 'a'"
                                        v-bind="
                                            tab.href
                                                ? { href: tab.href }
                                                : { href: 'javascript:void(0)' }
                                        "
                                    >
                                        {{ tab.label }}
                                    </component>
                                </li>
                            </ul>

                            <div class="payment-userinfo w-100">
                                <ul>
                                    <li>
                                        <span class="uname-label">
                                            Tài khoản:
                                        </span>
                                        <b class="display-name">
                                            {{ props.user.name }}
                                        </b>
                                    </li>
                                    <li>
                                        <span class="gem-label color-blue">
                                            GEM
                                        </span>
                                        :
                                        <b class="display-balance">
                                            {{
                                                formattedNumber(
                                                    props.user.gem_balance
                                                )
                                            }}
                                        </b>
                                    </li>
                                </ul>
                            </div>

                            <div class="link-to-history w-100 text-center">
                                <Link :href="historyRoute" class="history-link">
                                    Lịch sử nạp
                                </Link>
                            </div>

                            <div v-if="isPaymentTab" class="payment-section">
                                <div class="item-list w-100">
                                    <label for="">Chọn hình thức</label>
                                    <div class="item-list-payment-type">
                                        <a
                                            v-for="method in paymentMethods"
                                            :key="method.id"
                                            href="javascript:void(0)"
                                            class="item-type"
                                            :class="{
                                                active:
                                                    method.id ===
                                                    selectedMethodId,
                                            }"
                                            :data-rate="method.rate"
                                            :data-bonus="method.bonus_rate"
                                            @click.prevent="
                                                selectMethod(method.id)
                                            "
                                        >
                                            <input
                                                type="hidden"
                                                name="ftype"
                                                :value="method.id"
                                            />
                                            <div
                                                class="img"
                                                :class="`img-type-${method.image_variant}`"
                                                :style="{
                                                    backgroundImage: method.image
                                                        ? `url(${method.image})`
                                                        : undefined,
                                                }"
                                            ></div>
                                            <h6>{{ method.label }}</h6>
                                            <span
                                                v-if="method.ribbon"
                                                class="ribbon"
                                                >{{ method.ribbon }}</span
                                            >
                                        </a>
                                    </div>
                                </div>

                                <div class="item-list w-100">
                                    <label for="">Chọn giá trị</label>
                                    <div class="item-list-slick">
                                        <div
                                            v-for="pkg in packages"
                                            :key="pkg.amount"
                                            class="item"
                                        >
                                            <a
                                                href="javascript:void(0)"
                                                :class="{
                                                    active:
                                                        pkg.amount ===
                                                        selectedAmount,
                                                }"
                                                @click.prevent="
                                                    selectPackage(pkg.amount)
                                                "
                                            >
                                                <input
                                                    type="hidden"
                                                    name="famount"
                                                    :value="pkg.amount"
                                                />
                                                <span class="top">
                                                    GEM
                                                    <b>{{
                                                        formattedNumber(
                                                            pkg.gems
                                                        )
                                                    }}</b>
                                                </span>
                                                <span class="middle">
                                                    <b
                                                        >+
                                                        {{
                                                            formattedNumber(
                                                                pkg.bonus_gems ??
                                                                    0
                                                            )
                                                        }}</b
                                                    >
                                                    BONUS
                                                </span>
                                                <span class="bot">
                                                    {{
                                                        formattedNumber(
                                                            pkg.amount
                                                        )
                                                    }}
                                                    <u>đ</u>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div v-if="isConvertTab" class="convert-section">
                                <div class="item-list w-100">
                                    <label for="">Chọn server</label>
                                    <select
                                        class="form-control"
                                        v-model="selectedServer"
                                    >
                                        <option value="">-- Chọn server --</option>
                                        <option
                                            v-for="server in servers"
                                            :key="server"
                                            :value="server"
                                        >
                                            {{ server }}
                                        </option>
                                    </select>
                                    <p
                                        v-if="!servers.length"
                                        class="text-muted small mt-2"
                                    >
                                        Bạn chưa có nhân vật để quy đổi. Vui
                                        lòng tạo nhân vật trước.
                                    </p>
                                </div>

                                <div class="item-list w-100 item-convert-list">
                                    <label for="">Chọn gói quy đổi</label>
                                    <div class="item-list-slick">
                                        <div
                                            v-for="pkg in packages"
                                            :key="pkg.amount"
                                            class="item"
                                        >
                                            <a
                                                href="javascript:void(0)"
                                                :class="{
                                                    active:
                                                        pkg.amount ===
                                                        selectedAmount,
                                                }"
                                                @click.prevent="
                                                    selectPackage(pkg.amount)
                                                "
                                            >
                                                <input
                                                    type="hidden"
                                                    name="famount"
                                                    :value="pkg.amount"
                                                />
                                                <span class="top">
                                                    GEM
                                                    <b>{{
                                                        formattedNumber(
                                                            pkg.gems
                                                        )
                                                    }}</b>
                                                </span>
                                                <span class="middle">
                                                    <b
                                                        >+
                                                        {{
                                                            formattedNumber(
                                                                pkg.bonus_gems ??
                                                                    0
                                                            )
                                                        }}</b
                                                    >
                                                    BONUS
                                                </span>
                                                <span class="bot">
                                                    {{
                                                        formattedNumber(
                                                            pkg.amount
                                                        )
                                                    }}
                                                    <u>đ</u>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <p class="text-muted small mt-2">
                                        Số GEM sẽ trừ trực tiếp từ ví sau khi
                                        xác nhận.
                                    </p>
                                </div>
                            </div>

                            <div
                                class="package-list w-100 mt-4"
                                v-if="props.bonuses.length && (isPackageTab || isPaymentTab)"
                            >
                                <label for="">Quà nạp web</label>
                                <div class="package-container">
                                    <div
                                        v-for="bonus in props.bonuses"
                                        :key="bonus.id"
                                        class="package-item package-item-limit-1"
                                    >
                                        <div class="left">
                                            <h3 class="name">
                                                {{ bonus.name }}
                                            </h3>
                                            <p
                                                v-if="bonus.description"
                                                class="text-white-50 small mb-3"
                                            >
                                                {{ bonus.description }}
                                            </p>
                                        </div>
                                        <div class="right">
                                            <div class="scroll-package-item">
                                                <div
                                                    v-for="reward in bonus.rewards ?? []"
                                                    :key="`${bonus.id}-${reward.name}`"
                                                    class="item"
                                                >
                                                    <p>
                                                        <span class="fw-bold">
                                                            x{{
                                                                formattedNumber(
                                                                    reward.quantity ??
                                                                        1
                                                                )
                                                            }}
                                                        </span>
                                                    </p>
                                                    <h6>{{ reward.name }}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button
                                v-if="showSubmitButton"
                                type="button"
                                :name="submitName"
                                class="submit form-control"
                                @click="submitAction"
                            >
                                {{ submitLabel }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <BottomStrip />
        </div>
    </div>
</template>
