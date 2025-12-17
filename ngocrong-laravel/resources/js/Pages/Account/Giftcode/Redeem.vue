<script setup>
import TopLogin from "@/Components/TopLogin.vue";
import BottomStrip from "@/Components/BottomStrip.vue";
import { Head } from "@inertiajs/vue3";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const props = defineProps({
    servers: {
        type: Array,
        default: () => [],
    },
    codeTypes: {
        type: Array,
        default: () => [],
    },
    history: {
        type: Array,
        default: () => [],
    },
});

const dropdownRef = ref(null);
const dropdownOpen = ref(false);
const historyOpen = ref(false);

const defaultServerValue = props.servers[0]?.value ?? "nro-heroes";

const selectedServerValue = ref(defaultServerValue);
const selectedCodeTypeId = ref(null);

const selectedServer = computed(() =>
    props.servers.find((server) => server.value === selectedServerValue.value)
);

const selectedServerSlug = computed(
    () => selectedServer.value?.slug?.trim() ?? ""
);

const selectedCodeType = computed(() =>
    props.codeTypes.find(
        (codeType) => codeType.id === selectedCodeTypeId.value
    )
);

const dropdownLabel = computed(() => {
    if (!selectedCodeType.value) {
        return "-- Chọn loại Code --";
    }

    return selectedCodeType.value.label;
});

const currentTableHtml = computed(
    () => selectedCodeType.value?.table_html ?? null
);

const hasHistory = computed(() => (props.history ?? []).length > 0);

const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value;
};

const closeDropdown = () => {
    dropdownOpen.value = false;
};

const selectCodeType = (codeTypeId) => {
    selectedCodeTypeId.value = codeTypeId;
    closeDropdown();
};

const mediaQueriesMatch = (event) => {
    if (event?.target?.closest(".selectCodeType") === dropdownRef.value) {
        return;
    }

    closeDropdown();
};

const attachOutsideListener = (event) => {
    if (!dropdownRef.value) {
        return;
    }

    if (dropdownRef.value.contains(event.target)) {
        return;
    }

    closeDropdown();
};

const loadSwal = async () => {
    const module = await import("sweetalert2");
    return module.default;
};

const copyToClipboard = async (value) => {
    try {
        await navigator.clipboard.writeText(value);
        return true;
    } catch (error) {
        console.error("Clipboard copy failed", error);
        return false;
    }
};

const showInfoModal = async (options) => {
    const Swal = await loadSwal();
    await Swal.fire(options);
};

const showGiftcodeModal = async (code) => {
    const Swal = await loadSwal();

    await Swal.fire({
        icon: "success",
        title: "Giftcode của bạn",
        html: `
            <p class="content-code fw-semibold">${code}</p>
            <button type="button" class="btn btn-sm btn-outline-light btn-copy-code">
                Sao chép
            </button>
        `,
        showConfirmButton: true,
        confirmButtonText: "Đóng",
        didOpen: () => {
            const copyButton =
                Swal.getPopup()?.querySelector(".btn-copy-code");
            if (!copyButton) {
                return;
            }

            copyButton.addEventListener("click", async (event) => {
                event.preventDefault();
                const success = await copyToClipboard(code);
                if (success) {
                    copyButton.textContent = "Đã sao chép";
                }
            });
        },
    });
};

const handleRedeem = async () => {
    if (!selectedServerSlug.value) {
        await showInfoModal({
            icon: "warning",
            title: "Vui lòng chọn máy chủ",
            confirmButtonText: "Đóng",
        });
        return;
    }

    if (!selectedCodeType.value) {
        await showInfoModal({
            icon: "warning",
            title: "Vui lòng chọn loại giftcode",
            confirmButtonText: "Đóng",
        });
        return;
    }

    const defaultCode = selectedCodeType.value.default_code;
    if (defaultCode) {
        await showGiftcodeModal(defaultCode);
        return;
    }

    await showInfoModal({
        icon: "info",
        title: "Đang cập nhật",
        text: "Loại giftcode này chưa hỗ trợ nhận trực tuyến. Vui lòng theo dõi thông báo chính thức.",
        confirmButtonText: "Đóng",
    });
};

const openHistory = () => {
    if (!hasHistory.value) {
        return;
    }

    historyOpen.value = true;
    document.body.classList.add("overflow-hidden");
};

const closeHistory = () => {
    historyOpen.value = false;
    document.body.classList.remove("overflow-hidden");
};

const formatDateTime = (value) => {
    if (!value) {
        return "--";
    }

    try {
        return new Date(value).toLocaleString("vi-VN");
    } catch (error) {
        return value;
    }
};

onMounted(() => {
    document.addEventListener("click", attachOutsideListener);
    document.addEventListener("focusin", mediaQueriesMatch);

    if (!selectedCodeTypeId.value && props.codeTypes.length > 0) {
        const preferred = props.codeTypes.find(
            (codeType) => Boolean(codeType.default_code)
        );
        selectedCodeTypeId.value = preferred
            ? preferred.id
            : props.codeTypes[0].id;
    }
});

onBeforeUnmount(() => {
    document.removeEventListener("click", attachOutsideListener);
    document.removeEventListener("focusin", mediaQueriesMatch);
    document.body.classList.remove("overflow-hidden");
});
</script>

<template>
    <div class="giftcode-page account-page">
        <Head title="Nhận Giftcode" />
        <div
            id="root"
            class="d-flex flex-column align-items-center w-100 position-relative"
        >
            <TopLogin />

            <div class="subpage-container wrapper-id giftcode-page">
                <div class="container h-100 position-relative">
                    <div class="d-flex flex-column align-items-center">
                        <h1 class="page-title">NHẬN GIFTCODE</h1>
                        <div class="row wrapper-content">
                            <div class="content">
                                <div class="select-group d-flex">
                                    <div class="dropdown server">
                                        <select
                                            id="serverSelect"
                                            v-model="selectedServerValue"
                                            class="form-select position-relative"
                                        >
                                            <option
                                                v-for="server in servers"
                                                :key="server.value"
                                                :value="server.value"
                                                :title="server.title"
                                            >
                                                {{ server.label }}
                                            </option>
                                        </select>
                                    </div>

                                    <div
                                        ref="dropdownRef"
                                        class="dropdown giftcode selectCodeType"
                                        :class="{ show: dropdownOpen }"
                                    >
                                        <button
                                            class="btn btn-outline-secondary dropdown-toggle"
                                            type="button"
                                            id="giftcodeDropdown"
                                            :aria-expanded="dropdownOpen"
                                            @click.prevent="toggleDropdown"
                                        >
                                            {{ dropdownLabel }}
                                        </button>
                                        <ul
                                            class="dropdown-menu"
                                            :class="{ show: dropdownOpen }"
                                            aria-labelledby="giftcodeDropdown"
                                        >
                                            <li
                                                v-for="codeType in codeTypes"
                                                :key="codeType.id"
                                            >
                                                <a
                                                    class="dropdown-item"
                                                    href="javascript:void(0)"
                                                    @click.prevent="
                                                        selectCodeType(
                                                            codeType.id
                                                        )
                                                    "
                                                >
                                                    {{ codeType.label }}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="button-group d-flex gap-1">
                                    <button
                                        id="confirmGetCode"
                                        class="get-giftcode"
                                        type="button"
                                        @click="handleRedeem"
                                    ></button>
                                    <button
                                        id="giftcodeHistory"
                                        class="history"
                                        type="button"
                                        :disabled="!hasHistory"
                                        @click="openHistory"
                                    ></button>
                                </div>

                                <div class="giftcode-description">
                                    Lưu ý : Mỗi tài khoản chỉ sử dụng được 1
                                    code cùng loại. <br />
                                    Ví dụ : 1 tài khoản chơi 2 server thì chỉ 1
                                    server nhận được code. <br />
                                    Khuyến nghị : Chơi server mới nên tạo tài
                                    khoản mới để có thể sử dụng lại code.
                                </div>

                                <div
                                    class="history table-responsive"
                                    v-if="currentTableHtml"
                                >
                                    <div
                                        class="table-his table-responsive"
                                        v-html="currentTableHtml"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                class="popup popup-history"
                :style="{ display: historyOpen ? 'block' : 'none' }"
            >
                <div class="wrap">
                    <div class="content">
                        <h3>Lịch sử nhận code</h3>
                        <div class="table-responsive table-history-box">
                            <table
                                id="table-history"
                                class="table table-bordered table-hover"
                            >
                                <thead class="thead-light">
                                    <tr>
                                        <th>Tên</th>
                                        <th>Code</th>
                                        <th>Máy chủ</th>
                                        <th>Thời gian nhận</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-if="!hasHistory">
                                        <td colspan="4" class="text-center">
                                            Chưa có ghi nhận nào.
                                        </td>
                                    </tr>
                                    <tr
                                        v-for="row in history"
                                        :key="`${row.code}-${row.received_at}`"
                                    >
                                        <td>{{ row.name }}</td>
                                        <td class="text-uppercase">
                                            {{ row.code }}
                                        </td>
                                        <td class="text-center">
                                            {{
                                                row.server && row.server !== ""
                                                    ? row.server
                                                    : "---"
                                            }}
                                        </td>
                                        <td>
                                            {{ formatDateTime(row.received_at) }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <a
                        href="javascript:void(0)"
                        class="close"
                        @click.prevent="closeHistory"
                    >
                        <i class="fa-light fa-xmark"></i>
                    </a>
                </div>
            </div>

            <BottomStrip />
        </div>
    </div>
</template>
