<template>

    <vue-filter
            :options="options"
            v-bind="$attrs"
            v-on="$listeners">
    </vue-filter>

</template>

<script>

import VueFilter from '../bulma/VueFilter.vue';


export default {
    components: { VueFilter },
    props: {
        yesLabel: {
            type: String,
            default: 'Yes',
        },
        noLabel: {
            type: String,
            default: 'No',
        },
    },

    data: function() {
        return {
            "options": [{
                "value": 1,
                "label": this.yesLabel,
            }, {
                "value": 0,
                "label": this.noLabel,
            }],
        }
    },   
};

</script>