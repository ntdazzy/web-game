<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Event;
use Illuminate\View\View;

class EventController extends Controller
{
    public function index(): View
    {
        $events = Event::query()
            ->latest('starts_at')
            ->paginate(9);

        return view('pages.events.index', compact('events'));
    }
}
