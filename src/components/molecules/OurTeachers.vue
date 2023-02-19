<script setup lang="ts">
import Container from '../atoms/Container.vue';
import SectionTitle from '../atoms/SectionTitle.vue';

const teachers = 3;
</script>

<template>
	<Container>
		<section class="space-y-8">
			<div class="relative">
				<img
					src="../icons/curled-arrow.svg"
					alt=""
					class="w-10 md:w-16 lg:w-20 absolute -top-5 left-0 md:left-5 rotate-180"
				/>

				<SectionTitle
					title="Our Teachers"
					subtitle="Lorem Ipsum is simply dummy text of the printing."
				/>

				<img
					src="../icons/orange-planet.svg"
					alt=""
					class="w-10 md:w-16 lg:w-20 absolute bottom-0 right-5"
				/>
			</div>

			<ul
				role="list"
				class="flex flex-col lg:flex-row justify-center items-center gap-x-7 gap-y-12"
			>
				<li v-for="teacher in teachers" :key="teacher">
					<article
						class="max-w-[490px] w-full space-y-3 p-3 pb-4 shadow-[0px_4px_25px_rgba(0,0,0,0.1)] rounded-lg relative bg-theme-secondary"
					>
						<img src="../icons/dummy-teacher.png" class="rounded-xl w-full" alt="" />

						<header class="pb-2">
							<hgroup>
								<h4 class="font-medium text-lg">Tracy D. Wright</h4>
								<p class="font-medium text-gray-400">
									Professor @George Brown College
								</p>
							</hgroup>

							<p class="text-gray-400 my-2">
								Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi
								ut allquip ex commodo.
							</p>
						</header>

						<footer class="flex justify-between">
							<span class="text-lg text-secondary font-medium">
								Engineering physics
							</span>

							<ul role="list" class="flex gap-2">
								<li>
									<a
										href="https://www.instagram.com/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											src="../icons/instagram.png"
											width="22"
											height="22"
											alt="Instagram icon"
										/>
									</a>
								</li>

								<li>
									<a
										href="https://www.linkedin.com/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											src="../icons/linkedin.png"
											width="22"
											height="22"
											alt="Linkedin icon"
										/>
									</a>
								</li>
							</ul>
						</footer>
					</article>
				</li>
			</ul>
		</section>
	</Container>
</template>
