<script setup lang="ts">
import AccentContainer from '../atoms/AccentContainer.vue';
import Container from '../atoms/Container.vue';
</script>

<template>
	<div class="bg-theme-primary">
		<Container>
			<header class="pt-12 lg:pt-16 pb-32 lg:pb-52 relative">
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

					<div class="w-3/5 hidden lg:block">
						<img src="../icons/hero-img.svg" width="830" height="315" alt="" />
					</div>
				</div>

				<AccentContainer
					class="flex flex-col lg:flex-row lg:justify-evenly gap-8 lg:gap-10 absolute inset-x-0 top-[85%]"
				>
					<div
						class="flex flex-col lg:flex-row items-center gap-3 lg:gap-6 w-full lg:w-1/3"
					>
						<div class="bg-white/20 p-3.5 lg:p-5 rounded-2xl flex flex-shrink-0">
							<img
								src="../icons/online-test.svg"
								class="w-8 h-8 lg:w-10 lg:h-10"
								alt=""
							/>
						</div>

						<p class="flex flex-col gap-2">
							<span
								class="font-bold text-white text-lg md:text-xl text-center lg:text-left lg:text-2xl"
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
						<div class="bg-white/20 p-3.5 lg:p-5 rounded-2xl flex flex-shrink-0">
							<img src="../icons/exam.svg" class="w-8 h-8 lg:w-10 lg:h-10" alt="" />
						</div>

						<p class="flex flex-col gap-2">
							<span
								class="font-bold text-white text-lg md:text-xl text-center lg:text-left lg:text-2xl"
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
						<div class="bg-white/20 p-3.5 lg:p-5 rounded-2xl flex flex-shrink-0">
							<img
								src="../icons/certification.svg"
								class="w-8 h-8 lg:w-10 lg:h-10"
								alt=""
							/>
						</div>

						<p class="flex flex-col gap-2">
							<span
								class="font-bold text-white text-lg md:text-xl text-center lg:text-left lg:text-2xl"
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
