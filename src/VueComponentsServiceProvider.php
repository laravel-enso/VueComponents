<?php

namespace LaravelEnso\VueComponents;

use Illuminate\Support\ServiceProvider;

class VueComponentsServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->publishes([
            __DIR__.'/resources/assets/js' => resource_path('assets/js/vendor/laravel-enso'),
        ], 'enso-vue-components');

        $this->publishes([
            __DIR__.'/resources/assets/js' => resource_path('assets/js/vendor/laravel-enso'),
        ], 'enso-update');
    }

    public function register()
    {
        //
    }
}
