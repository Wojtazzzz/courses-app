<script setup lang="ts">
import AccentContainer from '../atoms/AccentContainer.vue';
import BadgeIcon from '../atoms/BadgeIcon.vue';
import Container from '../atoms/Container.vue';
import ExamIcon from '../icons/exam.svg';
import TestTubeIcon from '../icons/floating/test-tube.svg';
import RulerIcon from '../icons/floating/ruler.svg';
import AtomIcon from '../icons/floating/atom.svg';
import SetSquareIcon from '../icons/floating/set-square.svg';
import EllipseIcon from '../icons/floating/ellipse.svg';
import LightBulbIcon from '../icons/floating/light-bulb.svg';
import GlobeIcon from '../icons/floating/globe.svg';
import OnlineTestIcon from '../icons/online-test.svg';
import CertificationIcon from '../icons/certification.svg';
import FloatingIcon from '../atoms/FloatingIcon.vue';
</script>

<template>
	<div class="bg-theme-primary relative">
		<FloatingIcon :icon="TestTubeIcon" class="bottom-10 md:bottom-24 left-8" />
		<FloatingIcon :icon="RulerIcon" class="top-0 left-12 md:left-96 lg:left-52" />
		<FloatingIcon :icon="AtomIcon" class="top-8 md:-top-1 right-[8%]" />
		<FloatingIcon :icon="SetSquareIcon" class="bottom-28 lg:bottom-56 left-[33%]" />
		<FloatingIcon :icon="GlobeIcon" class="bottom-20 lg:bottom-28 right-[14%]" />

		<Container>
			<header class="pt-12 pb-4 lg:pt-16 lg:pb-52 relative">
				<div class="flex justify-center items-center gap-8 mb-12">
					<hgroup class="w-full lg:w-2/5 space-y-4">
						<h2 class="font-black flex flex-col text-4xl md:text-5xl lg:text-6xl">
							<p>
								<span class="text-dark">The</span>
								<span class="text-secondary ml-2 md:ml-3">Smart</span>
							</p>
							<p>
								<span class="text-dark">Choice For</span>
								<span class="text-secondary ml-2 md:ml-3">Future</span>
							</p>
						</h2>

						<p class="text-gray-500 text-sm md:text-base lg:text-lg font-medium">
							Elearn is a global training provider based across the UK that
							specialises in accredited and bespoke training courses. We crush the...
						</p>
					</hgroup>

					<div class="w-3/5 hidden lg:block relative">
						<img
							src="../icons/hero-img.svg"
							width="830"
							height="315"
							class="relative z-20"
							alt=""
						/>

						<FloatingIcon
							:icon="EllipseIcon"
							class="lg:w-72 absolute -top-16 -right-4 z-0"
						/>

						<FloatingIcon :icon="LightBulbIcon" class="-top-8 left-[2%]" />
					</div>
				</div>

				<AccentContainer
					class="max-w-lg lg:max-w-none flex flex-col lg:flex-row lg:justify-evenly gap-8 lg:gap-10 mt-8 lg:absolute lg:inset-x-0 lg:top-[85%]"
				>
					<div
						class="flex flex-col lg:flex-row items-center gap-3 lg:gap-6 w-full lg:w-1/3"
					>
						<BadgeIcon :icon="OnlineTestIcon" variant="secondary" />

						<p class="flex flex-col gap-2">
							<span
								class="font-bold text-white text-lg md:text-xl text-center lg:text-left xl:text-2xl"
								>Learn The Latest Skills</span
							>
							<span
								class="md:font-medium text-center lg:text-left text-white/60 text-sm"
								>Contrary to popular belief, Lorem Ipsum is not simply random text.
								It has roots in a BC, making it over 2000 years old.</span
							>
						</p>
					</div>

					<div
						class="flex flex-col lg:flex-row items-center gap-3 lg:gap-6 w-full lg:w-1/3"
					>
						<BadgeIcon :icon="ExamIcon" variant="secondary" />

						<p class="flex flex-col gap-2">
							<span
								class="font-bold text-white text-lg md:text-xl text-center lg:text-left xl:text-2xl"
								>Get Ready For a Career</span
							>
							<span
								class="md:font-medium text-center lg:text-left text-white/60 text-sm"
								>Contrary to popular belief, Lorem Ipsum is not simply random text.
								It has roots in a BC, making it over 2000 years old.</span
							>
						</p>
					</div>

					<div
						class="flex flex-col lg:flex-row items-center gap-3 lg:gap-6 w-full lg:w-1/3"
					>
						<BadgeIcon :icon="CertificationIcon" variant="secondary" />

						<p class="flex flex-col gap-2">
							<span
								class="font-bold text-white text-lg md:text-xl text-center lg:text-left xl:text-2xl"
								>Earn a Certificate</span
							>
							<span
								class="md:font-medium text-center lg:text-left text-white/60 text-sm"
								>Contrary to popular belief, Lorem Ipsum is not simply random text.
								It has roots in a BC, making it over 2000 years old.</span
							>
						</p>
					</div>
				</AccentContainer>
			</header>
		</Container>
	</div>
</template>
