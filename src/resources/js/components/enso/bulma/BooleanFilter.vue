<template>

    <vue-filter icons
        :options="options"
        :value="value"
        v-bind="$attrs"
        v-on="$listeners"/>

</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import VueFilter from '../bulma/VueFilter.vue';

library.add(faCheck, faTimes);

export default {
    name: 'BooleanFilter',

    components: { VueFilter },

    props: {
        value: {
            type: null,
            default: null,
        },
    },

    data() {
        return {
            options: [{
                value: true,
                label: 'check',
                class: 'has-text-success',
            }, {
                value: false,
                label: 'times',
                class: 'has-text-danger',
            }],
        };
    },
};

</script>
