<?php

namespace LaravelEnso\VueComponents;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->publishes([
            __DIR__.'/resources/assets/js' => resource_path('assets/js'),
        ], 'vue-components');

        $this->publishes([
            __DIR__.'/resources/assets/js' => resource_path('assets/js'),
        ], 'enso-assets');
    }

    public function register()
    {
        //
    }
}
