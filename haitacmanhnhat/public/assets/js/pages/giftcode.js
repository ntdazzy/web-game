(function (window, document) {
  window.__CUSTOM_GIFTCODE__ = true;
  const page = document.querySelector('.giftcode-page');
  if (!page) {
    return;
  }

  const serverSelect = page.querySelector('#serverSelect');
  const serverSlugInput = page.querySelector('#serverSlug');
  const codeSlugInput = page.querySelector('#codeSlug');
  const codeIdInput = page.querySelector('#codeId');
  const codeDefaultInput = page.querySelector('#codeDefault');
  const confirmButton = page.querySelector('#confirmGetCode');
  const historyButton = page.querySelector('#giftcodeHistory');
  const dropdown = page.querySelector('.selectCodeType');
  const dropdownButton = dropdown ? dropdown.querySelector('button') : null;
  const dropdownItems = dropdown ? dropdown.querySelectorAll('.dropdown-item') : [];
  const dropdownInstance = dropdownButton && window.bootstrap
    ? window.bootstrap.Dropdown.getOrCreateInstance(dropdownButton)
    : null;
  const tables = Array.from(page.querySelectorAll('.table-his'));
  const popup = document.querySelector('.popup.popup-history');
  const popupClose = popup ? popup.querySelector('.close') : null;
  const popupTableBody = popup ? popup.querySelector('#table-history tbody') : null;

  const normaliseEndpoint = (rawUrl) => {
    if (!rawUrl || typeof rawUrl !== 'string') {
      return '';
    }
    const trimmed = rawUrl.trim();
    if (!trimmed) {
      return '';
    }
    if (/^https?:\/\//i.test(trimmed)) {
      return trimmed;
    }
    if (trimmed.startsWith('//')) {
      return (window.location.protocol || 'https:') + trimmed;
    }
    if (trimmed.startsWith('/')) {
      const origin = (window.__APP_CONFIG__ && window.__APP_CONFIG__.origin) || window.location.origin || '';
      return origin.replace(/\/+$/, '') + trimmed;
    }
    return trimmed;
  };

  const giftcodeEndpoint = normaliseEndpoint(window.linkAjaxGiftcode);
  const historyEndpoint = normaliseEndpoint(window.historyGiftcode);

  function setServerSlug(value) {
    if (serverSlugInput) {
      serverSlugInput.value = value || '';
    }
  }

  function setCodeState({ slug, id, defaultCode }) {
    if (codeSlugInput) {
      codeSlugInput.value = slug || '';
    }
    if (codeIdInput) {
      codeIdInput.value = id || '';
    }
    if (codeDefaultInput) {
      codeDefaultInput.value = defaultCode || '';
    }
  }

  function updateTableVisibility(targetId) {
    tables.forEach((table) => {
      const shouldShow = table.id === targetId;
      table.classList.toggle('d-none', !shouldShow);
    });
  }

  function showResult(message) {
    if (!window.Swal) {
      return;
    }
    const contentCode = [
      '<p class="content-code">' + message + '</p>',
      '<a href="#" class="text-decoration-underline text-secondary btn-copy-code" data-bs-toggle="tooltip" data-bs-placement="top" title="Bấm để sao chép">Bấm để sao chép</a>',
    ].join('');

    window.Swal.fire({
      icon: 'success',
      html: contentCode,
      confirmButtonText: 'Đóng',
    }).then(() => {
      if (typeof window.onloadToolTip === 'function') {
        window.onloadToolTip();
      }
    });

    setTimeout(() => {
      const copyButton = document.querySelector('.btn-copy-code');
      if (!copyButton) {
        return;
      }
      copyButton.addEventListener('click', function (event) {
        event.preventDefault();
        if (typeof window.copyToClipboard === 'function') {
          window.copyToClipboard();
        }
        const tooltip = window.bootstrap ? window.bootstrap.Tooltip.getInstance(copyButton) : null;
        if (tooltip) {
          tooltip.setContent({ '.tooltip-inner': 'Đã sao chép' });
          tooltip.show();
        }
      });
    }, 50);
  }

  function hideResult() {
    const notice = page.querySelector('.notice');
    if (notice) {
      notice.classList.add('d-none');
      notice.classList.remove('code');
      notice.textContent = '';
    }
  }

  function sendRequest(url, payload) {
    if (!url) {
      return Promise.reject(new Error('Missing endpoint'));
    }
    const body = new URLSearchParams(payload);
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: body.toString(),
      credentials: 'same-origin',
    }).then((response) => response.json());
  }

  function handleGiftcodeFetch() {
    hideResult();

    const serverSlug = serverSlugInput ? serverSlugInput.value.trim() : '';
    const codeSlug = codeSlugInput ? codeSlugInput.value.trim() : '';
    const codeId = codeIdInput ? codeIdInput.value.trim() : '';
    const codeDefault = codeDefaultInput ? codeDefaultInput.value.trim() : '';

    if (!serverSlug) {
      if (window.Swal) {
        window.Swal.fire({
          icon: 'warning',
          title: 'Vui lòng chọn server!',
          confirmButtonText: 'Đóng',
        });
      }
      return;
    }

    if (!codeSlug) {
      if (codeDefault) {
        showResult(codeDefault);
        return;
      }
      if (window.Swal) {
        window.Swal.fire({
          icon: 'warning',
          title: 'Vui lòng chọn loại gift code!',
          confirmButtonText: 'Đóng',
        });
      }
      return;
    }

    if (typeof window.showLoading === 'function') {
      window.showLoading();
    }

    if (!giftcodeEndpoint) {
      if (typeof window.hideLoading === 'function') {
        window.hideLoading();
      }
      if (typeof window.error === 'function') {
        window.error('Không xác định được endpoint nhận code.');
      }
      return;
    }

    sendRequest(giftcodeEndpoint, {
      codeSlug: codeSlug,
      serverSlug: serverSlug,
      codeId: codeId,
      gRecaptchaResponse: typeof window.tokenRecaptcha !== 'undefined' ? window.tokenRecaptcha : '',
    })
      .then((response) => {
        if (typeof window.hideLoading === 'function') {
          window.hideLoading();
        }

        if (!response || response.status !== 1) {
          if (response && response.status === -403 && window.Swal) {
            window.Swal.fire({
              icon: 'error',
              title: 'Thông báo',
              confirmButtonText: response.msg,
            }).then(function () {
              window.location.reload();
            });
            return;
          }
          if (typeof window.warning === 'function' && response && response.msg) {
            window.warning(response.msg);
          }
          return;
        }

        showResult(response.code);
        if (typeof window.getNewTokenOfReCaptcha === 'function') {
          window.getNewTokenOfReCaptcha();
        }
      })
      .catch((error) => {
        if (typeof window.hideLoading === 'function') {
          window.hideLoading();
        }
        if (typeof window.error === 'function') {
          window.error('Có lỗi xảy ra vui lòng liên hệ admin (#2)!');
        } else if (window.console) {
          console.error('Giftcode fetch error', error);
        }
        if (typeof window.getNewTokenOfReCaptcha === 'function') {
          window.getNewTokenOfReCaptcha();
        }
      });
  }

  function populateHistoryTable(data) {
    if (!popupTableBody) {
      return;
    }
    popupTableBody.innerHTML = '';
    data.forEach((item) => {
      const row = document.createElement('tr');
      row.innerHTML = [
        `<td>${item.name || ''}</td>`,
        `<td>${item.code || ''}</td>`,
        `<td class="text-uppercase text-center">${item.serverSlug || ''}</td>`,
        `<td>${item.receiveDate || ''}</td>`,
      ].join('');
      popupTableBody.appendChild(row);
    });
  }

  function showHistoryPopup(data) {
    populateHistoryTable(Array.isArray(data) ? data : []);
    if (popup) {
      popup.classList.remove('is-hidden');
    }
    if (typeof window.changeStateOverflow === 'function') {
      window.changeStateOverflow(true);
    }
    if (typeof window.loadScrollTable === 'function') {
      window.loadScrollTable();
    }
  }

  function hideHistoryPopup() {
    if (popup) {
      popup.classList.add('is-hidden');
    }
    if (typeof window.changeStateOverflow === 'function') {
      window.changeStateOverflow(false);
    }
  }

  function handleHistoryFetch() {
    const serverSlug = serverSlugInput ? serverSlugInput.value.trim() : '';
    if (!historyEndpoint) {
      if (window.Swal) {
        window.Swal.fire({
          icon: 'error',
          title: 'Thông báo',
          confirmButtonText: 'Không xác định được endpoint lịch sử giftcode!',
        });
      }
      return;
    }

    sendRequest(historyEndpoint, { serverSlug: serverSlug })
      .then((response) => {
        if (!response) {
          return;
        }
        if (response.status === -1 && window.Swal) {
          window.Swal.fire({
            icon: 'warning',
            title: 'Thông báo',
            confirmButtonText: response.msg,
          }).then(function () {
            window.location.reload();
          });
          return;
        }
        showHistoryPopup(response.data || []);
      })
      .catch(() => {
        if (window.Swal) {
          window.Swal.fire({
            icon: 'error',
            title: 'Thông báo',
            confirmButtonText: 'Có lỗi xảy ra vui lòng liên hệ admin (#1)!',
          }).then(function () {
            window.location.reload();
          });
        }
      });
  }

  if (serverSelect) {
    serverSelect.addEventListener('change', function () {
      const slug = this.value === '0' ? '' : this.value;
      setServerSlug(slug);
    });
    setServerSlug(serverSelect.value === '0' ? '' : serverSelect.value);
  }

  const initialiseSelect2 = () => {
    const $ = window.jQuery;
    if (!$ || !$.fn || typeof $.fn.select2 !== 'function' || !serverSelect) {
      return;
    }
    if ($(serverSelect).data('select2')) {
      return;
    }
    const $dropdownParent = $(page.querySelector('.select-group .server') || serverSelect.parentElement);
    const options = {
      placeholder: 'Nhập ID máy chủ',
      allowClear: true,
      width: '100%',
      theme: 'classic',
      dropdownCssClass: 'serverSelect-dropdown',
      language: {
        noResults: function () {
          return 'Không tìm thấy kết quả';
        },
      },
    };
    if ($dropdownParent.length) {
      options.dropdownParent = $dropdownParent;
    }
    $(serverSelect).select2(options);

    $(serverSelect).on('select2:open', () => {
      const searchField = document.querySelector('.select2-search__field');
      if (searchField) {
        searchField.setAttribute('placeholder', 'Nhập ID máy chủ...');
        searchField.classList.add('server-search-select2');
      }
    });
  };

  initialiseSelect2();

  dropdownItems.forEach((item) => {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      const label = this.textContent.trim();
      const codeSlug = this.dataset.code || '';
      const codeId = this.dataset.id || '';
      const defaultCode = this.dataset.coded || '';

      if (dropdownButton) {
        dropdownButton.textContent = label;
      }

      setCodeState({ slug: codeSlug, id: codeId, defaultCode: defaultCode });

      if (!codeId) {
        updateTableVisibility(null);
      } else {
        updateTableVisibility(`table-his-${codeId}`);
      }
      if (dropdownInstance) {
        dropdownInstance.hide();
      }
    });
  });

  if (confirmButton) {
    confirmButton.addEventListener('click', function (event) {
      event.preventDefault();
      handleGiftcodeFetch();
    });
  }

  if (historyButton) {
    historyButton.addEventListener('click', function (event) {
      event.preventDefault();
      handleHistoryFetch();
    });
  }

  if (popupClose) {
    popupClose.addEventListener('click', function (event) {
      event.preventDefault();
      hideHistoryPopup();
    });
  }

  if (popup) {
    popup.addEventListener('click', function (event) {
      if (event.target === popup) {
        hideHistoryPopup();
      }
    });
  }

  updateTableVisibility(null);
})(window, document);
