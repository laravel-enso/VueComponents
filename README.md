<!--h-->
# ActionLogger

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/dc3819bf2c654b3d8dcaaed8898b214f)](https://www.codacy.com/app/laravel-enso/ActionLogger?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/ActionLogger&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://styleci.io/repos/85554059/shield?branch=master)](https://styleci.io/repos/85554059)
[![License](https://poser.pugx.org/laravel-enso/actionlogger/license)](https://https://packagist.org/packages/laravel-enso/actionlogger)
[![Total Downloads](https://poser.pugx.org/laravel-enso/actionlogger/downloads)](https://packagist.org/packages/laravel-enso/actionlogger)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/actionlogger/version)](https://packagist.org/packages/laravel-enso/actionlogger)
<!--/h-->

User actions logger dependency for Laravel.

### Features

- creates the `action-logger` middleware, the `action_logs` table and the `ActionLog` model
- will log all access routes covered by the `action-logger` middleware
- comes with the `ActionLogger` trait that defines the relationship to the `ActionLog` model
- each entry will record `user_id`, `url`, `route` name, http `action` verb and timestamps

### Notes

The list of actions for an user are available in each user's profile page.

The [Laravel Enso Core](https://github.com/laravel-enso/Core) package comes with this package included.

<!--h-->
### Contributions

are welcome. Pull requests are great, but issues are good too.

### License

This package is released under the MIT license.
<!--/h-->