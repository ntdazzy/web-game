// Recreates the snapping scroll + fixed menu behaviour from the legacy home page.
import { onDocumentReady } from '../utils/dom';

onDocumentReady(() => {
    const isHomePage = document.body.classList.contains('home-page') || document.body.dataset.page === 'home';
    if (!isHomePage) {
        return;
    }

    const leftMenu = document.querySelector('.left-menu');
    const rightMenu = document.querySelector('.right-menu');
    const leftMenuItems = Array.from(document.querySelectorAll('.left-menu ul li'));
    const turnTopButton = document.querySelector('.turn-top');

    if (!leftMenu || !rightMenu || leftMenuItems.length === 0) {
        return;
    }

    let pageHeight = 0;
    let isScrolling = false;

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

    const updatePageHeight = () => {
        const firstPage = document.querySelector('.wrapper-page .page');
        const baseHeight = firstPage ? firstPage.getBoundingClientRect().height : window.innerHeight;
        const scaleFactor = window.innerWidth / 1912;
        pageHeight = baseHeight * scaleFactor;

        if (pageHeight > 960) {
            pageHeight = 945;
        } else if (pageHeight < 400) {
            pageHeight = Math.max(window.innerHeight - 120, 400);
        }
    };

    const updateActiveMenu = () => {
        const index = Math.round(window.scrollY / pageHeight);
        leftMenuItems.forEach((item, idx) => {
            item.classList.toggle('active', idx === index);
        });

        switch (index) {
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
    };

    const scrollToIndex = (index) => {
        const maxIndex = leftMenuItems.length - 1;
        const targetIndex = clamp(index, 0, maxIndex);
        const targetOffset = targetIndex * pageHeight;

        isScrolling = true;
        window.scrollTo({
            top: targetOffset,
            behavior: 'smooth',
        });

        window.setTimeout(() => {
            isScrolling = false;
            updateActiveMenu();
        }, 520);
    };

    const handleWheel = (event) => {
        if (isScrolling) {
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
    }, 200);

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
