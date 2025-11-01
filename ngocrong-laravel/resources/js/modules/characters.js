import { onDocumentReady } from "../utils/dom";

const API_ENDPOINT = "/get-hero-detail";
const FPS = 30;
const TAB_IDS = {
    stand: "standCanvasTab",
    normal: "normalCanvasTab",
    rage: "rageCanvasTab",
};

const state = {
    detail: null,
    currentTab: "stand",
    animation: {
        requestId: null,
        timeoutId: null,
    },
};

const spriteCache = new Map();

const toInt = (value) => {
    if (typeof value === "number") {
        return Math.trunc(value);
    }

    const parsed = parseInt(value ?? "", 10);
    return Number.isFinite(parsed) ? parsed : 0;
};

const toFloat = (value) => {
    if (typeof value === "number") {
        return value;
    }

    const parsed = parseFloat(value ?? "");
    return Number.isFinite(parsed) ? parsed : 0;
};

const escapeHtml = (value) => {
    const div = document.createElement("div");
    div.textContent = value ?? "";
    return div.innerHTML;
};

const buildSkillHtml = (skill) => {
    if (!skill) {
        return "";
    }

    const name = skill.name ? `<p class="hero-skill-name-mb">${escapeHtml(skill.name)}</p>` : "";
    const description = skill.description ?? "";

    return `${name}${description}`;
};

const buildTalentHtml = (talent) => {
    if (!talent) {
        return "";
    }

    const title = talent.name ? `<p class="hero-skill-name-mb">${escapeHtml(talent.name)}</p>` : "";
    const levels = (talent.levels ?? [])
        .filter((level) => level.level && level.description)
        .map((level) => `<b>Cấp ${level.level} :</b> ${level.description}`)
        .join("<br><br>");

    return `${title}${levels}`;
};

const normaliseDetail = (raw) => {
    if (!raw || typeof raw !== "object") {
        return null;
    }

    const talents = Object.entries(raw)
        .filter(([key]) => key.startsWith("talentDesc"))
        .map(([key, description]) => ({
            level: toInt(key.replace("talentDesc", "")),
            description,
        }))
        .filter((item) => item.level > 0 && item.description)
        .sort((a, b) => a.level - b.level);

    return {
        name: raw.name ?? "",
        slug: raw.slug ?? "",
        heroId: toInt(raw.htid ?? raw.heroId ?? raw.hero_id ?? 0),
        backgroundImg: raw.backgroundImg ?? "",
        sprites: {
            stand: {
                image: raw.standImg ?? "",
                width: toInt(raw.standImgWidth),
                height: toInt(raw.standImgHeight),
            },
            normal: {
                image: raw.normalAtkImg ?? "",
                width: toInt(raw.normalAtkImgWidth),
                height: toInt(raw.normalAtkImgHeight),
            },
            rage: {
                image: raw.rageAtkImg ?? "",
                width: toInt(raw.rageAtkImgWidth),
                height: toInt(raw.rageAtkImgHeight),
            },
        },
        skills: {
            normal: {
                name: raw.normalAtkName ?? "",
                description: raw.normalAtkDesc ?? "",
            },
            rage: {
                name: raw.rageAtkName ?? "",
                description: raw.rageAtkDesc ?? "",
            },
        },
        devilFruit: {
            name: raw.devilAppleName ?? "",
            description: raw.devilAppleDesc ?? "",
        },
        talent: {
            name: raw.talentName ?? "",
            levels: talents,
        },
    };
};

const cancelAnimation = () => {
    if (state.animation.requestId) {
        cancelAnimationFrame(state.animation.requestId);
        state.animation.requestId = null;
    }

    if (state.animation.timeoutId) {
        window.clearTimeout(state.animation.timeoutId);
        state.animation.timeoutId = null;
    }
};

const computeOffsets = (container, canvasType, frameWidth, frameHeight) => {
    const champion = container.querySelector(".preview-hero-attack .champion");

    const championWidth = champion?.clientWidth ?? 0;
    const championHeight = champion?.clientHeight ?? 0;

    let top = 0;
    let left = 0;

    if (canvasType === "stand") {
        if (championWidth) {
            top = (championWidth - frameHeight) / 2;
            left = (championWidth - frameWidth) / 2;
        }

        if (window.innerWidth <= 1200 && window.innerWidth > 576) {
            top += 50;
        } else if (window.innerWidth <= 576) {
            top += 40;
        }
    } else {
        if (championHeight) {
            top = (championHeight - frameHeight) / 2;
        }
        if (championWidth) {
            left = (championWidth - frameWidth) / 2;
        }
    }

    return {
        top: Number.isFinite(top) ? top : 0,
        left: Number.isFinite(left) ? left : 0,
    };
};

const applyCanvasTransform = (canvas, frameHeight, canvasType) => {
    if (!canvas) {
        return;
    }

    if (window.innerWidth <= 1200 && window.innerWidth > 576) {
        canvas.style.transform = frameHeight >= 879 ? "scale(0.5)" : "scale(0.682)";
    } else if (window.innerWidth <= 576 && canvasType !== "stand") {
        canvas.style.transform = frameHeight >= 879 ? "scale(0.3)" : "scale(0.4)";
    } else if (window.innerWidth <= 576 && canvasType === "stand") {
        canvas.style.transform = "scale(0.7)";
    } else {
        canvas.style.transform = frameHeight >= 879 ? "scale(0.682)" : "";
    }
};

const showOverlay = (container) => {
    const overlay = container.querySelector(".loading-overlay");
    overlay?.classList.add("is-active");
};

const hideOverlay = (container) => {
    const overlay = container.querySelector(".loading-overlay");
    overlay?.classList.remove("is-active");
};

const animateSprite = (container, canvasType, canvas, sprite) => {
    if (!canvas || !sprite?.image || !sprite.width || !sprite.height) {
        return;
    }

    cancelAnimation();

    const frameWidth = sprite.width;
    const frameHeight = sprite.height;

    canvas.width = frameWidth;
    canvas.height = frameHeight;
    canvas.style.position = "absolute";

    const offsets = computeOffsets(container, canvasType, frameWidth, frameHeight);
    canvas.style.top = `${offsets.top}px`;
    canvas.style.left = `${offsets.left}px`;

    applyCanvasTransform(canvas, frameHeight, canvasType);

    const ctx = canvas.getContext("2d");
    if (!ctx) {
        return;
    }

    const cached = spriteCache.get(sprite.image);
    const image = cached ?? new Image();

    const startAnimation = () => {
        hideOverlay(container);

        const totalRows = image.height / frameHeight || 1;
        const framesPerRow = Math.floor(image.width / frameWidth);
        const totalFrames = totalRows > 1 ? framesPerRow * totalRows : Math.floor(image.width / frameWidth);

        let frame = 0;

        const draw = () => {
            ctx.clearRect(0, 0, frameWidth, frameHeight);

            let sourceX = 0;
            let sourceY = 0;

            if (totalRows > 1) {
                const row = Math.floor(frame / framesPerRow);
                const col = frame % framesPerRow;
                sourceX = col * frameWidth;
                sourceY = row * frameHeight;
            } else {
                sourceX = frame * frameWidth;
            }

            ctx.drawImage(
                image,
                sourceX,
                sourceY,
                frameWidth,
                frameHeight,
                0,
                0,
                frameWidth,
                frameHeight,
            );

            frame = (frame + 1) % (totalFrames || 1);
            state.animation.timeoutId = window.setTimeout(() => {
                state.animation.requestId = requestAnimationFrame(draw);
            }, 1000 / FPS);
        };

        draw();
    };

    if (!cached) {
        showOverlay(container);
        image.onload = () => {
            spriteCache.set(sprite.image, image);
            startAnimation();
        };
        image.onerror = () => {
            hideOverlay(container);
            console.error("[characters] Không thể tải sprite", sprite.image);
        };
        image.src = sprite.image;
    } else {
        if (image.complete) {
            startAnimation();
        } else {
            showOverlay(container);
            image.onload = startAnimation;
        }
    }
};

const updateTextSections = (container, detail) => {
    const normalSkillEl = container.querySelector(".skill-description .normal-skill .text");
    const rageSkillEl = container.querySelector(".skill-description .rage-skill .text");
    const devilFruitEl = container.querySelector(".devil-fruit .text");
    const devilFruitTitle = container.querySelector(".devil-fruit .title .hero-skill-name");
    const normalTitle = container.querySelector(".skill-description .normal-skill .title .hero-skill-name");
    const rageTitle = container.querySelector(".skill-description .rage-skill .title .hero-skill-name");
    const talentTitle = container.querySelector(".talent-description .title .hero-skill-name");
    const talentText = container.querySelector(".talent-description .text");

    if (normalSkillEl) {
        normalSkillEl.innerHTML = buildSkillHtml(detail.skills.normal);
    }
    if (rageSkillEl) {
        rageSkillEl.innerHTML = buildSkillHtml(detail.skills.rage);
    }
    if (devilFruitEl) {
        if (detail.devilFruit?.description) {
            const nameHtml = detail.devilFruit?.name
                ? `<p class="hero-skill-name-mb">${escapeHtml(detail.devilFruit.name)}</p>`
                : "";
            devilFruitEl.innerHTML = `${nameHtml}${detail.devilFruit.description}`;
        } else {
            devilFruitEl.innerHTML = "Nhân vật không có trái ác quỷ";
        }
    }

    if (devilFruitTitle) {
        devilFruitTitle.textContent = detail.devilFruit?.name ?? "";
    }
    if (normalTitle) {
        normalTitle.textContent = detail.skills.normal?.name ?? "";
    }
    if (rageTitle) {
        rageTitle.textContent = detail.skills.rage?.name ?? "";
    }
    if (talentTitle) {
        talentTitle.textContent = detail.talent?.name ?? "";
    }
    if (talentText) {
        talentText.innerHTML = buildTalentHtml(detail.talent);
    }

    const mobileNormal = container.querySelector(".info-hero-mobile .normal-skill .text");
    const mobileRage = container.querySelector(".info-hero-mobile .rage-skill .text");
    const mobileFruit = container.querySelector(".info-hero-mobile .devil-fruit .text");
    const mobileTalent = container.querySelector(".info-hero-mobile .talent-description .text");

    if (mobileNormal) {
        mobileNormal.innerHTML = buildSkillHtml(detail.skills.normal);
    }
    if (mobileRage) {
        mobileRage.innerHTML = buildSkillHtml(detail.skills.rage);
    }
    if (mobileFruit) {
        mobileFruit.innerHTML = detail.devilFruit?.description
            ? `<p class="hero-skill-name-mb">${escapeHtml(detail.devilFruit.name ?? "")}</p>${detail.devilFruit.description}`
            : "Nhân vật không có trái ác quỷ";
    }
    if (mobileTalent) {
        mobileTalent.innerHTML = buildTalentHtml(detail.talent);
    }
};

const scrollToList = (container) => {
    const preview = container.querySelector(".preview-hero-attack");
    if (!preview || preview.offsetWidth <= 1200) {
        return;
    }

    const list = container.querySelector(".wrapper-hero-list");
    if (!list) {
        return;
    }

    const offset = list.getBoundingClientRect().top + window.scrollY + 100;
    window.scrollTo({ top: offset, behavior: "smooth" });
};

const applyTab = (container, tab) => {
    if (!state.detail) {
        return;
    }

    state.currentTab = tab;

    const navLinks = container.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
        link.classList.toggle("active", link.id === TAB_IDS[tab]);
    });

    const heroName = container.querySelector(".hero-name");
    const canvasWrapper = container.querySelector(".canvas-wrapper");
    const champion = container.querySelector(".preview-hero-attack .champion");
    const preview = container.querySelector(".preview-hero-attack");
    const skillDescription = container.querySelector(".skill-description");
    const talentDescription = container.querySelector(".talent-description");
    const devilFruit = container.querySelector(".devil-fruit");
    const mobileInfo = container.querySelector(".info-hero-mobile");
    const standCanvas = container.querySelector("#standCanvas");
    const normalCanvas = container.querySelector("#normalCanvas");
    const rageCanvas = container.querySelector("#rageCanvas");

    if (canvasWrapper) {
        canvasWrapper.style.width = "";
    }
    if (champion) {
        champion.style.height = "";
    }
    if (preview) {
        preview.style.background = "";
        preview.style.height = "";
    }

    if (skillDescription) {
        skillDescription.style.display = "";
    }
    if (talentDescription) {
        talentDescription.style.display = "";
    }
    if (devilFruit) {
        devilFruit.style.display = "";
    }
    if (mobileInfo) {
        mobileInfo.style.display = "none";
    }
    if (heroName) {
        heroName.classList.add("d-none");
    }

    if (standCanvas) standCanvas.style.display = "none";
    if (normalCanvas) normalCanvas.style.display = "none";
    if (rageCanvas) rageCanvas.style.display = "none";

    if (tab === "stand") {
        if (heroName) {
            heroName.textContent = state.detail.name ?? "";
            heroName.classList.remove("d-none");
        }

        if (canvasWrapper && window.innerWidth > 576) {
            canvasWrapper.style.width = "40%";
        }

        if (champion) {
            if (window.innerWidth > 576) {
                champion.style.height = "67%";
            } else {
                champion.style.height = "320px";
            }
        }

        if (preview && window.innerWidth <= 576) {
            preview.style.height = "710px";
        }

        if (mobileInfo && window.innerWidth <= 576) {
            mobileInfo.style.display = "block";
        }

        if (standCanvas) {
            standCanvas.style.display = "block";
            animateSprite(container, "stand", standCanvas, state.detail.sprites.stand);
        }
    } else if (tab === "normal") {
        if (window.innerWidth > 576) {
            skillDescription && (skillDescription.style.display = "none");
            talentDescription && (talentDescription.style.display = "none");
            devilFruit && (devilFruit.style.display = "none");
        }

        if (canvasWrapper && window.innerWidth > 576) {
            canvasWrapper.style.width = "100%";
        }
        if (champion && window.innerWidth > 576) {
            champion.style.height = "100%";
        }
        if (preview) {
            if (state.detail.backgroundImg) {
                preview.style.background = `url(${state.detail.backgroundImg})`;
            }
            if (window.innerWidth < 576) {
                preview.style.height = "320px";
            }
        }

        if (normalCanvas) {
            normalCanvas.style.display = "block";
            animateSprite(container, "normal", normalCanvas, state.detail.sprites.normal);
        }
    } else if (tab === "rage") {
        if (window.innerWidth > 576) {
            skillDescription && (skillDescription.style.display = "none");
            talentDescription && (talentDescription.style.display = "none");
            devilFruit && (devilFruit.style.display = "none");
        }

        if (canvasWrapper && window.innerWidth > 576) {
            canvasWrapper.style.width = "100%";
        }
        if (champion && window.innerWidth > 576) {
            champion.style.height = "100%";
        }
        if (preview) {
            if (state.detail.backgroundImg) {
                preview.style.background = `url(${state.detail.backgroundImg})`;
            }
            if (window.innerWidth < 576) {
                preview.style.height = "320px";
            }
        }

        if (rageCanvas) {
            rageCanvas.style.display = "block";
            animateSprite(container, "rage", rageCanvas, state.detail.sprites.rage);
        }
    }

    scrollToList(container);
};

const attachTabHandlers = (container) => {
    const standBtn = container.querySelector(`#${TAB_IDS.stand}`);
    const normalBtn = container.querySelector(`#${TAB_IDS.normal}`);
    const rageBtn = container.querySelector(`#${TAB_IDS.rage}`);

    standBtn?.addEventListener("click", () => applyTab(container, "stand"));
    normalBtn?.addEventListener("click", () => applyTab(container, "normal"));
    rageBtn?.addEventListener("click", () => applyTab(container, "rage"));
};

const handleResize = (container) => {
    cancelAnimation();
    applyTab(container, state.currentTab);
};

const csrfToken = document.head.querySelector('meta[name="csrf-token"]')?.content ?? '';

const fetchDetail = async (heroId, heroSlug) => {
    const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-Requested-With": "XMLHttpRequest",
            ...(csrfToken ? { "X-CSRF-TOKEN": csrfToken } : {}),
        },
        body: JSON.stringify({ heroId, heroSlug }),
    });

    if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json();
};

const showFallback = (container) => {
    const heroName = container.querySelector(".hero-name");
    const standCanvas = container.querySelector("#standCanvas");

    heroName?.classList.remove("d-none");
    if (heroName) {
        heroName.textContent = "Đang cập nhật";
    }

    if (standCanvas) {
        const ctx = standCanvas.getContext("2d");
        if (ctx) {
            ctx.clearRect(0, 0, standCanvas.width, standCanvas.height);
        }
    }
};

const initialise = (container) => {
    const heroId = toInt(container.dataset.heroId);
    const heroSlug = container.dataset.heroSlug ?? "";

    if (!heroId && !heroSlug) {
        showFallback(container);
        return;
    }

    fetchDetail(heroId, heroSlug)
        .then((raw) => {
            const detail = normaliseDetail(raw);
            if (!detail) {
                showFallback(container);
                return;
            }

            state.detail = detail;
            updateTextSections(container, detail);
            attachTabHandlers(container);
            applyTab(container, "stand");

            window.addEventListener("resize", () => handleResize(container));
        })
        .catch((error) => {
            console.error("[characters] Không thể tải dữ liệu chi tiết", error);
            showFallback(container);
        });
};

onDocumentReady(() => {
    const container = document.querySelector("[data-character-detail]");
    if (!container) {
        return;
    }

    initialise(container);
});
