<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import Navigation from './components/molecules/Navigation.vue';
</script>

<template>
	<Navigation />
	<RouterView />
</template>
