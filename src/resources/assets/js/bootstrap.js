window.$ = window.jQuery = require('jquery');
require('datatables.net');
require('datatables.net-select');
require('datatables.net-colreorder');
require('datatables.net-responsive');
require('datatables.net-buttons');
require('datatables.net-buttons/js/buttons.colVis.js');
require('datatables.net-buttons/js/buttons.html5.js');

import Vue from 'vue';
window.Vue = Vue;

const bus = new Vue();
Vue.prototype.$bus = bus;

import store from './store';
Vue.use(store);

require('at.js');
require('jquery.caret');
require('at.js/dist/css/jquery.atwho.min.css');

window._ = require('lodash');

window.axios = require('axios');
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.moment = require('moment');

window.toastr = require('toastr');
require('toastr/build/toastr.min.css');

import VTooltip from 'vue-directive-tooltip';
Vue.use(VTooltip, {
    delay: 200,
    placement: 'top',
    triggers: ['hover', 'focus'],
    offset: 5
});

require('./modules/filters');
require('./modules/mixins');
require('./modules/directives');
require('./modules/prototypes');