<template>

    <addresses
            @form-loaded="setCountyId"
            v-bind="$attrs"
            v-on="$listeners">

        <!--customized card content-->
        <template slot="address-template" slot-scope="props">
            <br>
            <span v-if="props.address.street">{{labels.street}}: </span>
            <span v-if="props.address.number">{{labels.number}}: {{ props.address.number }}</span>
            <br>

            <span v-if="props.address.building">{{labels.building}}: {{ props.address.building }}</span>
            <span v-if="props.address.entry">{{labels.entry}}: {{ props.address.entry }}</span>
            <span v-if="props.address.floor">{{labels.floor}}: {{ props.address.floor }}</span>
            <span v-if="props.address.apartment">{{labels.apartment}}: {{ props.address.apartment }}</span>
            <br>
            <span v-if="props.address.sub_administrative_area">{{labels.neighborhood}}: {{ props.address.sub_administrative_area }}</span>
            <span v-if="props.address.city">{{labels.locality}}: {{ props.address.city }}</span>
            <br>
            <span v-if="props.address.postal_area">{{labels.postalArea}}: {{ props.address.postal_area }}</span>
            <span v-if="props.address.administrative_area">{{labels.county}}: {{ props.address.administrative_area }}</span>
            <br>
            {{ props.address.country_name }} <br>
            <i class="fa fa-sticky-note "></i> {{ props.address.obs }} <br>
        </template>

        <!--custom form elements-->
        <template slot="county_id" slot-scope="props">
            <vue-select name="county_id"
                        v-model="props.element.value"
                        @input="params.county_id=$event;props.errors.clear(props.element.column);"
                        :options="props.element.config.options">
            </vue-select>
        </template>
        <template slot="locality_id" slot-scope="props">
            <vue-select name="locality_id"
                        :params="params"
                        v-model="props.element.value"
                        @input="props.errors.clear(props.element.column);"
                        :source="props.element.config.source">
            </vue-select>
        </template>
    </addresses>

</template>
<script>

    import Addresses from './Addresses';

    export default {
        components: {Addresses},
        data() {
            return {
                labels: Store.labels,
                params: {
                    county_id: null
                }
            };
        },
        methods: {
            getCountyId(formData) {
                let attribute = formData.attributes.find(attribute => {
                    return attribute.column === 'county_id';
                });

                return attribute.value;
            },
            setCountyId(formData) {
                this.params.county_id = this.getCountyId(formData);
            }
        }
    }

</script>