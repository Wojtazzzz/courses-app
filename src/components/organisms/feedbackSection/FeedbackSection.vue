<script setup lang="ts">
import Container from '../../atoms/Container.vue';
import SectionTitle from '../../atoms/SectionTitle.vue';
import Carousel from '../../atoms/Carousel.vue';
import { SwiperSlide } from 'swiper/vue';
import { useFeedback } from './useFeedback';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Loader from '../../atoms/Loader.vue';
import ApiError from '../../atoms/ApiError.vue';

const { feedback, isLoading, isError } = useFeedback();
</script>

<template>
	<div class="py-12">
		<Container>
			<SectionTitle
				title="What student's say"
				subtitle="Lorem Ipsum is simply dummy text of the printing."
			/>

			<Loader v-if="isLoading" />
			<ApiError v-else-if="isError" />
			<Carousel v-else>
				<SwiperSlide
					v-for="{ id, content } in feedback"
					:key="id"
					tag="li"
					aria-roledescription="slide"
					class="h-full"
				>
					<article class="shadow-xl p-5 space-y-8 rounded-sm bg-theme-primary">
						<q class="text-dark overflow-hidden">{{ content }}</q>

						<header class="flex gap-3">
							<img
								src="../../icons/dummy-feedback-avatar.png"
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
