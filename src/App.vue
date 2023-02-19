<script setup lang="ts">
import Navigation from './components/molecules/Navigation.vue';
</script>

<template>
	<Navigation />

	<main class="overflow-hidden min-h-[9999999999999px]">
		<RouterView />
	</main>
</template>
