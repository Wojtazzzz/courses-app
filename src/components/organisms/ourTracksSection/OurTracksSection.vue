<script setup lang="ts">
import Container from '../../atoms/Container.vue';
import SectionTitle from '../../atoms/SectionTitle.vue';
import CourseCard from '../../molecules/CourseCard.vue';
import { useCourses } from './useCourses';

const { courses, isLoading, isError } = useCourses();
</script>

<template>
	<Container>
		<section class="space-y-8">
			<div class="w-full relative">
				<img
					src="../icons/light-bulb-filled.svg"
					width="110"
					class="absolute top-10 sm:top-3 left-[1%] z-0"
					alt=""
				/>

				<SectionTitle
					title="Our Tracks"
					subtitle="Lorem Ipsum is simply dummy text of the printing."
					class="relative z-10"
				/>

				<img
					src="../icons/curled-arrow.svg"
					width="110"
					class="absolute -top-10 -right-4 sm:right-[6%] z-0"
					alt=""
				/>
			</div>

			<span v-if="isLoading">LOADING...</span>
			<span v-else-if="isError">Something went wrong, please try again later</span>
			<ul
				v-else
				role="list"
				class="flex flex-col lg:flex-row justify-center items-center gap-x-7 gap-y-12"
			>
				<li v-for="course in courses">
					<CourseCard v-bind="course" />
				</li>
			</ul>
		</section>
	</Container>
</template>
