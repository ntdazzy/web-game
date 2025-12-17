const DESIGN_WIDTH = 1905;
const SCALE_MIN_WIDTH = 1200;

function applyScale() {
    const root = document.querySelector("#site-root");
    if (!root) return;

    const leftMenu = document.querySelector(".menu-fixed.left");
    const rightMenu = document.querySelector(".menu-fixed.right");

    const viewportWidth = Math.max(window.innerWidth, 0);
    const needsScale =
        viewportWidth < DESIGN_WIDTH && viewportWidth > SCALE_MIN_WIDTH;
    const scaleRatio = needsScale ? viewportWidth / DESIGN_WIDTH : 1;
    const scaledWidth = DESIGN_WIDTH * scaleRatio;
    const offsetX = needsScale ? (viewportWidth - scaledWidth) / 2 : 0;

    if (!needsScale) {
        root.style.transform = "";
        root.style.transformOrigin = "";
        root.style.width = "";
        root.style.maxWidth = "";
        if (leftMenu) {
            leftMenu.style.transform = "";
            leftMenu.style.transformOrigin = "";
            leftMenu.style.left = "";
        }
        if (rightMenu) {
            rightMenu.style.transform = "";
            rightMenu.style.transformOrigin = "";
            rightMenu.style.right = "";
        }
        return;
    }

    root.style.transform = `translateX(${offsetX}px) scale(${scaleRatio})`;
    root.style.transformOrigin = "top left";
    root.style.width = `${DESIGN_WIDTH}px`;
    root.style.maxWidth = `${DESIGN_WIDTH}px`;

    if (leftMenu) {
        leftMenu.style.transform = `scale(${scaleRatio})`;
        leftMenu.style.transformOrigin = "top left";
        leftMenu.style.left = "0";
    }
    if (rightMenu) {
        rightMenu.style.transform = `scale(${scaleRatio})`;
        rightMenu.style.transformOrigin = "top right";
        rightMenu.style.right = "0";
    }
}

export function initScaleForInertia() {
    applyScale();
    window.addEventListener("resize", applyScale, { passive: true });
}
