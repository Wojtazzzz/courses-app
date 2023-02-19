<script setup lang="ts">
import AppName from '../atoms/AppName.vue';
import Container from '../atoms/Container.vue';
import DesktopNavbar from '../atoms/DesktopNavbar.vue';
import MobileNavbar from '../atoms/mobileNavbar/MobileNavbar.vue';
</script>

<template>
	<div class="bg-theme-primary">
		<Container>
			<header class="flex justify-between items-center py-4 md:py-6 lg:py-8">
				<router-link to="/" class="focus-outline-secondary px-2 py-1">
					<h1>
						<AppName />
					</h1>
				</router-link>

				<nav>
					<DesktopNavbar />
					<MobileNavbar />
				</nav>
			</header>
		</Container>
	</div>
</template>
