<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\WalletTransactionResource;
use App\Models\WalletTransaction;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class WalletTransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $user = $request->user();

        $perPage = (int) max(1, min(50, $request->integer('per_page', 10)));

        $transactions = WalletTransaction::query()
            ->where('account_id', $user->id)
            ->when($request->filled('type'), function ($query) use ($request) {
                $query->where('type', Str::lower($request->input('type')));
            })
            ->orderByDesc('processed_at')
            ->orderByDesc('created_at')
            ->paginate($perPage);

        return WalletTransactionResource::collection($transactions);
    }

    public function store(Request $request)
    {
        abort(405);
    }

    public function show(WalletTransaction $walletTransaction, Request $request)
    {
        abort_unless($walletTransaction->account_id === $request->user()->id, 404);

        return WalletTransactionResource::make($walletTransaction);
    }

    public function update(Request $request, WalletTransaction $walletTransaction)
    {
        abort(405);
    }

    public function destroy(WalletTransaction $walletTransaction)
    {
        abort(405);
    }
}
