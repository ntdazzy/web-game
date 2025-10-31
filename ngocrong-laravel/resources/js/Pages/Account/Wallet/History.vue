<script setup>
import TopLogin from '@/Components/TopLogin.vue';
import BottomStrip from '@/Components/BottomStrip.vue';
import { Head } from '@inertiajs/vue3';
import { computed } from 'vue';

const props = defineProps({
    transactions: {
        type: Array,
        default: () => [],
    },
    filters: {
        type: Object,
        default: () => ({ typeOptions: [] }),
    },
});

const hasTransactions = computed(() => (props.transactions ?? []).length > 0);

const formatCurrency = (value) =>
    new Intl.NumberFormat('vi-VN').format(Number(value ?? 0));

const statusLabel = (status) => {
    switch (status) {
        case 'completed':
            return 'Hoàn tất';
        case 'pending':
            return 'Đang xử lý';
        case 'failed':
            return 'Thất bại';
        default:
            return status;
    }
};

const typeLabel = (type) => {
    const map = {
        pay: 'Nạp tiền vào ví',
        package: 'Quà nạp web',
        convert: 'Nạp từ ví vào game',
        refund: 'Hoàn tiền',
        spend: 'Tiêu phí',
    };

    return map[type] ?? type;
};

const formatDateTime = (value) => {
    if (!value) return '';
    return new Date(value).toLocaleString('vi-VN');
};
</script>

<template>
    <div class="wallet-history-page">
        <Head title="Lịch sử nạp" />
        <div id="root" class="d-flex flex-column align-items-center w-100 position-relative">
            <TopLogin />
            <div class="subpage-container wrapper-id wrapper-history">
                <div class="container h-100 position-relative">
                    <div class="d-flex flex-column align-items-center">
                        <h1 class="page-title">Lịch sử nạp</h1>
                        <div class="history w-100">
                            <div class="form-history w-100">
                                <div class="row">
                                    <div class="form-item col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                                        <input
                                            type="text"
                                            name="fdatetime"
                                            class="daterange-picker form-control"
                                            placeholder="Thời gian"
                                            readonly
                                        />
                                    </div>
                                    <div
                                        class="form-item col-xxl-3 col-xl-3 col-lg-3 col-md-6 position-relative"
                                        id="select2-type-parent"
                                    >
                                        <select name="ftype" class="form-control select2 type">
                                            <option
                                                v-for="option in filters?.typeOptions ?? []"
                                                :key="option.value"
                                                :value="option.value"
                                            >
                                                {{ option.label }}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="form-item col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                                        <button type="button" name="fhistory" class="form-control">
                                            Tìm kiếm
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table class="table table-borderless" id="table-history">
                                    <tbody v-if="hasTransactions">
                                        <tr
                                            v-for="transaction in transactions"
                                            :key="transaction.id"
                                            class="history-row align-middle"
                                        >
                                            <td class="text-start">
                                                <div class="history-title fw-semibold">
                                                    {{ typeLabel(transaction.type) }}
                                                </div>
                                                <div class="history-meta text-muted">
                                                    Mã tham chiếu: {{ transaction.ref_code ?? 'N/A' }}
                                                </div>
                                            </td>
                                            <td class="text-end">
                                                <div class="history-amount fw-semibold">
                                                    {{ formatCurrency(transaction.amount) }} đ
                                                </div>
                                                <div class="history-status text-muted">
                                                    {{ statusLabel(transaction.status) }} &bull;
                                                    {{ formatDateTime(transaction.processed_at ?? transaction.created_at) }}
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody v-else>
                                        <tr class="text-center">
                                            <td>Vui lòng nhập dữ liệu cần tìm kiếm</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BottomStrip />
        </div>
    </div>
</template>
