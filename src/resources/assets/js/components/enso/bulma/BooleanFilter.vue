<template>

    <vue-filter
            :options="options"
            :icons="true"
            v-bind="$attrs"
            v-on="$listeners">
    </vue-filter>

</template>

<script>

import VueFilter from '../bulma/VueFilter.vue';


export default {
    components: { VueFilter },

    data: function() {
        return {
            "options": [{
                "value": true,
                "label": 'check',
                "class": 'has-text-success',
            }, {
                "value": false,
                "label": 'times',
                "class": 'has-text-danger',
            }],
        }
    },   
};

</script>