<?php

return [
    'default' => env('OMNIPAY_DEFAULT_GATEWAY', 'vnpay'),

    'gateways' => [
        'vnpay' => [
            'driver' => 'VNPay',
            'options' => [
                'terminalId' => env('VNPAY_TMN_CODE', 'VNPAY_SANDBOX'),
                'secretKey' => env('VNPAY_HASH_SECRET', 'VNPAY_SECRET'),
                'testMode' => env('VNPAY_TEST_MODE', true),
                'vnpUrl' => env('VNPAY_ENDPOINT', 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html'),
                'command' => 'pay',
                'currCode' => 'VND',
                'locale' => 'vn',
            ],
        ],
        'momo' => [
            'driver' => 'MoMo',
            'options' => [
                'partnerCode' => env('MOMO_PARTNER_CODE', 'MOMO'),
                'accessKey' => env('MOMO_ACCESS_KEY', 'accessKey'),
                'secretKey' => env('MOMO_SECRET_KEY', 'secret'),
                'testMode' => env('MOMO_TEST_MODE', true),
                'endpoint' => env('MOMO_ENDPOINT', 'https://test-payment.momo.vn/gw_payment/transactionProcessor'),
                'returnUrl' => env('MOMO_RETURN_URL', 'http://localhost/payments/momo/return'),
                'notifyUrl' => env('MOMO_NOTIFY_URL', 'http://localhost/payments/momo/notify'),
            ],
        ],
    ],
];
