(function (window, document) {
    document.addEventListener('DOMContentLoaded', function () {
        var $ = window.jQuery;
        if (!$ || !$.fn || typeof $.fn.daterangepicker !== 'function') {
            return;
        }

        var dateRangeInputs = $('.daterange-picker');
        if (dateRangeInputs.length) {
            dateRangeInputs.daterangepicker({
                locale: { format: 'DD/MM/YYYY' },
                maxSpan: { days: 31 },
                maxDate: moment().format('DD/MM/YYYY'),
                autoApply: true,
            });
        }

        var birthdayInputs = $('.birthday');
        if (birthdayInputs.length) {
            birthdayInputs.daterangepicker({
                singleDatePicker: true,
                showDropdowns: true,
                locale: { format: 'DD/MM/YYYY' },
            });
        }
    });
})(window, document);
