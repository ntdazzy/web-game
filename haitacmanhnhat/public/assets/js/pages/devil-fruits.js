let filteredFruits = fruits;
let currentEffect = "";
function renderFruits(page) {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const items = filteredFruits.slice(start, end);

    const $list = $("#fruit-list");
    if (!$list.length) return;

    if (!items.length) {
        $list.html('<li class="no-data">Không có dữ liệu để hiển thị</li>');
        return;
    }

    const html = items
        .map((fruit) => {
            const effectKey = slugify(fruit.effect || "");
            const nameSpans = formatNameToSpans(fruit.name);
            return `
            <li class='fruit-item' data-id="${escapeHtml(
                fruit.id
            )}" data-effect="${escapeHtml(effectKey)}">
                <img src='${window.domainDownload}${escapeHtml(
                fruit.itemSmall
            )}'
                    alt='${escapeHtml(fruit.name)}' class='thumb'
                    onerror="this.onerror=null;this.src='${window.staticUrl
                }imgs/devil-fruit/devil-fruit-example.png';" />
                <div class='name d-flex flex-column'>${nameSpans}</div>
            </li>
        `;
        })
        .join("");

    $list.html(html);
}

function renderFruitDetail(fruit) {
    const $detail = $(".fruit-detail .content");
    if (!$detail.length) return;
    const nameSpans = formatNameToSpanForDetail(fruit.name);
    $detail.find(".name").html(nameSpans).removeClass("flex-column");

    const imgHtml = `
            <img src='${window.domainDownload}/${fruit.itemSmall}'
                alt='${escapeHtml(fruit.name)}'
                class='thumb'
                onerror="this.onerror=null;this.src='${window.staticUrl
        }imgs/devil-fruit/devil-fruit-example.png';" />
	`;
    $detail.find(".thumb").replaceWith(imgHtml);

    $detail
        .find(".text-group .text-content.quality")
        .text(fruit.quality + " Sao" || "Không có");
    $detail
        .find(".text-group .text-content.effect")
        .text(fruit.effect || "Không có");
    $detail
        .find(".text-group .text-content.property")
        .html(formatProperties(fruit.property));
    $detail.find(".text-group .text-content.info").html(formatInfo(fruit.info));
}

function formatInfo(info) {
    if (!info) return "<span>[Không có thông tin]&nbsp;</span>";

    const match = info.match(/^\s*(\[[^\]]+\])\s*(.*)/);
    if (match) {
        const name = escapeHtml(match[1]);
        const rest = escapeHtml(match[2]);
        return `<span class='description'>${name}:&nbsp;</span>${rest}`;
    } else {
        return escapeHtml(info);
    }
}

function renderPagination() {
    const totalPages = Math.ceil(filteredFruits.length / perPage);
    const $container = $("#pagination");
    if (!$container.length) return;

    const maxVisible = 5;
    let html = `
	<div class="pagingWrapOut">
	  <div class="pagingWrap">
	    <div class="paging">
	      <ul class="d-flex justify-content-center gap-2 my-3">
	`;

    // Nút Trước
    html += `<li class="prev">`;
    if (currentPage > 1) {
        html += `<a class='d-block w-100 h-100' href="#" data-page="${currentPage - 1
            }"><img src="${window.staticUrl
            }imgs/icon-arrow-left.png" alt="" width="10px" height="15px"></a>`;
    } else {
        html += `<span><img src="${window.staticUrl}imgs/icon-arrow-left.png" alt="" width="10px" height="15px"></span>`;
    }
    html += `</li>`;

    // Tính range trang
    let start = currentPage - Math.floor(maxVisible / 2);
    let end = currentPage + Math.floor(maxVisible / 2);
    if (start < 1) {
        end += 1 - start;
        start = 1;
    }
    if (end > totalPages) {
        start -= end - totalPages;
        end = totalPages;
    }
    if (start < 1) start = 1;

    // Số trang
    for (let i = start; i <= end; i++) {
        if (i === currentPage) {
            html += `<li><span>${i}</span></li>`;
        } else {
            html += `<li><a class='d-block w-100 h-100' href="#" data-page="${i}">${i}</a></li>`;
        }
    }

    // Nút Tiếp
    html += `<li class="next">`;
    if (currentPage < totalPages) {
        html += `<a class='d-block w-100 h-100' href="#" data-page="${currentPage + 1
            }"><img src="${window.staticUrl
            }imgs/icon-arrow-right.png" alt="" width="10px" height="15px"></a>`;
    } else {
        html += `<span><img src="${window.staticUrl}imgs/icon-arrow-right.png" alt="" width="10px" height="15px"></span>`;
    }
    html += `</li>`;

    html += `
	      </ul>
	    </div>
	  </div>
	</div>
	`;

    $container.html(html);
}

function gotoPage(page) {
    currentPage = page;
    renderFruits(page);
    renderPagination();
}

function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}

function renderAllFruits() {
    $("#pagination").hide();
    const $list = $("#fruit-list");
    if (!$list.length) return;
    if (!filteredFruits.length) {
        $list.html('<li class="no-data">Không có dữ liệu để hiển thị</li>');
        return;
    }
    const html = filteredFruits
        .map((fruit) => {
            const effectKey = slugify(fruit.effect || "");
            const nameSpans = formatNameToSpans(fruit.name);
            return `
            <li class='fruit-item' data-id="${escapeHtml(
                fruit.id
            )}" data-effect="${escapeHtml(effectKey)}">
                <img src='${window.domainDownload}${escapeHtml(
                fruit.itemSmall
            )}'
                    alt='${escapeHtml(fruit.name)}' class='thumb'
                    onerror="this.onerror=null;this.src='${window.staticUrl
                }imgs/devil-fruit/devil-fruit-example.png';" />
                <div class='name d-flex flex-column'>${nameSpans}</div>
            </li>
        `;
        })
        .join("");

    $list.html(html);
}

function slugify(text) {
    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D")
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9\-]/g, "")
        .replace(/\-+/g, "-")
        .replace(/^\-+|\-+$/g, "");
}
function renderForDesktop() {
    renderFruits(currentPage);
    renderPagination();
}

function renderFruitsListByScreen() {
    if (window.innerWidth > 1200) {
        renderForDesktop();
    } else {
        renderAllFruits();
    }
}

function formatProperties(property) {
    var newData = JSON.parse(property);
    if (!newData || Object.keys(newData).length === 0) {
        return "Không có";
    }
    return Object.values(newData)
        .map((text) => `<div class='mb-1'>${escapeHtml(text)}</div>`)
        .join("");
}

function renderFruitsList(fruitsToRender) {
    const $list = $("#fruit-list");
    if (!$list.length) return;

    $list.html(
        fruitsToRender
            .map((fruit) => {
                const effectKey = slugify(fruit.effect || "");
                const nameSpans = formatNameToSpans(fruit.name);
                return `<li class='fruit-item' data-id="${fruit.id
                    }" data-effect="${escapeHtml(effectKey)}">
            <img src='${window.staticUrl}${fruit.itemSmall}'
                alt='${escapeHtml(fruit.name)}' class='thumb'
                onerror="this.onerror=null;this.src='${window.staticUrl
                    }imgs/devil-fruit/devil-fruit-example.png';" />
            <div class='name d-flex flex-column'>${nameSpans}</div>
        </li>`;
            })
            .join("")
    );
}

function formatNameToSpans(name, className) {
    return (name || "")
        .split(/\s*-\s*/)
        .map((s) => s.trim())
        .map((part, index) => {
            const cls = `name-${index + 1}`;
            return `<span class="${escapeHtml(cls)}">${escapeHtml(part)}</span>`;
        })
        .join("");
}

function formatNameToSpanForDetail(name, className) {
    return (name || "")
        .split(/\s*-\s*/)
        .map((s) => s.trim())
        .map((part, index) => {
            const cls = `name-${index + 1}`;
            return `<span class="${escapeHtml(cls)}">${escapeHtml(part)}</span>`;
        })
        .join("&nbsp;-&nbsp;");
}

$(document).ready(function () {
    renderFruitsListByScreen();
    renderFruitDetail(fruits[0]);
    $(".fruit-item").first().addClass("active");

    let resizeTimer;
    $(window).on("resize", function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            $("#pagination").show();
            renderFruitsListByScreen();
        }, 200);
    });

    //Phân trang
    $(document).on("click", ".paging a[data-page]", function (e) {
        e.preventDefault();
        const page = parseInt($(this).data("page"));
        if (!isNaN(page)) {
            gotoPage(page);
        }
    });

    //Tìm kiếm theo tên
    $(".text-search").on("input", function () {
        $(".btn-filter").removeClass("active");
        $(".btn-filter.tat-ca").addClass("active");
        const keyword = $(this).val().trim().toLowerCase();
        currentPage = 1;

        if (keyword === "") {
            filteredFruits = fruits;
        } else {
            filteredFruits = fruits.filter((fruit) =>
                fruit.name.toLowerCase().includes(keyword)
            );
        }

        renderFruitsListByScreen();
    });

    //Xem thông tin trái Detail
    $(document).on("click", ".fruit-item", function () {
        const id = parseInt($(this).data("id"));
        $(".fruit-item").removeClass("active");
        $(this).addClass("active");
        if (!isNaN(id)) {
            const fruit = filteredFruits.find((f) => f.id === id);
            if (fruit) {
                renderFruitDetail(fruit);
            }
        }
    });

    //Filter
    $(document).on("click", ".btn-filter", function (e) {
        e.preventDefault();
        $(".btn-filter").removeClass("active");
        $(this).addClass("active");

        const selectedEffect = $(this).data("effect") || "tat-ca";
        currentEffect = selectedEffect;
        currentPage = 1;

        if (selectedEffect === "tat-ca") {
            filteredFruits = fruits;
        } else {
            filteredFruits = fruits.filter((fruit) => {
                const effectStr = fruit.effect || "";
                const effects = effectStr.split(",").map((e) => slugify(e.trim()));
                return effects.includes(selectedEffect);
            });
        }

        $("#pagination").show();
        renderFruitsListByScreen();
    });
});
