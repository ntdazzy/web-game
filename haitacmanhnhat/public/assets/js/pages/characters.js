(function (window, document, $) {
    const STORAGE_KEY = 'searchHero';
    let currentSearch = '';
    let currentParticular = 's0';

    const toUpper = (value) => (value || '').toString().trim().toUpperCase();

    const getSlider = () => {
        if (!$ || !$.fn || typeof $.fn.slick !== 'function') {
            return null;
        }
        const $slider = $('.hero-list-slide');
        return $slider.length ? $slider : null;
    };

    const initialiseSlider = () => {
        const $slider = getSlider();
        if (!$slider || $slider.hasClass('slick-initialized')) {
            return;
        }
        const $active = $slider.find('li.active').first();
        let initialSlide = 0;
        if ($active.length) {
            const explicitIndex = parseInt($active.attr('data-slick-index'), 10);
            if (!Number.isNaN(explicitIndex)) {
                initialSlide = explicitIndex;
            } else {
                initialSlide = Math.max(0, $active.index());
            }
        }

        $slider.slick({
            infinite: false,
            initialSlide: initialSlide,
            slidesToShow: 10,
            slidesToScroll: 10,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 7,
                        slidesToScroll: 7,
                        infinite: false,
                        dots: false,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        dots: false,
                        infinite: false,
                        variableWidth: true,
                    },
                },
            ],
        });
    };

    const getListItems = () => Array.from(document.querySelectorAll('.listChars li'));

    const applyFilters = () => {
        const normalizedSearch = toUpper(currentSearch);
        const normalizedParticular = toUpper(currentParticular || 's0');
        const $slider = getSlider();

        if ($slider && $slider.hasClass('slick-initialized')) {
            const matches = function () {
                const name = toUpper($(this).data('name'));
                const particular = toUpper($(this).data('particular'));
                const matchParticular = normalizedParticular === 'S0' || particular.includes(normalizedParticular);
                const matchSearch = !normalizedSearch || name.includes(normalizedSearch);
                return matchParticular && matchSearch;
            };

            $slider.slick('slickUnfilter');
            if (normalizedParticular !== 'S0' || normalizedSearch) {
                $slider.slick('slickFilter', matches);
            }

            const $activeAfterFilter = $slider.find('li.active').first();
            const indexAfterFilter = $activeAfterFilter.length ? $slider.find('li').index($activeAfterFilter) : 0;
            $slider.slick('slickGoTo', Math.max(indexAfterFilter, 0), true);
            return;
        }

        getListItems().forEach((item) => {
            const name = toUpper(item.dataset.name);
            const particular = toUpper(item.dataset.particular);
            const matchParticular = normalizedParticular === 'S0' || particular.includes(normalizedParticular);
            const matchSearch = !normalizedSearch || name.includes(normalizedSearch);
            item.classList.toggle('d-none', !(matchParticular && matchSearch));
        });
    };

    const searchHero = (term) => {
        currentSearch = term || '';
        applyFilters();
    };

    const searchHeroByParticular = (key) => {
        currentParticular = key || 's0';
        try {
            localStorage.setItem(STORAGE_KEY, currentParticular);
        } catch (error) {
            console.warn('Unable to persist hero filter', error);
        }
        applyFilters();
    };

    const bindSearchInput = () => {
        const searchInput = document.querySelector('.search-hero .text-search');
        if (!searchInput) {
            return;
        }
        searchInput.addEventListener('input', () => {
            searchHero(searchInput.value.trim());
        });
    };

    const bindFilterButtons = () => {
        document.querySelectorAll('.btn-search-hero').forEach((button) => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                document.querySelectorAll('.btn-search-hero').forEach((item) => item.classList.remove('active'));
                button.classList.add('active');
                const particular = button.querySelector('a')?.dataset.particular || 's0';
                searchHeroByParticular(particular);
            });
        });
    };

    const restoreFilterState = () => {
        let savedKey = 's0';
        try {
            savedKey = localStorage.getItem(STORAGE_KEY) || 's0';
        } catch (error) {
            savedKey = 's0';
        }
        const targetButton = Array.from(document.querySelectorAll('.btn-search-hero'))
            .find((button) => toUpper(button.querySelector('a')?.dataset.particular) === toUpper(savedKey));
        if (targetButton) {
            document.querySelectorAll('.btn-search-hero').forEach((item) => item.classList.remove('active'));
            targetButton.classList.add('active');
        }
        searchHeroByParticular(savedKey);
    };

    const hydrateBackgrounds = () => {
        document.querySelectorAll('[data-bg]').forEach((element) => {
            const bg = element.getAttribute('data-bg');
            if (bg) {
                element.style.backgroundImage = 'url(' + bg + ')';
            }
        });
    };

    document.addEventListener('DOMContentLoaded', () => {
        try {
            localStorage.setItem('rightFixedMenu', '1');
        } catch (error) {
            console.warn('Unable to persist rightFixedMenu flag', error);
        }

        hydrateBackgrounds();
        initialiseSlider();
        bindSearchInput();
        bindFilterButtons();
        restoreFilterState();

        window.searchHero = searchHero;
        window.searchHeroByParticular = searchHeroByParticular;
    });
})(window, document, window.jQuery);
