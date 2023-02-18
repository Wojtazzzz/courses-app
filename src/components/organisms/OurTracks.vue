<script setup lang="ts">
import Container from '../atoms/Container.vue';
import SectionTitle from '../atoms/SectionTitle.vue';
import CourseCard from '../molecules/CourseCard.vue';

const courses = [{ id: 1 }, { id: 2 }, { id: 3 }];
</script>

<template>
	<Container class="mt-14 lg:mt-64">
		<section class="space-y-8">
			<div>
				<SectionTitle
					title="Our Tracks"
					subtitle="Lorem Ipsum is simply dummy text of the printing."
				/>
			</div>

			<ul
				role="list"
				class="flex flex-col lg:flex-row justify-center items-center gap-x-7 gap-y-12"
			>
				<li v-for="course in courses">
					<CourseCard />
				</li>
			</ul>
		</section>
	</Container>
</template>
