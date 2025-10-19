<?php
namespace App\Modules\Home\Controllers;

use App\Core\Controller;
use App\Core\Http\Request;
use App\Modules\Home\Services\HomeService;

class HomeController extends Controller
{
    public function __construct(private ?HomeService $homeService = null)
    {
        $this->homeService = $homeService ?? new HomeService();
    }

    public function index(Request $request): void
    {
        $context = $this->homeService->landingPageContext();
        $this->render('Home::index', $context);
    }
}
