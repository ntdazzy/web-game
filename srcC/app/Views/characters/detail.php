<?php
/* Character detail view
 * Renders the content for a given character slug.  The variable
 * `$content` is expected to contain raw HTML pulled from the original
 * character detail page.  It is injected by the CharacterController.
 */
?>
<div class="character-detail">
    <?= $content ?? '' ?>
</div>