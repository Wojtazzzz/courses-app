<script setup lang="ts">
import Button from '../atoms/Button.vue';

const STARS = 4;
</script>

<template>
	<router-link to="/course/1">
		<article
			class="max-w-[490px] w-full space-y-3 p-3 pb-12 shadow-[0px_4px_25px_rgba(0,0,0,0.1)] rounded-lg relative bg-theme-secondary"
		>
			<img
				src="../icons/cardCourse/dummy-course-avatar.png"
				class="rounded-xl w-full"
				alt=""
			/>

			<header
				class="w-full flex justify-between border-b-2 border-dotted border-gray-400/40 pb-2 relative"
			>
				<hgroup>
					<p class="font-medium text-gray-400">UI/UX Design</p>
					<h4 class="font-medium text-lg">UI/UX Design for Beginners</h4>
					<p class="font-semibold text-lg text-secondary">$98</p>
				</hgroup>

				<div class="flex gap-x-0.5 absolute top-0 right-0">
					<div v-for="star in 5">
						<img
							v-if="star <= STARS"
							src="../icons/cardCourse/stars/star-filled.svg"
							width="16"
							height="16"
							alt=""
						/>
						<img
							v-else="star <= STARS"
							src="../icons/cardCourse/stars/star-empty.svg"
							width="16"
							height="16"
							alt=""
						/>
					</div>
				</div>
			</header>

			<aside class="flex justify-center my-3">
				<ul role="list" class="flex items-center gap-4">
					<li class="flex items-center gap-1.5">
						<img src="../icons/cardCourse/time.svg" width="19" height="19" alt="" />
						<span class="text-gray-400 font-medium text-sm md:text-base text-center"
							>22hr 30min</span
						>
					</li>
					<li class="flex items-center gap-1.5">
						<img
							src="../icons/cardCourse/video-count.svg"
							width="28"
							height="28"
							alt=""
						/>
						<span class="text-gray-400 font-medium text-sm md:text-base text-center"
							>34 Courses</span
						>
					</li>
					<li class="flex items-center gap-1.5">
						<img src="../icons/cardCourse/download.svg" width="17" height="17" alt="" />
						<span class="text-gray-400 font-medium text-sm md:text-base text-center"
							>250 Sales</span
						>
					</li>
				</ul>
			</aside>

			<Button
				variant="secondary"
				class="absolute inset-x-0 -bottom-6 w-fit mx-auto text-lg md:text-xl"
				>Join Course</Button
			>
		</article>
	</router-link>
</template>
