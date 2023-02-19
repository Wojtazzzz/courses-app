<script setup lang="ts">
import Container from '../atoms/Container.vue';
import SectionTitle from '../atoms/SectionTitle.vue';
import Carousel from '../atoms/Carousel.vue';
import { SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
</script>

<template>
	<div class="py-12">
		<Container>
			<SectionTitle
				title="What student's say"
				subtitle="Lorem Ipsum is simply dummy text of the printing."
			/>

			<Carousel>
				<SwiperSlide v-for="feedback in 7" tag="li" aria-roledescription="slide">
					<article class="shadow-xl p-5 space-y-8 rounded-sm bg-theme-primary">
						<q class="text-dark"
							>Complete account of the system and expound the actual Contrary to
							popular belief, Lorem Ipsum is not simply random text. It has roots</q
						>

						<header class="flex gap-3">
							<img
								src="../icons/dummy-feedback-avatar.png"
								width="47"
								height="47"
								alt=""
							/>

							<hgroup class="flex flex-col">
								<h4 class="text-dark font-medium">Dannette P. Cervantes</h4>
								<p class="text-gray-400 text-sm">Web Design</p>
							</hgroup>
						</header>
					</article>
				</SwiperSlide>

				<nav
					id="feedback-pagination"
					role="group"
					aria-label="Choose slide to display"
					class="w-full flex justify-center"
				></nav>
			</Carousel>
		</Container>
	</div>
</template>
