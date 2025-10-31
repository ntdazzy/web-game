<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\Giftcode;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\View;
use Inertia\Inertia;
use Inertia\Response;

class GiftcodeController extends Controller
{
    public function index(): Response
    {
        $servers = $this->buildServers();
        $codeTypes = $this->buildCodeTypes();
        $history = $this->buildHistory();

        return Inertia::render('Account/Giftcode/Redeem', [
            'servers' => $servers,
            'codeTypes' => $codeTypes,
            'history' => $history,
            'meta' => [
                'body_class' => 'wrapper-subpage overflow-y-auto',
                'page_id' => 'giftcode',
            ],
        ]);
    }

    /**
     * @return \Illuminate\Support\Collection<int, array<string, mixed>>
     */
    protected function buildServers(): Collection
    {
        return collect(config('giftcode.servers', []))
            ->map(fn (array $server) => [
                'value' => Arr::get($server, 'value'),
                'slug' => Arr::get($server, 'slug', Arr::get($server, 'value')),
                'label' => Arr::get($server, 'label', Arr::get($server, 'title', Arr::get($server, 'value'))),
                'title' => Arr::get($server, 'title'),
            ]);
    }

    /**
     * @return \Illuminate\Support\Collection<int, array<string, mixed>>
     */
    protected function buildCodeTypes(): Collection
    {
        return collect(config('giftcode.code_types', []))
            ->map(function (array $codeType) {
                $tableView = Arr::get($codeType, 'table_view');
                $tableHtml = null;

                if ($tableView && View::exists($tableView)) {
                    $tableHtml = trim(View::make($tableView)->render());
                }

                return [
                    'id' => Arr::get($codeType, 'id'),
                    'label' => Arr::get($codeType, 'label'),
                    'code' => Arr::get($codeType, 'code'),
                    'default_code' => Arr::get($codeType, 'default_code'),
                    'table_html' => $tableHtml,
                ];
            });
    }

    /**
     * @return \Illuminate\Support\Collection<int, array<string, mixed>>
     */
    protected function buildHistory(): Collection
    {
        return Giftcode::query()
            ->latest('updated_at')
            ->limit(10)
            ->get()
            ->map(fn (Giftcode $giftcode) => [
                'name' => ucfirst($giftcode->type),
                'code' => $giftcode->code,
                'status' => $giftcode->status,
                'server' => Arr::get($giftcode->metadata, 'server', '---'),
                'received_at' => optional($giftcode->updated_at)->toIso8601String(),
            ]);
    }
}
