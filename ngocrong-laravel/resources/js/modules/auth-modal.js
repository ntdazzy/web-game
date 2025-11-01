// Modernised version of the legacy auth modal behaviour.
import { onDocumentReady } from '../utils/dom';

const ACTIVE_CLASS = 'active';
const HIDDEN_CLASS = 'hidden';
const LOADING_CLASS = 'is-loading';

const normaliseUsername = (input) =>
    input
        .trim()
        .replace(/\s+/g, '')
        .toLowerCase();

const buildFallbackEmail = (username) => {
    const safe = username.replace(/[^a-z0-9._-]+/gi, '').toLowerCase() || 'captain';
    return `${safe}@haitacmanhnhat.local`;
};

const postForm = async (form, extraFields = (data) => data) => {
    const formData = new FormData(form);
    extraFields(formData);

    const response = await fetch(form.action || window.location.pathname, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        },
        credentials: 'include',
        body: formData,
    });

    let payload = null;
    try {
        payload = await response.json();
    } catch (error) {
        // ignore parse errors; payload remains null
    }

    if (!response.ok) {
        const message =
            (payload && (payload.message || payload.error)) ||
            (payload && payload.errors && Object.values(payload.errors)[0]?.[0]) ||
            'Yêu cầu thất bại.';
        const error = new Error(message);
        error.payload = payload;
        error.status = response.status;
        throw error;
    }

    return payload;
};

onDocumentReady(() => {
    const modal = document.getElementById('authModal');
    if (!modal) {
        return;
    }

    const tabButtons = Array.from(modal.querySelectorAll('.tab-btn'));
    const tabPanes = Array.from(modal.querySelectorAll('.tab-pane'));
    const closeTriggers = Array.from(modal.querySelectorAll('[data-auth-modal-close]'));
    const loginForm = modal.querySelector('#authLoginForm');
    const registerForm = modal.querySelector('#authRegisterForm');
    const loginFeedback = modal.querySelector('[data-auth-feedback="login"]');
    const registerFeedback = modal.querySelector('[data-auth-feedback="register"]');

    let activeTab = 'login';
    let pendingRedirect = null;

    const overlayController = window.__pageLoadingOverlay;

    const lockScroll = () => {
        document.body.dataset.prevOverflow = document.body.style.overflow || '';
        document.body.style.overflow = 'hidden';
    };

    const unlockScroll = () => {
        if (document.body.dataset.prevOverflow !== undefined) {
            document.body.style.overflow = document.body.dataset.prevOverflow;
            delete document.body.dataset.prevOverflow;
        } else {
            document.body.style.overflow = '';
        }
    };

    const focusFirstInput = (pane) => {
        const first = pane?.querySelector('input.ipt, input[type="text"], input[type="password"]');
        if (first) {
            window.setTimeout(() => first.focus(), 16);
        }
    };

    const switchTab = (tab) => {
        activeTab = tab;
        tabButtons.forEach((button) => {
            const isActive = button.dataset.tab === tab;
            button.classList.toggle(ACTIVE_CLASS, isActive);
            button.setAttribute('aria-pressed', String(isActive));
        });
        tabPanes.forEach((pane) => {
            const isActive = pane.dataset.tab === tab;
            pane.classList.toggle(HIDDEN_CLASS, !isActive);
            pane.setAttribute('aria-hidden', String(!isActive));
            if (isActive) {
                focusFirstInput(pane);
            }
        });
    };

    const openModal = (tab = 'login', redirect = null) => {
        modal.classList.remove(HIDDEN_CLASS);
        modal.setAttribute('aria-hidden', 'false');
        lockScroll();
        switchTab(tab);
        pendingRedirect = redirect;
        modal.dataset.redirect = redirect ?? '';
        document.addEventListener('keydown', handleKeydown);
    };

    const closeModal = () => {
        modal.classList.add(HIDDEN_CLASS);
        modal.setAttribute('aria-hidden', 'true');
        unlockScroll();
        pendingRedirect = null;
        delete modal.dataset.redirect;
        document.removeEventListener('keydown', handleKeydown);
    };

    const handleKeydown = (event) => {
        if (event.key === 'Escape') {
            event.preventDefault();
            closeModal();
        }
    };

    tabButtons.forEach((button) => {
        button.addEventListener('click', () => switchTab(button.dataset.tab || 'login'));
    });

    closeTriggers.forEach((trigger) => {
        trigger.addEventListener('click', (event) => {
            event.preventDefault();
            closeModal();
        });
    });

    modal.querySelectorAll('.switch').forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            switchTab(link.dataset.tab || 'login');
        });
    });

    const openFromTrigger = (trigger, tab) => {
        const redirect = trigger?.dataset?.redirect || trigger?.getAttribute('data-redirect') || null;
        openModal(tab, redirect);
    };

    document.addEventListener(
        'click',
        (event) => {
            const trigger = event.target.closest('[data-open-auth]');
            if (!trigger) {
                return;
            }
            event.preventDefault();
            event.stopPropagation();
            const tab = trigger.dataset.openAuth || trigger.dataset.tab || 'login';
            openFromTrigger(trigger, tab);
        },
        true
    );

    const showFeedback = (element, message, isError = true) => {
        if (!element) {
            return;
        }
        element.textContent = message || '';
        element.classList.toggle('is-error', isError);
        element.classList.toggle('is-success', !isError);
    };

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        if (!loginForm) {
            return;
        }

        showFeedback(loginFeedback, '');
        const submitButton = loginForm.querySelector('button[type="submit"]');
        submitButton?.classList.add(LOADING_CLASS);
        submitButton?.setAttribute('disabled', 'disabled');

        try {
            const payload = await postForm(loginForm, (formData) => {
                if (pendingRedirect && !formData.get('redirect')) {
                    formData.set('redirect', pendingRedirect);
                }
            });

            const redirect = (payload && payload.redirect) || pendingRedirect || window.location.href;
            overlayController?.show?.();
            window.location.href = redirect;
        } catch (error) {
            showFeedback(loginFeedback, error.message || 'Đăng nhập không thành công.', true);
        } finally {
            submitButton?.classList.remove(LOADING_CLASS);
            submitButton?.removeAttribute('disabled');
        }
    };

    const handleRegisterSubmit = async (event) => {
        event.preventDefault();
        if (!registerForm) {
            return;
        }

        showFeedback(registerFeedback, '');

        const username = normaliseUsername(registerForm.username.value || '');
        const password = registerForm.password.value || '';
        const confirmation = registerForm.password_confirmation.value || '';
        const agree = registerForm.agree.checked;

        if (!username || !password || !confirmation) {
            showFeedback(registerFeedback, 'Vui lòng điền đầy đủ thông tin đăng ký.', true);
            return;
        }

        if (password !== confirmation) {
            showFeedback(registerFeedback, 'Mật khẩu nhập lại không khớp.', true);
            return;
        }

        if (!agree) {
            showFeedback(registerFeedback, 'Bạn cần đồng ý Điều khoản & Chính sách sử dụng.', true);
            return;
        }

        const submitButton = registerForm.querySelector('button[type="submit"]');
        submitButton?.classList.add(LOADING_CLASS);
        submitButton?.setAttribute('disabled', 'disabled');

        try {
            await postForm(registerForm, (formData) => {
                formData.set('name', username);
                formData.set('login', username);
                formData.set('email', buildFallbackEmail(username));
                formData.set('password', password);
                formData.set('password_confirmation', confirmation);
                formData.set('agree', 'on');
            });

            showFeedback(registerFeedback, 'Đăng ký thành công! Vui lòng đăng nhập.', false);
            switchTab('login');
        } catch (error) {
            showFeedback(registerFeedback, error.message || 'Đăng ký không thành công.', true);
        } finally {
            submitButton?.classList.remove(LOADING_CLASS);
            submitButton?.removeAttribute('disabled');
        }
    };

    loginForm?.addEventListener('submit', handleLoginSubmit);
    registerForm?.addEventListener('submit', handleRegisterSubmit);

    window.openAuthModal = openModal;
    window.widget_login = (event) => {
        if (event && typeof event.preventDefault === 'function') {
            event.preventDefault();
        }
        const redirect = event?.currentTarget?.dataset?.redirect ?? null;
        openModal('login', redirect);
    };
});
