<template>

	<div>
		<nprogress></nprogress>
		<navbar class="animated slideInDown"
	        env-is-local>
	    </navbar>
	    <sidebar class="animated"
	        :class="{ 'slideInLeft': $store.state.navbar.isVisible, 'slideOutLeft': !$store.state.navbar.isVisible }">
	    </sidebar>
	    <section class="main-content">
	        <div class="container is-fluid page-content is-marginless">
	        	<page-header :title="__(title)"></page-header>
		        <router></router>
	        </div>
	    </section>
	    <settings class="animated"
	    	:class="{ 'slideInRight': $store.state.settingsBar.isVisible, 'slideOutRight': !$store.state.settingsBar.isVisible }"
	    	v-show="$store.state.settingsBar.isActive">
	    </settings>
	    <app-footer class="animated slideInUp">
	    </app-footer>
   	</div>

</template>

<script>

	import Nprogress from'../components/Nprogress.vue';
	import Navbar from'./Navbar.vue';
	import Sidebar from'./sidebar/Sidebar.vue';
	import Settings from'./settings/Settings.vue';
	import AppFooter from'./AppFooter.vue';
	import Router from './Router.vue';
	import PageHeader from '../../../components/enso/layout/PageHeader.vue';
	import { mapGetters } from 'vuex';

	export default {
		name: 'AppMain',

		components: { Nprogress, Navbar, Sidebar, Settings, AppFooter, Router, PageHeader },

		computed: {
            ...mapGetters('locale', ['__']),
            title() {
            	return this.$route.meta.title;
            },
            implicitMenu() {
				return this.$store.state.menus.implicit;
			}
        },

		created() {
			this.$router.push({ path: route(this.implicitMenu.link, [], false) });
			setTimeout(() => this.$emit('mounted'), 100);
		}
	};

</script>

<style>

	.main-content {
        margin-left: 180px;
        transition: margin .5s ease;
    }

    @media screen and (max-width: 1007px) {
	    .main-content {
		    margin-left: 0;
		}
	}

	div.container.page-content {
        padding: 20px;
    }

</style>