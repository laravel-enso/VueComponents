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
- Bulma elements, suite of common, reusable components styled for Bulma
- Charts components, for the [Charts](https://github.com/laravel-enso/Charts) package
- Comments components, for the [CommentsManager](https://github.com/laravel-enso/CommentsManager) package
- Contacts components, for the [Contacts](https://github.com/laravel-enso/Contacts) package
- Datatable component, for the [Datatable](https://github.com/laravel-enso/Datatable) package
- Documents components, for the [DocumentsManager](https://github.com/laravel-enso/DocumentsManager) package
- FileUploader component, for handling the upload of files
- NProgress component, for showing load progress
- RoleManager components, for the [RoleManager](https://github.com/laravel-enso/RoleManager) package
- Select component, for the [Select](https://github.com/laravel-enso/Select) package

#### Bulma
- `Card`, a multi purpose container
- `Datepicker`, a beautiful date/time picker based on [flatpickr](https://chmln.github.io/flatpickr/)
- `Modal`, an ultra light modal component
- `Overlay`, an overlay container
- `Paginate`, a simple to use and powerful pagination module
- `Tabs`, a tab component
- `VueFilter`, a single option filtering component, that can be used in conjunction with datatables or anywhere else you need it 
- `VueSelectFilter`, a select option filtering component

##### Card
- `open`, boolean, flag for the initial state of the card | default `true` | (optional)
- `header`, boolean, flag for displaying the header | default `true` | (optional)
- `footer`, boolean, flag for displaying the footer | default `false` | (optional)
- `footer-items`, number, parameter for rendering the proper number of footer card items | default `0` | (optional)
- `icon`, string, the class name for the icon of the card | default `null` | (optional)
- `title`, string, the name that's displayed as title | default `null` | (optional)
- `search`, boolean, flag for showing the search box | default `false` | (optional)
- `badge`, number, value that's displayed | default null | (optional)
- `refresh`, boolean, flag for displaying the minimize/collapse control | default true | (optional)
- `removable`, boolean, flag for showing the close button | default true | (optional)
- `overlay`, boolean, flag for rendering the overlay inner component | default false, | (optional)
- `controls`, boolean, flag for showing the controls slots | default false | (optional)

#### Datepicker
Takes the following parameters:
- `value`, null/string/Date/Array, the selected date/date interval | default null | (required)
- `name` - string, the name of the underlying input | defaults to null | (optional)
- `time` - boolean, enables the time picking functionality alongside date | default false | (optional) 
- `timeOnly` - boolean, enables just the time picking functionality | default false | (optional)
- `placeholder` - string, placeholder for the input | defaults to the global label kept in the Store. | (optional)
- `disabled` - boolean, disables the editing of the picker | default false | (optional)
- `format` - string, format of the date | default `d-m-Y` | (optional)
- `inputClass` - string, the class of the input | default `form-control`

#### Modal
Takes the following parameters:
- `show`, boolean, makes the modal visible | defaults false | (required)
- `card`, boolean, shows/hides the dialog's header | defaults to false | (optional) 
- `container-style`, object, styles the modal container | defaults to `{}` | (optional)

#### Overlay
Takes the following parameters:
- `size`, small/medium/large, size of the loader | default small | (optional)
- `opacity`, boolean, sets the opacity class | default true | (optional)
- `color`, string, the color code for the overlay | default `#00d1b2` | (optional)

#### Paginate
Takes the following parameters:
- `list`, array, the items that need to be paginated | (required)
- `length`, number, the starting number of items on one page | default 10 | (optional)
- `lengths`, array, an array of lengths to choose from | default `[10, 15, 20, 25, 30]` | (optional)
- `border`, boolean, a flag for showing a border around the component | default false | (optional)    

#### Tabs
Takes the following parameters:
- `tabs`, array, the list of tabs to render | (required)
- `title`, string, the title string | default null | (optional)
- `align`, left/center/right, the alignment of the tabs | default `left` | (optional)
- `active`, number, the index of the active tab | default 0 | (optional)
- `icon`, string, the string class of the icon | default null | (optional)

#### VueFilter
Takes the following parameters:
- `options` - object, the options the user can choose from when filtering | default `{}` | (required)
- `value` -  the selected value from the list of options | (required)
- `title` - string, the title to display above the options | default null | (optional)
- `theme` - string, the theme to use for styling the box | default `primary` | (optional)
- `off-switch` - boolean, flag for showing an off switch | default true | (optional)

#### Charts
The `Chart.vue` component can be used anywhere by integrating it into any other component or page, and takes the following parameters:
- `type` - `bar`, `polarArea`, `pie`, `doughnut`, `radar`, `bubble` | (required)
- `data` - object containing the properly formatted data for the given chart type | (required)
- `options` - ChartJs options object | (optional)

The `ChartCard.vue` component is a chart in a Bulma card, and is meant to be used to retrieve its own data, and take the following parameters:
- `source` - the route path that will fetch the data | (required)
- `params` - parameters object that gets passed to the backend, may be used for customization of the data-set | (optional)

#### Comments
The `Comments.vue` component takes the following parameters:

- `id` - number, the id of the commentable model | (required)
- `type` - string, the commentable model alias you set at the installation step #3 | (required)
- `paginate` - number, the paginate size | default 5 | (optional)
- `open` - boolean, flag that makes the component start collapsed or open | default false | (optional)
- `title` - string, title for the component | default 'Comments' | (optional)

#### Contacts
The `Contacts.vue` component can be used anywhere and can be integrated into any other component or page, and takes the following parameters:
- `type` - string, the entity type, set in the configuration file | (required)
- `id` - number, the id of the entity | (required)
- `open` - boolean, flag which, if true, makes the component start in the open state | default false | (optional)
- `title` - title for the component | default 'Contacts' | (optional)

#### Datatable
The `Datatable.vue` takes the following parameters:
- `source` - required, must reference the controllers base route, where both initTable & getTableData endpoints exist
- `extra-filters` - reactive object of the following format
    ```
    "extraFilters": {
        "table": {
            "field_1" : '',
            "field_2" : '',
        }
    }
    ```
- `custom-params` - extra parameters sent to the back-end for custom logic / queries
    ```
    "customParams": {
        "orders": {
            dispatched: ''
        }
    }
    ```
- `interval-filters` - where `dbDateFormat` is REQUIRED if the filter values are dates. The given format has to match the database date format
    ```
    "intervalFilters": {
       "table":{
          "created_at": {
             "min":"value",
             "max":"value",
             "dbDateFormat": "Y-m-d"
          },
          "amount": {
            "min": 0,
            "max": 1000
          }
       }
    }
    ```

#### Documents
The `Documents.vue` takes the following parameters:
- `id` - number, the id of the commentable model | (required)
- `type` - string, the commentable model alias you set at the installation step #3 | (required)
- `open` - boolean, flag that makes the component start collapsed (default) or open | default false | (optional)
- `title` - string, title for the component | default `Comments` | (optional)

#### FileUploader
The `FileUploader.vue` takes the following parameters:

- `multiple` - boolean, flag for the single/multiple selection of files | default false | (optional)
- `url` - string, the url to post the uploaded file(s) to | required
- `file-size-limit` - number, the maximum file size limit | default `8388608` | (optional)
- `params` - parameters object that gets passed to the backend, may be used when processing the upload | (optional)

And emits the following events:

- `upload-start` - emitted before the beginning of the upload
- `upload-successful` - emitted after a successful upload 
- `upload-error` - emitted in case of an upload error


#### NProgress
On init, the component adds itself to the Axios `request` & `response` interceptors, as well as to the `beforeEach` & `afterEach` interceptors of VueRouter so it starts and stops without manual intervention.

The `NProgress.vue` listens to the following, self-descriptive, events:
- `nprogress-add-request`
- `nprogress-add-response`
- `nprogress-done`

#### RoleManager
The two Rolemanager related components are meant to be used together with the package, they're integrated in [Core](https://github.com/laravel-enso/Core) and are not designed to be used standalone. 

#### Select
In order to work the component needs a data source. The data source can be either an ajax for server-side, OR a formatted array.
In conclusion the component requires one of the two options `route` or `options` presented below:

The `VueSelect.vue` takes the following parameters:

- `source` - string, only for server-side. The route suffix for your controller, getOptionList will be added under the hood. | (required for server-side operation) 
- `options` - object, only where you don't need server-side. Is usually an Object built with the `buildSelectList` method from the `SelectListBuilder` trait | (required for non server-side operaiton)
- `name` - string, the name of the input | (optional)
- `multiple` - boolean, flag for operation as multi-select | default false | (optional)
- `selected` - string/number/array, the selected option | default null | (optional)
- `placeholder` - string, custom placeholder when no option in selected | (optional)
- `params` - object, list of parameters from the same table, format: `params: { 'fieldName': 'fieldValue' }` | (optional)
- `pivot-params` - object, list of pivot tables, format: `pivotParams: { 'table': null }` | (optional)
- `custom-params` - object, using customParams implies that you rewrite the 'getOptionList' method from the `SelectListBuilder` trait. You must use the static::buildSelectList method in order to format the query result in the expected format | (optional)

#### FormBuilder
The `VueForm.vue` components takes the following, required, parameter:
- `data`, object, which is FormBuilder generated object that give the component the necessary information in order to draw itself.
- `params`, object, is a parameters object that, when given, is being sent with all the requests | default null | (optional) 
May be used on the back end for extra logic/features when required. 

The `VueFormCard.vue` component takes the same parameter as `VueForm.vue`.

The distinction between the two is that `VueFormCard` is rendered inside a card wrapper component, and is more suitable for using as the only component in the page.

`VueForm` is outside of any wrapper, and may be integrated together with other more complex pages, or inside other components, such as the modal.

Note: when creating a resource and no redirect is given in the POST response, the form does not perform a redirect. 

### Vue Filter
Takes the following parameters:
- `value` - anything, the default, starting value | required
- `title` - string, the text for the box title. Defaults to null.
- `options` - array, the list of options to display. Defaults to empty array
- `offSwitch` - boolean, flag that determines if an off switch is rendered. Defaults to `true`

To use it include it in the page:
```
<vue-filter
        title="Taxes Paid"
        v-model="filters.orders.paid_taxes"
        :options="options">
</vue-filter>
```

where the `options` and `filters` may be something like:

```
options: [
    {value:true, label:"Yes"},
    {value:false, label:"No"}
],
filters: {
    orders: {                
        paid_taxes: '',                
    }
},
```

Next, when defining your DataTable, make sure you give it your filters:

```
<vue-table 
    source="orders" 
    :extra-filters="filters" 
    id="index-orders-id">
</vue-table>
```

Note that you may use more than one such filter, just bind it inside the same encompassing `filters` object 
and it will get passed to the datatables BE logic.  

### Publishes

- `php artisan vendor:publish --tag=vue-components` - the main VueJS components and their dependencies
- `php artisan vendor:publish --tag=enso-assets` - a common alias for when wanting to update the VueJS assets,
once a newer version is released, can be used with the `--force` flag

### Notes

The [Laravel Enso Core](https://github.com/laravel-enso/Core) package comes with this package included.


<!--h-->
### Contributions

are welcome. Pull requests are great, but issues are good too.

### License

This package is released under the MIT license.
<!--/h-->