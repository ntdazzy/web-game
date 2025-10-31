// Ported from src_gốc/st-ms/js/scroll.js and modernised with requestAnimationFrame, DOM helpers.
import { onDocumentReady } from '../utils/dom';

onDocumentReady(() => {
    const wrapper = document.querySelector('.wrapper-page');
    const leftMenu = document.querySelector('.left-menu');
    const rightMenu = document.querySelector('.right-menu');
    const turnTopButton = document.querySelector('.turn-top');

    if (!wrapper || !leftMenu) {
        return;
    }

    const pages = Array.from(wrapper.querySelectorAll('.page'));
    if (pages.length === 0) {
        return;
    }

    const menuItems = Array.from(leftMenu.querySelectorAll('li')).slice(0, pages.length);

    const getPageIndexFromScroll = () => {
        const midpoint = window.scrollY + window.innerHeight / 2;
        let activeIndex = 0;

        pages.forEach((page, index) => {
            const top = page.offsetTop;
            const bottom = top + page.offsetHeight;
            if (midpoint >= top && midpoint < bottom) {
                activeIndex = index;
            }
        });

        return activeIndex;
    };

    const syncMenuVisibility = (index) => {
        if (!rightMenu) {
            return;
        }

        if (index <= 0) {
            leftMenu.style.display = 'block';
            rightMenu.style.display = 'none';
        } else if (index >= pages.length - 1) {
            leftMenu.style.display = 'none';
            rightMenu.style.display = 'block';
        } else {
            leftMenu.style.display = 'block';
            rightMenu.style.display = 'block';
        }
    };

    const setActiveMenu = (index) => {
        menuItems.forEach((item, idx) => {
            item.classList.toggle('active', idx === index);
        });
        syncMenuVisibility(index);
    };

    const handleScroll = () => {
        window.requestAnimationFrame(() => {
            const index = getPageIndexFromScroll();
            setActiveMenu(index);
        });
    };

    menuItems.forEach((item, index) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const targetPage = pages[index];
            if (!targetPage) {
                return;
            }

            const targetOffset = targetPage.offsetTop;
            window.scrollTo({
                top: targetOffset,
                behavior: 'smooth',
            });
        });
    });

    if (turnTopButton) {
        turnTopButton.addEventListener('click', (event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    // Khởi tạo trạng thái ban đầu
    setActiveMenu(getPageIndexFromScroll());
});
