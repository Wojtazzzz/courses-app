<script setup lang="ts">
import Container from '../../atoms/Container.vue';
import SectionTitle from '../../atoms/SectionTitle.vue';
import CourseCard from '../../molecules/CourseCard.vue';
import Loader from '../../atoms/Loader.vue';
import ApiError from '../../atoms/ApiError.vue';
import { useTopCourses } from './useTopCourses';
import LightBulbFilledIcon from '../../icons/floating/light-bulb-filled.svg';
import CurledArrowIcon from '../../icons/floating/curled-arrow.svg';
import FloatingIcon from '../../atoms/FloatingIcon.vue';

const { courses, isLoading, isError } = useTopCourses();
</script>

<template>
	<Container>
		<section class="space-y-8">
			<div class="w-full relative">
				<FloatingIcon :icon="LightBulbFilledIcon" class="top-10 sm:top-3 left-[1%]" />

				<SectionTitle
					title="Top Courses"
					subtitle="Our top courses with the best students ratings"
					class="relative z-10"
				/>

				<FloatingIcon :icon="CurledArrowIcon" class="-top-10 -right-4 sm:right-[6%]" />
			</div>

			<Loader v-if="isLoading" />
			<ApiError v-else-if="isError" />
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
