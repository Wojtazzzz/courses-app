<script setup lang="ts">
import BadgeIcon from '../atoms/BadgeIcon.vue';
import HeartsIcon from '../icons/hearts.svg';
import JigsawIcon from '../icons/jigsaw.svg';
import LightBulbIcon from '../icons/floating/light-bulb.svg';
import AtomIcon from '../icons/floating/atom.svg';
import GlobeIcon from '../icons/floating/globe.svg';
import Container from '../atoms/Container.vue';
import FloatingIcon from '../atoms/FloatingIcon.vue';
import PencilIcon from '../icons/floating/pencil.svg';
import TestTubeIcon from '../icons/floating/test-tube.svg';
import GalaxyIcon from '../icons/floating/galaxy.svg';
</script>

<template>
	<div class="bg-theme-primary">
		<Container>
			<section class="flex lg:translate-y-16 py-12 lg:py-0">
				<div class="w-2/5 relative hidden lg:block">
					<img
						src="../icons/premium-learning-experience.svg"
						width="500"
						class="mx-auto"
						alt=""
					/>

					<FloatingIcon :icon="LightBulbIcon" class="-top-4 left-[4%]" />
					<FloatingIcon :icon="AtomIcon" class="top-64 left-full" />
					<FloatingIcon :icon="GlobeIcon" class="bottom-28 right-[100%]" />
				</div>

				<div class="flex flex-col lg:items-center gap-y-12 w-full lg:w-3/5 relative">
					<FloatingIcon :icon="PencilIcon" class="top-[20%] lg:top-[12%] right-5" />
					<FloatingIcon
						:icon="TestTubeIcon"
						class="inset-x-0 mx-auto bottom-14 lg:bottom-20"
					/>
					<FloatingIcon :icon="GalaxyIcon" class="left-0 lg:left-10 -top-8" />

					<h3 class="font-extrabold text-3xl md:text-4xl lg:text-6xl">
						<span class="text-dark">Premium</span>
						<span class="text-secondary ml-3">Learning</span>
						<br />
						<span class="text-dark">Experience</span>
					</h3>

					<ul role="list" class="space-y-4">
						<li class="flex items-center gap-4">
							<BadgeIcon :icon="HeartsIcon" variant="primary" />

							<p class="flex flex-col justify-center">
								<span class="font-medium text-xl md:text-2xl text-dark"
									>Easily Accessible</span
								>
								<span class="text-base md:text-lg text-gray-400"
									>Learning Will fell Very Comfortable With Courslab.</span
								>
							</p>
						</li>

						<li class="flex items-center gap-4">
							<BadgeIcon :icon="JigsawIcon" variant="primary" />

							<p class="flex flex-col justify-center">
								<span class="font-medium text-xl md:text-2xl text-dark"
									>Fun learning experience</span
								>
								<span class="text-base md:text-lg text-gray-400"
									>Learning Will fell Very Comfortable With Courslab.</span
								>
							</p>
						</li>
					</ul>
				</div>
			</section>
		</Container>
	</div>
</template>
