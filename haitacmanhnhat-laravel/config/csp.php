<?php

use Spatie\Csp\Directive;
use Spatie\Csp\Keyword;
use Spatie\Csp\Policies\Basic;

return [

    /*
     * A policy will determine which CSP headers will be set. A valid CSP policy is
     * any class that extends `Spatie\Csp\Policies\Policy`
     */
    'policy' => Basic::class,

    /*
     * This policy which will be put in report only mode. This is great for testing out
     * a new policy or changes to existing csp policy without breaking anything.
     */
    'report_only_policy' => '',

    /*
     * All violations against the policy will be reported to this url.
     */
    'report_uri' => env('CSP_REPORT_URI', ''),

    /*
     * CSP headers will not be added to responses that are added to this array.
     */
    'except' => [
        //
    ],

    /*
     * Define a closure to customize CSP directives for the Basic policy.
     */
    'customize' => static function (Basic $policy): void {
        $policy
            ->addDirective(Directive::DEFAULT_SRC, [Keyword::SELF])
            ->addDirective(Directive::SCRIPT_SRC, [Keyword::SELF])
            ->addDirective(Directive::STYLE_SRC, [Keyword::SELF, Keyword::UNSAFE_INLINE])
            ->addDirective(Directive::IMG_SRC, [Keyword::SELF, 'data:'])
            ->addDirective(Directive::FONT_SRC, [Keyword::SELF])
            ->addDirective(Directive::CONNECT_SRC, [Keyword::SELF])
            ->addDirective(Directive::FRAME_SRC, ['https://js.stripe.com'])
            ->addDirective(Directive::FORM_ACTION, [Keyword::SELF]);
    },
];
