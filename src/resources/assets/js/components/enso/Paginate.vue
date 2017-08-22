<template>

	<div>
		<div class="btn-group">
			<div class="btn-group paginate"
				:class="{'open': open}">
				<button class="btn btn-default btn-flat paginate"
					@click="open=!open">
					<i class="fa fa-bars"></i>
					{{ pageLength }}
					<span class="fa fa-caret-down"
						v-if="!open">
					</span>
					<span class="fa fa-caret-up"
						v-else="!open">
					</span>
				</button>
				<ul class="dropdown-menu paginate">
		            <li v-for="length in lengths"
		            	v-if="length !== pageLength && length">
		            	<a href="#" @click="pageLength=length;open=false">{{ length }}</a>
		            </li>
				</ul>
			</div>
			<button class="btn btn-default btn-flat"
				@click="previous"><
			</button>
			<button class="btn btn-default btn-flat">{{ current }} / {{ pages }}</button>
			<button class="btn btn-default btn-flat"
				@click="next">>
			</button>
		</div>
		<slot :list="computedList">
		</slot>
	</div>

</template>

<script>

	export default {
		props: {
			list: {
				type: Array,
				required: true
			},
			length: {
				type: Number,
				default: 10
			},
			lengths: {
				type: Array,
				default() {
					return [2, 10, 15, 20, 25, 30];
				}
			}
		},

		computed: {
			pages() {
				return Math.ceil(this.list.length / this.pageLength);
			},
			computedList() {
				return this.list.filter((el, index) => {
					return (index >= (this.current - 1) * this.pageLength)
						&& (index < (this.current) * this.pageLength);
				});
			}
		},

		watch: {
			pageLength() {
				if (this.current > this.pages) {
					this.current = this.pages;
				}
			}
		},

		data() {
			return {
				pageLength: this.length,
				open: false,
				current: 1
			}
		},
		methods: {
			next() {
				if (this.current < this.pages) {
					this.current++;
				}
			},
			previous() {
				if (this.current > 1) {
					this.current--;
				}
			}
		},

		mounted() {}
	};

</script>

<style>

	ul.dropdown-menu.paginate {
		min-width: 66px
	}

	div.paginate > button {
		width: 68px;
	}

</style>