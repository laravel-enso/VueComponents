<template>

	<div class="input-group datepicker">
		<i class="fa fa-times clear-button btn-box-tool"
			@click="clear"
			v-if="showClearButton">
		</i>
		<input type="text"
			v-datepicker
			:id="'date-input-' + _uid"
			:class="inputClass"
			:name="name"
			:value="value"
			:disabled="disabled">
		<span class="input-group-addon">
			<i class="fa fa-calendar">
			</i>
		</span>
	</div>

</template>

<script>

	export default {
		props: {
			name: {
                type: String,
                default: null
            },
			value: {
				type: String,
				default: ''
			},
			disabled: {
				type: Boolean,
				default: false
			},
			format: {
				type: String,
				default: 'dd-mm-yyyy'
			},
			inputClass: {
                type: String,
                default: 'form-control'
            },
		},

		directives: {
			datepicker: {
				inserted(element, binding, vnode) {
					vnode.context.element.datepicker({
				        format: self.format,
				        language: Store.user.preferences.lang,
				        todayHighlight: true,
				        autoclose: true
				    }).on('hide', function(date) {
				    	vnode.context.$emit('input', date.format(vnode.context.format));
				    });
				},
				update(element, binding, vnode) {
			    	vnode.context.element.datepicker('update');
                },
                unbind(element, binding, vnode) {
                	vnode.context.element.datepicker('destroy');
                }
			}
		},

		computed: {
			element() {
				return $("#date-input-" + this._uid);
			},
			showClearButton() {
				return this.value && !this.disabled;
			}
		},

		methods: {
			clear() {
				this.element.datepicker('clearDates');
				this.$emit('input', "");
			}
		}
	}

</script>

<style>

    .datepicker > i.clear-button {
      	z-index: 10;
        position: absolute;
        right: 30px;
        top: 7px;
        cursor: pointer;
    }

    .datepicker > input {
    	text-align: left;
    }

    .datepicker.datepicker-dropdown.dropdown-menu.datepicker-orient-left.datepicker-orient-top,
	.datepicker.datepicker-dropdown.dropdown-menu.datepicker-orient-right.datepicker-orient-top {
		z-index: 9999 !important;
	}

</style>