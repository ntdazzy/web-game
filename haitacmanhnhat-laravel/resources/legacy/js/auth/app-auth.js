(function () {
    const modal = document.getElementById('authModal');
    if (!modal) {
        return;
    }

    const panel = modal.querySelector('.panel');
    const backdrop = modal.querySelector('.backdrop');
    const closeBtn = modal.querySelector('.close');
    const tabButtons = Array.from(modal.querySelectorAll('.tab-btn'));
    const tabPanes = Array.from(modal.querySelectorAll('.tab-pane'));

    let activeTab = 'login';

    function lockScroll() {
        document.body.dataset.prevOverflow = document.body.style.overflow || '';
        document.body.style.overflow = 'hidden';
    }

    function unlockScroll() {
        if (document.body.dataset.prevOverflow !== undefined) {
            document.body.style.overflow = document.body.dataset.prevOverflow;
            delete document.body.dataset.prevOverflow;
        } else {
            document.body.style.overflow = '';
        }
    }

    function switchTab(tab) {
        activeTab = tab;
        tabButtons.forEach((button) => {
            const isActive = button.dataset.tab === tab;
            button.classList.toggle('active', isActive);
            button.setAttribute('aria-pressed', String(isActive));
        });
        tabPanes.forEach((pane) => {
            const isActive = pane.dataset.tab === tab;
            pane.classList.toggle('hidden', !isActive);
            pane.setAttribute('aria-hidden', String(!isActive));
            if (isActive) {
                const firstInput = pane.querySelector('input.ipt');
                if (firstInput) {
                    setTimeout(() => firstInput.focus(), 16);
                }
            }
        });
    }

    function open(tab = 'login') {
        modal.classList.remove('hidden');
        modal.setAttribute('aria-hidden', 'false');
        lockScroll();
        switchTab(tab);
        document.addEventListener('keydown', handleKeydown);
    }

    function close() {
        modal.classList.add('hidden');
        modal.setAttribute('aria-hidden', 'true');
        unlockScroll();
        document.removeEventListener('keydown', handleKeydown);
    }

    function handleKeydown(event) {
        if (event.key === 'Escape') {
            event.preventDefault();
            close();
        }
    }

    closeBtn.addEventListener('click', close);
    backdrop.addEventListener('click', close);

    modal.querySelectorAll('.switch').forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            switchTab(link.dataset.tab || 'login');
        });
    });

    tabButtons.forEach((button) => {
        button.addEventListener('click', () => switchTab(button.dataset.tab || 'login'));
    });

    window.openAuthModal = open;

    document.querySelectorAll('[data-open-auth]').forEach((trigger) => {
        trigger.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopImmediatePropagation();
            const tab = trigger.dataset.openAuth || trigger.dataset.tab || 'login';
            open(tab);
        });
    });

    async function postJSON(url, payload) {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(payload),
        });

        let data = null;
        try {
            data = await response.json();
        } catch (error) {
            // ignore parse errors
        }

        if (!response.ok) {
            const message = (data && (data.message || data.error)) || 'Yêu cầu thất bại';
            throw new Error(message);
        }

        return data;
    }

    const ORIGIN = (window.__APP_CONFIG__ && window.__APP_CONFIG__.origin) || window.location.origin;
    const API = {
        login: ORIGIN + '/api/auth/login',
        register: ORIGIN + '/api/auth/register',
    };

    modal.querySelector('#loginForm').addEventListener('submit', async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const payload = {
            username: form.username.value.trim(),
            password: form.password.value,
            remember: form.remember.checked,
        };

        if (!payload.username || !payload.password) {
            window.alert('Vui lòng nhập đầy đủ thông tin đăng nhập.');
            return;
        }

        form.querySelector('button[type="submit"]').disabled = true;
        try {
            await postJSON(API.login, payload);
            close();
            window.location.reload();
        } catch (error) {
            window.alert(error.message || 'Đăng nhập thất bại.');
        } finally {
            form.querySelector('button[type="submit"]').disabled = false;
        }
    });

    modal.querySelector('#registerForm').addEventListener('submit', async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const termsAccepted = form.terms.checked;
        const password = form.password.value;
        const confirm = form.password_confirm.value;
        const username = form.username.value.trim();

        if (!username || !password || !confirm) {
            window.alert('Vui lòng điền đầy đủ thông tin đăng ký.');
            return;
        }

        if (password !== confirm) {
            window.alert('Mật khẩu nhập lại không khớp.');
            return;
        }

        if (!termsAccepted) {
            window.alert('Vui lòng đồng ý Điều khoản & Chính sách sử dụng.');
            return;
        }

        form.querySelector('button[type="submit"]').disabled = true;
        try {
            await postJSON(API.register, { username, password });
            window.alert('Đăng ký thành công. Vui lòng đăng nhập!');
            switchTab('login');
        } catch (error) {
            window.alert(error.message || 'Đăng ký thất bại.');
        } finally {
            form.querySelector('button[type="submit"]').disabled = false;
        }
    });
})();
