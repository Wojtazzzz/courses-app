<script setup lang="ts">
import { ROUTES } from '../../../router';
import Button from '../Button.vue';
import { useMobileNavbar } from './useMobileNavbar';

const { isActive, open, close } = useMobileNavbar();
</script>

<template>
	<div class="lg:hidden">
		<div
			v-show="isActive"
			class="w-screen h-screen fixed top-0 left-0 flex justify-center bg-theme-primary items-center bg-theme z-40"
		>
			<button
				type="button"
				class="absolute top-5 right-5 focus-outline-secondary p-2"
				@click="close"
			>
				<span class="sr-only">close navigation</span>
				<img src="../../icons/cross.svg" width="32" height="32" alt="Close navigation" />
			</button>

			<ul role="list" class="flex flex-col items-center gap-5">
				<li
					v-for="({ name, path }, index) in ROUTES"
					:key="index"
					class="group flex items-center relative"
				>
					<router-link
						:to="path"
						@click="close"
						class="px-2 py-1 text-dark text-xl font-semibold focus-outline-secondary"
					>
						{{ name }}
					</router-link>
				</li>

				<li>
					<Button variant="primary" @click="close">Sign in</Button>
				</li>
			</ul>
		</div>

		<button type="button" class="focus-outline-secondary p-2" @click="open">
			<span class="sr-only">open navigation</span>
			<img src="../../icons/menu.svg" width="32" height="32" alt="Open navigation" />
		</button>
	</div>
</template>
