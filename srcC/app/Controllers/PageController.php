<?php
namespace App\Controllers;

class PageController extends Controller
{
    public function show($view)
    {
        return $this->render('pages.' . $view);
    }
}
