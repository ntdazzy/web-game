(function (window, document) {
    const config = window.__APP_CONFIG__ || {};
    const cookieDomain = config.cookieDomain || window.location.hostname;

    const paymentWrapper = document.querySelector('.wrapper-payment');
    const historyWrapper = document.querySelector('.wrapper-history');

    if (!paymentWrapper && !historyWrapper) {
        return;
    }

    const supportsIntl = typeof Intl !== 'undefined' && Intl.NumberFormat;
    const numberFormatter = supportsIntl
        ? new Intl.NumberFormat('vi-VN')
        : null;

    function formatNumber(value) {
        const parsed = Number(value) || 0;
        if (numberFormatter) {
            return numberFormatter.format(parsed);
        }
        return String(parsed);
    }

    function getCookie(name) {
        return document.cookie
            .split(';')
            .map((part) => part.trim())
            .filter(Boolean)
            .find((cookie) => cookie.startsWith(name + '='))?.split('=')[1] || '';
    }

    function deleteCookie(name) {
        const expires = 'expires=Thu, 01 Jan 1970 00:00:00 GMT';
        document.cookie = `${name}=; ${expires}; path=/`;
        if (cookieDomain) {
            document.cookie = `${name}=; ${expires}; path=/; domain=${cookieDomain}`;
        }
    }

    function showNotification(type, message) {
        const fn = window[type];
        if (typeof fn === 'function') {
            fn(message);
        } else if (window.console) {
            console[type === 'warning' ? 'warn' : 'log'](message);
        }
    }

    function toggleBodyOverflow(enable) {
        if (typeof window.changeStateOverflow === 'function') {
            window.changeStateOverflow(enable);
            return;
        }
        document.body.classList.toggle('overflow-hidden', !!enable);
        document.body.classList.toggle('overflow-y-auto', !enable);
    }

    function serialize(params) {
        const searchParams = new URLSearchParams();
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                searchParams.append(key, value);
            }
        });
        return searchParams.toString();
    }

    function postForm(url, data) {
        if (!url) {
            return Promise.reject(new Error('Missing endpoint'));
        }
        const body = serialize(data);
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
            credentials: 'same-origin',
            body,
        }).then((response) => response.json());
    }

    function updateGemBalance() {
        const balance = parseInt(getCookie('ubalance') || '0', 10);
        const elements = document.querySelectorAll('.display-balance');
        elements.forEach((el) => {
            el.textContent = formatNumber(balance);
        });
    }

    function handlePaymentState() {
        const status = getCookie('upaystatus');
        if (!status) {
            return;
        }
        const error = getCookie('upayerror');
        if (status === '1') {
            showNotification('success', 'Giao dịch thành công');
        } else {
            showNotification('warning', `Giao dịch thất bại${error ? ` ${error}` : ''}`);
        }
        deleteCookie('upaystatus');
        deleteCookie('upayerror');
    }

    function initialisePaymentTypes(container) {
        const typeItems = Array.from(
            container.querySelectorAll('.item-list-payment-type .item-type')
        );
        if (!typeItems.length) {
            return;
        }

        function updateAmounts(rate, bonusPercent) {
            const items = container.querySelectorAll('.item-list .item');
            items.forEach((item) => {
                const amountInput = item.querySelector('input[name="famount"]');
                if (!amountInput) {
                    return;
                }
                const amount = parseInt(amountInput.value || '0', 10);
                const gem = rate ? amount / rate : 0;
                const bonus = gem * bonusPercent;
                const gemElement = item.querySelector('.top b');
                const bonusElement = item.querySelector('.middle b');
                if (gemElement) {
                    gemElement.textContent = formatNumber(Math.round(gem));
                }
                if (bonusElement) {
                    bonusElement.textContent = formatNumber(Math.round(bonus));
                }
            });
        }

        typeItems.forEach((item) => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
                typeItems.forEach((el) => el.classList.remove('active'));
                item.classList.add('active');
                const rate = parseInt(item.getAttribute('data-rate') || '0', 10);
                const bonus = parseFloat(item.getAttribute('data-bonus') || '0');
                updateAmounts(rate, bonus);
            });
        });

        const defaultItem = typeItems.find((item) => item.classList.contains('active')) || typeItems[0];
        if (defaultItem) {
            defaultItem.dispatchEvent(new Event('click'));
        }
    }

    function initialiseSelectableItems(container, selector) {
        const items = Array.from(container.querySelectorAll(selector));
        if (!items.length) {
            return;
        }
        items.forEach((item) => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
                if (item.classList.contains('disabled')) {
                    showNotification('warning', 'Gói nạp đã được mua. Đừng quên nhận thưởng trong game!');
                    return;
                }
                items.forEach((el) => el.classList.remove('active'));
                item.classList.add('active');
            });
        });
        if (!items.some((item) => item.classList.contains('active'))) {
            items[0].classList.add('active');
        }
    }

    function initialisePackageDetails(container) {
        container.querySelectorAll('.package-item .view').forEach((button) => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                const item = button.closest('.package-item');
                if (!item) {
                    return;
                }
                container.querySelectorAll('.package-item.detail').forEach((detail) => {
                    if (detail !== item) {
                        detail.classList.remove('detail');
                    }
                });
                item.classList.toggle('detail');
            });
        });

        container.querySelectorAll('.package-item .right .close').forEach((button) => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                const item = button.closest('.package-item');
                if (item) {
                    item.classList.remove('detail');
                }
            });
        });
    }

    function getActiveValue(container, selector) {
        const active = container.querySelector(`${selector}.active input[name]`);
        return active ? active.value : '';
    }

    function showPackageRules() {
        const trigger = document.querySelector('.package-rule');
        if (!trigger || !window.Swal) {
            return;
        }
        trigger.addEventListener('click', (event) => {
            event.preventDefault();
            window.Swal.fire({
                customClass: { container: 'swal2-container-md' },
                title: 'Thể Lệ',
                icon: '',
                html: document.getElementById('package-rule-template')
                    ? document.getElementById('package-rule-template').innerHTML
                    : `
                <ul style="text-align: left">
                    <li>• Gói Nạp 7 ngày: nhận thưởng 7 lần - mỗi ngày nhận 1 lần</li>
                    <li>• Gói Nạp Ngày: Nhận thưởng 1 Lần. Qua ngày hôm sau mới có thể tiếp tục mua gói nạp hàng ngày.</li>
                    <li>• Chỉ có thể chọn 1 trong 2 gói ngày. Ví dụ mua gói ngày hình Nami không thể mua gói ngày hình Boa và ngược lại.</li>
                    <li>• Gói Nạp 30 ngày: nhận thưởng 30 lần - mỗi ngày nhận 1 lần</li>
                    <li>• Ngày hôm nay không nhận có thể nhận ngày hôm sau</li>
                    <li>• Nhận hết 7 lần phần thưởng thì mới có thể mua lại gói 7 ngày và 30 ngày</li>
                    <li>• Trong trường hợp, Thuyền Trưởng chưa nhận quà của ngày hôm đó thì cũng không ảnh hưởng đến quá trình nhận vì các gói này tính theo số lần nhận.</li>
                    <li>• Gói quà web hiện không được tính vào các event có tích luỹ nạp và điểm VIP</li>
                    <li>• Chỉ nạp tại trang chính thức để tránh bị lừa đảo</li>
                    <li>• Kiểm tra kỹ tài khoản đăng nhập, sever và số tiền trước khi xác nhận</li>
                </ul>
            `,
                showCloseButton: true,
                showCancelButton: false,
                confirmButtonText: 'Đóng',
            });
        });
    }

    function fetchGemBalance() {
        if (!paymentWrapper) {
            return;
        }
        const username = getCookie('uname');
        if (!username) {
            return;
        }
        postForm('/cap-nhat-so-gem', {})
            .then((response) => {
                if (response && response.status === 1 && response.data && typeof response.data.gem !== 'undefined') {
                    updateGemBalance();
                } else if (response && response.mess) {
                    showNotification('warning', response.mess);
                }
            })
            .catch(() => { });
    }

    function handleWalletSubmit(container) {
        const button = container.querySelector('button[name="fpay"]');
        if (!button) {
            return;
        }
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const activeType = container.querySelector('.item-list-payment-type .item-type.active input[name="ftype"]');
            const activeAmount = container.querySelector('.item-list .item.active input[name="famount"]');
            const type = activeType ? activeType.value : '';
            const amount = activeAmount ? activeAmount.value : '';
            if (!type) {
                showNotification('warning', 'Vui lòng chọn hình thức thanh toán');
                return;
            }
            if (!amount) {
                showNotification('warning', 'Vui lòng chọn giá trị muốn quy đổi');
                return;
            }
            if (typeof window.showLoading === 'function') {
                window.showLoading();
            }
            postForm('/nap-tien-vao-vi', { type, amount })
                .then((response) => {
                    if (typeof window.hideLoading === 'function') {
                        window.hideLoading();
                    }
                    if (!response || response.status !== 1) {
                        showNotification('warning', response && response.mess ? response.mess : 'Có lỗi xảy ra');
                        return;
                    }
                    const redirectUrl = response.data && response.data.redirect;
                    if (redirectUrl) {
                        window.location.href = redirectUrl;
                    }
                })
                .catch((error) => {
                    if (typeof window.hideLoading === 'function') {
                        window.hideLoading();
                    }
                    showNotification('error', 'Có lỗi xảy ra vui lòng liên hệ admin (#2)!');
                    if (window.console) {
                        console.error(error);
                    }
                });
        });
    }

    function handleConvertSubmit(container) {
        const button = container.querySelector('button[name="fconvert"]');
        if (!button) {
            return;
        }
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const server = container.querySelector('select[name="fserver"]');
            const amount = container.querySelector('.item-convert-list .item.active input[name="famount"]');
            const payload = {
                server: server ? server.value : '',
                amount: amount ? amount.value : '',
            };
            if (!payload.server || !payload.amount) {
                showNotification('warning', 'Vui lòng chọn server và giá trị muốn quy đổi');
                return;
            }
            if (typeof window.showLoading === 'function') {
                window.showLoading();
            }
            postForm('/nap-tu-vi-vao-game', payload)
                .then((response) => {
                    if (typeof window.hideLoading === 'function') {
                        window.hideLoading();
                    }
                    if (!response || response.status !== 1) {
                        showNotification('warning', response && response.mess ? response.mess : 'Có lỗi xảy ra');
                        return;
                    }
                    showNotification('success', response.mess || 'Thao tác thành công');
                    updateGemBalance();
                })
                .catch(() => {
                    if (typeof window.hideLoading === 'function') {
                        window.hideLoading();
                    }
                    showNotification('error', 'Có lỗi xảy ra vui lòng liên hệ admin (#2)!');
                });
        });
    }

    function markDisabledPackages(data) {
        if (!data) {
            return;
        }
        const items = document.querySelectorAll('.package-item');
        items.forEach((item) => {
            item.classList.remove('active');
            item.classList.remove('disabled');
        });
        Object.entries(data).forEach(([packageId, limit]) => {
            const item = document.getElementById(`package-item-${packageId}`);
            if (item) {
                item.classList.add('disabled');
            }
            document.querySelectorAll(`.package-item-limit-${limit}`).forEach((limitItem) => {
                limitItem.classList.add('disabled');
            });
        });
    }

    function handlePackageServerChange(container) {
        const serverSelect = container.querySelector('#server-package');
        if (!serverSelect) {
            return;
        }
        serverSelect.addEventListener('change', () => {
            const server = serverSelect.value;
            if (!server) {
                return;
            }
            if (typeof window.showLoading === 'function') {
                window.showLoading();
            }
            postForm('/kiem-tra-trang-thai-mua-qua', { server })
                .then((response) => {
                    if (typeof window.hideLoading === 'function') {
                        window.hideLoading();
                    }
                    if (!response || response.status !== 1) {
                        showNotification('warning', response && response.mess ? response.mess : 'Không thể tải dữ liệu gói quà');
                        return;
                    }
                    markDisabledPackages(response.data || {});
                })
                .catch(() => {
                    if (typeof window.hideLoading === 'function') {
                        window.hideLoading();
                    }
                    showNotification('error', 'Không thể tải trạng thái gói quà');
                });
        });
    }

    function handlePackageSubmit(container) {
        const button = container.querySelector('button[name="fpackage"]');
        if (!button) {
            return;
        }
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const serverSelect = container.querySelector('#server-package');
            const activePackage = container.querySelector('.package-container .package-item.active input[name="fpackage"]');
            const payload = {
                server: serverSelect ? serverSelect.value : '',
                package: activePackage ? activePackage.value : '',
            };
            if (!payload.server || !payload.package) {
                showNotification('warning', 'Vui lòng chọn server và gói muốn mua');
                return;
            }
            if (typeof window.showLoading === 'function') {
                window.showLoading();
            }
            postForm('/qua-nap-web', payload)
                .then((response) => {
                    if (typeof window.hideLoading === 'function') {
                        window.hideLoading();
                    }
                    if (!response || response.status !== 1) {
                        showNotification('warning', response && response.mess ? response.mess : 'Có lỗi xảy ra');
                        return;
                    }
                    showNotification('success', response.mess || 'Thao tác thành công');
                    markDisabledPackages(response.data || {});
                    updateGemBalance();
                })
                .catch(() => {
                    if (typeof window.hideLoading === 'function') {
                        window.hideLoading();
                    }
                    showNotification('error', 'Có lỗi xảy ra vui lòng liên hệ admin (#2)!');
                });
        });
    }

    function renderHistoryRows(type, status, data) {
        if (status !== 1 || !data) {
            return '<tr><td>Không có dữ liệu!</td></tr>';
        }
        const rows = Object.values(data).map((item) => {
            if (type === 'pay') {
                return `
          <tr>
            <td><span class="minitit-head">Trạng thái</span><span class="minitit-body ${item.status == 1 ? 'success' : 'false'}">${item.status == 1 ? 'Thành công' : 'Thất bại'}</span></td>
            <td><span class="minitit-head">Thời gian</span><span class="minitit-body">${item.date}</span></td>
            <td><span class="minitit-head">Giá trị (VND)</span><span class="minitit-body">${formatNumber(item.amount)}</span></td>
            <td><span class="minitit-head">Phương thức thanh toán</span><span class="minitit-body">${item.type === 'bank' ? 'ATM/Ví' : 'MOMO'}</span></td>
          </tr>`;
            }
            if (type === 'package') {
                const packages = window.packages || {};
                const packageName = packages[`package-${item.item}`]
                    ? packages[`package-${item.item}`].name
                    : 'Gói chưa xác định';
                return `
          <tr>
            <td><span class="minitit-head">Trạng thái</span><span class="minitit-body ${item.status == 1 ? 'success' : 'false'}">${item.status == 1 ? 'Thành công' : 'Thất bại'}</span></td>
            <td><span class="minitit-head">Thời gian</span><span class="minitit-body">${item.date}</span></td>
            <td><span class="minitit-head">Server</span><span class="minitit-body">${item.server}</span></td>
            <td><span class="minitit-head">Giá trị (GEM)</span><span class="minitit-body">${formatNumber(item.coin)}</span></td>
            <td><span class="minitit-head">Gói đã mua</span><span class="minitit-body">${packageName}</span></td>
          </tr>`;
            }
            return `
        <tr>
          <td><span class="minitit-head">Trạng thái</span><span class="minitit-body ${item.status == 1 ? 'success' : 'false'}">${item.status == 1 ? 'Thành công' : 'Thất bại'}</span></td>
          <td><span class="minitit-head">Thời gian</span><span class="minitit-body">${item.date}</span></td>
          <td><span class="minitit-head">Server</span><span class="minitit-body">${item.server}</span></td>
          <td><span class="minitit-head">Giá trị (GEM)</span><span class="minitit-body">${formatNumber(item.coin)}</span></td>
        </tr>`;
        });
        return rows.join('');
    }

    function initHistoryPage() {
        if (!historyWrapper) {
            return;
        }
        const submitButton = historyWrapper.querySelector('button[name="fhistory"]');
        if (!submitButton) {
            return;
        }
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();
            const datetimeInput = historyWrapper.querySelector('input[name="fdatetime"]');
            const typeSelect = historyWrapper.querySelector('select[name="ftype"]');
            const datetime = datetimeInput ? datetimeInput.value.trim() : '';
            const type = typeSelect ? typeSelect.value : '';
            if (!datetime || !type) {
                showNotification('warning', 'Vui lòng chọn dữ liệu');
                return;
            }
            if (typeof window.showLoading === 'function') {
                window.showLoading();
            }
            postForm('/lich-su-nap', { datetime, type })
                .then((response) => {
                    if (typeof window.hideLoading === 'function') {
                        window.hideLoading();
                    }
                    const tableBody = historyWrapper.querySelector('#table-history tbody');
                    if (!tableBody) {
                        return;
                    }
                    const rows = renderHistoryRows(type, response.status, response.data);
                    tableBody.innerHTML = rows;
                })
                .catch(() => {
                    if (typeof window.hideLoading === 'function') {
                        window.hideLoading();
                    }
                    showNotification('error', 'Có lỗi xảy ra vui lòng liên hệ admin (#1)!');
                });
        });
    }

    function initPackageRuleTemplate() {
        if (document.getElementById('package-rule-template')) {
            return;
        }
        const template = document.createElement('template');
        template.id = 'package-rule-template';
        template.innerHTML = `
      <ul style="text-align: left">
        <li>• Gói Nạp 7 ngày: nhận thưởng 7 lần - mỗi ngày nhận 1 lần</li>
        <li>• Gói Nạp Ngày: Nhận thưởng 1 Lần. Qua ngày hôm sau mới có thể tiếp tục mua gói nạp hàng ngày.</li>
        <li>• Chỉ có thể chọn 1 trong 2 gói ngày. Ví dụ mua gói ngày hình Nami không thể mua gói ngày hình Boa và ngược lại.</li>
        <li>• Gói Nạp 30 ngày: nhận thưởng 30 lần - mỗi ngày nhận 1 lần</li>
        <li>• Ngày hôm nay không nhận có thể nhận ngày hôm sau</li>
        <li>• Nhận hết 7 lần phần thưởng thì mới có thể mua lại gói 7 ngày và 30 ngày</li>
        <li>• Trong trường hợp, Thuyền Trưởng chưa nhận quà của ngày hôm đó thì cũng không ảnh hưởng đến quá trình nhận vì các gói này tính theo số lần nhận.</li>
        <li>• Gói quà web hiện không được tính vào các event có tích luỹ nạp và điểm VIP</li>
        <li>• Chỉ nạp tại trang chính thức để tránh bị lừa đảo</li>
        <li>• Kiểm tra kỹ tài khoản đăng nhập, server và số tiền trước khi xác nhận</li>
      </ul>
    `;
        document.body.appendChild(template);
    }

    document.addEventListener('DOMContentLoaded', () => {
        handlePaymentState();
        updateGemBalance();
        fetchGemBalance();
        initHistoryPage();

        if (paymentWrapper) {
            initPackageRuleTemplate();
            initialisePaymentTypes(paymentWrapper);
            initialiseSelectableItems(paymentWrapper, '.item-list-slick .item');
            initialisePackageDetails(paymentWrapper);
            initialiseSelectableItems(paymentWrapper, '.package-container .package-item');
            handleWalletSubmit(paymentWrapper);
            handleConvertSubmit(paymentWrapper);
            handlePackageSubmit(paymentWrapper);
            handlePackageServerChange(paymentWrapper);
        }

        const historyPopup = document.querySelector('.popup.popup-history');
        if (historyPopup) {
            historyPopup.addEventListener('click', (event) => {
                if (event.target === historyPopup) {
                    historyPopup.classList.add('is-hidden');
                    toggleBodyOverflow(false);
                }
            });
            const closeButton = historyPopup.querySelector('.close');
            if (closeButton) {
                closeButton.addEventListener('click', (event) => {
                    event.preventDefault();
                    historyPopup.classList.add('is-hidden');
                    toggleBodyOverflow(false);
                });
            }
        }

    });
})(window, document);
