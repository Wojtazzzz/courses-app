<script setup lang="ts">
type ButtonVariant = 'primary' | 'secondary';

type ButtonProps = {
	variant: ButtonVariant;
};

defineProps<ButtonProps>();
</script>
<template>
	<button
		class="!rounded-3xl focus-outline-secondary text-white font-medium py-3 px-8"
		:class="{
			'bg-primary hover:bg-primary/90 active:bg-primary/[85]': variant === 'primary',
			'bg-secondary hover:bg-secondary/90 active:bg-secondary/[85]': variant === 'secondary',
		}"
	>
		<slot />
	</button>
</template>
