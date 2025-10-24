(function () {
    const root = document.querySelector('[data-devil-fruit-source]');
    if (!root) {
        return;
    }

    const sourceKey = root.dataset.devilFruitSource || 'fusion';
    const jsonEndpoint = root.dataset.devilFruitJson || '';
    const listElement = root.querySelector('#fruit-list');
    const paginationElement = root.querySelector('#pagination');
    const detailContainer = root.querySelector('.fruit-detail .content');
    const searchInput = root.querySelector('.text-search');
    const filterButtons = Array.from(root.querySelectorAll('.btn-filter'));

    if (!listElement || !paginationElement || !detailContainer) {
        return;
    }

    const perPage = 8;
    const maxVisible = 5;
    const staticBase = ensureTrailingSlash(window.staticUrl || '/assets/stms/');
    const downloadBase = ensureTrailingSlash(window.domainDownload || '/assets/dl/tdt/');
    const placeholderImage = `${staticBase}imgs/devil-fruit/devil-fruit-example.png`;

    const detailName = detailContainer.querySelector('.name');
    const detailThumb = detailContainer.querySelector('.thumb');
    const detailQuality = detailContainer.querySelector('.text-content.quality');
    const detailEffect = detailContainer.querySelector('.text-content.effect');
    const detailProperty = detailContainer.querySelector('.text-content.property');
    const detailInfo = detailContainer.querySelector('.text-content.info');

    const state = {
        fruits: [],
        filtered: [],
        page: 1,
        effect: 'tat-ca',
        selectedId: null,
    };

    const dataStore = window.DEVIL_FRUITS_DATA && window.DEVIL_FRUITS_DATA[sourceKey];
    if (Array.isArray(dataStore)) {
        initialise(dataStore);
    } else if (jsonEndpoint) {
        fetch(jsonEndpoint, { credentials: 'same-origin' })
            .then((response) => (response.ok ? response.json() : []))
            .then((data) => initialise(Array.isArray(data) ? data : []))
            .catch(() => initialise([]));
    } else {
        initialise([]);
    }

    bindEvents();

    function initialise(data) {
        state.fruits = data.slice();
        state.filtered = state.fruits.slice();
        state.page = 1;
        state.selectedId = state.filtered[0] ? String(state.filtered[0].id ?? '') : null;
        renderAll();
    }

    function bindEvents() {
        listElement.addEventListener('click', handleListClick);
        paginationElement.addEventListener('click', handlePaginationClick);
        if (searchInput) {
            searchInput.addEventListener('input', handleSearchInput);
        }
        filterButtons.forEach((button) => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                setActiveFilterButton(button);
                if (searchInput) {
                    searchInput.value = '';
                }
                applyFilter(button.dataset.effect || 'tat-ca');
            });
        });

        let resizeTimer = null;
        window.addEventListener('resize', () => {
            if (resizeTimer) {
                window.clearTimeout(resizeTimer);
            }
            resizeTimer = window.setTimeout(() => {
                renderList();
            }, 150);
        });
    }

    function renderAll() {
        renderList();
        renderDetail();
    }

    function renderList() {
        listElement.innerHTML = '';
        const hasData = state.filtered.length > 0;
        const isDesktop = window.innerWidth > 1200;

        if (!hasData) {
            const empty = document.createElement('li');
            empty.className = 'no-data';
            empty.textContent = 'Không có dữ liệu để hiển thị';
            listElement.appendChild(empty);
            paginationElement.innerHTML = '';
            paginationElement.hidden = true;
            state.selectedId = null;
            return;
        }

        if (isDesktop) {
            const totalPages = Math.max(1, Math.ceil(state.filtered.length / perPage));
            if (state.page > totalPages) {
                state.page = totalPages;
            }
            const start = (state.page - 1) * perPage;
            const pagedItems = state.filtered.slice(start, start + perPage);
            if (!pagedItems.some((item) => String(item.id ?? '') === state.selectedId)) {
                state.selectedId = pagedItems[0] ? String(pagedItems[0].id ?? '') : null;
            }
            drawList(pagedItems);
            renderPagination(totalPages);
        } else {
            if (!state.filtered.some((item) => String(item.id ?? '') === state.selectedId)) {
                state.selectedId = state.filtered[0] ? String(state.filtered[0].id ?? '') : null;
            }
            drawList(state.filtered);
            paginationElement.innerHTML = '';
            paginationElement.hidden = true;
        }
    }

    function drawList(items) {
        const fragment = document.createDocumentFragment();
        items.forEach((fruit) => {
            const li = document.createElement('li');
            li.className = 'fruit-item';
            const fruitId = String(fruit.id ?? '');
            li.dataset.id = fruitId;
            li.dataset.effect = slugify(fruit.effect || '');
            if (fruitId === state.selectedId) {
                li.classList.add('active');
            }

            const img = document.createElement('img');
            img.className = 'thumb';
            img.alt = fruit.name || 'Trái ác quỷ';
            img.src = buildAssetUrl(fruit.itemSmall, downloadBase);
            img.addEventListener('error', () => {
                img.src = placeholderImage;
            });

            const nameWrapper = document.createElement('div');
            nameWrapper.className = 'name d-flex flex-column';
            buildNameParts(fruit.name).forEach((part, index) => {
                const span = document.createElement('span');
                span.className = `name-${index + 1}`;
                span.textContent = part;
                nameWrapper.appendChild(span);
            });

            li.appendChild(img);
            li.appendChild(nameWrapper);
            fragment.appendChild(li);
        });

        listElement.innerHTML = '';
        listElement.appendChild(fragment);
    }

    function renderPagination(totalPages) {
        paginationElement.innerHTML = '';
        if (totalPages <= 1) {
            paginationElement.hidden = true;
            return;
        }

        paginationElement.hidden = false;
        const wrapOut = document.createElement('div');
        wrapOut.className = 'pagingWrapOut';
        const wrap = document.createElement('div');
        wrap.className = 'pagingWrap';
        const paging = document.createElement('div');
        paging.className = 'paging';
        const list = document.createElement('ul');
        list.className = 'd-flex justify-content-center gap-2 my-3';

        list.appendChild(createNavButton('prev', state.page - 1, state.page === 1, 'Trang trước', 'imgs/icon-arrow-left.png'));

        const range = computePageRange(totalPages);
        for (let page = range.start; page <= range.end; page += 1) {
            const li = document.createElement('li');
            if (page === state.page) {
                const span = document.createElement('span');
                span.textContent = String(page);
                li.appendChild(span);
            } else {
                const button = document.createElement('button');
                button.type = 'button';
                button.dataset.page = String(page);
                button.className = 'd-block w-100 h-100';
                button.textContent = String(page);
                li.appendChild(button);
            }
            list.appendChild(li);
        }

        list.appendChild(createNavButton('next', state.page + 1, state.page >= totalPages, 'Trang tiếp', 'imgs/icon-arrow-right.png'));

        paging.appendChild(list);
        wrap.appendChild(paging);
        wrapOut.appendChild(wrap);
        paginationElement.appendChild(wrapOut);
    }

    function createNavButton(className, targetPage, disabled, ariaLabel, iconPath) {
        const li = document.createElement('li');
        li.className = className;
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'd-block w-100 h-100';
        button.dataset.page = String(targetPage);
        button.disabled = disabled;
        button.setAttribute('aria-label', ariaLabel);

        const img = document.createElement('img');
        img.width = 10;
        img.height = 15;
        img.alt = '';
        img.src = buildAssetUrl(iconPath, staticBase);
        img.addEventListener('error', () => {
            img.remove();
        });

        button.appendChild(img);
        li.appendChild(button);
        return li;
    }

    function renderDetail() {
        if (!detailName || !detailThumb || !detailQuality || !detailEffect || !detailProperty || !detailInfo) {
            return;
        }

        const fruit = getSelectedFruit();
        if (!fruit) {
            detailName.textContent = 'Không có dữ liệu';
            detailName.classList.add('flex-column');
            detailThumb.innerHTML = '';
            detailQuality.textContent = '';
            detailEffect.textContent = '';
            detailProperty.textContent = '';
            detailInfo.textContent = '';
            return;
        }

        detailName.innerHTML = '';
        detailName.classList.remove('flex-column');
        const parts = buildNameParts(fruit.name);
        parts.forEach((part, index) => {
            const span = document.createElement('span');
            span.className = `name-${index + 1}`;
            span.textContent = part;
            detailName.appendChild(span);
            if (index < parts.length - 1) {
                detailName.appendChild(document.createTextNode(' - '));
            }
        });

        detailThumb.innerHTML = '';
        const img = document.createElement('img');
        img.className = 'thumb';
        img.alt = fruit.name || 'Trái ác quỷ';
        img.src = buildAssetUrl(fruit.itemSmall, downloadBase);
        img.addEventListener('error', () => {
            img.src = placeholderImage;
        });
        detailThumb.appendChild(img);

        detailQuality.textContent = fruit.quality ? `${fruit.quality} Sao` : 'Không có';
        detailEffect.textContent = fruit.effect || 'Không có';

        detailProperty.innerHTML = '';
        const properties = parseProperties(fruit.property);
        if (properties.length === 0) {
            detailProperty.textContent = 'Không có';
        } else {
            properties.forEach((value) => {
                const div = document.createElement('div');
                div.className = 'mb-1';
                div.textContent = value;
                detailProperty.appendChild(div);
            });
        }

        detailInfo.innerHTML = '';
        renderInfo(detailInfo, fruit.info);
    }

    function handleListClick(event) {
        const item = event.target.closest('.fruit-item');
        if (!item || !listElement.contains(item)) {
            return;
        }
        const fruitId = item.dataset.id || '';
        if (!fruitId || fruitId === state.selectedId) {
            return;
        }
        state.selectedId = fruitId;
        listElement.querySelectorAll('.fruit-item.active').forEach((element) => {
            element.classList.remove('active');
        });
        item.classList.add('active');
        renderDetail();
    }

    function handlePaginationClick(event) {
        const button = event.target.closest('button[data-page]');
        if (!button || button.disabled) {
            return;
        }
        const targetPage = Number(button.dataset.page);
        if (Number.isNaN(targetPage) || targetPage < 1) {
            return;
        }
        state.page = targetPage;
        renderList();
        renderDetail();
    }

    function handleSearchInput(event) {
        const keyword = String(event.target.value || '').trim().toLowerCase();
        filterButtons.forEach((button) => button.classList.remove('active'));
        const allButton = root.querySelector('.btn-filter.tat-ca');
        if (allButton) {
            allButton.classList.add('active');
        }
        applySearch(keyword);
    }

    function applySearch(keyword) {
        state.effect = 'tat-ca';
        state.page = 1;
        if (!keyword) {
            state.filtered = state.fruits.slice();
        } else {
            state.filtered = state.fruits.filter((fruit) => {
                return String(fruit.name || '').toLowerCase().includes(keyword);
            });
        }
        state.selectedId = state.filtered[0] ? String(state.filtered[0].id ?? '') : null;
        renderAll();
    }

    function applyFilter(effectKey) {
        state.effect = effectKey;
        state.page = 1;
        if (effectKey === 'tat-ca') {
            state.filtered = state.fruits.slice();
        } else {
            state.filtered = state.fruits.filter((fruit) => {
                return getEffectKeys(fruit).includes(effectKey);
            });
        }
        state.selectedId = state.filtered[0] ? String(state.filtered[0].id ?? '') : null;
        renderAll();
    }

    function setActiveFilterButton(activeButton) {
        filterButtons.forEach((button) => {
            button.classList.toggle('active', button === activeButton);
        });
    }

    function getSelectedFruit() {
        if (!state.selectedId) {
            return null;
        }
        return state.fruits.find((fruit) => String(fruit.id ?? '') === state.selectedId) || null;
    }

    function computePageRange(totalPages) {
        let start = state.page - Math.floor(maxVisible / 2);
        let end = state.page + Math.floor(maxVisible / 2);
        if (start < 1) {
            end += 1 - start;
            start = 1;
        }
        if (end > totalPages) {
            start -= end - totalPages;
            end = totalPages;
        }
        if (start < 1) {
            start = 1;
        }
        return { start, end };
    }

    function buildNameParts(name) {
        if (!name) {
            return ['Không xác định'];
        }
        return String(name)
            .split(/\s*-\s*/)
            .map((part) => part.trim())
            .filter(Boolean);
    }

    function getEffectKeys(fruit) {
        const raw = String(fruit.effect || '');
        return raw
            .split(',')
            .map((value) => slugify(value.trim()))
            .filter(Boolean);
    }

    function parseProperties(property) {
        if (!property) {
            return [];
        }
        if (typeof property === 'string') {
            try {
                property = JSON.parse(property);
            } catch (error) {
                return [property];
            }
        }
        if (Array.isArray(property)) {
            return property.map((value) => String(value));
        }
        if (typeof property === 'object' && property !== null) {
            return Object.values(property).map((value) => String(value));
        }
        return [];
    }

    function renderInfo(container, info) {
        if (!info) {
            container.textContent = '[Không có thông tin]';
            return;
        }
        const match = String(info).match(/^\s*(\[[^\]]+\])\s*(.*)/);
        if (match) {
            const label = document.createElement('span');
            label.className = 'description';
            label.textContent = `${match[1]}: `;
            const rest = document.createElement('span');
            rest.textContent = match[2] || '';
            container.appendChild(label);
            container.appendChild(rest);
        } else {
            container.textContent = info;
        }
    }

    function slugify(value) {
        return String(value)
            .normalize('NFD')
            .replace(/\p{Diacritic}/gu, '')
            .replace(/đ/g, 'd')
            .replace(/Đ/g, 'D')
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }

    function ensureTrailingSlash(path) {
        if (!path) {
            return '/';
        }
        return path.endsWith('/') ? path : `${path}/`;
    }

    function buildAssetUrl(path, base) {
        if (!path) {
            return placeholderImage;
        }
        if (/^https?:\/\//i.test(path)) {
            return path;
        }
        const normalisedPath = path.startsWith('/') ? path.slice(1) : path;
        return `${base}${normalisedPath}`;
    }
})();
