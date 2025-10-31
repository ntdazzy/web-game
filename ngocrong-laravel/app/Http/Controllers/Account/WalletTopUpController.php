<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class WalletTopUpController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('Account/Wallet/TopUp');
    }
}
