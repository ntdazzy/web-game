// Lightweight dropdown toggle cho header/top-login khi Bootstrap JS không sẵn (Inertia/static).
const SELECTOR =
    '.top-nav .btn.dropdown-toggle, .wrap-login .btn.dropdown-toggle, .top-login .btn.dropdown-toggle, .top-nav [data-bs-toggle=\"dropdown\"]';

const toggleMenu = (button) => {
    const menu =
        button?.parentElement?.querySelector('.dropdown-menu') ||
        button?.closest('.btn-group')?.querySelector('.dropdown-menu') ||
        button?.nextElementSibling;
    const isOpen = menu?.classList.contains('show');
    closeAll();
    if (menu) {
        menu.classList.toggle('show', !isOpen);
        button.setAttribute('aria-expanded', (!isOpen).toString());
    }
};

const closeAll = () => {
    document
        .querySelectorAll(
            '.top-nav .dropdown-menu.show, .wrap-login .dropdown-menu.show, .top-login .dropdown-menu.show'
        )
        .forEach((menu) => {
            menu.classList.remove('show');
            const btn =
                menu.parentElement?.querySelector('.btn.dropdown-toggle, [data-bs-toggle=\"dropdown\"]') ||
                menu.closest('.btn-group')?.querySelector('.btn.dropdown-toggle');
            if (btn) btn.setAttribute('aria-expanded', 'false');
        });
};

const handleClick = (event) => {
    const button = event.target.closest(SELECTOR);
    if (button) {
        event.preventDefault();
        event.stopPropagation();
        toggleMenu(button);
        return;
    }
    // click outside closes
    const insideMenu = event.target.closest('.top-nav .dropdown-menu');
    if (!insideMenu) {
        closeAll();
    }
};

const handleEscape = (event) => {
    if (event.key === 'Escape') {
        closeAll();
    }
};

const bindDirectListeners = () => {
    document.querySelectorAll(SELECTOR).forEach((button) => {
        if (button.dataset.dropdownBound === '1') return;
        button.dataset.dropdownBound = '1';
        button.addEventListener(
            'click',
            (event) => {
                event.preventDefault();
                event.stopPropagation();
                toggleMenu(button);
            },
            true
        );
    });
};

const init = () => {
    const bootstrapDropdown = window.bootstrap?.Dropdown || null;

    if (bootstrapDropdown) {
        const buttons = document.querySelectorAll(SELECTOR);

        const hideAll = () => {
            buttons.forEach((btn) => {
                const inst = bootstrapDropdown.getOrCreateInstance(btn, { autoClose: true });
                inst.hide();
            });
        };

        buttons.forEach((button) => {
            button.addEventListener(
                'click',
                (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    const inst = bootstrapDropdown.getOrCreateInstance(button, { autoClose: true });
                    inst.toggle();
                },
                true
            );
        });

        document.addEventListener(
            'click',
            (event) => {
                if (!event.target.closest('.dropdown-menu') && !event.target.closest('.btn.dropdown-toggle')) {
                    hideAll();
                }
            },
            true
        );

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                hideAll();
            }
        });

        return;
    }

    // Fallback cho Inertia/không có Bootstrap
    document.addEventListener('click', handleClick, true);
    document.addEventListener('keydown', handleEscape, true);
    bindDirectListeners();
};

if (document.readyState === 'loading') {
    document.addEventListener(
        'DOMContentLoaded',
        () => {
            init();
            // Trường hợp DOM thay đổi sau load (Ví dụ: render SSR + JS), bind lại.
            setTimeout(bindDirectListeners, 100);
        },
        { once: true }
    );
} else {
    init();
}

// expose for potential cleanup/testing
window.__headerDropdown = { closeAll };

// Inertia navigation có thể thay đổi DOM, rebind để giữ dropdown hoạt động.
document.addEventListener('inertia:finish', () => {
    bindDirectListeners();
});
