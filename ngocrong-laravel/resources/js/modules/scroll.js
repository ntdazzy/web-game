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
    const pages = Array.from(document.querySelectorAll('.wrapper-page .page'));

    if (!leftMenu || !rightMenu || leftMenuItems.length === 0 || pages.length === 0) {
        return;
    }

    let pageOffsets = [];
    let isScrolling = false;

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

    const recomputeOffsets = () => {
        pageOffsets = pages.map((page) => {
            const rect = page.getBoundingClientRect();
            return rect.top + window.scrollY;
        });
    };

    const findCurrentIndex = () => {
        const viewportMiddle = window.scrollY + window.innerHeight / 2;
        let index = 0;
        pageOffsets.forEach((offset, idx) => {
            if (viewportMiddle >= offset) {
                index = idx;
            }
        });
        return index;
    };

    const toggleMenus = (index) => {
        const lastIndex = pages.length - 1;

        if (index <= 0) {
            leftMenu.style.display = 'block';
            rightMenu.style.display = 'none';
        } else if (index >= lastIndex) {
            leftMenu.style.display = 'none';
            rightMenu.style.display = 'block';
        } else {
            leftMenu.style.display = 'block';
            rightMenu.style.display = 'block';
        }
    };

    const setActiveMenu = (index) => {
        leftMenuItems.forEach((item, idx) => {
            item.classList.toggle('active', idx === index);
        });
        toggleMenus(index);
    };

    const scrollToIndex = (index) => {
        const target = clamp(index, 0, pages.length - 1);
        const offset = pageOffsets[target] ?? 0;

        isScrolling = true;
        window.scrollTo({
            top: offset,
            behavior: 'smooth',
        });

        window.setTimeout(() => {
            isScrolling = false;
            setActiveMenu(findCurrentIndex());
        }, 550);
    };

    const handleWheel = (event) => {
        if (isScrolling) {
            return;
        }
        event.preventDefault();
        const direction = event.deltaY > 0 ? 1 : -1;
        const currentIndex = findCurrentIndex();
        scrollToIndex(currentIndex + direction);
    };

    const handleResize = () => {
        recomputeOffsets();
        setActiveMenu(findCurrentIndex());
    };

    recomputeOffsets();
    setActiveMenu(findCurrentIndex());

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            setActiveMenu(findCurrentIndex());
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
