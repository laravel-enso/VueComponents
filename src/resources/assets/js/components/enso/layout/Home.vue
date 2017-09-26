<template>

	<section class="hero is-fullheight is-primary is-bold">
        <div class="hero-body">
            <div class="container has-text-centered">
            	<overlay v-if="loading"
            		:opacity="false"
            		color="#dbdbdb"
            		size="large">
        		</overlay>
	            <div class="title is-1 inspiring animated fadeInDown"
	            	 v-if="!loading">
	            	{{ quote }}
	            </div>

	            <button class="animated fadeInRightBig button is-outlined"
	            	@click="$emit('enter-app')"
	            	v-if="!loading">
	            	Enter the application
            	</button>
       	 	</div>
		</div>
	</section>

</template>

<script>

	import Overlay from '../components/Overlay.vue';

	export default {
		name: 'Home',

		components: { Overlay },

		props: {
			loading: {
				type: Boolean,
				required: true
			},
			quote: {
				type: String,
				default: null
			}
		}
	};

</script>

<style>

	.title.inspiring {
		font-weight: 200;
	}

</style>