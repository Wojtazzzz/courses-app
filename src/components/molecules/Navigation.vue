<script setup lang="ts">
import AppName from '../atoms/AppName.vue';
import Container from '../atoms/Container.vue';
import DesktopNavbar from '../atoms/DesktopNavbar.vue';
import MobileNavbar from '../atoms/mobileNavbar/MobileNavbar.vue';
</script>

<template>
	<Container>
		<header
			class="flex justify-between items-center py-4 md:py-6 ld:py-8 px-4 md:px-6 lg:px-10"
		>
			<router-link to="/" class="focus-outline-secondary px-2 py-1">
				<AppName />
			</router-link>

			<nav>
				<DesktopNavbar />
				<MobileNavbar />
			</nav>
		</header>
	</Container>
</template>
