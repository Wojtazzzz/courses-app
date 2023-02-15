<script setup lang="ts">
import AppName from '../atoms/AppName.vue';
import Button from '../atoms/Button.vue';
import Container from '../atoms/Container.vue';

const links = [
	{ name: 'Home', href: '/' },
	{ name: 'About us', href: '/about-us' },
	{ name: 'Courses', href: '/courses' },
	{ name: 'Our Service', href: '/our-service' },
	{ name: 'Contact us', href: '/contact' },
];
</script>

<template>
	<Container>
		<header class="flex justify-between items-center py-8 px-10">
			<a href="/" class="focus-outline-secondary px-2 py-1">
				<AppName />
			</a>

			<nav>
				<ul class="flex gap-5">
					<li
						v-for="({ name, href }, index) in links"
						:key="index"
						class="flex items-center"
					>
						<a
							:href="href"
							class="px-2 py-1 text-dark font-semibold focus-outline-secondary"
							>{{ name }}</a
						>
					</li>

					<li>
						<Button>Sign in</Button>
					</li>
				</ul>
			</nav>
		</header>
	</Container>
</template>
