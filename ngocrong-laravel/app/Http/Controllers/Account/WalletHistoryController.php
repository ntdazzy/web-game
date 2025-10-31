<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class WalletHistoryController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Account/Wallet/History');
    }
}
