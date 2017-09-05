<!--h-->
# Enso Vue Components

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c0ebffca7afd42beaf0e48b3113096df)](https://www.codacy.com/app/laravel-enso/VueComponents?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/VueComponents&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://styleci.io/repos/99346868/shield?branch=master)](https://styleci.io/repos/99346868)
[![License](https://poser.pugx.org/laravel-enso/vuecomponents/license)](https://https://packagist.org/packages/laravel-enso/vuecomponents)
[![Total Downloads](https://poser.pugx.org/laravel-enso/vuecomponents/downloads)](https://packagist.org/packages/laravel-enso/vuecomponents)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/vuecomponents/version)](https://packagist.org/packages/laravel-enso/vuecomponents)
<!--/h-->

VueJS Components Collection for [Laravel Enso](https://github.com/laravel-enso/Enso).

### Features
- `Dashboard`, a highly integrated components used for easily rendering a dashboard containing charts or datatables
- `Datepicker`, a beautiful date/time picker based on [flatpickr](https://chmln.github.io/flatpickr/)
- `Modal`, an ultra light modal component
- `Paginate`, a simple to use and powerful pagination module
- `Typeahead`, an updated & improved typeahead  
- `VueFilter`, a single option filtering component, that can be used in conjuction with datatables or anywhere else you need it 

#### Dashboard
- gets the data for rendering its own components from the user's preferences object
- take an optional `params` object, used for cusomization inside the chart or datatable children 

#### Datepicker
Takes the following parameters:
- `name` - string, the name of the underlying input. Defaults to null.
- `time` - boolean, enables the time picking functionality alongisde date. Defaults to false. 
- `timeOnly` - boolean, enables just the time picking functionality. Defaults to false.
- `placeholder` - string, placeholder for the input. Defaults to the global label kept in the Store.
- `disabled` - boolean, disables the editing of the picker. Defaults to false.
- `format` - string, format of the date. Defaults to `d-m-Y`.
- `inputClass` - string, the class of the input. Defaults to `form-control`.

#### Modal
Takes the following parameters:
- `show`, boolean, makes the modal visible. Defaults to false.
- `header`, boolean, shows/hides the dialog's header. Defaults to false. 
- `container-style`, object, styles the modal container. Defaults to `{ 'max-width': '250px' }`.

#### Paginate
Takes the following parameters:
- `list`, array, the items that need to be paginated. Required.
- `length`, number, the starting number of items on one page. Defaults to 10.
- `lengths`, array, an array of lengths to choose from. Defaults to `[10, 15, 20, 25, 30]`.
- `border`, boolean, a flag for showing a border arount the component. Defaults to `false`.    

#### Typeahead
Takes the following parameters:
- `url` - string, the link to query for results. Required.
- `display-property` - string, the attribute to be displayed when showing the retrieved items. Required.
- `disabled` - boolean, disables the component. Defaults to false.
- `limit` - number, the number of items to display when typing. Defaults to 10.
- `params` - object, parameters to be passed when making the request to the backend. Defaults to null.
- `placeholder` - string, is an input placeholder. Defaults to 'Searching for something?'
- `reg-exp` - string, regular expression used to validate the user input. Defaults to `^[A-Za-z0-9 _-]*[A-Za-z0-9][A-Za-z0-9 _-]*$` 
- `value` - string, the starting value of the input. Defaults to empty string.

#### VueFilter
Takes the following parameters:
- `options` - object, the options the user can choose from when filtering. Required
- `title` - string, the title to display above the options. Defaults to null.
- `theme` - string, the theme to use for styling the box. Defaults to `primary`.


<!--h-->
### Contributions

are welcome. Pull requests are great, but issues are good too.

### License

This package is released under the MIT license.
<!--/h-->