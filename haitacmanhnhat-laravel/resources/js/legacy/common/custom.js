const HIDE_FIXED_MENU = 1;

var bodyWidth = $('body').width();

const sexMap = {
    1: 'Nam',
    2: 'Nữ',
    0: 'Không xác định'
};

function isPC(){
    return bodyWidth > 1260;
}
function isTablet(){
    return bodyWidth > 992 && bodyWidth <= 1260;
}
function isMobile(){
    return bodyWidth <= 992;
}
function scale() {
    var maxWidth = $(window).width();
    if (maxWidth >= 1905 || maxWidth <= 1200) {
        $('#root').css({
            'transform': 'unset',
            'width': 'unset',
        });
        $('.top-nav .container').css({
            'transform': 'unset',
            'width': 'unset',
        });
    } else {
        $('#root').attr('style', `
            transform: scale(${maxWidth / 1905});
            transform-origin: top left;
            width: 1905px !important;
        `);
        $('.top-nav .container').css({
            'transform': 'scale(' + (maxWidth / 1905) + ')',
            'transform-origin': 'top left',
            'width': '1905px'
        });
        $('.menu-fixed.left').css({
            'transform': 'scale(' + (maxWidth / 1905) + ')',
            'transform-origin': 'top left',
            'width': '1905px'
        });

        $('.menu-fixed.right').css({
            'transform': 'scale(' + (maxWidth / 1905) + ')',
            'transform-origin': 'top right',
            'width': '1905px'
        });
    }
    if(window.innerWidth < 1620 && $('.page-4 .social').length && window.innerWidth > 1200) {
        $('.page-4 .social').removeAttr('data-aos data-aos-offset data-aos-duration data-aos-delay data-aos-easing');
    }else{
        $('.page-4 .social').attr({
            'data-aos': 'fade-up',
            'data-aos-offset': '0',
            'data-aos-duration': '600'
        });
    }
    AOS.refresh();
}
function log(mess){
    console.log(mess);
}

function redirect(url){
    window.location.href = url;
}
function redirectTop(url){
    window.top.location.href = url;
}
function showLoading(){
    $.LoadingOverlay('show', {
        size: 40,
        minSize: 40,
        maxSize: 40,
        imageColor : "#fe6c00"
    });
}
function hideLoading(){
    $.LoadingOverlay('hide')
}
function success(mess){
    SwalFire('success', mess)
}
function warning(mess){
    SwalFire('warning', mess)
}
function error(mess){
    SwalFire('error', mess)
}
function SwalFire(type, mess){
    Swal.fire({
        html: mess,
        icon: type,
        scrollbarPadding:false,
    });
}
function showConfirmAndRedirect(url, message, title){
    Swal.fire({
        title: title,
        text: message,
        icon: 'success',
    }).then(function(result){
        redirect(url);
    });
}

function handleError(error){
    log(error);
}

function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
// function getRedirectTop() {
//     return getRedirectPrevious();
// }
function getRedirectPrevious() {
    var params = parseUrl(document.URL);
    var previous = params['previous'];
    return previous && previous !== '0' ? previous : null;
}

function getRedirectTop() {
    var params = parseUrl(document.URL);
    var redirectTop = params['redirect-top'];
    return redirectTop && redirectTop !== '0' ? redirectTop : null;
}

function getRedirectUrl() {
    var params = parseUrl(document.URL);
    return params['redirect'] || params['redirect_url'] || '';
}

function parseUrl(url = window.location.href) {
    var params = {};
    var queryString = url.split('?')[1] || '';
    queryString.split('&').forEach(pair => {
        if (!pair) return;
        var [key, value = ''] = pair.replace(/^amp;/, '').split('=');
        params[decodeURIComponent(key.replace(/\+/g, ' '))] = decodeURIComponent(value.replace(/\+/g, ' '));
    });
    return params;
}

function checkUserState() {
    if ($.cookie('uname')) {
        return true;
    }
    return false;
}

function getAndUpdateStateMe() {
    return $.ajax({
        method: "POST",
        url: "/id/update-state-user",
        error: function(xhr) {
            error('Có lỗi xảy ra khi đăng ký tài khoản, vui lòng thử lại sau!');
        }
    });
}

function searchHero(keySearch) {
    var $slider = $('.hero-list-slide');
    if ($slider.length && $slider.hasClass('slick-initialized')) {
        searchHeroByParticular('s0');
        $slider.slick('slickUnfilter');
        if (keySearch) {
            $slider.slick('slickFilter', function () {
                const name = ($(this).data('name') || '').trim().toUpperCase();
                return name.includes(keySearch.trim().toUpperCase());
            });
        }else{
            const $active = $slider.find('.slick-slide.active');
            const index = $active.length ? $active.data('slick-index') : 0;
            $slider.slick('slickGoTo', index, true);
        }
    }else{
        $('.listChars').find('li').addClass('d-none');
        $('.listChars li').each(function(){
            var dataName = $(this).attr('data-name') || '';
            if (dataName.trim().toUpperCase().indexOf(keySearch.trim().toUpperCase()) !== -1) {
                $(this).removeClass('d-none');
            }
        });
    }
}

function searchHeroByParticular(keySearch) {
    var $slider = $('.hero-list-slide');
    localStorage.setItem("searchHero", keySearch);
    if ($slider.length && $slider.hasClass('slick-initialized')) {
        $slider.slick('slickUnfilter');
        $('.filter-type-attack ul li').removeClass('active');

        $('.filter-type-attack ul li a').each(function () {
            const data = ($(this).data('particular') || '').trim().toUpperCase();
            if (data === keySearch.trim().toUpperCase()) {
                $(this).closest('li').addClass('active');
            }
        });
        if (keySearch && keySearch !== 's0') {
            $slider.slick('slickFilter', function () {
                var particular = ($(this).data('particular') || '').trim().toUpperCase();
                return particular.includes(keySearch.trim().toUpperCase());
            });
            $slider.one('setPosition', function () {
                const $filteredSlides = $slider.find('li');
                const $active = $filteredSlides.filter('.active');
                if ($active.length) {
                    const index = $filteredSlides.index($active);
                    if (index >= 0) {
                        $slider.slick('slickGoTo', index);
                    }
                }
            });
        } else {
            var $active = $slider.find('.slick-slide.active');
            var index = $active.length ? $active.data('slick-index') : 0;
            $slider.slick('slickGoTo', index, true);
        }
    }else{
        if (keySearch === 's0') {
            $('.listChars').find('li').removeClass('d-none');
            return;
        }
        $('.listChars').find('li').addClass('d-none');
        $('.listChars li').each(function(){
            var dataParticular = $(this).attr('data-particular') || '';
            if (dataParticular.trim().toUpperCase().indexOf(keySearch.trim().toUpperCase()) !== -1) {
                $(this).removeClass('d-none');
            }
        });
    }
}
function changeAlias(alias) {
    var str = alias;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");
    str = str.replace(/đ/g,"d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
    str = str.replace(/ + /g," ");
    str = str.replace(/ /g,"-");
    str = str.trim();
    return str;
}

$(document).ready(function () {
    if (localStorage.getItem("rightFixedMenu") == HIDE_FIXED_MENU) {
        const $menu = $('.right-menu');
        $menu.css('transition', 'none');
        $menu.css('display', 'none');
        $menu.toggleClass('collapsed');
        $menu.css('display', 'block');
        setTimeout(() => {
            $menu.css('transition', '');
        }, 50);
    }

    //Collapse MENU
    var btnTurnIn = document.querySelector('.turn-in');
    var btnTurnOut = document.querySelector('.turn-out');
    var btnTurnTop = document.querySelector('.turn-top');

    var rightMenu = document.querySelector('.right-menu');

    btnTurnIn.addEventListener('click', () => {
        localStorage.setItem("rightFixedMenu", HIDE_FIXED_MENU);
        rightMenu.classList.toggle('collapsed');
    });

    btnTurnOut.addEventListener('click', () => {
        localStorage.removeItem("rightFixedMenu");
        rightMenu.classList.remove('collapsed');
    });

    btnTurnTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    $('#serverSelect').select2({
        placeholder: "Nhập ID máy chủ",
        allowClear: true,
        width: '100%',
        theme: 'classic',
        dropdownCssClass: 'serverSelect-dropdown',
        dropdownParent: $('.select-group .server')
    });

    $('#serverSelect').on('select2:open', () => {
        $('.select2-search__field').attr('placeholder', 'Nhập ID máy chủ...');
        $('.select2-search__field').addClass('server-search-select2');
    });

    $('.search-lite.post').on('submit', function (e) {
        e.preventDefault();

        const text = $(this).find('#search').val().trim();
        if (!text) return;

        const redirectUrl = '/tim-kiem/' + changeAlias(text);
        window.location.href = redirectUrl;
    });

});

// select2 (extend function)
(function($) {
    var Defaults = $.fn.select2.amd.require('select2/defaults');

    $.extend(Defaults.defaults, {
        searchInputPlaceholder: ''
    });

    var SearchDropdown = $.fn.select2.amd.require('select2/dropdown/search');

    var _renderSearchDropdown = SearchDropdown.prototype.render;

    SearchDropdown.prototype.render = function(decorated) {

        // invoke parent method
        var $rendered = _renderSearchDropdown.apply(this, Array.prototype.slice.apply(arguments));

        this.$search.attr('placeholder', this.options.get('searchInputPlaceholder'));

        return $rendered;
    };

})(window.jQuery);


function calcPaymentAmountBonus(rate, bonus_percent){
    $('.wrapper-payment .item-list .item').each(function(){
        var amount = parseInt($(this).find('input[name="famount"]').val());
        var gem = amount/rate;
        var bonus = gem*bonus_percent;
        $(this).find('.top b').text(formatNumber(gem));
        $(this).find('.middle b').text('+ '+formatNumber(bonus));
    })
}
function paymentState(){
    var upaystatus = $.cookie('upaystatus');
    var upayerror = $.cookie('upayerror');
    if(!upaystatus) return;

    if(upaystatus == 1){
        success('Giao dịch thành công');
    }else{
        warning('Giao dịch thất bại '+(upayerror ? upayerror : ''));
    }

    $.removeCookie('upaystatus', { path: '/', domain: cookieDomain });
    $.removeCookie('upaystatus', { path: '/', domain: cookieDomain });
}
function displayBalance(){
    var ubalance = $.cookie('ubalance') ? $.cookie('ubalance') : 0;
    $('.display-balance').text(formatNumber(parseInt(ubalance)));
}
function processAjaxPayment(response){
    if(response.status != 1){
        warning(response.mess);
        hideLoading();
        return;
    }

    redirect(response.data.redirect);
}

function processAjaxConvert(response){
    hideLoading();
    if(response.status != 1){
        warning(response.mess);
    }else{
        success(response.mess);
    }
}

function showHistoryPay(status, data){
    var html = '';
    if(status == 1 && data){
        for (const [key, value] of Object.entries(data)) {
            html += '<tr>' +
                        '<td><span class="minitit-head">Trạng thái</span><span class="minitit-body '+(value.status == 1 ? 'success': 'false')+'">'+(value.status == 1 ? 'Thành công': 'Thất bại')+'</span></td>' +
                        '<td><span class="minitit-head">Thời gian</span><span class="minitit-body">'+value.date+'</span></td>' +
                        '<td><span class="minitit-head">Giá trị (VND)</span><span class="minitit-body">'+formatNumber(value.amount)+'</span></td>' +
                        '<td><span class="minitit-head">Phương thức thanh toán</span><span class="minitit-body">'+(value.type == 'bank' ? 'ATM/Ví': 'MOMO')+'</span></td>' +
                    '</tr>';
        }
    }else{
        html += '<tr><td>Không có dữ liệu!</td></tr>';
    }

    $('#table-history tbody').html(html);
}

function showHistoryPackage(status, data){
    var html = '';
    if(status == 1 && data){
        for (const [key, value] of Object.entries(data)) {
            html += '<tr>' +
                        '<td><span class="minitit-head">Trạng thái</span><span class="minitit-body '+(value.status == 1 ? 'success': 'false')+'">'+(value.status == 1 ? 'Thành công': 'Thất bại')+'</span></td>' +
                        '<td><span class="minitit-head">Thời gian</span><span class="minitit-body">'+value.date+'</span></td>' +
                        '<td><span class="minitit-head">Server</span><span class="minitit-body">'+value.server+'</span></td>' +
                        '<td><span class="minitit-head">Giá trị (GEM)</span><span class="minitit-body">'+formatNumber(value.coin)+'</span></td>' +
                        '<td><span class="minitit-head">Gói đã mua</span><span class="minitit-body">'+packages['package-'+value.item]['name']+'</span></td>' +
                    '</tr>';
        }
    }else{
        html += '<tr><td>Không có dữ liệu!</td></tr>';
    }

    $('#table-history tbody').html(html);
}

function showHistoryConvert(status, data){
    var html = '';
    if(status == 1 && data){
        for (const [key, value] of Object.entries(data)) {
            html += '<tr>' +
                        '<td><span class="minitit-head">Trạng thái</span><span class="minitit-body '+(value.status == 1 ? 'success': 'false')+'">'+(value.status == 1 ? 'Thành công': 'Thất bại')+'</span></td>' +
                        '<td><span class="minitit-head">Thời gian</span><span class="minitit-body">'+value.date+'</span></td>' +
                        '<td><span class="minitit-head">Server</span><span class="minitit-body">'+value.server+'</span></td>' +
                        '<td><span class="minitit-head">Giá trị (GEM)</span><span class="minitit-body">'+formatNumber(value.coin)+'</span></td>' +
                    '</tr>';
        }
    }else{
        html += '<tr><td>Không có dữ liệu!</td></tr>';
    }

    $('#table-history tbody').html(html);
}

function initSliderPayment(){
    $('.item-list-slick').on('init', function(event, slick){
            $('.wrapper-payment .item-list').css('opacity', 1);
        });
        $('.item-list-slick').slick({
                dots: true,
                arrows: true,
                infinite: false,
                speed: 500,
                slidesToShow: 7,
                slidesToScroll: 7,
                cssEase: 'ease',
                responsive: [
                    {
                        breakpoint: 1140,
                        settings: {
                            slidesToShow: 6,
                            slidesToScroll: 6,
                        }
                    },
                    {
                        breakpoint: 960,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 5
                        }
                    },
                    {
                        breakpoint: 720,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    },
                    {
                        breakpoint: 540,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    }
                ]
            });
}


$(document).ready(function () {
    AOS.init({
        easing: 'ease-in-out',
        mirror: true,
        once: false,
    });

    paymentState();
    displayBalance();
    if (checkUserState()) {

        displayBalance();

        $('.wrap-login').find('.btn-login').addClass('d-none');
        $('.wrap-login').find('.user-info').removeClass('d-none');
        $('.link-to-history').find('.login-required').removeClass('login-required');

        var json = decodeURIComponent($.cookie('udata'));
        var data = JSON.parse(json);
        $(document).find('.display-name').text($.cookie('uname'));

        if ($('.user-table').length > 0) {
            $('.display-uname').text(data.uname);
            $('.display-name').text(data.uname);
            $('.display-email').text(data.email);
            $('.display-birthday').text(data.birthday);
            $('.display-sex').text(sexMap[data.sex] || 'Không xác định');
            $('.display-phone').text(data.phone);
        }

        if ($('.user-box').length > 0) {
            if (data.email !== "Chưa xác thực" && data.phone !== "Chưa xác thực") {
                $('.user-box .user-info-warning').addClass('d-none');
            }
        }

        if ($('.form-change-profile').length) {
            $('.form-change-profile').find(`input[name="sex"][value="${data.sex}"]`).prop('checked', true);
        }
    }

    if(typeof widget_login != 'undefined'){
        $('.login-required').click(widget_login);
    }

    $('.select2.type').select2({
            dropdownParent: $('#select2-type-parent')
        });
    $('.select2.server').select2({
            placeholder: "Chọn server",
            searchInputPlaceholder: 'Nhập ID máy chủ',
            dropdownParent: $('#select2-server-parent')
        });

    $('.daterange-picker').daterangepicker({
        'locale': {
            'format': 'DD/MM/YYYY'
        },
        'maxSpan': {
            'days': 31
        },
        'maxDate': moment().format('DD/MM/YYYY'),
        'autoApply' : true
    });

    if(isPC()){
        initSliderPayment();
    }else{
        $('.wrapper-payment .item-list').css('opacity', 1);
    }

    $('.wrapper-payment .item-list-slick .item').click(function(){
        $('.wrapper-payment .item-list-slick .item').removeClass('active');
        $(this).addClass('active');
        return false;
    })

    $('.wrapper-payment .package-container .package-item .view').click(function(){
        $(this).closest('.package-container').find('.package-item.detail').not($(this).parents('.package-item')).removeClass('detail');

        if ($(this).parents('.package-item').hasClass('detail')) {
            $(this).parents('.package-item').removeClass('detail');
        } else {
            $(this).parents('.package-item').addClass('detail');
        }
        var id = $(this).parents('.package-item').find('.scroll-package-item').attr('id');
        if(!$('#'+id).hasClass('lms_scrollable')){
            new LetMeScroll({
                selector: "#"+id,
                config : {
                    dimensions : {
                        width : "200px",
                        height : "249px"
                    },
                    scroll : {
                        bottomOffset: 0,
                        autoHide:  false
                    }
                },
                onComplete: function(){},
                onEnd: function(){},
                onTop: function(){},
                onMove: function(){},
                onDragStart: function(){},
                onDragStop: function(){},
                onTouchStart: function(){},
                onTouchStop: function(){}
            });
        }

        return false;
    })
    $('.wrapper-payment .package-container .package-item .right .close').click(function(){
        $(this).parents('.package-item').removeClass('detail');

        return false;
    })
    $('.wrapper-payment .package-container .package-item').click(function(){
        if($(this).hasClass('disabled')){
            warning('Gói nạp đã được mua. Đừng quên nhận thưởng trong game!');
            return false;
        }
        $('.wrapper-payment .package-container .package-item').removeClass('active');
        $(this).addClass('active');
        return false;
    });

    $('.item-list-payment-type .item-type').click(function(){
        $('.item-list-payment-type .item-type').removeClass('active');
        $(this).addClass('active');

        var rate = parseInt($(this).attr('data-rate'));
        var bonus = parseFloat($(this).attr('data-bonus'));
        calcPaymentAmountBonus(rate, bonus);
        return false;
    })

    $('.package-rule').click(function(){
        Swal.fire({
            customClass: {
                container: 'swal2-container-md',
            },
            title: "Thể Lệ",
            icon: "",
            html: `
                <ul style="text-align: left">
                    <li>• Gói Nạp 7 ngày: nhận thưởng 7 lần - mỗi ngày nhận 1 lần</li>
                    <li>• Gói Nạp Ngày: Nhận thưởng 1 Lần. Qua ngày hôm sau mới có thể tiếp tục mua gói nạp hàng ngày.</li>
                    <li>• Chỉ có thể chọn 1 trong 2 gói ngày. Ví dụ mua gói ngày hình Nami không thể mua gói ngày hình Boa và ngược lại.</li>
                    <li>• Gói Nạp 30 ngày: nhận thưởng 30 lần - mỗi ngày nhận 1 lần</li>
                    <li>• Ngày hôm nay không nhận có thể nhận ngày hôm sau</li>
                    <li>• Nhận hết 7 lần phần thưởng thì mới có thể mua lại gói 7 ngày và 30 ngày</li>
                    <li>• Trong trường hợp, Thuyền Trưởng chưa nhận quà của ngày hôm đó thì cũng không ảnh hưởng đến quá trình nhận vì các gói này tính theo số lần nhận.</li>
                    <li>• Gói quà web hiện không được tính vào các event có tích luỹ nạp và điểm VIP</li>
                    <li>• Chỉ nạp tại trang chính thức để tránh bị lừa đảo</li>
                    <li>• Kiểm tra kỹ tài khoản đăng nhập, sever và số tiền trước khi xác nhận</li>
                </ul>
            `,
            showCloseButton: true,
            showCancelButton: false,
            confirmButtonText: `Đóng`,
        });
        return false;
    });

    if($('.wrapper-payment').length && $.cookie('uname')){
        $.ajax({
            type: "POST",
            url: `/cap-nhat-so-gem`,
            success: function (response) {
                if(response.status != 1){
                    warning(response.mess);
                    hideLoading();
                    return;
                }
                if(typeof response.data.gem != 'undefined'){
                    displayBalance();
                }
            },
            error: function (err) {
                handleError(err);
                return false;
            }
        });
    }

    $('button[name="fpay"]').click(function(){
        var type = $('.item-list-payment-type .item-type.active input[name="ftype"]').val();
        if(!type) {
            warning('Vui lòng chọn hình thức thanh toán');
            return false;
        }

        var amount = $('.wrapper-payment .item-list .item.active input[name="famount"]').val();
        if(!amount) {
            warning('Vui lòng chọn giá trị muốn quy đổi');
            return false;
        }
        showLoading();

        $.ajax({
            type: "POST",
            url: `/nap-tien-vao-vi`,
            data: {
                type: type,
                amount: amount,
            },
            success: function (response) {
                processAjaxPayment(response);
            },
            error: function (err) {
                handleError(err);
                return false;
            }
        });
    });

    $('button[name="fconvert"]').click(function(){
        var server = $('select[name="fserver"]').val();
        var amount = $('.wrapper-payment .item-list.item-convert-list .item.active input[name="famount"]').val();
        if(!server || !amount) {
            warning('Vui lòng chọn server và giá trị muốn quy đổi');
            return false;
        }
        showLoading();

        $.ajax({
            type: "POST",
            url: `/nap-tu-vi-vao-game`,
            data: {
                server: server,
                amount: amount,
            },
            success: function (response) {
                processAjaxConvert(response);
                displayBalance();
            },
            error: function (err) {
                handleError(err);
                return false;
            }
        });
    });

    $('button[name="fpackage"]').click(function(){
        var server = $('select[name="fserver"]').val();
        var package = $('.wrapper-payment .package-container .package-item.active input[name="fpackage"]').val();
        if(!server || !package) {
            warning('Vui lòng chọn server và giá trị muốn quy đổi');
            return false;
        }
        showLoading();

        $.ajax({
            type: "POST",
            url: `/qua-nap-web`,
            data: {
                server: server,
                package: package,
            },
            success: function (response) {
                processAjaxConvert(response);
                if(response.status == 1){
                    $('.wrapper-payment .package-container .package-item.active').addClass('disabled').removeClass('active');
                }
                displayBalance();
            },
            error: function (err) {
                handleError(err);
                return false;
            }
        });
    });

    $('button[name="fhistory"]').click(function(){
        var fdatetime = $('input[name="fdatetime"]').val();
        var ftype = $('select[name="ftype"]').val();
        if(!fdatetime || !ftype) {
            warning('Vui lòng chọn dữ liệu');
            return false;
        }
        showLoading();

        $.ajax({
            type: "POST",
            url: `/lich-su-nap`,
            data: {
                datetime: fdatetime,
                type: ftype,
            },
            success: function (response) {
                if(ftype == 'pay'){
                    showHistoryPay(response.status, response.data);
                }else if(ftype == 'package'){
                    showHistoryPackage(response.status, response.data);
                }else if(ftype == 'convert'){
                    showHistoryConvert(response.status, response.data);
                }
                hideLoading();
            },
            error: function (err) {
                handleError(err);
                return false;
            }
        });
    });


    $('#server-package').change(function(){
        showLoading();
        var server = $('select[name="fserver"]').val();
        if(!server) {
            warning('Vui lòng chọn server');
            return false;
        }

        $.ajax({
            type: "POST",
            url: `/kiem-tra-trang-thai-mua-qua`,
            data: {
                server: server,
            },
            success: function (response) {
                if(response.status != 1){
                    warning(response.mess);
                    return;
                }
                $('.package-item').removeClass('active');
                $('.package-item').removeClass('disabled');
                for (let package_id in response.data) {
                    $('#package-item-'+package_id).addClass('disabled');
                    $('.package-item-limit-'+response.data[package_id]).addClass('disabled');
                }
                hideLoading();
            },
            error: function (err) {
                handleError(err);
                return false;
            }
        });
    });

    var $listSlider = $('.hero-list-slide');
    if ($listSlider.length > 0) {
        var $active = $listSlider.find('li.active');
        var initialSlide = 0;
        if($active.length) {
            initialSlide = parseInt($active.data('slick-index'), 10) || 0;
        }
        $listSlider.slick({
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
                        dots: false
                    }
                },{
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        dots: false,
                        infinite: false,
                        variableWidth: true,
                    }
                }
            ]
        });
    }

    var input = $('.search-hero .text-search');
    input.on('input', function () {
        var keySearch = $(this).val();
        searchHero(keySearch);
    });

    $('.btn-search-hero').click(function (e) {
        e.preventDefault();
        $('.btn-search-hero').removeClass('active');
        $(this).addClass('active');
        var particular = $(this).find('a').data('particular');
        searchHeroByParticular(particular);
    });

    if ($('.wrapper-hero.detail').length) {
        var keysearch = localStorage.getItem("searchHero") ?? 's0';
        searchHeroByParticular(keysearch);
    } else {
        searchHeroByParticular('s0');
    }

    if ($(".subpage-container").length) {
        var offsetTop = $(".subpage-container .page-title").offset().top;
        $(".subpage-container.wrapper-hero.detail").length && (offsetTop += 100);
        if(window.innerWidth <= 1200 && window.innerWidth > 576) {
            offsetTop -= 20;
            if($(".subpage-container.wrapper-hero.detail").length){
                offsetTop -= 100;
            }
        }else if(window.innerWidth <= 576) {
            if($(".subpage-container.wrapper-hero.detail").length){
                offsetTop -= 100;
            }
        }else if(window.innerWidth > 1200 && window.innerWidth < 1900) {
            offsetTop = offsetTop * (window.innerWidth / 1900) + 20;
        }

        if($(".subpage-container.wrapper-hero.detail").length){
            if ("scrollRestoration" in history) {
                history.scrollRestoration = "manual";
            }
            var prevBehavior = document.documentElement.style.scrollBehavior;
            document.documentElement.style.scrollBehavior = "auto";
            window.scroll(0, offsetTop - 100);
            document.documentElement.style.scrollBehavior = prevBehavior;
        }else{
            window.scrollTo({
                top: offsetTop - 100,
                behavior: "smooth"
            });
        }
    }

    if (window) {
        if (window.innerWidth < 576) {
            return true;
        }
    }
    scale();
    $(window).on('resize', function(){
        scale();
    });

    $('.btn-notify').click(function (event) {
        event.preventDefault();
        success('Tính năng đang được cập nhật!');
    });
});
