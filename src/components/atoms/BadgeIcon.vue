<script setup lang="ts">
type BadgeIconVariant = 'primary' | 'secondary';

type BadgeIconProps = {
	icon: string;
	variant: BadgeIconVariant;
};

defineProps<BadgeIconProps>();
</script>

<template>
	<div
		class="p-3.5 xl:p-5 rounded-2xl flex flex-shrink-0 h-fit"
		:class="{
			'bg-primary': variant === 'primary',
			'bg-white/20': variant === 'secondary',
		}"
	>
		<img :src="icon" class="w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10" alt="" />
	</div>
</template>
