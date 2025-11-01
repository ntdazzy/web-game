// Ported from src_gốc/st-ms/js/widget.login9101.js with Fetch API submission + CSRF support.
import { onDocumentReady } from '../utils/dom';

onDocumentReady(() => {
    const modal = document.getElementById('loginModal');
    if (!modal) {
        return;
    }

    const modalTriggers = document.querySelectorAll('[data-login-modal="true"]');
    const guardedLinks = document.querySelectorAll('.login-required:not([data-login-modal="true"])');
    const closeTriggers = modal.querySelectorAll('[data-login-modal-close]');
    const form = modal.querySelector('form');
    const submitButton = form.querySelector('button[type="submit"]');
    const errorGeneral = modal.querySelector('[data-error-general]');
    const redirectInput = form.querySelector('input[name="redirect"]');
    const loginRoute = document.body?.dataset?.loginRoute || '/dang-nhap';
    let pendingRedirect = null;

    const fieldErrors = {
        login: modal.querySelector('[data-error-for="login"]'),
        password: modal.querySelector('[data-error-for="password"]'),
    };

    const clearErrors = () => {
        Object.values(fieldErrors).forEach((el) => {
            if (el) el.textContent = '';
        });
        if (errorGeneral) {
            errorGeneral.textContent = '';
        }
    };

    const setSubmitting = (state) => {
        submitButton.disabled = state;
        submitButton.classList.toggle('is-loading', state);
    };

    const applyRedirectValue = (value) => {
        pendingRedirect = value ?? null;
        modal.dataset.redirect = pendingRedirect ?? '';
        if (redirectInput) {
            redirectInput.value = pendingRedirect ?? '';
        }
    };

    const showModal = (redirectTarget) => {
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
        clearErrors();
        form.reset();
        applyRedirectValue(redirectTarget);
        const loginField = form.querySelector('input[name="login"]');
        setTimeout(() => loginField?.focus(), 100);
    };

    const hideModal = () => {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
        applyRedirectValue(null);
    };

    modalTriggers.forEach((trigger) => {
        trigger.addEventListener('click', (event) => {
            event.preventDefault();
            const redirectTarget = trigger.dataset.redirect || trigger.getAttribute('data-redirect') || '';
            showModal(redirectTarget);
        });
    });

    guardedLinks.forEach((link) => {
        if (!link.tagName || link.tagName.toLowerCase() !== 'a') {
            return;
        }

        const href = link.getAttribute('href');
        const redirectTarget = link.dataset.redirect || '';

        if ((!href || href === '#' || href.startsWith('javascript')) && redirectTarget) {
            const encoded = encodeURIComponent(redirectTarget);
            link.setAttribute('href', `${loginRoute}?redirect=${encoded}`);
        }
    });

    closeTriggers.forEach((trigger) => {
        trigger.addEventListener('click', (event) => {
            event.preventDefault();
            hideModal();
        });
    });

    modal.addEventListener('keyup', (event) => {
        if (event.key === 'Escape') {
            hideModal();
        }
    });

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        clearErrors();
        setSubmitting(true);

        const formData = new FormData(form);
        if (pendingRedirect && !formData.get('redirect')) {
            formData.set('redirect', pendingRedirect);
        } else if (!pendingRedirect && formData.has('redirect') && !formData.get('redirect')) {
            formData.delete('redirect');
        }

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                },
                body: formData,
            });

            if (response.ok) {
                const payload = await response.json();
                const redirectUrl =
                    (payload?.redirect && typeof payload.redirect === 'string' && payload.redirect !== '')
                        ? payload.redirect
                        : pendingRedirect || window.location.href;
                window.location.href = redirectUrl;
                return;
            }

            if (response.status === 422) {
                const payload = await response.json();
                const errors = payload?.errors ?? {};
                Object.keys(errors).forEach((key) => {
                    const message = Array.isArray(errors[key]) ? errors[key][0] : errors[key];
                    if (fieldErrors[key]) {
                        fieldErrors[key].textContent = message;
                    } else if (errorGeneral) {
                        errorGeneral.textContent = message;
                    }
                });
                return;
            }

            if (errorGeneral) {
                errorGeneral.textContent = 'Đăng nhập không thành công. Vui lòng thử lại.';
            }
        } catch (error) {
            if (import.meta.env?.DEV) {
                console.error('[login-modal] submit failed', error);
            }
            if (errorGeneral) {
                errorGeneral.textContent = 'Không thể kết nối đến máy chủ. Vui lòng kiểm tra lại đường truyền.';
            }
        } finally {
            setSubmitting(false);
        }
    });
});
