
function widget_login() {
    var task = this.getAttribute('data-task');
    if (!task) {
        task = 'login';
    }

    var href = this.getAttribute('data-redirect');
    if (href == null) {
        href = this.href;
    }

    var url = (typeof MAINSITE_ID != 'undefined') ? MAINSITE_ID : 'https://haitacmanhnhat.vn';
    url += "/id/widget?type=widget&redirect-top=1" + "&task=" + task;
    url += "&redirect=" + encodeURIComponent(href);
    iframe_open(url);
    return !1;
}


var widthWidgetLogin = 390;
var heightWidgetLogin = 385;
var leftWidgetLogin = widthWidgetLogin / 2;
var topWidgetLogin = heightWidgetLogin / 2 + heightWidgetLogin / 5;

var iframe_destroy = function () {
    $('.iframe-box').remove();
}

var iframe_open = function (url, styles) {
    iframe_destroy();
    var iframeBox = $('<div class="iframe-box" onclick="iframe_destroy()"></div>');
    iframeBox.css({
        "z-index": 9999,
        "background": "rgba(0, 0, 0, 0.75)",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "position": "fixed"
    });

    var closeBtn = $('<a href="javascript:void(0);" class="if-close" target="_self"></a>');
    closeBtn.css({
        "position": "fixed",
        "width": "35px",
        "height": "35px",
        "left": "calc(50% + 176px)",
        "top": "calc(50% - 286px)",
        "z-index": "10000",
        "background": 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAIAAAAnX375AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAyIDc5LmI3YzY0Y2NmOSwgMjAyNC8wNy8xNi0xMjozOTowNCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ4RkUwMDU2MkJDNDExRjBBQkU4QjI2ODlBNTRGMjc2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ4RkUwMDU3MkJDNDExRjBBQkU4QjI2ODlBNTRGMjc2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDhGRTAwNTQyQkM0MTFGMEFCRThCMjY4OUE1NEYyNzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDhGRTAwNTUyQkM0MTFGMEFCRThCMjY4OUE1NEYyNzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7Dvw/KAAADLUlEQVR42uxYS08TURiduTODaGcSYly4NzEqKKKg8iwtDyUSyxuUjQt/gPEXGH+AcW+hDyC67RsW7ogLXWniQgEVaHkVKKVzZ6Y1BL9bEqJSOnemtRudpLt2zpxzzznfN2XPvk4ypb14+Jx+8aRkeNuPnyOm5Ne/Cak2dGnXrMW6u3a1WWnqzmGfX6/M+Zq9ijPM3l75h9kC8dKX65XWXoR3T80G87G0TE+i3W3F1gcPWBDexVrcNsim1ZNvwzrC8mtLUmCcoLb2mlYY+OGOYSTviAHXiU/v9O3DxVekgAslt5QWh1bTYhiv6hbwQ5oqhrxCdJ7WsVw8JoXc8JiKtccQ1/SlOtw+yGqKJeLlV78bCwm3EQNZuJ240nwvfaWBCq/yBm4fQqmkFHQJy/NmcsmvL4tBD5wrtg9otXZ9PTtG2B8ZcXqSjy6YrwJuM3uuchLilYcr0bNtAOGU5B/nY18LbR9AFYPETYRrruSQPHSOQB4sM1N8bKE4hUeS4x9DqR2SnN89TPJw+wFSZMk3Jix9KWbHcltrhCvk1eo4VDhz4TpQZ1VsiUwc58/c85L2q+CmkFfufggwzP4+KCnfGYU8iJGJPP4sCDKLuiT5nHLXKLb1MQhBhCwzr+j5mRxe4KayuY8M4hiGFRY/G8UzAwl+Ueva4FCBolZVb6L9jQkLxsH2fsifGPYiFaccj8DDjFBW/v7NX2GZrm4E4yAFi0E3xAaSSoBTCaXxrqEepoUkebf2Zvl5Ds+P21wlk+5g5lArTAUJtyN5V2WI5h/9Ce0PJccl4qQl9HqYFjJdeRNuxx7g5fInt7VKFIaWaOqmURjRzD/oMzEM/bJ4bHLiWa4w6UDh6ibzkPBj3Hmf9IvfKSzP6bd/yEPOFfamvAqjfHpae2A/k0Ie8CdVS8AG43MSrnkVRsfP22E2oxE9owsGuml73RKZIhtMiwNCRQsJ/Ej+gF/ARTP/cvXwGJfYwLZ+UHhfKNOBJOcH+6CK4WBM4B266WCDAYXVI9v6Ecg6O0vw3PzKt0JWZ5KcoBukypyr0unYCuezor26bkQrXj79/7JXsost/d8TPwUYAJdjoU5xWH5nAAAAAElFTkSuQmCC) no-repeat',
        "background-size": "100%",
    });
    closeBtn.on('click', function(e) {
        e.stopPropagation();
        iframe_destroy();
    });

    iframeBox.append(closeBtn);

    var ifr = $('<iframe sandbox="allow-top-navigation allow-same-origin allow-scripts allow-popups allow-forms" border=0 style="border:0;overflow: hidden;position: fixed;left: calc(50% - ' + leftWidgetLogin + 'px);top: calc(50% - ' + topWidgetLogin + 'px);width:' + widthWidgetLogin + 'px;height: ' + heightWidgetLogin + 'px"/>');

    ifr.attr('src', url);

    $(ifr).addClass('iframe_open');
    if (typeof styles == 'object') {
        Object.keys(styles).forEach(function (key) {
            $(ifr).css(key, styles[key]);
        });
    }
    $(ifr).appendTo(iframeBox);
    $(iframeBox).appendTo('body');
}