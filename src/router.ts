import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/pages/Home.vue';
import About from './components/pages/About.vue';

const routes = [
	{ path: '/', component: Home },
	{ path: '/about', component: About },
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
