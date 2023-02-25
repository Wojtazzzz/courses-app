<script setup lang="ts">
import AppName from './AppName.vue';
import Container from './Container.vue';

const currentYear = new Date().getFullYear();
</script>

<template>
	<footer class="bg-theme-primary w-full mt-20 md:mt-28 lg:mt-36">
		<Container>
			<div
				class="py-10 flex flex-col items-center lg:flex-row lg:justify-between lg:items-start gap-10 lg:gap-0 border-b border-gray-400/60"
			>
				<div
					class="w-full max-w-lg lg:w-1/5 flex flex-col gap-y-4 text-center lg:text-left"
				>
					<RouterLink to="/" class="flex justify-center lg:justify-start">
						<AppName />
					</RouterLink>

					<span class="text-gray-500 text-center lg:text-left"
						>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						Lorem Ipsum has been the industry's standard dummy a type specimen
						book.</span
					>
				</div>

				<div class="flex flex-col gap-y-4 text-center lg:text-left">
					<span class="text-dark text-xl font-semibold">Company</span>

					<ul role="list" class="space-y-3 text-gray-500">
						<li>
							<RouterLink to="/about" class="hover:underline">About Us</RouterLink>
						</li>
						<li>
							<RouterLink to="/how-to-work" class="hover:underline"
								>How to work?</RouterLink
							>
						</li>
						<li>
							<RouterLink to="/courses" class="hover:underline">Courses</RouterLink>
						</li>
						<li>
							<RouterLink to="/service" class="hover:underline">Service</RouterLink>
						</li>
					</ul>
				</div>

				<div class="flex flex-col gap-y-4 text-center lg:text-left">
					<span class="text-dark text-xl font-semibold">Courses</span>

					<ul role="list" class="space-y-3 text-gray-500">
						<li>
							<RouterLink to="/categories" class="hover:underline"
								>Categories</RouterLink
							>
						</li>
						<li>
							<RouterLink to="/offline-courses" class="hover:underline"
								>Offline Courses</RouterLink
							>
						</li>
						<li>
							<RouterLink to="/video-courses" class="hover:underline"
								>Video Courses</RouterLink
							>
						</li>
					</ul>
				</div>

				<div class="flex flex-col gap-y-4 text-center lg:text-left">
					<span class="text-dark text-xl font-semibold">Support</span>

					<ul role="list" class="space-y-3 text-gray-500">
						<li>
							<RouterLink to="/faq" class="hover:underline">FAQ</RouterLink>
						</li>
						<li>
							<RouterLink to="/help-center" class="hover:underline"
								>Help Center</RouterLink
							>
						</li>
						<li>
							<RouterLink to="/career" class="hover:underline">Career</RouterLink>
						</li>
						<li>
							<RouterLink to="/privacy" class="hover:underline">Privacy</RouterLink>
						</li>
					</ul>
				</div>

				<div class="w-full lg:w-1/5 flex flex-col gap-y-4 text-center lg:text-left">
					<span class="text-dark text-xl font-semibold">Contact</span>

					<ul role="list" class="space-y-3 text-gray-500">
						<li>
							<span>+0913-705-3875</span>
						</li>
						<li>
							<span>ElizabethJ@jourrapide.com</span>
						</li>
						<li>
							<address>
								Course App Foundation<br />
								331 E Evelyn Ave<br />
								Mountain View, CA 94041<br />
								USA
							</address>
						</li>
					</ul>
				</div>
			</div>

			<div class="text-center py-3">
				<span class="text-gray-500"
					>Copyright © {{ currentYear }} Courses App | All Rights Reserved</span
				>
			</div>
		</Container>
	</footer>
</template>
