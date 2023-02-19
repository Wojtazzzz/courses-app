<script setup lang="ts">
import { Pagination, Autoplay, A11y } from 'swiper';
import { Swiper } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
</script>

<template>
	<Swiper
		tag="section"
		:modules="[Pagination, A11y, Autoplay]"
		class="mt-12"
		wrapper-class="mb-20"
		wrapper-tag="ul"
		aria-label="Students feedback"
		aria-roledescription="carousel"
		:breakpoints="{
			'576': {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			'1024': {
				slidesPerView: 3,
				spaceBetween: 25,
			},
		}"
		autoplay
		:pagination="{
			clickable: true,
			bulletElement: 'button',
			bulletClass: 'swiper-bullet',
			bulletActiveClass: 'swiper-bullet-active',
			el: '#feedback-pagination',
		}"
	>
		<slot></slot>
	</Swiper>
</template>
