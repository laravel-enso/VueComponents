<template>

    <div class="box vue-filter">
        <div class="has-text-centered">
            <b>{{ title }}</b>
        </div>
        <vue-select
            :options=options
            :value=internalValue
            :source=source
            :params=params
            :pivotParams=pivotParams
            :customParams=customParams
            :placeholder=placeholder
            @input=update>
        </vue-select> 
    </div>

</template>

<script>

import VueSelect from '../select/VueSelect.vue';

export default {
    components: { VueSelect },

    props: {
        title: {
            type: String,
            default: null,
        },
        options: {
            type: Object,
            default() {
                return {};
            },
        },
        value: {
            required: true,
        },
        source: {
            type: String,
            default: null,
        },
        params: {
            type: Object,
            default: null,
        },
        pivotParams: {
            type: Object,
            default: null,
        },
        customParams: {
            type: Object,
            default: null,
        },
        placeholder: {
            type: String,
            default: 'Please choose',
        },
    },

    data() {
        return {
            internalValue: this.value,
        };
    },

    methods: {
        update(value) {
            this.$emit('input', value);
        }
    },
};

</script>

<style>

    .box.vue-filter {
        padding: 0.5rem;
    }
</style>