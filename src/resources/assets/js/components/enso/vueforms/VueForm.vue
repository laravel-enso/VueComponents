<template>

    <div class="form-wrapper">
        <form @submit.prevent="submit()">
            <div class="columns is-multiline">
                <div v-for="field in data.fields"
                    class="column"
                    :class="columnSize">
                    <div class="field">
                        <label class="label">
                            {{ field.label }}
                        </label>
                        <p v-if="errors.has(field.column)"
                            class="help is-danger is-pulled-right">
                            {{ errors.get(field.column) }}
                        </p>
                        <span v-if="field.meta.custom">
                            <slot :name="field.column"
                                :field="field"
                                :errors="errors">
                            </slot>
                        </span>
                        <span v-else>
                            <vue-form-input v-if="field.meta.type === 'input'"
                                :field="field"
                                @update="errors.clear(field.column)"
                                :has-error="errors.has(field.column)">
                            </vue-form-input>
                            <vue-select v-if="field.meta.type === 'select'"
                                @input="errors.clear(field.column);"
                                v-model="field.value"
                                :options="field.meta.options"
                                :source="field.meta.source"
                                :key-map="field.meta.keyMap"
                                :multiple="field.meta.multiple"
                                :disabled="field.meta.disabled">
                            </vue-select>
                            <datepicker v-if="field.meta.type === 'datepicker'"
                                @input="errors.clear(field.column)"
                                v-model="field.value"
                                :format="field.meta.format"
                                :time="field.meta.time"
                                :disabled="field.meta.disabled">
                            </datepicker>
                            <datepicker v-if="field.meta.type === 'timepicker'"
                                @input="errors.clear(field.column)"
                                v-model="field.value"
                                :format="field.meta.format"
                                time-only
                                :disabled="field.meta.disabled">
                            </datepicker>
                            <textarea v-if="field.meta.type === 'textarea'"
                                @input="errors.clear(field.column)"
                                class="textarea"
                                v-model="field.value"
                                :rows="field.meta.rows"
                                :disabled="field.meta.disabled">
                            </textarea>
                        </span>
                    </div>
                </div>
            </div>
            <button class="button is-danger"
                v-if="data.actions.destroy"
                @click.prevent="showModal = true">
                <span>{{ data.actions.destroy.label }}</span>
            </button>
            <button class="button is-info"
                @click.prevent="create()"
                v-if="data.actions.create">
                {{ data.actions.create.label }}
            </button>
            <button type="submit"
                class="button is-success is-pulled-right"
                :class="{ 'is-loading': loading }"
                v-if="data.actions.store || data.actions.update">
                <span v-if="data.actions.store">{{ data.actions.store.label }}</span>
                <span v-if="data.actions.update">{{ data.actions.update.label }}</span>
            </button>
            <div class="is-clearfix"></div>
        </form>
        <modal :show="showModal"
            @cancel-action="showModal = false"
            @commit-action="destroy()">
        </modal>
    </div>

</template>

<script>

    import Errors from '../../../classes/Errors.js';
    import Modal from '../components/Modal.vue';
    import VueSelect from '../select/VueSelect.vue';
    import Datepicker from '../components/Datepicker.vue';
    import VueFormInput from './VueFormInput.vue';
    import Overlay from '../components/Overlay.vue';

    export default {
        components: { Modal, VueSelect, Datepicker, VueFormInput, Overlay },

        props: {
            data: {
                type: Object,
                required: true
            }
        },

        data() {
            return {
                loading: false,
                showModal: false,
                errors: new Errors()
            };
        },

        computed: {
            columnSize() {
                return 'is-' + parseInt(12/this.data.columns);
            }
        },

        methods: {
            create() {
                this.$emit('form-create');
                this.$router.push({ path: this.data.actions.create.path });
            },
            submit() {
                this.loading = true;

                axios[this.data.method](this.getSubmitPath(), this.getFormData()).then(response => {
                    this.loading = false;
                    toastr.success(response.data.message);
                    this.$emit('form-submit');

                    if (this.data.method === 'post') {
                        this.$bus.$emit('redirect', response.data.redirect);
                    }
                }).catch(error => {
                    this.handleError(error);
                }).catch(error=> {
                    this.errors.set(error.response.data);
                    this.loading = false;
                });
            },
            getSubmitPath() {
                return this.data.method === 'post'
                    ? this.data.actions.store.path
                    : this.data.actions.update.path
            },
            getFormData() {
                return this.data.fields.reduce((object, field) => {
                    object[field.column] = field.value;
                    return object;
                }, {});
            },
            destroy() {
                this.showModal = false;
                this.loading = true;

                axios.delete(this.data.actions.destroy.path).then(response => {
                    this.loading = false;
                    toastr.success(response.data.message);
                    this.$emit('form-destroy');
                    this.$bus.$emit('redirect', response.data.redirect);
                }).catch(error => {
                    this.loading = false;
                    this.handleError(error);
                });
            }
        }
    };

</script>

<style>

    div.form-wrapper {
        position: relative;
    }

</style>