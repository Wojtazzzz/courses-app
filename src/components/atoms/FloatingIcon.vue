<script setup lang="ts">
type FloatingIconProps = {
	icon: string;
};

defineProps<FloatingIconProps>();
</script>

<template>
	<img :src="icon" alt="" class="w-10 md:w-16 lg:w-20 absolute" />
</template>
