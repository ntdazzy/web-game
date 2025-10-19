<?php
declare(strict_types=1);

$appScript = asset_url('assets/js/app.js?v=1');
$scriptView = $page['script_view'] ?? $view;
$viewScript = null;

$candidates = [];
if (is_string($scriptView) && $scriptView !== '') {
    $candidates[] = $scriptView;
}
$candidates[] = 'common';

foreach (array_unique($candidates) as $candidate) {
    $candidatePath = 'assets/js/pages/' . $candidate . '.js';
    if (is_file(PATHS['public'] . '/' . $candidatePath)) {
        $viewScript = asset_url($candidatePath . '?v=1');
        break;
    }
}
?>
    <script defer src="<?= ht_attr($appScript); ?>"></script>
<?php if ($viewScript): ?>
    <script defer src="<?= ht_attr($viewScript); ?>"></script>
<?php endif; ?>
<?php foreach ($scriptsFooter as $script):
    $scriptPath = strpos($script, '?') === false ? $script . '?v=1' : $script;
?>
    <script defer src="<?= ht_attr(asset_url($scriptPath)); ?>"></script>
<?php endforeach; ?>
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16807771965"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-16807771965');
    </script>
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-P3Q6G85M');</script>
<?php if (!empty($page['login_widget_script'])): ?>
    <script>
        const DOMAIN = window.location.hostname;
        const jsonData = {
            script: '<?= addslashes($page['login_widget_script']); ?>//haitacmanhnhat.vn/assets/js/widget.loginf9e3.js',
            redirect: '<?= addslashes(url_for('qua-nap-web')); ?>',
        };
        const cookieDomain = '.haitacmanhnhat.vn';
        const linkAjaxGiftcode = DOMAIN + '/giftcode/fetch-code-by-id';
        const historyGiftcode = DOMAIN + '/giftcode/fetch-history';
    </script>
<?php endif; ?>
