function copyToClipboard() {
    var text = $(document).find('.content-code').text();  // Lấy nội dung từ #codeContent
    navigator.clipboard.writeText(text).then(function() {
    }).catch(function(error) {
        alert('Không thể sao chép: ' + error);
    });
}
function onloadToolTip(){
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
}

function loadScrollTable() {
    if ($(".custom-scrollbar").length) {
        $(".custom-scrollbar").each(function () {

            $(this).mCustomScrollbar({
                scrollButtons: {
                    enable: true,
                },
                theme: 'dark-thick',
            });
        });
    }
}

function changeStateOverflow(on = true) {
    if (!on) {
        $(document).find('body').addClass('overflow-y-auto');
        $(document).find('body').removeClass('overflow-hidden');
        return;
    }
    $(document).find('body').removeClass('overflow-y-auto');
    $(document).find('body').addClass('overflow-hidden');
    return;
}

$(function () {
    onloadToolTip();

    $('#serverSelect').change(function(){
        var slug = $(this).val();
        if (slug == 0) {slug = ''}
        $('#serverSlug').val(slug);
    });

    if ($('.selectCodeType button').length) {
        $('.selectCodeType button').codeType()
    }
    // Get giftcode.
    $('#confirmGetCode').click(function() {
        var codeSlug    = $('#codeSlug').val();
        var serverSlug  = $('#serverSlug').val();
        var codeId      = $('#codeId').val();
        var codeDefault = $('#codeDefault').val();
        var contentCode;

        if(codeSlug == 0 && codeDefault){
            showResult(codeDefault);
            return;
        }

        fetchGiftCode(serverSlug, codeSlug, codeId);
    });

    $('#giftcodeHistory').click(function() {
        var serverSlug = $('#serverSlug').val();
        getCodeHistory(serverSlug);
    });

    $(".popup-history .wrap .close").click(function () {
        $(".popup.popup-history").hide();
        changeStateOverflow(false);
    });

    $(".popup.popup-history").click(function (e) {
        if (e.target !== this) return;
        $(".popup.popup-history").hide();
        changeStateOverflow(false);
    });
});


$.fn.codeType = function() {
    let el = this
    let listCode = $(el).parent().find('>ul')
    let codeName = '';

    $(el).click(function(e) {
        e.preventDefault()
        if ($(this).parent().hasClass('show')) {
            $(this).parent().removeClass('show')
        } else {
            $(this).parent().addClass('show')
        }
    })

    $(listCode).children().each(function() {
        $(this).click(function(e) {
            e.preventDefault()
            codeName = $(this).find('>a').data('code');
            codetext = $(this).find('>a').text();
            codeId = $(this).find('>a').data('id');
            codeDefault = $(this).find('>a').data('coded');

            if (codeName == 0 && !codeDefault) {
                $('.table-his').addClass('d-none');
                $(el).html(codetext);
                $('#codeSlug').val(codeName);
                $(el).parent().removeClass('show')
                return;
            }
            $('.table-his').addClass('d-none');
            $('#table-his-' + codeId).removeClass('d-none');

            $(el).html(codetext);
            $('#codeSlug').val(codeName);
            $('#codeId').val(codeId);
            $('#codeDefault').val(codeDefault);
            $(el).parent().removeClass('show')
        })
    })
}

function showResult(codeDefault){
    var contentCode = '<p class="content-code">'+codeDefault+'</p>';
    contentCode += '<a href="#" class="text-decoration-underline text-secondary btn-copy-code" data-bs-toggle="tooltip" data-bs-placement="top" title="Bấm để sao chép">Bấm để sao chép</a>';

    Swal.fire({
        icon: 'success',
        html: contentCode,
        confirmButtonText: "Đóng",
    });
    onloadToolTip();

    $('.btn-copy-code').click(function (e) {
        e.preventDefault();
        $(this).attr('data-bs-original-title', 'Đã sao chép');
        copyToClipboard();

        var tooltip = bootstrap.Tooltip.getInstance(this);
        if (tooltip) {
            tooltip.setContent({ '.tooltip-inner': 'Đã sao chép' });
            tooltip.show();
        }
    });
}

function hideResult(){
    $('.notice').addClass('d-none');
    $('.notice').removeClass('code');
    $('.notice').text('');
}

function getCodeHistory(serverSlug) {
    $.ajax({
        url: historyGiftcode,
        method: 'POST',
        success: function( response ) {
            if (response.status == -1) {
                Swal.fire({
                    icon: "warning",
                    title: 'Thông báo',
                    confirmButtonText: response.msg
                }).then(function() {
                    location.reload();
                });
                return false;
            }
            showPopup(response.data);
            // getNewTokenOfReCaptcha();
            return;
        },
        error: function(response) {
            if (response) {
                Swal.fire({
                    icon: "error",
                    title: 'Thông báo',
                    confirmButtonText: 'Có lỗi xảy ra vui lòng liên hệ admin (#1)!'
                }).then(function() {
                    location.reload();
                });
            }
            // getNewTokenOfReCaptcha();
        }
    });
}

function showPopup(data) {
    $('.popup.popup-history').show();
    $('.popup.popup-history .content tbody').empty();
    $.each(data, function(i, item) {
        $('#table-history tbody').append(
            '<tr>' +
                '<td>'+item.name+'</td>' +
                '<td>'+item.code+'</td>' +
                '<td class="text-uppercase text-center">'+item.serverSlug+'</td>' +
                '<td>'+item.receiveDate+'</td>' +
            '</tr>'
        );
    });
    changeStateOverflow();
    loadScrollTable();
}

function fetchGiftCode(serverSlug, codeSlug, codeId) {
    hideResult();

    if (_.isNil(serverSlug) || _.isEmpty(serverSlug)) {
        serverSlug = $('#serverSlug').val();
    }
    if (_.isNil(codeSlug) || codeSlug === 0 || _.isEmpty(codeSlug)) {
        codeSlug = $('#codeSlug').val();
    }

    if (_.isNil(serverSlug) || _.isEmpty(serverSlug)) {
        Swal.fire({
            icon: 'warning',
            title: 'Vui lòng chọn server!',
            confirmButtonText: 'Đóng'
        });
        return;
    }

    // Kiểm tra codeSlug
    if (_.isNil(codeSlug) || codeSlug === 0 || _.isEmpty(codeSlug)) {
        Swal.fire({
            icon: 'warning',
            title: 'Vui lòng chọn loại gift code!',
            confirmButtonText: 'Đóng'
        });
        return;
    }

    $.ajax({
        url:  linkAjaxGiftcode,
        dataType: 'json',
        method: 'POST',
        data: {
            codeSlug: codeSlug,
            serverSlug: serverSlug,
            codeId: codeId,
            gRecaptchaResponse: typeof tokenRecaptcha !== 'undefined' ? tokenRecaptcha : '',
        },
        beforeSend: function () {
            showLoading();
        },
        success: function(response) {
            hideLoading();

            if (response.status != 1) {
                if (response.status == -403) {
                    Swal.fire({
                        icon: "error",
                        title: 'Thông báo',
                        confirmButtonText: response.msg
                    }).then(function() {
                        location.reload();
                    });
                    return false;
                }
                warning(response.msg);
                return false;
            }

            showResult(response.code)

            if (typeof getNewTokenOfReCaptcha !== 'undefined') {
                getNewTokenOfReCaptcha();
            }
        },
        error: function(response) {
            hideLoading();
            error('Có lỗi xảy ra vui lòng liên hệ admin (#2)!');
            console.log("error-> ",response);

            if (typeof getNewTokenOfReCaptcha !== 'undefined') {
                getNewTokenOfReCaptcha();
            }
        }
    });
}
