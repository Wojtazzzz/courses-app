import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/pages/Home.vue';
import About from './components/pages/About.vue';

export const ROUTES = [
	{ name: 'Home', path: '/', component: Home },
	{ name: 'About us', path: '/about', component: About },
	{ name: 'Courses', path: '/courses', component: { template: '<div>Courses</div>' } },
	{ name: 'Our Service', path: '/service', component: { template: '<div>Our Service</div>' } },
	{ name: 'Contact us', path: '/contact', component: { template: '<div>Contact us</div>' } },
];

export const router = createRouter({
	history: createWebHistory(),
	routes: ROUTES,
});
