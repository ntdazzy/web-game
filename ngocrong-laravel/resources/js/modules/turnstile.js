const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY || '';

if (siteKey) {
    const loadScript = () => {
        if (window.turnstile) return Promise.resolve();
        return new Promise((resolve, reject) => {
            const existing = document.querySelector('script[src*="challenges.cloudflare.com/turnstile"]');
            if (existing) {
                existing.addEventListener('load', () => resolve());
                existing.addEventListener('error', () => reject());
                return;
            }
            const script = document.createElement('script');
            script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
            script.async = true;
            script.defer = true;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error('Failed to load Turnstile script'));
            document.head.appendChild(script);
        });
    };

    const renderWidget = () => {
        if (!window.turnstile) return;
        const container = document.createElement('div');
        container.style.display = 'none';
        document.body.appendChild(container);

        const render = () => {
            window.turnstile.render(container, {
                sitekey: siteKey,
                size: 'invisible',
                callback: (token) => {
                    window.__turnstileToken = token;
                },
                'error-callback': () => {
                    window.__turnstileToken = '';
                },
                'expired-callback': () => {
                    window.__turnstileToken = '';
                },
                'timeout-callback': () => {
                    window.__turnstileToken = '';
                },
                action: 'form',
            });
        };

        render();
    };

    loadScript()
        .then(() => {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', renderWidget, { once: true });
            } else {
                renderWidget();
            }
        })
        .catch(() => {
            // silently fail, backend will handle missing token
        });
}
