import Notification from './Notification.vue';

export default {
    install(Vue, options) {
        const Toastr = Vue.extend(Notification);

        Vue.prototype.$toastr = {
            message(body, title, duration) {
                this.mount('message', body, title, duration);
            },
            primary(body, title, duration) {
                this.mount('primary', body, title, duration);
            },
            success(body, title, duration) {
                import Notification from './Notification.vue';

                export default {
                    install(Vue, options) {
                        const Toastr = Vue.extend(Notification);

                        Vue.prototype.$toastr = {
                            error(body, title, duration) {
                                this.toastr('danger', body, title, duration);
                            },
                            info(body, title, duration) {
                                this.toastr('info', body, title, duration);
                            },
                            message(body, title, duration) {
                                this.toastr('message', body, title, duration);
                            },
                            primary(body, title, duration) {
                                this.toastr('primary', body, title, duration);
                            },
                            success(body, title, duration) {
                                this.toastr('success', body, title, duration);
                            },
                            warning(body, title, duration) {
                                this.toastr('warning', body, title, duration);
                            },

                            toastr(type, body, title, duration) {
                                if (duration) {
                                    options.duration = duration;
                                }

                                (new Toastr({
                                    propsData: {
                                        ...options, type, body, title,
                                    },
                                })).$mount();
                            },
                        };
                    },
                };

            },
            warning(body, title, duration) {
                this.mount('warning', body, title, duration);
            },
            info(body, title, duration) {
                this.mount('info', body, title, duration);
            },
            error(body, title, duration) {
                this.mount('danger', body, title, duration);
            },
            mount(type, body, title, duration) {
                if (duration) {
                    options.duration = duration;
                }
                (new Toastr({
                    propsData: {
                        duration: duration || options.duration, type, body, title,
                    },
                })).$mount();
            },
        };
    },
};
