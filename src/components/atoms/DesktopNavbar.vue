<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ROUTES } from '../../router';
import Button from './Button.vue';

const route = useRoute();
</script>

<template>
	<ul role="list" class="lg:flex gap-5 hidden">
		<li
			v-for="({ name, path }, index) in ROUTES"
			:key="index"
			class="group flex items-center relative"
		>
			<router-link
				:to="path"
				class="px-2 py-1 text-dark font-semibold focus-outline-secondary"
			>
				{{ name }}
			</router-link>

			<div
				class="h-[3px] bg-primary absolute bottom-2.5 left-0 mx-2"
				:class="{
					'w-7/12': route.name === name,
					'w-3 group-hover:w-7/12 transition-[width] ease-out duration-[250ms]':
						route.name !== name,
				}"
			></div>
		</li>

		<li>
			<Button>Sign in</Button>
		</li>
	</ul>
</template>
