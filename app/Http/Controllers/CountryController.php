<?php

namespace App\Http\Controllers;

use App\Models\Country;
use App\Http\Resources\CountryCollection;

class CountryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return CountryCollection
     */
    public function countries(): CountryCollection
    {
        return new CountryCollection(Country::all());
    }
}
