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
        Log::info('VNPay purchase is currently disabled (legacy placeholder).');

        return view('payments.vnpay.purchase', [
            'error' => 'VNPay integration đang được cập nhật.',
        ]);
    }

    public function return(Request $request): View
    {
        return view('payments.vnpay.return', [
            'query' => $request->all(),
        ]);
    }
}
