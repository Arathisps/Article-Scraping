<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index() {
        return Article::latest()->get();
    }

    public function show(\) {
        return Article::findOrFail(\);
    }

    public function store(Request \) {
        return Article::create(\->all());
    }

    public function update(Request \, \) {
        \ = Article::findOrFail(\);
        \->update(\->all());
        return \;
    }

    public function destroy(\) {
        Article::destroy(\);
        return response()->json(['message' => 'Deleted']);
    }
}
