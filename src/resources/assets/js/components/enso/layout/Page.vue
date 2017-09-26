<template>

	<div>
		<page-header :title="__(title)"></page-header>
		<router></router>
	</div>

</template>

<script>

	import Router from '../../../components/enso/layout/Router.vue';
	import PageHeader from '../../../components/enso/layout/PageHeader.vue';
	import { mapGetters } from 'vuex';

	export default {
		components: { Router, PageHeader },

		computed: {
            ...mapGetters('locale', ['__']),
            title() {
            	return this.$route.meta.title;
            }
        }
	}
</script>