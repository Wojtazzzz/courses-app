<script setup lang="ts">
type SectionTitleProps = {
	title: string;
	subtitle: string;
};

defineProps<SectionTitleProps>();
</script>

<template>
	<hgroup class="text-center">
		<h3 class="font-semibold text-3xl md:text-4xl lg:text-5xl mb-2">Our Tracks</h3>
		<p class="font-medium text-base md:text-lg text-gray-400">
			Lorem Ipsum is simply dummy text of the printing.
		</p>
	</hgroup>
</template>
