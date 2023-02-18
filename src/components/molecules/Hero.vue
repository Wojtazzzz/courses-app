<script setup lang="ts">
import AccentContainer from '../atoms/AccentContainer.vue';
import Container from '../atoms/Container.vue';
</script>

<template>
	<div class="bg-theme-primary relative">
		<img
			src="../icons/test-tube.svg"
			alt=""
			class="w-10 md:w-16 lg:w-20 absolute bottom-10 md:bottom-24 left-8"
		/>

		<img
			src="../icons/ruler.svg"
			alt=""
			class="w-10 md:w-16 lg:w-20 absolute top-4 md:top-0 left-12 md:left-96 lg:left-52"
		/>

		<img
			src="../icons/atom.svg"
			alt=""
			class="w-10 md:w-16 lg:w-20 absolute -top-1 right-[8%]"
		/>

		<img
			src="../icons/set-square.svg"
			alt=""
			class="w-10 md:w-16 lg:w-20 absolute bottom-28 lg:bottom-56 left-[33%]"
		/>

		<img
			src="../icons/globe.svg"
			alt=""
			class="w-10 md:w-16 lg:w-20 absolute bottom-20 lg:bottom-28 right-[14%]"
		/>

		<Container>
			<header class="pt-12 pb-16 lg:pt-16 lg:pb-52 relative">
				<div class="flex justify-center items-center gap-8">
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

						<img
							src="../icons/ellipse.svg"
							alt=""
							class="w-72 absolute -top-16 -right-4 z-0"
						/>

						<img
							src="../icons/light-bulb.svg"
							alt=""
							class="w-20 absolute -top-8 left-[2%]"
						/>
					</div>
				</div>

				<AccentContainer
					class="max-w-lg lg:max-w-none flex flex-col lg:flex-row lg:justify-evenly gap-8 lg:gap-10 mt-8 lg:absolute lg:inset-x-0 lg:top-[85%]"
				>
					<div
						class="flex flex-col lg:flex-row items-center gap-3 lg:gap-6 w-full lg:w-1/3"
					>
						<div class="bg-white/20 p-3.5 xl:p-5 rounded-2xl flex flex-shrink-0">
							<img
								src="../icons/online-test.svg"
								class="w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10"
								alt=""
							/>
						</div>

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
						<div class="bg-white/20 p-3.5 xl:p-5 rounded-2xl flex flex-shrink-0">
							<img
								src="../icons/exam.svg"
								class="w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10"
								alt=""
							/>
						</div>

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
						<div class="bg-white/20 p-3.5 xl:p-5 rounded-2xl flex flex-shrink-0">
							<img
								src="../icons/certification.svg"
								class="w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10"
								alt=""
							/>
						</div>

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
