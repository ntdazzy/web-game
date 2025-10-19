<?php include __DIR__ . '/../../../Views/partials/top-nav-mobile.php'; ?>
<div class="d-flex flex-column align-items-center w-100 position-relative" id="root">
<img alt="" class="logo-warning position-absolute" src="/assets/stms/imgs/logo-warning.png"/>
<div class="wrap-login-mobile wrap-login position-absolute h-100">
<div class="user-info h-100 d-flex align-items-center d-none">
<div class="btn-group">
<button aria-expanded="false" class="btn dropdown-toggle" data-bs-toggle="dropdown" type="button">
<i class="fa-solid fa-user"></i>
<span class="display-name"></span>
</button>
<ul class="dropdown-menu">
<li class="dropdown-item d-flex align-items-center"><a href="/id"><i class="fa-solid fa-user"></i>Quản lý tài khoản</a></li>
<li class="dropdown-item d-flex align-items-center">
<a class="d-flex justify-content-between" href="/qua-nap-web">
<i><span>GEM</span><span>0</span></i> <button>Nạp</button></a>
</li>
<li class="dropdown-item d-flex align-items-center"><a href="/lich-su-nap"><i class="fa-solid fa-clock-rotate-left"></i>Lịch sử nạp</a></li>
<li class="dropdown-item d-flex align-items-center"><a href="/id/doi-mat-khau"><i class="fa-solid fa-lock-keyhole-open"></i>Đổi mật khẩu</a></li>
<li class="dropdown-item d-flex align-items-center"><a href="/"><i class="fa-light fa-right-from-bracket"></i>Đăng xuất</a></li>
</ul>
</div>
</div>
<a class="btn-login login-required" data-open-auth="login" data-redirect="/qua-nap-web" href="#"></a>
</div>
<div class="subpage-container wrapper-id wrapper-hero">
<div class="h-100 position-relative full-container">
<div class="d-flex flex-column">
<div class="d-flex justify-content-center">
<h1 class="page-title">DANH SÁCH TƯỚNG</h1>
</div>
<div class="container-fluid">
<div class="row content d-flex">
<div class="filter-box d-flex flex-column mb-5">
<div class="filter-type-attack d-flex align-items-center">
<h3 class="fw-bold mb-0 me-4">LOẠI DAME</h3>
<ul class="d-flex">
<li class="btn-search-hero btn-all-skill active"><a class="d-block w-100 h-100" data-particular="s0" href="#">Tất cả</a></li>
<li class="btn-search-hero btn-physics-skill"><a class="d-block w-100 h-100" data-particular="s1" href="#">Vật công</a></li>
<li class="btn-search-hero btn-last-skill"><a class="d-block w-100 h-100" data-particular="s2" href="#">Tuyệt chiêu</a></li>
<li class="btn-search-hero btn-magic-skill"><a class="d-block w-100 h-100" data-particular="s3" href="#">Ma công</a></li>
</ul>
</div>
<div class="filter-type-name d-flex align-items-center">
<h3 class="fw-bold mb-0 me-3">TÌM TƯỚNG</h3>
<div class="position-relative search-hero">
<input autocomplete="off" class="fst-italic text-search" placeholder="Tên Tướng" type="text"/>
<i class="fa-light fa-magnifying-glass search-icon-fa"></i>
</div>
</div>
</div>
<div class="hero-list">
<ul class="d-flex flex-wrap gap-4 listChars">
<li data-name="Senor Pink-S2" data-particular="s3" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/senorpink-s2.png'>
<a class="d-block w-100 h-100" data-name="Senor Pink-S2" href="/danh-sach-tuong/senor-pink-s2" title="Senor Pink-S2">
</a>
</li>
<li data-name="Senor Pink-S" data-particular="s3" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/senorpink-s.png'>
<a class="d-block w-100 h-100" data-name="Senor Pink-S" href="/danh-sach-tuong/senor-pink-s" title="Senor Pink-S">
</a>
</li>
<li data-name="Dellinger-S2" data-particular="s1" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/dellinger-s2.png'>
<a class="d-block w-100 h-100" data-name="Dellinger-S2" href="/danh-sach-tuong/dellinger-s2" title="Dellinger-S2">
</a>
</li>
<li data-name="Dellinger-S" data-particular="s1" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/dellinger-s.png'>
<a class="d-block w-100 h-100" data-name="Dellinger-S" href="/danh-sach-tuong/dellinger-s" title="Dellinger-S">
</a>
</li>
<li data-name="Niji-S2" data-particular="s2" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/niji-s2.png'>
<a class="d-block w-100 h-100" data-name="Niji-S2" href="/danh-sach-tuong/niji-s2" title="Niji-S2">
</a>
</li>
<li data-name="Yonji-S2" data-particular="s3" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/yonji-s2.png'>
<a class="d-block w-100 h-100" data-name="Yonji-S2" href="/danh-sach-tuong/yonji-s2" title="Yonji-S2">
</a>
</li>
<li data-name="Reiju-S2" data-particular="s3" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/reiju-s2.png'>
<a class="d-block w-100 h-100" data-name="Reiju-S2" href="/danh-sach-tuong/reiju-s2" title="Reiju-S2">
</a>
</li>
<li data-name="Ichiji-S2" data-particular="s1" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/ichiji-s2.png'>
<a class="d-block w-100 h-100" data-name="Ichiji-S2" href="/danh-sach-tuong/ichiji-s2" title="Ichiji-S2">
</a>
</li>
<li data-name="Sugar-S2" data-particular="s2" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/sugar-s2.png'>
<a class="d-block w-100 h-100" data-name="Sugar-S2" href="/danh-sach-tuong/sugar-s2" title="Sugar-S2">
</a>
</li>
<li data-name="Râu Trắng-S2" data-particular="s2" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/rau-trang-s2.png'>
<a class="d-block w-100 h-100" data-name="Râu Trắng-S2" href="/danh-sach-tuong/rau-trang-s2" title="Râu Trắng-S2">
</a>
</li>
<li data-name="Luffy-Nika" data-particular="s2" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/luffy-nika.png'>
<a class="d-block w-100 h-100" data-name="Luffy-Nika" href="/danh-sach-tuong/luffy-nika" title="Luffy-Nika">
</a>
</li>
<li data-name="Enel-S" data-particular="s3" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/enel-s.png'>
<a class="d-block w-100 h-100" data-name="Enel-S" href="/danh-sach-tuong/enel-s" title="Enel-S">
</a>
</li>
<li data-name="Jack-S" data-particular="s3" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/jack-s.png'>
<a class="d-block w-100 h-100" data-name="Jack-S" href="/danh-sach-tuong/jack-s" title="Jack-S">
</a>
</li>
<li data-name="SaBo-S" data-particular="s1" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/sabo-s.png'>
<a class="d-block w-100 h-100" data-name="SaBo-S" href="/danh-sach-tuong/sabo-s" title="SaBo-S">
</a>
</li>
<li data-name="Benn Beckman-S" data-particular="s1" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/benn-beckman-s.png'>
<a class="d-block w-100 h-100" data-name="Benn Beckman-S" href="/danh-sach-tuong/benn-beckman-s" title="Benn Beckman-S">
</a>
</li>
<li data-name="Râu Trắng-S" data-particular="s2" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/rau-trang-s.png'>
<a class="d-block w-100 h-100" data-name="Râu Trắng-S" href="/danh-sach-tuong/rau-trang-s" title="Râu Trắng-S">
</a>
</li>
<li data-name="Queen-S" data-particular="s2" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/queen-s.png'>
<a class="d-block w-100 h-100" data-name="Queen-S" href="/danh-sach-tuong/queen-s" title="Queen-S">
</a>
</li>
<li data-name="King-S" data-particular="s1" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/king-s.png'>
<a class="d-block w-100 h-100" data-name="King-S" href="/danh-sach-tuong/king-s" title="King-S">
</a>
</li>
<li data-name="Aramaki-S" data-particular="s1" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/aramaki-s.png'>
<a class="d-block w-100 h-100" data-name="Aramaki-S" href="/danh-sach-tuong/aramaki-s" title="Aramaki-S">
</a>
</li>
<li data-name="Oden-S" data-particular="s3" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/oden-s.png'>
<a class="d-block w-100 h-100" data-name="Oden-S" href="/danh-sach-tuong/oden-s" title="Oden-S">
</a>
</li>
<li data-name="Katakuri-S" data-particular="s1" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/katakuri-s.png'>
<a class="d-block w-100 h-100" data-name="Katakuri-S" href="/danh-sach-tuong/katakuri-s" title="Katakuri-S">
</a>
</li>
<li data-name="Aokiji-S" data-particular="s3" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/aokiji-s.png'>
<a class="d-block w-100 h-100" data-name="Aokiji-S" href="/danh-sach-tuong/aokiji-s" title="Aokiji-S">
</a>
</li>
<li data-name="Uta-S" data-particular="s3" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/uta-s.png'>
<a class="d-block w-100 h-100" data-name="Uta-S" href="/danh-sach-tuong/uta-s" title="Uta-S">
</a>
</li>
<li data-name="Luffy-S2" data-particular="s2" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/luffy-s2.png'>
<a class="d-block w-100 h-100" data-name="Luffy-S2" href="/danh-sach-tuong/luffy-s2" title="Luffy-S2">
</a>
</li>
<li data-name="Marco-S2" data-particular="s1" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/marco-s2.png'>
<a class="d-block w-100 h-100" data-name="Marco-S2" href="/danh-sach-tuong/marco-s2" title="Marco-S2">
</a>
</li>
<li data-name="Ace-S2" data-particular="s3" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/ace-s2.png'>
<a class="d-block w-100 h-100" data-name="Ace-S2" href="/danh-sach-tuong/ace-s2" title="Ace-S2">
</a>
</li>
<li data-name="Zoro-S2" data-particular="s2" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/zoro-s2.png'>
<a class="d-block w-100 h-100" data-name="Zoro-S2" href="/danh-sach-tuong/zoro-s2" title="Zoro-S2">
</a>
</li>
<li data-name="Law-S2" data-particular="s3" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/law-s2.png'>
<a class="d-block w-100 h-100" data-name="Law-S2" href="/danh-sach-tuong/law-s2" title="Law-S2">
</a>
</li>
<li data-name="Jinbe-S2" data-particular="s1" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/jinbei-s2.png'>
<a class="d-block w-100 h-100" data-name="Jinbe-S2" href="/danh-sach-tuong/jinbe-s2" title="Jinbe-S2">
</a>
</li>
<li data-name="Nico Robin-S2" data-particular="s3" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/robin-s2.png'>
<a class="d-block w-100 h-100" data-name="Nico Robin-S2" href="/danh-sach-tuong/nico-robin-s2" title="Nico Robin-S2">
</a>
</li>
<li data-name="Sanji-S2" data-particular="s2" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/sanji-s2.png'>
<a class="d-block w-100 h-100" data-name="Sanji-S2" href="/danh-sach-tuong/sanji-s2" title="Sanji-S2">
</a>
</li>
<li data-name="Boa Hancock-S2" data-particular="s3" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/boa-s2.png'>
<a class="d-block w-100 h-100" data-name="Boa Hancock-S2" href="/danh-sach-tuong/boa-hancock-s2" title="Boa Hancock-S2">
</a>
</li>
<li data-name="Killer-S2" data-particular="s1" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/killer-s2.png'>
<a class="d-block w-100 h-100" data-name="Killer-S2" href="/danh-sach-tuong/killer-s2" title="Killer-S2">
</a>
</li>
<li data-name="Chopper-S2" data-particular="s3" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/chopper-s2.png'>
<a class="d-block w-100 h-100" data-name="Chopper-S2" href="/danh-sach-tuong/chopper-s2" title="Chopper-S2">
</a>
</li>
<li data-name="Franky-S2" data-particular="s1" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/franky-s2.png'>
<a class="d-block w-100 h-100" data-name="Franky-S2" href="/danh-sach-tuong/franky-s2" title="Franky-S2">
</a>
</li>
<li data-name="Brook-S2" data-particular="s2" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/brook-s2.png'>
<a class="d-block w-100 h-100" data-name="Brook-S2" href="/danh-sach-tuong/brook-s2" title="Brook-S2">
</a>
</li>
<li data-name="Usopp-S2" data-particular="s1" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/usopp-s2.png'>
<a class="d-block w-100 h-100" data-name="Usopp-S2" href="/danh-sach-tuong/usopp-s2" title="Usopp-S2">
</a>
</li>
<li data-name="Nami-S2" data-particular="s3" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/nami-s2.png'>
<a class="d-block w-100 h-100" data-name="Nami-S2" href="/danh-sach-tuong/nami-s2" title="Nami-S2">
</a>
</li>
<li data-name="Doflamingo-S2" data-particular="s2" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/dof-s2.png'>
<a class="d-block w-100 h-100" data-name="Doflamingo-S2" href="/danh-sach-tuong/doflamingo-s2" title="Doflamingo-S2">
</a>
</li>
<li data-name="Oven-S2" data-particular="s1" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/oven-s2.png'>
<a class="d-block w-100 h-100" data-name="Oven-S2" href="/danh-sach-tuong/oven-s2" title="Oven-S2">
</a>
</li>
<li data-name="Shirahoshi-S2" data-particular="s3" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/shirahoshi-s2.png'>
<a class="d-block w-100 h-100" data-name="Shirahoshi-S2" href="/danh-sach-tuong/shirahoshi-s2" title="Shirahoshi-S2">
</a>
</li>
<li data-name="Lucci-S2" data-particular="s2" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/lucci-s2.png'>
<a class="d-block w-100 h-100" data-name="Lucci-S2" href="/danh-sach-tuong/lucci-s2" title="Lucci-S2">
</a>
</li>
<li data-name="Pudding-S2" data-particular="s3" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/pudding-s2.png'>
<a class="d-block w-100 h-100" data-name="Pudding-S2" href="/danh-sach-tuong/pudding-s2" title="Pudding-S2">
</a>
</li>
<li data-name="Smoothie-S2" data-particular="s3" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/charlotte-smoothie-s2.png'>
<a class="d-block w-100 h-100" data-name="Smoothie-S2" href="/danh-sach-tuong/smoothie-s2" title="Smoothie-S2">
</a>
</li>
<li data-name="Kaya-S2" data-particular="s3" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/kaya-s2.png'>
<a class="d-block w-100 h-100" data-name="Kaya-S2" href="/danh-sach-tuong/kaya-s2" title="Kaya-S2">
</a>
</li>
<li data-name="Cracker-S2" data-particular="s2" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/cracker-s2.png'>
<a class="d-block w-100 h-100" data-name="Cracker-S2" href="/danh-sach-tuong/cracker-s2" title="Cracker-S2">
</a>
</li>
<li data-name="Kaku-S" data-particular="s1" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/kaku-s(1).png'>
<a class="d-block w-100 h-100" data-name="Kaku-S" href="/danh-sach-tuong/kaku-s" title="Kaku-S">
</a>
</li>
<li data-name="Chopper-S" data-particular="s3" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/chopper-s.png'>
<a class="d-block w-100 h-100" data-name="Chopper-S" href="/danh-sach-tuong/chopper-s" title="Chopper-S">
</a>
</li>
<li data-name="Killer-S" data-particular="s1" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/killer-s.png'>
<a class="d-block w-100 h-100" data-name="Killer-S" href="/danh-sach-tuong/killer-s" title="Killer-S">
</a>
</li>
<li data-name="Boa Hancock-S" data-particular="s3" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/boa-s.png'>
<a class="d-block w-100 h-100" data-name="Boa Hancock-S" href="/danh-sach-tuong/boa-hancock-s" title="Boa Hancock-S">
</a>
</li>
<li data-name="Kaya-S" data-particular="s3" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/kaya-s(1).png'>
<a class="d-block w-100 h-100" data-name="Kaya-S" href="/danh-sach-tuong/kaya-s" title="Kaya-S">
</a>
</li>
<li data-name="Jinbe-S" data-particular="s1" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/jinbei-s.png'>
<a class="d-block w-100 h-100" data-name="Jinbe-S" href="/danh-sach-tuong/jinbe-s" title="Jinbe-S">
</a>
</li>
<li data-name="Law-S" data-particular="s3" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/law-s.png'>
<a class="d-block w-100 h-100" data-name="Law-S" href="/danh-sach-tuong/law-s" title="Law-S">
</a>
</li>
<li data-name="Nico Robin-S" data-particular="s3" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/robin-s.png'>
<a class="d-block w-100 h-100" data-name="Nico Robin-S" href="/danh-sach-tuong/nico-robin-s" title="Nico Robin-S">
</a>
</li>
<li data-name="Zoro-S" data-particular="s2" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/zoro-s.png'>
<a class="d-block w-100 h-100" data-name="Zoro-S" href="/danh-sach-tuong/zoro-s" title="Zoro-S">
</a>
</li>
<li data-name="Franky-S" data-particular="s1" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/franky-s.png'>
<a class="d-block w-100 h-100" data-name="Franky-S" href="/danh-sach-tuong/franky-s" title="Franky-S">
</a>
</li>
<li data-name="Brook-S" data-particular="s2" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/brook-s.png'>
<a class="d-block w-100 h-100" data-name="Brook-S" href="/danh-sach-tuong/brook-s" title="Brook-S">
</a>
</li>
<li data-name="Sanji-S" data-particular="s2" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/sanji-s.png'>
<a class="d-block w-100 h-100" data-name="Sanji-S" href="/danh-sach-tuong/sanji-s" title="Sanji-S">
</a>
</li>
<li data-name="Nami-S" data-particular="s3" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/nami-s.png'>
<a class="d-block w-100 h-100" data-name="Nami-S" href="/danh-sach-tuong/nami-s" title="Nami-S">
</a>
</li>
<li data-name="Usopp-S" data-particular="s1" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/usopp-s.png'>
<a class="d-block w-100 h-100" data-name="Usopp-S" href="/danh-sach-tuong/usopp-s" title="Usopp-S">
</a>
</li>
<li data-name="Lucci-S" data-particular="s2" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/lucci-s.png'>
<a class="d-block w-100 h-100" data-name="Lucci-S" href="/danh-sach-tuong/lucci-s" title="Lucci-S">
</a>
</li>
<li data-name="Shirahoshi-S" data-particular="s3" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/shirahoshi-s.png'>
<a class="d-block w-100 h-100" data-name="Shirahoshi-S" href="/danh-sach-tuong/shirahoshi-s" title="Shirahoshi-S">
</a>
</li>
<li data-name="Doflamingo-S" data-particular="s2" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/dof-s.png'>
<a class="d-block w-100 h-100" data-name="Doflamingo-S" href="/danh-sach-tuong/doflamingo-s" title="Doflamingo-S">
</a>
</li>
<li data-name="Sugar-S" data-particular="s2" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/sugar-s.png'>
<a class="d-block w-100 h-100" data-name="Sugar-S" href="/danh-sach-tuong/sugar-s" title="Sugar-S">
</a>
</li>
<li data-name="Yonji-S" data-particular="s3" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/yonji-s.png'>
<a class="d-block w-100 h-100" data-name="Yonji-S" href="/danh-sach-tuong/yonji-s" title="Yonji-S">
</a>
</li>
<li data-name="Niji-S" data-particular="s2" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/niji-s.png'>
<a class="d-block w-100 h-100" data-name="Niji-S" href="/danh-sach-tuong/niji-s" title="Niji-S">
</a>
</li>
<li data-name="Ichiji-S" data-particular="s1" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/ichiji-s.png'>
<a class="d-block w-100 h-100" data-name="Ichiji-S" href="/danh-sach-tuong/ichiji-s" title="Ichiji-S">
</a>
</li>
<li data-name="Reiju-S" data-particular="s3" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/reiju-s.png'>
<a class="d-block w-100 h-100" data-name="Reiju-S" href="/danh-sach-tuong/reiju-s" title="Reiju-S">
</a>
</li>
<li data-name="Oven-S" data-particular="s1" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/oven-s(1).png'>
<a class="d-block w-100 h-100" data-name="Oven-S" href="/danh-sach-tuong/oven-s" title="Oven-S">
</a>
</li>
<li data-name="Smoothie-S" data-particular="s3" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/charlotte-smoothie-s.png'>
<a class="d-block w-100 h-100" data-name="Smoothie-S" href="/danh-sach-tuong/smoothie-s" title="Smoothie-S">
</a>
</li>
<li data-name="Marco-S" data-particular="s1" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/marco-s.png'>
<a class="d-block w-100 h-100" data-name="Marco-S" href="/danh-sach-tuong/marco-s" title="Marco-S">
</a>
</li>
<li data-name="Pudding-S" data-particular="s3" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/pudding-s.png'>
<a class="d-block w-100 h-100" data-name="Pudding-S" href="/danh-sach-tuong/pudding-s" title="Pudding-S">
</a>
</li>
<li data-name="Cracker-S" data-particular="s2" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/cracker-s.png'>
<a class="d-block w-100 h-100" data-name="Cracker-S" href="/danh-sach-tuong/cracker-s" title="Cracker-S">
</a>
</li>
<li data-name="Luffy-S" data-particular="s2" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/luffy-s.png'>
<a class="d-block w-100 h-100" data-name="Luffy-S" href="/danh-sach-tuong/luffy-s" title="Luffy-S">
</a>
</li>
<li data-name="Ace-S" data-particular="s3" data-bg='/assets/stms/files/uploads/images/heros/Avatar%20432x144/ace-s.png'>
<a class="d-block w-100 h-100" data-name="Ace-S" href="/danh-sach-tuong/ace-s" title="Ace-S">
</a>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</div>
