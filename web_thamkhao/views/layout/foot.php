<footer>
    <div class="community__footer">
        <p class="desc__footer">
            Tham gia cộng đồng thảo luận của chúng tôi trên các nền tảng!
        </p>
        <a href="<?php echo htmlspecialchars($app->config->get('ZALO_GROUP')); ?>" class="btn__community" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/zalo.png" alt="Zalo">
        </a>
    </div>
    <p class="recommend__footer">
        Chơi quá 180 phút một ngày sẽ ảnh hưởng đến sức khỏe.

    </p>
</footer>
</div>
</body>
<script src="/assets/js/sweetalert2@11.js"></script>
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
<script src="/assets/js/app.js" defer></script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        var el = document.getElementById('snow');
        if (el && typeof window.initParticles === 'function') {
            window.initParticles('snow');
        }
    });
</script>

</html>