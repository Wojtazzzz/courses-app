<script setup lang="ts">
import Button from './Button.vue';

type InputBoxVariant = 'primary' | 'secondary';

type InputBoxProps = {
	variant: InputBoxVariant;
	buttonText: string;
	inputPlaceholder: string;
};

defineProps<InputBoxProps>();
</script>

<template>
	<div class="w-full max-w-xl flex items-center bg-white rounded-3xl mx-auto p-1">
		<input
			type="text"
			class="bg-white w-full rounded-3xl outline-none text-base md:text-lg px-4"
			:placeholder="inputPlaceholder"
		/>

		<Button type="button" :variant="variant">{{ buttonText }}</Button>
	</div>
</template>
