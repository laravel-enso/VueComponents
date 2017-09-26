<template>

	<canvas class="chart-js"></canvas>

</template>

<script>

	import Chart from 'chart.js';

	const types = ['line', 'bar', 'radar', 'polarArea', 'pie', 'doughnut', 'bubble'];

	export default {
		name: 'Chart',

		props: {
			type: {
				type: String,
				required: true,
				validator: val => types.includes(val)
			},
			data: {
				type: Object,
				required: true,
				default: () => ({})
			},
			options: {
				type: Object,
				default: () => ({})
			}
		},

		data() {
			return {
				chart: null,
			};
		},

		watch: {
			data() {
				this.update();
			}
		},

		methods: {
			init() {
				this.chart = new Chart(this.$el, {
		            type: this.type,
		            data: this.data,
		            options: this.options,
	        	});
			},
			update() {
				if (!this.chart) {
					return this.init();
				}

				let self = this;

				this.chart.data.datasets.forEach((dataset, index) => {
					dataset.data = self.data.datasets[index].data;
				});

				this.chart.update();
			},
		},

		mounted() {
			this.init();
		},

		beforeDestroy() {
			this.chart.destroy();
		}
	};

</script>

<style>

	canvas.chart-js {
	    max-width: 100%;

  }

</style>