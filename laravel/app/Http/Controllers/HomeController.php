<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function home(){
        //    dd(Auth::user()) ;
           return view('home.index');
        }
}
