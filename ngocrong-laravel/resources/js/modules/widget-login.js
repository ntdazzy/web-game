// Ported from src_gốc/st-ms/js/widget.login9101.js with Fetch API submission + CSRF support.
import { onDocumentReady } from '../utils/dom';

onDocumentReady(() => {
    const modal = document.getElementById('loginModal');
    if (!modal) {
        return;
    }

    const triggers = document.querySelectorAll('.btn-login, .login-required');
    const closeTriggers = modal.querySelectorAll('[data-login-modal-close]');
    const form = modal.querySelector('form');
    const submitButton = form.querySelector('button[type="submit"]');
    const errorGeneral = modal.querySelector('[data-error-general]');
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

    const showModal = () => {
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
        clearErrors();
        form.reset();
        const loginField = form.querySelector('input[name="login"]');
        setTimeout(() => loginField?.focus(), 100);
    };

    const hideModal = () => {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
    };

    triggers.forEach((trigger) => {
        trigger.addEventListener('click', (event) => {
            event.preventDefault();
            showModal();
        });
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
                const redirectUrl = payload?.redirect ?? window.location.href;
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
