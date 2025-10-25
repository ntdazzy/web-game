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
        Log::info('Payment checkout is currently disabled (legacy placeholder).');

        return view('payments.stripe-checkout');
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
