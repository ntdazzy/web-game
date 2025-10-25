<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Stripe\Checkout\Session;
use Stripe\Stripe;

class PaymentController extends Controller
{
    /**
     * Example checkout stub that prepares a Stripe Checkout Session.
     *
     * This method assumes Cashier has been configured with a valid Stripe key.
     * Replace the placeholder payload with real product and customer data.
     */
    public function checkout(Request $request): View|RedirectResponse
    {
        if (! config('cashier.key')) {
            Log::warning('Stripe key missing, returning checkout stub view.');

            return view('payments.stripe-checkout');
        }

        Stripe::setApiKey(config('cashier.secret'));

        $session = Session::create([
            'mode' => 'payment',
            'success_url' => route('payment.success'),
            'cancel_url' => route('payment.cancel'),
            'line_items' => [
                [
                    'price_data' => [
                        'currency' => 'vnd',
                        'product_data' => [
                            'name' => 'Gói nạp kim cương mẫu',
                        ],
                        'unit_amount' => 50000,
                    ],
                    'quantity' => 1,
                ],
            ],
        ]);

        return redirect($session->url);
    }

    public function success(): View
    {
        return view('payments.success');
    }

    public function cancel(): View
    {
        return view('payments.cancel');
    }
}
