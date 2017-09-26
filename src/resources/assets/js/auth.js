window.toastr = require('toastr');
require('toastr/build/toastr.min.css');

window.axios = require('axios');
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import Vue from 'vue';
window.Vue = Vue;

require('./modules/mixins/errorHandler');