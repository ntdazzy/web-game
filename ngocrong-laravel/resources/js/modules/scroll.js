import { onDocumentReady } from '../utils/dom';

/**
 * Port of the legacy homepage scroll snapping + fixed menu logic.
 * Relies on the original scaling behaviour (window.innerWidth / 1912).
 */
const DESIGN_WIDTH = 1905;

onDocumentReady(() => {
    const body = document.body;
    if (!body.classList.contains('home-page') && body.dataset.page !== 'home') {
        return;
    }

    const leftMenu = document.getElementsByClassName('left-menu')[0];
    const rightMenu = document.getElementsByClassName('right-menu')[0];
    const leftMenuItems = Array.from(document.querySelectorAll('.left-menu ul li'));
    const turnTopButton = document.querySelector('.turn-top');

    if (!leftMenu || !rightMenu || leftMenuItems.length === 0) {
        return;
    }

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
    const hasJquery = typeof window.jQuery === 'function';

    let pageHeight = 0;
    let isScrolling = false;
    let currentIndex = 0;

    const updatePageHeight = () => {
        const $ = hasJquery ? window.jQuery : null;
        const $page = $ ? $('.wrapper-page .page').first() : null;
        const rawHeight = $page && $page.length
            ? $page.outerHeight()
            : document.querySelector('.wrapper-page .page')?.getBoundingClientRect().height || window.innerHeight;

        const scaleFactor = window.innerWidth / DESIGN_WIDTH;
        pageHeight = rawHeight * scaleFactor;

        if (pageHeight > 960) {
            pageHeight = 945;
        } else if (pageHeight < 400) {
            pageHeight = Math.max(window.innerHeight - 120, 400);
        }
    };

    const updateActiveMenu = () => {
        if (pageHeight <= 0) {
            return;
        }

        currentIndex = Math.round(window.scrollY / pageHeight);

        switch (currentIndex) {
            case 0:
                leftMenu.style.display = 'block';
                rightMenu.style.display = 'none';
                break;
            case 3:
                leftMenu.style.display = 'none';
                rightMenu.style.display = 'block';
                break;
            default:
                leftMenu.style.display = 'block';
                rightMenu.style.display = 'block';
                break;
        }

        leftMenuItems.forEach((item, idx) => {
            item.classList.toggle('active', idx === currentIndex);
        });
    };

    const scrollToIndex = (targetIndex) => {
        if (pageHeight <= 0) {
            return;
        }

        const maxIndex = leftMenuItems.length - 1;
        const index = clamp(targetIndex, 0, maxIndex);
        const offset = index * pageHeight;

        isScrolling = true;
        window.scrollTo({
            top: offset,
            behavior: 'smooth',
        });

        window.setTimeout(() => {
            isScrolling = false;
            updateActiveMenu();
        }, 520);
    };

    const handleWheel = (event) => {
        if (isScrolling || pageHeight <= 0) {
            return;
        }

        event.preventDefault();

        const direction = event.deltaY > 0 ? 1 : -1;
        const currentScroll = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        let scrollAmount = direction * pageHeight;

        if (direction > 0 && currentScroll + scrollAmount > maxScroll) {
            scrollAmount = maxScroll - currentScroll;
        } else if (direction < 0) {
            let remainder = currentScroll % pageHeight;
            if (Math.abs(remainder) < 1) remainder = 0;
            scrollAmount = -(remainder || pageHeight);
        }

        isScrolling = true;
        window.scrollBy({
            top: scrollAmount,
            behavior: 'smooth',
        });

        window.setTimeout(() => {
            isScrolling = false;
            updateActiveMenu();
        }, 520);
    };

    updatePageHeight();
    updateActiveMenu();
    window.setTimeout(() => {
        updatePageHeight();
        updateActiveMenu();
    }, 220);

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('resize', () => {
        updatePageHeight();
        updateActiveMenu();
    });
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            updateActiveMenu();
        }
    });

    leftMenuItems.forEach((item, index) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            scrollToIndex(index);
        });
    });

    if (turnTopButton) {
        turnTopButton.addEventListener('click', (event) => {
            event.preventDefault();
            scrollToIndex(0);
        });
    }
});
