<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;

class PaymentController extends Controller
{
    public function wallet(): View
    {
        return view('payments.wallet');
    }

    public function packages(): View
    {
        return view('payments.packages');
    }

    public function convert(): View
    {
        return view('payments.convert');
    }

    public function history(): View
    {
        return view('payments.history');
    }

    /**
     * Example checkout stub that prepares a Stripe Checkout Session.
     *
     * This method assumes Cashier has been configured with a valid Stripe key.
     * Replace the placeholder payload with real product and customer data.
     */
    public function checkout(): View
    {
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
