document.addEventListener('DOMContentLoaded', () => {
    if (!document.body.classList.contains('home-page')) {
        return;
    }

    var leftmenu = document.getElementsByClassName('left-menu')[0];
    var rightmenu = document.getElementsByClassName('right-menu')[0];
    var leftmenuItem = document.querySelectorAll('.left-menu ul li');
    var pages = document.querySelectorAll('.page .content');
    var btnTurnTop = document.querySelector('.turn-top');

    var pageHeight;
    let isScrolling = false;
    var pageIndex = 0;

    function updatePageHeight() {
        $scale = window.innerWidth / 1912;
        pageHeight = $('.page').height() * $scale;
        if(pageHeight > 960) {
            pageHeight = 945;
        }
    }

    updatePageHeight();

    // Hàm cập nhật class active cho menu
    var updateActiveMenu = () => {
        pageIndex = Math.round(window.scrollY / pageHeight);
        if (!leftmenu || !rightmenu) {
            return;
        }
        switch (pageIndex) {
            case 0:
                leftmenu.style.display = 'block';
                rightmenu.style.display = 'none';
                break;
            case 1:
                leftmenu.style.display = 'block';
                rightmenu.style.display = 'block';
                break;
            case 2:
                leftmenu.style.display = 'block';
                rightmenu.style.display = 'block';
                break;
            case 3:
                leftmenu.style.display = 'none';
                rightmenu.style.display = 'block';
                break;
            default:
                leftmenu.style.display = 'block';
                rightmenu.style.display = 'block';
                break;
        }
        leftmenuItem.forEach((item, index) => {
            item.classList.toggle('active', index === pageIndex);
        });
    };

    setTimeout(() => {
        updateActiveMenu();
    }, 200);

    window.addEventListener('wheel', (e) => {
        if (isScrolling) return;
        e.preventDefault();

        var direction = e.deltaY > 0 ? 1 : -1;
        var currentScroll = window.scrollY;
        var maxScroll = document.body.scrollHeight - window.innerHeight;

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
            behavior: 'smooth'
        });

        setTimeout(() => {
            isScrolling = false;
            updateActiveMenu();
        }, 500);
    }, { passive: false });

    // Lắng nghe sự kiện click vào menu item
    leftmenuItem.forEach((item, index) => {
        item.addEventListener('click', () => {
            leftmenuItem.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            window.scrollTo({
                top: index * pageHeight,
                behavior: 'smooth'
            });

            setTimeout(() => {
                updateActiveMenu();
            }, 500);

        });
    });

    btnTurnTop.addEventListener('click', () => {
        setTimeout(() => {
            updateActiveMenu();
        }, 700);
    });

    window.addEventListener('resize', () => {
        updatePageHeight();
    });
});
