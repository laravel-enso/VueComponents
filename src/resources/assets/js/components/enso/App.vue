<template>

	<div>
		<transition
			leave-active-class="fadeOut">
			<home :quote="quote"
				class="animated"
				:class="{ 'fadeIn': showHome }"
				v-if="showHome"
				:loading="loadingState"
				@enter-app="showHome=false">
			</home>
		</transition>

		<app-main v-if="!showHome"
			class="app-main"
			:class="{ 'lights-off': lightsOff }"
			@mounted="setThemeParams()">
		</app-main>
	</div>

</template>

<script>

	import Home from'./layout/Home.vue';
	import AppMain from'./layout/AppMain.vue';
	import router from '../../router';
	import { mapState } from 'vuex';

	export default {
		name: 'App',

		router,

		components: { Home, AppMain },

		props: {
			quote: {
				type: String,
				default: null
			}
		},

		computed: {
			...mapState(['isMobile', 'isTablet', 'user', 'themes']),
			themeLink() {
                return document.getElementById('theme');
            },
            currentTheme() {
            	return this.user ? this.user.preferences.global.theme : null;
            }
		},

		data() {
			return {
                loadingState: true,
                showHome: true,
                lightsOff: false
			}
		},

		watch: {
			isTablet: {
				handler() {
					return this.isTablet
						? this.$store.commit('navbar/collapse')
						: this.$store.commit('navbar/expand');
				}
			}
		},

		beforeMount () {
			this.addTabletBreakpointListener();
		},

		created() {
			this.getState();
			this.initDocumentTitleSetter();
			this.setThemeSwitcherListener();
			this.setRedirectListener();
			this.$bus.$on('start-impersonating', $event => this.startImpersonating($event));
			this.$bus.$on('stop-impersonating', () => this.stopImpersonating());
		},

		methods: {
			addTabletBreakpointListener() {
				const body = document.body,
					TabletWidth = 1007,
					MobileWidth = 768;

				const handler = () => {
					if (!document.hidden) {
						let rect = body.getBoundingClientRect();
						this.$store.commit('setIsTablet', rect.width <= TabletWidth);
						this.$store.commit('setIsMobile', rect.width <= MobileWidth);
					}
				}

				document.addEventListener('visibilitychange', handler);
				window.addEventListener('DOMContentLoaded', handler);
				window.addEventListener('resize', handler);
			},
			getState() {
				axios.get('/init').then(response => {
					this.setState(response.data);
					setTimeout(() => this.loadingState = false, 300);
				}).catch(error => {
					this.loadingState = false;
					this.handleError(error);
				});
			},
			setState(state) {
				this.$store.commit('setUser', state.user);
				this.$store.commit('setImpersonating', state.impersonating);
				this.$store.commit('menus/set', state.menus);
				this.$store.commit('menus/setImplicit', state.implicitMenu);
				this.$store.commit('locale/setLanguages', state.languages);
				this.$store.commit('locale/setI18n', state.i18n);
				this.$store.commit('setThemes', state.themes);
				this.$store.commit('setCsrfToken', state.csrfToken);
				this.$store.commit('setPusherToken', state.pusherToken);
				this.$store.commit('setDateFormat', state.dateFormat);
				this.$store.commit('setMeta', state.meta);
				this.$store.dispatch('setLocale', state.user.preferences.global.lang);
			},
			initDocumentTitleSetter() {
				router.beforeEach((to, from, next) => {
					if (to.meta.title !== from.meta.title) {
						document.title = to.meta.title;
					}
				  	next();
				});
			},
			setThemeSwitcherListener() {
				this.$bus.$on('update-theme', () => {
					this.lightsOff = true;
	                setTimeout(() => { this.setTheme(); }, 300);
	                setTimeout(() => { this.lightsOff = false; }, 500);
	                setTimeout(() => { this.setThemeParams() }, 550);
				});
			},
			setRedirectListener() {
				this.$bus.$on('redirect', $event => this.$router.push({ path: $event}));
			},
			startImpersonating(id) {
	        	axios.get('/' + route('core.impersonate.start', id, false)).then(response => {
	        		toastr.warning(response.data.message);
	        		this.getState();
	        	}).catch(error => {
	        		this.handleError(error);
	        	});
	        },
	        stopImpersonating() {
	        	axios.get('/' + route('core.impersonate.stop', [], false)).then(response => {
	        		toastr.warning(response.data.message);
	        		this.getState();
	        	}).catch(error => {
	        		this.handleError(error);
	        	});
	        },
	        setTheme() {
                this.themeLink.setAttribute('href', this.themes[this.currentTheme]);
            },
            setThemeParams() {
            	let height = document.getElementById('app-navbar').clientHeight,
            		menuAside = document.querySelector('.menu.aside'),
            		settingsAside = document.querySelector('.settings.aside'),
            		mainContent = document.querySelector('section.main-content'),
            		pageContent = document.querySelector('.container.page-content'),
            		footer = document.querySelector('.footer.footer');

            	menuAside.style.top = height + 'px';
	            settingsAside.style.top = height + 'px';
	            mainContent.style['padding-top'] = height + 'px';
	            pageContent.style['min-height'] = window.innerHeight - height - footer.clientHeight + 'px';
            }
		}
	};

</script>

<style>

	.app-main {
		opacity: 1;
		transition: opacity .25s ease;
	}

	.app-main.lights-off {
		opacity: 0;
	}

</style>