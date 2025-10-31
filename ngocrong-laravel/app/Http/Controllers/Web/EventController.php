<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\View\View;

class EventController extends Controller
{
    public function index(Request $request): View
    {
        $events = Event::query()
            ->when($request->filled('search'), function ($query) use ($request) {
                $term = $request->string('search')->trim()->value();
                $query->where('title', 'like', '%' . $term . '%');
            })
            ->latest('starts_at')
            ->paginate(9);

        return view('pages.events.index', compact('events'));
    }

    public function show(Event $event): View
    {
        $relatedEvents = Event::query()
            ->whereKeyNot($event->id)
            ->latest('starts_at')
            ->limit(3)
            ->get();

        return view('pages.events.show', compact('event', 'relatedEvents'));
    }
}
