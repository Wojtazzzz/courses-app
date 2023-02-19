<script setup lang="ts">
import Footer from './components/atoms/Footer.vue';
import Navigation from './components/molecules/Navigation.vue';
</script>

<template>
	<Navigation />

	<main class="overflow-hidden">
		<RouterView />
	</main>

	<Footer />
</template>
