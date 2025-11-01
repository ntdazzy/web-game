// Handles the global loading overlay that mimics the legacy behaviour.
import { onDocumentReady } from '../utils/dom';

const OVERLAY_HIDDEN_CLASS = 'is-hidden';

const showOverlay = (overlay) => {
    overlay.classList.remove(OVERLAY_HIDDEN_CLASS);
};

const hideOverlay = (overlay) => {
    overlay.classList.add(OVERLAY_HIDDEN_CLASS);
};

onDocumentReady(() => {
    const overlay = document.getElementById('pageLoadingOverlay');
    if (!overlay) {
        return;
    }

    const show = () => showOverlay(overlay);
    const hide = () => hideOverlay(overlay);

    window.addEventListener('beforeunload', show, { passive: true });

    window.addEventListener(
        'load',
        () => {
            window.setTimeout(hide, 150);
        },
        { once: true }
    );

    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            hide();
        }
    });

    if (document.readyState === 'complete') {
        hide();
    }

    window.__pageLoadingOverlay = { show, hide };
});
