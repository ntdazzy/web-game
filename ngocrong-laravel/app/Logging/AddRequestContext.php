<?php

namespace App\Logging;

use Illuminate\Http\Request;
use Monolog\LogRecord;

class AddRequestContext
{
    public function __invoke($logger): void
    {
        $logger->pushProcessor(function (LogRecord $record) {
            $request = app()->bound('request') ? app('request') : null;

            if ($request instanceof Request) {
                $record->extra['ip'] = $request->ip();
                $record->extra['url'] = $request->fullUrl();
                $record->extra['method'] = $request->method();
            }

            return $record;
        });
    }
}
