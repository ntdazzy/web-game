function processResponseVerifySMS(form, response, callback_function_name) {
    form.html(getContentVerifySMS(response.data.cmd, response.data.code));
    redirectInFormRegisterFull = response.data.redirect_url;
    runWebsocket(response.data.username, response.data.type, response.data.code, response.data.time, response.data.sign, callback_function_name);
}

function getContentVerifySMS(cmd, code) {
    var html = '<div class="verify-sms"><h3>Yêu cầu ' + (TITLE ? '"' + TITLE + '"' : '') + ' của bạn đang được xử lý</h3>';
    html += '<p>Hãy xác nhận bằng cách dùng <b>số điện thoại đã đăng ký</b> gửi một tin nhắn đến số: <b class="highlight">' + SMS_NUMBER + '</b></p>';
    html += '<p>Với nội dung: <b class="highlight">' + cmd + ' ' + code + '</b> (không dấu, không phân biệt hoa thường)</p>';

    html += '<ol>';
    html += '<li>Tuyệt đối <b class="highlight">KHÔNG</b> gửi mã này cho bất kỳ ai</li>';
    html += '<li>Bạn có <b class="highlight">' + maxTimeConnect + ' phút</b> để thực hiện nhắn tin </li>';
    html += '</ol></div>';
    return html;
}

function callbackFunctionAddPhone(umsg){
    showConfirmAndRedirect(redirectInFormRegisterFull, umsg, 'Thông báo')
}

$(document).ready(function () {
    $('.birthday').daterangepicker({
        'locale': {
            'format': 'YYYY/MM/DD'
        },
        'maxSpan': {
            'days': 31
        },
        'maxDate': moment().format('YYYY/MM/DD'),
        'autoApply' : true,
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
    });

    $('.form-login').on('submit', function (e) {
        e.preventDefault();

        var form = $('.form-login');
        var username = form.find('input[name="username"]').val();
        var password = form.find('input[name="password"]').val();


        // Validate username
        if (!username) {
            form.find('input[name="username"]').addClass('is-invalid');
            error("Nhập tên tài khoản");
            return false;
        } else {
            form.find('input[name="username"]').removeClass('is-invalid');
        }

        // Validate password
        if (!password) {
            error("Nhập mật khẩu");
            form.find('input[name="password"]').addClass('is-invalid');
            return false;
        } else {
            form.find('input[name="password"]').removeClass('is-invalid');
        }

        var task = form.find('input[name="task"]').val();
        var token = form.find('input[name="g-recaptcha-response"]').val();

        // if (!token || _.isUndefined(token)) {
        //     showWarning('Yêu cầu không hợp lệ', 'Cảnh báo');
        //     return false;
        // }

        var redirectUrl = null;
        if (_.isEmpty(getRedirectUrl())) {
            redirectUrl = getRedirectPrevious() ? decodeURIComponent(getRedirectPrevious()) : '/id';
        }

        $.ajax({
            method: "POST",
            url: "/id/dang-nhap",
            data: { "username": username, "password": password, "redirect_url": redirectUrl , redirect_top: getRedirectTop(), "token": token, "task": task },
            beforeSend: function() {
                showLoading();
            },
            success: function (response) {
                hideLoading();

                if (response.status != 1) {
                    error(response.msg);
                    return false;
                }

                success(response.msg);

                if (response.data && !_.isEmpty(response.data.redirect_top)) {
                    redirectTop(response.data.redirect_url);
                }

                if (response.data && !_.isEmpty(response.data.redirect_url)) {
                    redirect(response.data.redirect_url);
                }
            },
            error: function(xhr) {
                hideLoading();
                error("Error occured.please try again");
                return false;
            },
        });
        return false;
    });

    $('.form-register').on('submit', function () {
        var form = $(this);
        var username = form.find('input[name="username"]').val();
        var password1 = form.find('input[name="password1"]').val();
        var password2 = form.find('input[name="password2"]').val();

        // Validate username
        if (!username) {
            form.find('input[name="username"]').addClass('is-invalid');
            error("Nhập tên tài khoản");
            return false;
        } else {
            form.find('input[name="username"]').removeClass('is-invalid');
        }

        // Validate password
        if (!password1) {
            error("Nhập mật khẩu");
            form.find('input[name="password"]').addClass('is-invalid');
            return false;
        } else {
            form.find('input[name="password"]').removeClass('is-invalid');
        }

        // Validate password match
        if (password1 !== password2) {
            error("Mật khẩu nhập lại không khớp");
            form.find('input[name="password2"]').addClass('is-invalid');
            return false;
        } else {
            form.find('input[name="password2"]').removeClass('is-invalid');
        }


        var token = form.find('input[name="g-recaptcha-response"]').val();
        var redirectUrl = null;
        if (_.isEmpty(getRedirectUrl())) {
            redirectUrl = getRedirectPrevious() ? decodeURIComponent(getRedirectPrevious()) : '/id';
        }

        $.ajax({
            type: "POST",
            url: "/id/dang-ky",
            data: { "username": username, "password1": password1, "password2": password2, "redirect_url": redirectUrl, redirect_top: getRedirectTop(), "token": token },
            beforeSend: function() {
                showLoading();
            },
            success: function (response) {
                hideLoading();
                if (response.status != 1) {
                    error(response.msg);
                    return false;
                }

                success(response.msg);
                if (response.data && !_.isEmpty(response.data.redirect_top)) {
                    redirectTop(response.data.redirect_url);
                }
                if (response.data && !_.isEmpty(response.data.redirect_url)) {
                    redirect(response.data.redirect_url);
                }
            },
            error: function(xhr) {
                hideLoading();
                error("Error occured.please try again");
                return false;
            },
        });
        return false;
    });

    $('.form-change-password').on('submit', function (e) {
        e.preventDefault();
        var form = $('.form-change-password');
        var passwordOld = form.find('input[name="passwordOld"]').val();
        var password1 = form.find('input[name="password1"]').val();
        var password2 = form.find('input[name="password2"]').val();

        // Validate username
        if (!passwordOld) {
            form.find('input[name="passwordOld"]').addClass('is-invalid');
            error("Nhập mật khẩu cũ");
            return false;
        } else {
            form.find('input[name="passwordOld"]').removeClass('is-invalid');
        }

        // Validate password
        if (!password1) {
            error("Nhập mật khẩu mới");
            form.find('input[name="password"]').addClass('is-invalid');
            return false;
        } else {
            form.find('input[name="password"]').removeClass('is-invalid');
        }

        // Validate password match
        if (password1 !== password2) {
            error("Mật khẩu nhập lại không khớp");
            form.find('input[name="password2"]').addClass('is-invalid');
            return false;
        } else {
            form.find('input[name="password2"]').removeClass('is-invalid');
        }

        var token = form.find('input[name="g-recaptcha-response"]').val();

        // if (!token || _.isUndefined(token)) {
        //     showWarning('Yêu cầu không hợp lệ', 'Cảnh báo');
        //     return false;
        // }

        var redirectUrl = null;
        if (_.isEmpty(getRedirectUrl())) {
            redirectUrl = getRedirectPrevious() ? decodeURIComponent(getRedirectPrevious()) : '/';
        }

        $.ajax({
            method: "POST",
            url: "/id/doi-mat-khau",
            data: { "passwordOld": passwordOld, "password1": password1, "password2": password2, "redirect_url": redirectUrl , redirect_top: getRedirectTop(), "token": token},
            beforeSend: function() {
                showLoading();
            },
            success: function (response) {
                hideLoading();

                if (response.status != 1) {
                    if (response.status == -4) {
                        SwalFire('warning', response.msg);
                        return false;
                    }
                    error(response.msg);
                    return false;
                }

                success(response.msg);
                setTimeout(() => {
                    if (response.data && !_.isEmpty(response.data.redirect_top)) {
                        redirectTop(response.data.redirect_url);
                    }
                    if (response.data && !_.isEmpty(response.data.redirect_url)) {
                        redirect(response.data.redirect_url);
                    }
                }, 2000);
            },
            error: function(xhr) {
                hideLoading();
                error("Error occured.please try again");
                return false;
            },
        });
        return false;
    });

    $('.form-reset-password').on('submit', function (e) {
        e.preventDefault();
        var form = $('.form-reset-password');
        var code = form.find('input[name="code"]').val();
        var password1 = form.find('input[name="password1"]').val();
        var password2 = form.find('input[name="password2"]').val();

        // Validate username
        if (!code) {
            form.find('input[name="code"]').addClass('is-invalid');
            error("Nhập mã xác thực");
            return false;
        } else {
            form.find('input[name="code"]').removeClass('is-invalid');
        }

        // Validate password
        if (!password1) {
            error("Nhập mật khẩu");
            form.find('input[name="password"]').addClass('is-invalid');
            return false;
        } else {
            form.find('input[name="password"]').removeClass('is-invalid');
        }

        // Validate password match
        if (password1 !== password2) {
            error("Mật khẩu nhập lại không khớp");
            form.find('input[name="password2"]').addClass('is-invalid');
            return false;
        } else {
            form.find('input[name="password2"]').removeClass('is-invalid');
        }

        var token = form.find('input[name="g-recaptcha-response"]').val();

        // if (!token || _.isUndefined(token)) {
        //     showWarning('Yêu cầu không hợp lệ', 'Cảnh báo');
        //     return false;
        // }

        var redirectUrl = null;
        if (_.isEmpty(getRedirectUrl())) {
            redirectUrl = getRedirectPrevious() ? decodeURIComponent(getRedirectPrevious()) : '/';
        }

        $.ajax({
            method: "POST",
            url: "/id/dat-lai-mat-khau",
            data: { "code": code, "password1": password1, "password2": password2, "redirect_url": redirectUrl , redirect_top: getRedirectTop(), "token": token},
            beforeSend: function() {
                showLoading();
            },
            success: function (response) {
                hideLoading();

                if (response.status != 1) {
                    error(response.msg);
                    return false;
                }

                success(response.msg);

                setTimeout(() => {
                    if (response.data && !_.isEmpty(response.data.redirect_top)) {
                        redirectTop(response.data.redirect_url);
                    }
                    if (response.data && !_.isEmpty(response.data.redirect_url)) {
                        redirect(response.data.redirect_url);
                    }
                }, 2000);
            },
            error: function(xhr) {
                hideLoading();
                error("Error occured.please try again");
                return false;
            },
        });
        return false;
    });

    $('.form-forget-password').on('submit', function (e) {
        e.preventDefault();
        var form = $('.form-forget-password');
        var username = form.find('input[name="username"]').val();
        var email = form.find('input[name="email"]').val();

        // Validate username
        if (!username) {
            form.find('input[name="username"]').addClass('is-invalid');
            error("Nhập tên tài khoản");
            return false;
        } else {
            form.find('input[name="username"]').removeClass('is-invalid');
        }

        // Validate email
        if (!email) {
            error("Nhập email");
            form.find('input[name="email"]').addClass('is-invalid');
            return false;
        } else {
            form.find('input[name="email"]').removeClass('is-invalid');
        }

        var token = form.find('input[name="g-recaptcha-response"]').val();

        // if (!token || _.isUndefined(token)) {
        //     showWarning('Yêu cầu không hợp lệ', 'Cảnh báo');
        //     return false;
        // }

        var redirectUrl = null;
        if (_.isEmpty(getRedirectUrl())) {
            redirectUrl = getRedirectPrevious() ? decodeURIComponent(getRedirectPrevious()) : '/';
        }

        $.ajax({
            method: "POST",
            url: "/id/quen-mat-khau",
            data: { "username": username, "email": email, "redirect_url": redirectUrl , redirect_top: getRedirectTop(), "token": token},
            beforeSend: function() {
                showLoading();
            },
            success: function (response) {
                hideLoading();

                if (response.status != 1) {
                    error(response.msg);
                    return false;
                }

                success(response.msg);

                setTimeout(() => {
                    if (response.data && !_.isEmpty(response.data.redirect_top)) {
                        redirectTop(response.data.redirect_url);
                    }

                    if (response.data && !_.isEmpty(response.data.redirect_url)) {
                        redirect(response.data.redirect_url);
                    }
                }, 2000);
            },
            error: function(xhr) {
                hideLoading();
                error("Error occured.please try again");
                return false;
            },
        });
        return false;
    });


    var urlCurently = document.URL;
    var arrayUrlFormUpdateInfo = ['/id/cap-nhat-email', '/id/doi-email', '/id/doi-so-dien-thoai'];
    const UPDATE_MAIL_STEP_1 = 1;
    const UPDATE_MAIL_STEP_2 = 2;

    if (arrayUrlFormUpdateInfo.includes(new URL(urlCurently).pathname)) {
        showLoading();
        setTimeout(() => {
            hideLoading();
            var itMe = getAndUpdateStateMe();

            itMe.done(function(response) {
                if (response.status != 1) {
                    redirect('/');
                    return false;
                }

                // update email
                if (response.data.email == 'Chưa xác thực') {
                    var form = $('.form-update-email');
                    if (form.length > 0) {
                        form.find('input[name="stepUpdateEmail"]').val(UPDATE_MAIL_STEP_1);

                        $('.breadcrumb').append('<div class="alert alert-warning" role="alert">Tài khoản của bạn chưa có Email. Vui lòng cập nhật Email trước!</div>');
                        $('.form-update-email-1').removeClass('d-none');
                        $('.user-box .text-blue').text('Cập nhật email');

                        form.on('submit', function (e) {
                            e.preventDefault();

                            var email = form.find('input[name="email"]').val();
                            if (!email) {
                                error("Nhập email");
                                form.find('input[name="email"]').addClass('is-invalid');
                                return false;
                            } else {
                                form.find('input[name="email"]').removeClass('is-invalid');
                            }

                            var code = form.find('input[name="code"]').val();
                            var postData = {email: email, redirect_top: getRedirectTop(), code: code, stepUpdateEmail: form.find('input[name="stepUpdateEmail"]').val() };

                            $.ajax({
                                method: "POST",
                                url: "/id/cap-nhat-email",
                                data: postData,
                                beforeSend: function() {
                                    showLoading();
                                },
                                success: function (response) {
                                    hideLoading();

                                    if (response.status != 1) {
                                        if (response.status == -2) {
                                            warning(response.msg);
                                            setTimeout(() => {
                                                redirect('/id/dang-nhap');
                                            }, 1200);
                                            return false;
                                        }
                                        error(response.msg);
                                        return false;
                                    }

                                    success(response.msg);
                                    $('.code-confirm').removeClass('d-none');
                                    $('.form-update-email-1').find('input[name="email"]').attr('disabled', true);
                                    $('.form-update-email-1').find('button').text('Xác nhận');
                                    form.find('input[name="stepUpdateEmail"]').val(UPDATE_MAIL_STEP_2);

                                    setTimeout(() => {
                                        if (response.data && !_.isEmpty(response.data.redirect_top)) {
                                            redirectTop(response.data.redirect_url);
                                        }
                                        if (response.data && !_.isEmpty(response.data.redirect_url)) {
                                            redirect(response.data.redirect_url);
                                        }
                                    }, 2000);
                                },
                                error: function(xhr) {
                                    hideLoading();
                                    error("Error occured.please try again");
                                    return false;
                                },
                            });
                        });
                    }
                } else {
                    // change email
                    var form = $('.form-change-email');
                    if (form.length > 0) {
                        form.find('input[name="stepChangeEmail"]').val(UPDATE_MAIL_STEP_1);

                        $('.form-change-email-1').removeClass('d-none');
                        $('.user-box .text-blue').text('Đổi email');

                        form.on('submit', function (e) {
                            e.preventDefault();

                            var oldemail = form.find('input[name="oldemail"]').val();
                            if (!oldemail) {
                                error("Nhập email cũ");
                                form.find('input[name="oldemail"]').addClass('is-invalid');
                                return false;
                            } else {
                                form.find('input[name="oldemail"]').removeClass('is-invalid');
                            }
                            var oldemail = form.find('input[name="oldemail"]').val();

                            var email = form.find('input[name="email"]').val();
                            if (!email) {
                                error("Nhập email");
                                form.find('input[name="email"]').addClass('is-invalid');
                                return false;
                            } else {
                                form.find('input[name="email"]').removeClass('is-invalid');
                            }

                            if (oldemail === email) {
                                error("Email mới không được trùng với email cũ");
                                form.find('input[name="email"]').addClass('is-invalid');
                                return false;
                            } else {
                                form.find('input[name="email"]').removeClass('is-invalid');
                            }

                            var code = form.find('input[name="code"]').val();
                            var postData = {email: email, oldemai:oldemail, redirect_top: getRedirectTop(), code: code, stepChangeEmail: form.find('input[name="stepChangeEmail"]').val() };

                            $.ajax({
                                method: "POST",
                                url: "/id/doi-email",
                                data: postData,
                                beforeSend: function() {
                                    showLoading();
                                },
                                success: function (response) {
                                    hideLoading();

                                    if (response.status != 1) {
                                        if (response.status == -2) {
                                            warning(response.msg);
                                            setTimeout(() => {
                                                redirect('/id/dang-nhap');
                                            }, 1200);
                                            return false;
                                        }
                                        error(response.msg);
                                        return false;
                                    }

                                    success(response.msg);
                                    $('.code-confirm').removeClass('d-none');
                                    $('.old-email').addClass('d-none');
                                    form.find('input[name="email"]').attr('disabled', true);
                                    form.find('button').text('Xác nhận');
                                    form.find('input[name="stepChangeEmail"]').val(UPDATE_MAIL_STEP_2);

                                    setTimeout(() => {
                                        if (response.data && !_.isEmpty(response.data.redirect_top)) {
                                            redirectTop(response.data.redirect_url);
                                        }
                                        if (response.data && !_.isEmpty(response.data.redirect_url)) {
                                            redirect(response.data.redirect_url);
                                        }
                                    }, 2000);
                                },
                                error: function(xhr) {
                                    hideLoading();
                                    error("Error occured.please try again");
                                    return false;
                                },
                            });
                        });
                    }
                }

                // change phone
                var formChangePhone = $('.form-change-phone');
                var UPDATE_PHONE_STEP = 1;
                if (formChangePhone.length > 0) {
                    if (response.data.phone != 'Chưa xác thực') {
                        UPDATE_PHONE_STEP = 2;
                        formChangePhone.find('.old-phone').removeClass('d-none');
                    }

                    formChangePhone.on('submit', function (e) {
                        e.preventDefault();

                        var phone = formChangePhone.find('input[name="phone"]').val();
                        if (!phone) {
                            error("Nhập số điện thoại");
                            formChangePhone.find('input[name="phone"]').addClass('is-invalid');
                            return false;
                        } else {
                            formChangePhone.find('input[name="phone"]').removeClass('is-invalid');
                        }

                        var oldPhone = null;
                        if (UPDATE_PHONE_STEP == 2) {
                            oldPhone = formChangePhone.find('input[name="oldPhone"]').val();
                            if (!oldPhone) {
                                error("Nhập số điện thoại cũ");
                                formChangePhone.find('input[name="oldPhone"]').addClass('is-invalid');
                                return false;
                            } else {
                                formChangePhone.find('input[name="oldPhone"]').removeClass('is-invalid');
                            }

                            if (oldPhone === phone) {
                                error("Số điện thoại mới không được trùng với số điện thoại cũ");
                                formChangePhone.find('input[name="phone"]').addClass('is-invalid');
                                return false;
                            } else {
                                formChangePhone.find('input[name="phone"]').removeClass('is-invalid');
                            }
                        }

                        var postData = {phone: phone, oldPhone:oldPhone, redirect_top: getRedirectTop() };

                        $.ajax({
                            method: "POST",
                            url: "/id/doi-so-dien-thoai",
                            data: postData,
                            beforeSend: function() {
                                showLoading();
                            },
                            success: function (response) {
                                hideLoading();

                                if (response.status != 1) {
                                    if (response.status == -2) {
                                        warning(response.msg);
                                        setTimeout(() => {
                                            redirect('/id/dang-nhap');
                                        }, 1200);
                                        return false;
                                    }
                                    error(response.msg);
                                    return false;
                                }

                                success(response.msg);

                                processResponseVerifySMS(formChangePhone, response, 'callbackFunctionAddPhone');
                            },
                            error: function(xhr) {
                                hideLoading();
                                error("Error occured.please try again");
                                return false;
                            },
                        });
                    });
                }


            }).fail(function() {
                error("Lỗi request không hợp lệ! #1");
            });
        }, 950);
    }

    $('.form-change-profile').on('submit', function (e) {
        e.preventDefault();
        var form = $(this);

        var fullname = form.find('input[name="fullname"]').val();
        var birthday = form.find('input[name="birthday"]').val();
        var sex = form.find('input[name="sex"]:checked').val();

        // Validate username
        if (!fullname) {
            form.find('input[name="fullname"]').addClass('is-invalid');
            error("Nhập họ tên đầy đủ");
            return false;
        } else {
            form.find('input[name="fullname"]').removeClass('is-invalid');
        }

        var token = form.find('input[name="g-recaptcha-response"]').val();

        // if (!token || _.isUndefined(token)) {
        //     showWarning('Yêu cầu không hợp lệ', 'Cảnh báo');
        //     return false;
        // }

        var redirectUrl = null;
        if (_.isEmpty(getRedirectUrl())) {
            redirectUrl = getRedirectPrevious() ? decodeURIComponent(getRedirectPrevious()) : '/';
        }

        $.ajax({
            method: "POST",
            url: "/id/cap-nhat-tai-khoan",
            data: { "fullname": fullname, "birthday": birthday, "sex": sex, "redirect_url": redirectUrl , redirect_top: getRedirectTop(), "token": token},
            beforeSend: function() {
                showLoading();
            },
            success: function (response) {
                hideLoading();

                if (response.status != 1) {
                    if (response.status == -2) {
                        showConfirmAndRedirect('/id/dang-nhap', response.msg);
                        return false;
                    }
                    error(response.msg);
                    return false;
                }

                success(response.msg);

                setTimeout(() => {
                    redirect(response.data.redirect_url);
                }, 1200);
            },
            error: function(xhr) {
                hideLoading();
                error("Error occured.please try again");
                return false;
            },
        });
        return false;
    });
});
