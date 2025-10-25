<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\View\View;
use Omnipay\Common\Message\ResponseInterface;

class VnPayController extends Controller
{
    public function purchase(Request $request): RedirectResponse|View
    {
        if (! app()->bound('omnipay')) {
            Log::warning('Omnipay is not configured. Returning stub view for VNPay purchase.');

            return view('payments.vnpay.purchase');
        }

        /** @var \Psr\Container\ContainerInterface|\Illuminate\Support\Manager $manager */
        $manager = app('omnipay');

        /** @var \Omnipay\Common\AbstractGateway $gateway */
        $gateway = method_exists($manager, 'driver')
            ? $manager->driver('vnpay')
            : $manager->gateway('vnpay');

        /** @var ResponseInterface $response */
        $response = $gateway->purchase([
            'amount' => $request->input('amount', '100000'),
            'currency' => 'VND',
            'returnUrl' => route('payment.vnpayReturn'),
            'orderId' => 'VNPAY-' . now()->format('YmdHis'),
            'description' => 'Thanh toán gói nạp mẫu VNPay',
        ])->send();

        if ($response->isRedirect()) {
            return $response->redirect();
        }

        return view('payments.vnpay.purchase', [
            'error' => $response->getMessage(),
        ]);
    }

    public function return(Request $request): View
    {
        return view('payments.vnpay.return', [
            'query' => $request->all(),
        ]);
    }
}
