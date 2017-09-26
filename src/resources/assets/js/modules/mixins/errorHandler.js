Vue.mixin({
    methods: {
        handleError(error) {
            if (error.response.data.message) {
                return toastr.error(error.response.data.message);
            }

            if (error.response.status === 401) {
            	return this.$bus.$router.push({ path: '/login' });
            }

            throw error;
        }
    }
});