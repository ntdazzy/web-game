(() => {
  const FALLBACK_ALT = 'Hải Tặc Mạnh Nhất';

  const shouldSkipLazy = (img) => {
    return img.dataset.lazyExclude === 'true' || img.classList.contains('bg-image');
  };

  const inferAlt = (img) => {
    const title = (img.getAttribute('title') || '').trim();
    if (title) {
      return title;
    }
    const aria = (img.getAttribute('aria-label') || '').trim();
    if (aria) {
      return aria;
    }
    if (img.parentElement) {
      const heading = img.parentElement.querySelector('h1, h2, h3, h4, h5, h6');
      if (heading) {
        const headingText = heading.textContent.trim();
        if (headingText) {
          return headingText;
        }
      }
    }
    return FALLBACK_ALT;
  };

  const enhanceImages = () => {
    document.querySelectorAll('img').forEach((img) => {
      if (shouldSkipLazy(img)) {
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'eager');
        }
      } else if (!img.hasAttribute('loading') || img.getAttribute('loading') === 'auto') {
        img.setAttribute('loading', 'lazy');
      }

      const currentAlt = img.getAttribute('alt');
      if (currentAlt === null || currentAlt.trim() === '') {
        img.setAttribute('alt', inferAlt(img));
      }
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enhanceImages);
  } else {
    enhanceImages();
  }
})();
