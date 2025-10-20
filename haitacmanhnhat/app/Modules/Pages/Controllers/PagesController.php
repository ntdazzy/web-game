<?php
namespace App\Modules\Pages\Controllers;

use App\Core\Controller;
use App\Core\Http\Request;
use App\Modules\Home\Services\HomeService;

class PagesController extends Controller
{
    public function show(Request $request, string $slug): void
    {
        $slug = trim($slug, '/');
        if ($slug === '') {
            $this->renderHome();
            return;
        }

        if ($slug === 'index') {
            $this->renderHome();
            return;
        }

        $this->render('pages/' . $slug);
    }

    private function renderHome(): void
    {
        $service = new HomeService();
        $this->render('home::index', $service->landingPageContext());
    }
}
