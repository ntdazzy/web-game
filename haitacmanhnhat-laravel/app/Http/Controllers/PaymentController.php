<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Log;

class PaymentController extends Controller
{
    /**
     * Example checkout stub that prepares a Stripe Checkout Session.
     *
     * This method assumes Cashier has been configured with a valid Stripe key.
     * Replace the placeholder payload with real product and customer data.
     */
    public function checkout(): View
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
