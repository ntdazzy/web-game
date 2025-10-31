<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\EventResource;
use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $perPage = (int) max(1, min(50, $request->integer('per_page', 9)));

        $events = Event::query()
            ->latest('starts_at')
            ->paginate($perPage);

        return EventResource::collection($events);
    }

    public function store(Request $request)
    {
        abort(405);
    }

    public function show(Event $event)
    {
        return EventResource::make($event);
    }

    public function update(Request $request, Event $event)
    {
        abort(405);
    }

    public function destroy(Event $event)
    {
        abort(405);
    }
}
