(function () {
    document.addEventListener('DOMContentLoaded', function () {
        try {
            localStorage.setItem('rightFixedMenu', '1');
        } catch (error) {
            console.warn('Unable to persist rightFixedMenu flag', error);
        }

        document.querySelectorAll('[data-bg]').forEach(function (el) {
            var bg = el.getAttribute('data-bg');
            if (!bg) {
                return;
            }
            el.style.backgroundImage = 'url(' + bg + ')';
        });
    });
})();
