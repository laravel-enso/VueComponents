<template>

    <div class="box vue-filter">
        <div class="has-text-centered">
            <b>{{ title }}</b>
        </div>
        <vue-select
            :options=options
            :value=internalValue
            @input=update>
        </vue-select> 
    </div>

</template>

<script>

import { mapGetters } from 'vuex';
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
    },

    computed: {
        ...mapGetters('locale', ['__']),
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