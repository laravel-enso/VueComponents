<template>

	<div class="navbar-item has-dropdown"
		:class="{ 'is-hoverable': notifications.length }">
        <span class="navbar-link">
            <span class="icon is-small">
                <i class="fa fa-bell">
                </i>
            </span>
        </span>
        <div class="navbar-dropdown is-right">
	        <a class="navbar-item" href="#">
	            <div class="has-text-centered">
	                <p>
	                    <strong>
	                        {{ __("Notifications") }}
	                    </strong>
	                </p>
	            </div>
	        </a>
	    </div>
    </div>

</template>

<script>

	import { mapGetters } from 'vuex';
	import { mapState } from 'vuex';
	import Echo from "laravel-echo";
	const Pusher = require('pusher-js');

	export default {
		name: 'Notifications',

		computed: {
			...mapGetters('locale', ['__']),
			...mapState(['pusherToken', 'user']),
		},

		data() {
			return {
				limit: 200,
				notifications: [],
				unreadCount: 0,
				totalCount: 0,
				needsUpdate: true,
				offset: 0,
				loading: false,
				Echo: null
			}
		},

		// created() {
		// 	this.Echo = new Echo({
		// 	    broadcaster: 'pusher',
		// 	    key: this.pusherToken,
		// 	    cluster: 'eu',
		// 	    namespace: 'App.Events'
		// 	});

		// 	this.getCount();
		// 	this.listen();
		// },

		methods: {
			getCount() {
				axios.get('/core/notifications/getCount').then(response => {
					this.unreadCount = response.data;
				}).catch(error => {
					this.handleError(error);
				});
			},
			getList() {
				if (!this.needsUpdate || this.loading) {
					return false;
				}

				this.loading = true;

				axios.get('/core/notifications/getList/' + this.offset + '/' + this.limit).then(response => {
					this.notifications = this.offset ? this.notifications.concat(response.data) : response.data;
					this.offset = this.notifications.length;
					this.needsUpdate = false;
					this.loading = false;
				}).catch(error => {
					this.loading = false;
					this.handleError(error);
				});
			},
			process(notification) {
				axios.patch('/core/notifications/markAsRead/' + notification.id).then(response => {
					this.unreadCount = this.unreadCount ? --this.unreadCount : this.unreadCount;
					window.location.href = notification.data.link;
					notification = response.data; // fixme
				}).catch(error => {
					this.handleError(error);
				});
			},
			markAllAsRead() {
				axios.patch('/core/notifications/markAllAsRead').then(response => {
					this.setAllAsRead();
				}).catch(error => {
					this.handleError(error);
				});
			},
			setAllAsRead() {
				this.notifications.forEach(notification => {
					notification.read_at = notification.read_at || moment().format('Y-MM-DD H:mm:s');
				});

				this.unreadCount = 0;
			},
			clearAll() {
				axios.patch('/core/notifications/clearAll').then(response => {
					this.notifications = [];
					this.unreadCount = 0;
				}).catch(error => {
					this.handleError(error);
				});
			},
			listen() {
				let self = this;
				console.log(this.user.id);
				// this.Echo.private('App.User.' + this.user.id).notification(notification => {
				// 	console.log(notification);
				// 	self.unreadCount++;
				// 	self.needsUpdate = true;
				// 	self.offset = 0;
				// });
			},
			computeScrollPosition(event) {
				let a = event.target.scrollTop,
				 	b = event.target.scrollHeight - event.target.clientHeight,
					c = a / b;

				if (c === 1) {
					this.needsUpdate = true;
					this.getList();
				}
			}
		}
	};

</script>