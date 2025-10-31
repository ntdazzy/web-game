@extends('layouts.app')

@section('title', 'Nhập Giftcode')
@section('page_id', 'giftcode')

@section('body_class', 'wrapper-subpage overflow-y-auto')

@section('content')
    <div id="root" class="d-flex flex-column align-items-center w-100 position-relative">
        @include('partials.top-login')

        <div class="subpage-container wrapper-id giftcode-page">
            <div class="container h-100 position-relative">
                <div class="d-flex flex-column align-items-center">
                    <h1 class="page-title">NHẬN GIFTCODE</h1>
                    <div class="row wrapper-content">
                        <div class="content">
                            <div class="select-group d-flex">
                                <div class="dropdown server">
                                    <select id="serverSelect" class="form-select position-relative">
                                        <option value="0">Nhập ID máy chủ</option>
                                        <option value="s33" data-slug="s33" title="S33">S33</option>
                                        <option value="s32" data-slug="s32" title="S32">S32</option>
                                        <option value="s31" data-slug="s31" title="S31">S31</option>
                                        <option value="s30" data-slug="s30" title="S30">S30</option>
                                        <option value="s29" data-slug="s29" title="S29">S29</option>
                                        <option value="s28" data-slug="s28" title="S28">S28</option>
                                        <option value="s27" data-slug="s27" title="S27">S27</option>
                                        <option value="s26" data-slug="s26" title="S26">S26</option>
                                        <option value="s25" data-slug="s25" title="S25">S25</option>
                                        <option value="s24" data-slug="s24" title="S24">S24</option>
                                        <option value="s23" data-slug="s23" title="S23">S23</option>
                                        <option value="s22" data-slug="s22" title="S22">S22</option>
                                        <option value="s21" data-slug="s21" title="S21">S21</option>
                                        <option value="s20" data-slug="s20" title="S20">S20</option>
                                        <option value="s19" data-slug="s19" title="S19">S19</option>
                                        <option value="s18" data-slug="s18" title="S18">S18</option>
                                        <option value="s17" data-slug="s17" title="S17">S17</option>
                                        <option value="s16" data-slug="s16" title="S16">S16</option>
                                        <option value="s15" data-slug="s15" title="S15">S15</option>
                                        <option value="s14" data-slug="s14" title="S14">S14</option>
                                        <option value="s13" data-slug="s13" title="S13">S13</option>
                                        <option value="s12" data-slug="s12" title="S12">S12</option>
                                        <option value="s11" data-slug="s11" title="S11">S11</option>
                                        <option value="s10" data-slug="s10" title="S10">S10</option>
                                        <option value="s9" data-slug="s9" title="S9">S9</option>
                                        <option value="s8" data-slug="s8" title="S8">S8</option>
                                        <option value="s7" data-slug="s7" title="S7">S7</option>
                                        <option value="s6" data-slug="s6" title="S6">S6</option>
                                        <option value="s5" data-slug="s5" title="S5">S5</option>
                                        <option value="s4" data-slug="s4" title="S4">S4</option>
                                        <option value="s3" data-slug="s3" title="S3">S3</option>
                                        <option value="s2" data-slug="s2" title="S2">S2</option>
                                        <option value="s1" data-slug="s1" title="S1">S1</option>
                                    </select>
                                </div>

                                <div class="dropdown giftcode selectCodeType" id="selectCodeType">
                                    <button class="btn btn-outline-secondary dropdown-toggle" type="button"
                                        id="giftcodeDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                        -- Chọn loại Code --
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="giftcodeDropdown">
                                        <li><a class="dropdown-item" href="#" data-id="1" data-code="0"
                                                data-coded="">
                                                -- Chọn loại code -- </a></li>
                                        <li><a class="dropdown-item" href="#" data-id="2" data-code="0"
                                                data-coded="HAITACMANHNHAT-TANTHU">
                                                Code Tân Thủ </a></li>
                                        <li><a class="dropdown-item" href="#" data-id="3" data-code="27197"
                                                data-coded="">
                                                HĐ LV 10 </a></li>
                                        <li><a class="dropdown-item" href="#" data-id="4" data-code="27199"
                                                data-coded="">
                                                HĐ LV 20 </a></li>
                                        <li><a class="dropdown-item" href="#" data-id="5" data-code="27201"
                                                data-coded="">
                                                HĐ LV 40 </a></li>
                                        <li><a class="dropdown-item" href="#" data-id="7" data-code="27203"
                                                data-coded="">
                                                HĐ LV 60 </a></li>
                                        <li><a class="dropdown-item" href="#" data-id="9" data-code="27205"
                                                data-coded="">
                                                HĐ LV 80 </a></li>
                                        <li><a class="dropdown-item" href="#" data-id="11" data-code="27207"
                                                data-coded="">
                                                HĐ LV 100 </a></li>
                                        <li><a class="dropdown-item" href="#" data-id="13" data-code="27209"
                                                data-coded="">
                                                HĐ LV 110 </a></li>
                                        <li><a class="dropdown-item" href="#" data-id="15" data-code="27211"
                                                data-coded="">
                                                HĐ LV 120 </a></li>
                                        <li><a class="dropdown-item" href="#" data-id="16" data-code="27213"
                                                data-coded="">
                                                HĐ LV 130 </a></li>
                                        <li><a class="dropdown-item" href="#" data-id="17" data-code="27215"
                                                data-coded="">
                                                HĐ LV 140 </a></li>
                                        <li><a class="dropdown-item" href="#" data-id="18" data-code="27217"
                                                data-coded="">
                                                HĐ LV 150 </a></li>
                                    </ul>
                                    <input type="hidden" id="codeSlug">
                                    <input type="hidden" id="serverSlug">
                                    <input type="hidden" id="codeId">
                                    <input type="hidden" id="codeDefault">
                                </div>
                            </div>

                            <div class="button-group d-flex gap-1">
                                <button class="get-giftcode" id="confirmGetCode"></button>
                                <button class="history" id="giftcodeHistory"></button>
                            </div>

                            <div class="giftcode-description">
                                Lưu ý : Mỗi tài khoản chỉ sử dụng 1 được 1 Code cùng loại. <br>
                                Ví dụ : 1 tài khoản chơi 2 server thì chỉ 1 server ăn được code. <br>
                                Khuyến nghị : Chơi server mới nên tạo tài khoản mới để có thể sử dụng lại code.
                            </div>

                            <div class="history">
                                <div class="table-his d-none table-responsive" id="table-his-1">
                                    <p>
                                        Test</p>
                                </div>
                                <div class="table-his d-none table-responsive" id="table-his-2">
                                    <table cellspacing="0" style="border-collapse:collapse; width:1128px">
                                        <tbody>
                                            <tr>
                                                <td colspan="8"
                                                    style="border-bottom:1px solid black; border-left:1px solid black; border-right:.7px solid black; border-top:1px solid black; height:20px; text-align:center; vertical-align:bottom; white-space:nowrap; width:1126px">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Điều kiện nhận: <span
                                                                style="font-size:11pt"><strong><span
                                                                        style="font-family:Calibri,sans-serif">Tất cả
                                                                        c&aacute;c người chơi đều c&oacute; thể
                                                                        nhận</span></strong></span></span></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; height:20px; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Lực HĐ*100</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">C.t&iacute;ch*250000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Beri
                                                            *900000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">2000
                                                            v&agrave;ng</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Tr&aacute;i Tim
                                                            &aacute;c ma</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Kho b&aacute;u &aacute;c
                                                            ma thần b&iacute;</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">T&uacute;i nu&ocirc;i
                                                            c&aacute; AllBlue random</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">TT Gi&aacute;p Bảo
                                                            Hộ</span></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; height:20px; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">&nbsp;</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">250000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">900000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">1</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">100</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">1</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">300</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">1</span></span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="table-his d-none table-responsive" id="table-his-3">
                                    <table cellspacing="0" style="border-collapse:collapse; width:1128px">
                                        <tbody>
                                            <tr>
                                                <td colspan="8"
                                                    style="border-bottom:1px solid black; border-left:1px solid black; border-right:.7px solid black; border-top:1px solid black; height:20px; text-align:center; vertical-align:bottom; white-space:nowrap; width:1126px">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Điều kiện nhận: <span
                                                                style="font-size:11pt"><strong><span
                                                                        style="font-family:Calibri,sans-serif">đạt đủ level
                                                                        10 c&oacute; thể nhận
                                                                        code</span></strong></span></span></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; height:20px; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Lực HĐ*10</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">C.t&iacute;ch*50000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Beri
                                                            *100000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Bal&ocirc;
                                                            vải</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Bảo thụ
                                                            Adam</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">500 đ&aacute; năng
                                                            lượng</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">500 đ&aacute;
                                                            nguy&ecirc;n tố</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Ch&igrave;a kh&oacute;a
                                                            kho</span></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; height:20px; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">&nbsp;</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">50000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">100000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">10</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">10</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">20</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">20</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">5</span></span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="table-his d-none table-responsive" id="table-his-4">
                                    <table cellspacing="0" style="border-collapse:collapse; width:1128px">
                                        <tbody>
                                            <tr>
                                                <td colspan="8"
                                                    style="border-bottom:1px solid black; border-left:1px solid black; border-right:.7px solid black; border-top:1px solid black; height:20px; text-align:center; vertical-align:bottom; white-space:nowrap; width:1126px">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Điều kiện nhận: <span
                                                                style="font-size:11pt"><strong><span
                                                                        style="font-family:Calibri,sans-serif">đạt đủ level
                                                                        20 c&oacute; thể nhận
                                                                        code</span></strong></span></span></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; height:20px; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Lực HĐ*20</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">C.t&iacute;ch*75000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Beri
                                                            *200000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Bal&ocirc;
                                                            vải</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Bảo thụ
                                                            Adam</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">T&uacute;i tr&aacute;i 6
                                                            sao</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Ch&igrave;a kh&oacute;a
                                                            kho</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">T&uacute;i qu&agrave;
                                                            random t&iacute;m cao cấp</span></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; height:20px; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">&nbsp;</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">75000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">200000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">20</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">30</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">1</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">10</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">10</span></span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="table-his d-none table-responsive" id="table-his-5">
                                    <table cellspacing="0" style="border-collapse:collapse; width:1128px">
                                        <tbody>
                                            <tr>
                                                <td colspan="8"
                                                    style="border-bottom:1px solid black; border-left:1px solid black; border-right:.7px solid black; border-top:1px solid black; height:20px; text-align:center; vertical-align:bottom; white-space:nowrap; width:1126px">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Điều kiện nhận: <span
                                                                style="font-size:11pt"><strong><span
                                                                        style="font-family:Calibri,sans-serif">đạt đủ level
                                                                        40 c&oacute; thể nhận
                                                                        code</span></strong></span></span></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; height:20px; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Lực HĐ*30</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">C.t&iacute;ch*100000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Beri
                                                            *300000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Tr&aacute;i Tim
                                                            &aacute;c ma</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Đ&aacute; Huyết
                                                            Linh</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">T&uacute;i K.cương cổ
                                                            đại</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">1500 C.t&iacute;ch
                                                            C.hội</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">300 T&iacute;ch điểm
                                                            B.thạch</span></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; height:20px; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">&nbsp;</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">100000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">300000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">20</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">20</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">10</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">10</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">10</span></span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="table-his d-none table-responsive" id="table-his-7">
                                    <table cellspacing="0" style="border-collapse:collapse; width:1128px">
                                        <tbody>
                                            <tr>
                                                <td colspan="8"
                                                    style="border-bottom:1px solid black; border-left:1px solid black; border-right:.7px solid black; border-top:1px solid black; height:20px; text-align:center; vertical-align:bottom; white-space:nowrap; width:1126px">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Điều kiện nhận: <span
                                                                style="font-size:11pt"><strong><span
                                                                        style="font-family:Calibri,sans-serif">đạt đủ level
                                                                        60 c&oacute; thể nhận
                                                                        code</span></strong></span></span></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; height:20px; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Lực HĐ*40</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">C.t&iacute;ch*125000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Beri
                                                            *400000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Tr&aacute;i Tim
                                                            &aacute;c ma</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">50 Tinh hoa
                                                            B.thạch</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">125 Đ&aacute; Khắc
                                                            Ấn</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">T&uacute;i tr&aacute;i 7
                                                            sao</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">1000 T&iacute;ch điểm
                                                            B.thạch</span></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; height:20px; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">&nbsp;</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">125000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">400000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">40</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">20</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">10</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">1</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">10</span></span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="table-his d-none table-responsive" id="table-his-9">
                                    <table cellspacing="0" style="border-collapse:collapse; width:1128px">
                                        <tbody>
                                            <tr>
                                                <td colspan="8"
                                                    style="border-bottom:1px solid black; border-left:1px solid black; border-right:.7px solid black; border-top:1px solid black; height:20px; text-align:center; vertical-align:bottom; white-space:nowrap; width:1126px">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Điều kiện nhận: <span
                                                                style="font-size:11pt"><strong><span
                                                                        style="font-family:Calibri,sans-serif">đạt đủ level
                                                                        80 c&oacute; thể nhận
                                                                        code</span></strong></span></span></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; height:20px; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Lực HĐ*50</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">C.t&iacute;ch*150000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Beri
                                                            *500000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">100 tử hồn</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Dấu đỏ</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">T&uacute;i tẩy luyện
                                                            B.vật h&agrave;o hoa</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">125 Đ&aacute; Khắc
                                                            Ấn</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">1500 C.t&iacute;ch
                                                            C.hội</span></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; height:20px; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">&nbsp;</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">150000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">500000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">10</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">30</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">10</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">20</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">30</span></span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="table-his d-none table-responsive" id="table-his-11">
                                    <table cellspacing="0" style="border-collapse:collapse; width:1128px">
                                        <tbody>
                                            <tr>
                                                <td colspan="8"
                                                    style="border-bottom:1px solid black; border-left:1px solid black; border-right:.7px solid black; border-top:1px solid black; height:20px; text-align:center; vertical-align:bottom; white-space:nowrap; width:1126px">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Điều kiện nhận: <span
                                                                style="font-size:11pt"><strong><span
                                                                        style="font-family:Calibri,sans-serif">đạt đủ level
                                                                        100 c&oacute; thể nhận
                                                                        code</span></strong></span></span></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; height:20px; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Lực HĐ*60</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">C.t&iacute;ch*175000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Beri
                                                            *600000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">100 tử hồn</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">T&uacute;i K.cương cổ
                                                            đại</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">T&uacute;i tẩy luyện
                                                            B.thạch h&agrave;o hoa</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">125 Đ&aacute; Khắc
                                                            Ấn</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">100 N.lượng
                                                            N.tố</span></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; height:20px; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">&nbsp;</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">175000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">600000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">20</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">20</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">10</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">30</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">10</span></span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="table-his d-none table-responsive" id="table-his-13">
                                    <table cellspacing="0" style="border-collapse:collapse; width:1128px">
                                        <tbody>
                                            <tr>
                                                <td colspan="8"
                                                    style="border-bottom:1px solid black; border-left:1px solid black; border-right:.7px solid black; border-top:1px solid black; height:20px; text-align:center; vertical-align:bottom; white-space:nowrap; width:1126px">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Điều kiện nhận: <span
                                                                style="font-size:11pt"><strong><span
                                                                        style="font-family:Calibri,sans-serif">đạt đủ level
                                                                        110 c&oacute; thể nhận
                                                                        code</span></strong></span></span></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; height:20px; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Lực HĐ*70</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">C.t&iacute;ch*200000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Beri
                                                            *700000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">500 Exp Nguy&ecirc;n
                                                            tố</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">500 Đ&aacute; Hải
                                                            Hồn</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Ma phấn tinh linh trung
                                                            cấp</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">T&uacute;i K.cương cổ
                                                            đại</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">1000 Nh&acirc;n tố
                                                            &aacute;c quỷ</span></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; height:20px; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">&nbsp;</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">200000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">700000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">10</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">20</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">5</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">30</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">20</span></span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="table-his d-none table-responsive" id="table-his-15">
                                    <table cellspacing="0" style="border-collapse:collapse; width:1128px">
                                        <tbody>
                                            <tr>
                                                <td colspan="8"
                                                    style="border-bottom:1px solid black; border-left:1px solid black; border-right:.7px solid black; border-top:1px solid black; height:20px; text-align:center; vertical-align:bottom; white-space:nowrap; width:1126px">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Điều kiện nhận: <span
                                                                style="font-size:11pt"><strong><span
                                                                        style="font-family:Calibri,sans-serif">đạt đủ level
                                                                        120 c&oacute; thể nhận
                                                                        code</span></strong></span></span></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; height:20px; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Lực HĐ*80</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">C.t&iacute;ch*225000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Beri
                                                            *800000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">T&uacute;i N.Liệu
                                                            b&aacute; kh&iacute;</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">T&uacute;i N.Liệu
                                                            b&aacute; kh&iacute; thường</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Ma phấn tinh linh trung
                                                            cấp</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Tr&aacute;i Tim
                                                            &aacute;c ma</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">500 Exp Nguy&ecirc;n
                                                            tố</span></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; height:20px; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">&nbsp;</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">225000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">800000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">5</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">10</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">10</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">100</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">20</span></span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="table-his d-none table-responsive" id="table-his-16">
                                    <table cellspacing="0" style="border-collapse:collapse; width:1128px">
                                        <tbody>
                                            <tr>
                                                <td colspan="8"
                                                    style="border-bottom:1px solid black; border-left:1px solid black; border-right:.7px solid black; border-top:1px solid black; height:20px; text-align:center; vertical-align:bottom; white-space:nowrap; width:1126px">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Điều kiện nhận: <span
                                                                style="font-size:11pt"><strong><span
                                                                        style="font-family:Calibri,sans-serif">đạt đủ level
                                                                        130 c&oacute; thể nhận
                                                                        code</span></strong></span></span></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; height:20px; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Lực HĐ*90</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">C.t&iacute;ch*250000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Beri
                                                            *900000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">T&uacute;i tăng cấp
                                                            thi&ecirc;n ph&uacute;</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">T&uacute;i N.Liệu
                                                            b&aacute; kh&iacute;</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Ma phấn tinh linh cao
                                                            cấp</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">T&uacute;i N.Liệu
                                                            b&aacute; kh&iacute; thường</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">500 Ho&agrave;ng Kim
                                                            B.thạch</span></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; height:20px; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">&nbsp;</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">250000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">900000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">5</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">10</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">5</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">20</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">5</span></span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="table-his d-none table-responsive" id="table-his-17">
                                    <table cellspacing="0" style="border-collapse:collapse; width:1128px">
                                        <tbody>
                                            <tr>
                                                <td colspan="8"
                                                    style="border-bottom:1px solid black; border-left:1px solid black; border-right:.7px solid black; border-top:1px solid black; height:20px; text-align:center; vertical-align:bottom; white-space:nowrap; width:1126px">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Điều kiện nhận: <span
                                                                style="font-size:11pt"><strong><span
                                                                        style="font-family:Calibri,sans-serif">đạt đủ level
                                                                        140 c&oacute; thể nhận
                                                                        code</span></strong></span></span></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; height:20px; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Lực HĐ*100</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">C.t&iacute;ch*275000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Beri
                                                            *900000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">T&uacute;i N.Liệu
                                                            b&aacute; kh&iacute;</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">1000 Đ&aacute; Hải
                                                            Hồn</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">T&uacute;i nguy&ecirc;n
                                                            liệu đồ cam thường</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">1000 đ&aacute; năng
                                                            lượng</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">1000 đ&aacute;
                                                            nguy&ecirc;n tố</span></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; height:20px; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">&nbsp;</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">275000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">900000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">20</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">20</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">10</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">30</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">20</span></span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="table-his d-none table-responsive" id="table-his-18">
                                    <table cellspacing="0" style="border-collapse:collapse; width:1128px">
                                        <tbody>
                                            <tr>
                                                <td colspan="8"
                                                    style="border-bottom:1px solid black; border-left:1px solid black; border-right:.7px solid black; border-top:1px solid black; height:20px; text-align:center; vertical-align:bottom; white-space:nowrap; width:1126px">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Điều kiện nhận: <span
                                                                style="font-size:11pt"><strong><span
                                                                        style="font-family:Calibri,sans-serif">đạt đủ level
                                                                        150 c&oacute; thể nhận
                                                                        code</span></strong></span></span></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; height:20px; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Lực HĐ*100</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">C.t&iacute;ch*300000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Beri
                                                            *900000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">T&uacute;i tăng cấp
                                                            thi&ecirc;n ph&uacute;</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">Dấu đỏ</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">T&uacute;i nguy&ecirc;n
                                                            liệu đồ cam thường</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">T&uacute;i tẩy luyện
                                                            B.thạch h&agrave;o hoa</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">500 Ho&agrave;ng Kim
                                                            B.thạch</span></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; height:20px; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">&nbsp;</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">300000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">900000</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">10</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">50</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">20</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">20</span></span>
                                                </td>
                                                <td
                                                    style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; text-align:center; vertical-align:bottom; white-space:nowrap">
                                                    <span style="font-size:15px"><span
                                                            style="font-family:Calibri,sans-serif">10</span></span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="popup popup-history" style="display: none">
            <div class="wrap">
                <div class="content">
                    <h3>Lịch sử nhận code</h3>
                    <div class="table-responsive table-history-box custom-scrollbar">
                        <table id="table-history" class="table table-bordered table-hover">
                            <thead class="thead-light">
                                <tr>
                                    <th>Tên</th>
                                    <th>Code</th>
                                    <th>Máy chủ</th>
                                    <th>Thời gian nhận</th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                    </div>
                </div>
                <a href="javascript:void(0)" class="close"><i class="fa-light fa-xmark"></i></a>
            </div>
        </div>
        @include('partials.bottom-strip')

    </div>
@endsection
