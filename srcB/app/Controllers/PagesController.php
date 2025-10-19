<?php
namespace App\Controllers;

class PagesController extends Controller
{
    public function show(string $slug): void
    {
        $slug = trim($slug, '/');
        $slug = $slug === '' ? 'index' : $slug;
        $this->render('pages/' . $slug);
    }
}
