import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import { VueQueryPlugin } from '@tanstack/vue-query';

const vueQueryPluginOptions = {
	queryClientConfig: {
		defaultOptions: {
			queries: {
				retry: false,
			},
		},
	},
};

createApp(App).use(router).use(VueQueryPlugin, vueQueryPluginOptions).mount('#app');
