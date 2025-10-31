<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Giftcode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class GiftcodeController extends Controller
{
    public function redeem(Request $request)
    {
        $validated = $request->validate([
            'code' => ['required', 'string', 'max:255'],
        ]);

        $normalizedCode = strtoupper(trim($validated['code']));

        $giftcode = DB::transaction(function () use ($normalizedCode) {
            $record = Giftcode::whereRaw('UPPER(code) = ?', [$normalizedCode])->lockForUpdate()->first();

            if (! $record) {
                throw ValidationException::withMessages([
                    'code' => __('Mã giftcode không hợp lệ.'),
                ]);
            }

            if ($record->status !== 'active') {
                throw ValidationException::withMessages([
                    'code' => __('Giftcode này đã bị khóa hoặc sử dụng hết.'),
                ]);
            }

            if ($record->isExpired()) {
                throw ValidationException::withMessages([
                    'code' => __('Giftcode đã hết hạn sử dụng.'),
                ]);
            }

            if (! $record->hasAvailability()) {
                throw ValidationException::withMessages([
                    'code' => __('Giftcode đã được sử dụng tối đa số lần cho phép.'),
                ]);
            }

            $record->increment('used_count');

            return $record->refresh();
        });

        return response()->json([
            'message' => __('Giftcode áp dụng thành công.'),
            'data' => [
                'code' => $giftcode->code,
                'type' => $giftcode->type,
                'payload' => (object) ($giftcode->payload ?? []),
                'expires_at' => optional($giftcode->expired_at)->toIso8601String(),
                'remaining_uses' => max(0, $giftcode->max_uses - $giftcode->used_count),
            ],
        ]);
    }
}
