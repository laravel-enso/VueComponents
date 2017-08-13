<template>

	<div class="input-group flatpickr">
		<input type="text"
			:placeholder="placeholder"
			:id="'date-input-' + _uid"
			data-input
			:name="name"
			:class="inputClass"
			:disabled="disabled">
		<span class="input-group-addon">
			<a class="input-button"
				@click="picker.open()">
				<i class="fa fa-calendar"></i>
			</a>
			<a class="input-button"
				@click="picker.clear()">
				<i class="fa fa-times"></i>
			</a>
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
				required: true,
				validate (value) {
		          	return value === null || typeof value === 'string'
		          		|| value instanceof Date || value instanceof Array;
		        }
			},
			time: {
				type: Boolean,
				default: false
			},
			timeOnly: {
				type: Boolean,
				default: false
			},
			placeholder: {
				type: String,
				default: Store.labels.selectDate
			},
			disabled: {
				type: Boolean,
				default: false
			},
			format: {
				type: String,
				default: 'd-m-Y'
			},
			inputClass: {
                type: String,
                default: 'form-control'
            },
		},

		data() {
			return {
				picker: null,
			};
		},

		computed: {
			config(self = this) {
				return {
					weekNumbers: false,
					defaultDate: this.value,
					dateFormat: this.format,
					allowInput: false,
					noCalendar: this.timeOnly,
					enableTime: this.time || this.timeOnly,
					onChange(selectedDates, dateStr) {
						self.$emit('input', dateStr);
					}
				}
			}
		},

		watch: {
			value: {
				handler(newValue) {
					this.picker.setDate(newValue);
				},

				deep: true
			}
		},

		mounted() {
			this.picker = new Flatpickr("#date-input-" + this._uid, this.config);
		},

		methods: {
			clear() {
				this.element.datepicker('clearDates');
				this.$emit('input', "");
			}
		},

		beforDestroy() {
			this.picker.destroy();
		}
	}

</script>

<style>

    a.input-button {
    	cursor: pointer;
    }

</style>