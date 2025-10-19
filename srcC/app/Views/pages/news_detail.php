<?php
/* News detail view
 * Renders the content for a given news slug.  The variable
 * `$content` is expected to contain raw HTML pulled from the original
 * news detail page.  It is injected by the NewsController.
 */
?>
<div class="news-detail">
    <?= $content ?? '' ?>
</div>