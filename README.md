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
- `Dropdown`, a simple dropdown
- `Modal`, an ultra light modal component
- `Overlay`, an overlay container
- `Paginate`, a simple to use and powerful pagination module
- `Popover`, a basic dual option popover useful for confirming actions
- `Tabs`, a tab manager component
- `Typeahead`, exactly what the name says
- `VueFilter`, a single option filtering component, that can be used in conjunction with datatables or anywhere else you need it 
- `VueSelectFilter`, a select option filtering component

##### Card
Takes the following parameters:
- `collapsed`, boolean, flag for the initial state of the card | default `false` | (optional)
- `icon`, object, an icon object for the card's icon | default `null` | (optional)
- `title`, string, the name that's displayed as title | default `null` | (optional)
- `search`, boolean, flag for showing the search box | default `false` | (optional)
- `badge`, number, value that's displayed | default `null` | (optional)
- `refresh`, boolean, flag for refresh control | default `false`| (optional)
- `fixed`, boolean, flag for making the card non collapsible | default `false` | (optional)
- `removable`, boolean, flag for showing the close button | default `false`| (optional)
- `controls`, number, option for generating the needed number of controls slots | default `0` | (optional)
- `overlay`, boolean, flag for rendering the overlay inner component | default `false`, | (optional)

#### DateIntervalFilter
Takes the following parameters:
- `title`, string, the name that's displayed as title | default `null` | (optional)
- `min`, the starting date for lower limit date selector | required
- `max` - the starting date for higher limit date selector | required

#### Dropdown
Takes the following parameters:
- `width`, number, the minimum width for the dropdown menu | default `64` | (required)
- `height` - number, the maximum height for the dropdown content | default `200` | (optional)

#### IntervalFilter
Takes the following parameters:
- `title`, string, the name that's displayed as title | default `null` | (optional)
- `type`, string, the type of the two filter inputs | required
- `min`, the starting date for lower limit input | required
- `max` - the starting date for higher limit input | required

#### Modal
Takes the following parameters:
- `show`, boolean, makes the modal visible | (required)
- `card`, boolean, if true, renders a card, otherwise renders a box | defaults to `false` | (optional)

#### Overlay
Takes the following parameters:
- `size`, small/medium/large, size of the loader | default `small` | (optional)
- `transparent`, boolean, sets the transparency | default `false` | (optional)
- `color`, string, the color code for the overlay | default `#f44336` | (optional)

#### Paginate
Takes the following parameters:
- `list`, array, the items that need to be paginated | (required)
- `length`, number, the starting number of items on one page | default `10` | (optional)
- `lengths`, array, an array of lengths to choose from | default `[10, 15, 20, 25, 30]` | (optional)
- `border`, boolean, a flag for showing a border around the component | default `false` | (optional)    

#### Popover
Takes the following parameters:
- `placement`, string, the placement position (`top`, `top-start`, `top-end`, `right`, `right-start`, `right-end`, 
`bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, `left-end`) | default `bottom` | (required)
- `trigger`, string, the type of trigger to be used (`hover`, `click`, `focus`, `manual`) | default `click` | (optional)
- `open`, boolean, flag that make the component visible | default `false` | (optional)

#### Tabs
Takes the following parameters:
- `alignment`, left/center/right, the alignment of the tabs | default `left` | (optional)
- `size`, small/normal,medium/large, the size of the element, as styled by bulma's is-* classes| default `normal` | (optional)
- `boxed`, boolean, flag that toggles the rendering of the tabs in a box | default `false` | (optional)
- `toggle`, boolean, flag that toggles the `is-toggle` bulma class, for mutually exclusive tabs | default `false` | (optional)
- `toggleRounded`, boolean, flag that toggles the `is-toggle-rounded` bulma class, where the first and last tabs are rounded | default `false` | (optional)
- `fullwidth`, boolean, flag that toggles the `is-fullwidth` bulma class, where the tabs take up the entire available width | default `false` | (optional)
- `default`, number, tab index value, sets the active tab | default `0` | (optional)

#### Tab
Takes the following parameters:
- `id`, string/object, a value used to identify the tab - gets passed to parent (Tabs) component | required 

#### Typeahead
Takes the following parameters:
- `disabled`, boolean, the title string | default `null` | (optional)
- `length`, number, the number of retrieved options | default `10` | (optional)
- `source`, string, the endpoing that gives back results | (required)
- `params`, object, parameters object that gets sent with the request | default `null` | (optional)
- `label`, string, label | (required) 
- `placeholder`, string | default `What are you searching for today?` | (optional)
- `validator`, boolean, flag that enables the value validation using the regular expression | default `false` | (optional)
- `regExp`, RegExp, validation regular expression | default `/^[A-Za-z0-9 _-]*[A-Za-z0-9 _-]*$/` | (optional)
- `value`, String, starting value | default `` | (optional)

#### VueFilter
Takes the following parameters:
- `title` - string, the title to display above the options | default `null` | (optional)
- `options` - object, the options the user can choose from when filtering | default `{}` | (required)
- `value` -  the selected value from the list of options | (required)
- `theme` - string, the theme to use for styling the box | default `primary` | (optional)
- `hideOff` - boolean, flag for showing an off switch | default `false` | (optional)

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

#### VueSelectFilter
Takes the following parameters:
- `title` - string, the title to display above the options | default `null` | (optional)
- `value` -  the selected value from the list of options | default null | required

Since this component is a wrapper for VueSelect, and all listeners and attributes are passed-through,
the regular VueSelect options are available

#### FileUploader
Takes the following parameters:

- `multiple` - boolean, flag that allows single/multiple selection | default false | (optional)
- `url` - string, the url to post to the selected files | (required)
- `fileSizeLimit` - number, the max file size for the upload | default `8388608` | (optional)
- `params` - object, params that get sent along with the files | default `null` | (optional)

#### NProgress
On init, the component adds itself to the Axios `request` & `response` interceptors, as well as to the `beforeEach` & `afterEach` interceptors of VueRouter so it starts and stops without manual intervention.

The `NProgress.vue` listens to the following, self-descriptive, events:
- `nprogress-add-request`
- `nprogress-add-response`
- `nprogress-done`


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