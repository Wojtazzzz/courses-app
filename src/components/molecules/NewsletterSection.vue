<script setup lang="ts">
import AccentContainer from '../atoms/AccentContainer.vue';
import Container from '../atoms/Container.vue';
</script>

<template>
	<Container>
		<AccentContainer class="py-18 lg:py-24 overflow-hidden">
			<img
				src="../icons/white-ellipse.svg"
				width="230"
				height="230"
				class="absolute z-10 -left-10 -top-28 hidden lg:inline-block"
				alt=""
			/>

			<img
				src="../icons/white-ellipse.svg"
				width="230"
				height="230"
				class="absolute z-10 -left-28 -top-20 hidden lg:inline-block"
				alt=""
			/>

			<img
				src="../icons/white-ellipse.svg"
				width="230"
				height="230"
				class="absolute z-10 -right-10 -top-20 hidden lg:inline-block"
				alt=""
			/>

			<img
				src="../icons/white-ellipse.svg"
				width="230"
				height="230"
				class="absolute z-10 -right-28 -top-14 hidden lg:inline-block"
				alt=""
			/>

			<img
				src="../icons/light-bulb-filled.svg"
				alt=""
				class="w-14 md:w-20 lg:w-28 absolute bottom-3 md:bottom-4 right-[1%] md:right-[15%]"
			/>

			<img
				src="../icons/curled-orange-arrow.svg"
				alt=""
				class="w-14 md:w-20 lg:w-28 absolute -bottom-1 md:-bottom-3 left-[3%] md:left-[13%]"
			/>

			<div class="text-center">
				<hgroup class="text-white space-y-4">
					<h3 class="font-semibold text-2xl md:text-3xl lg:text-4xl">
						Subscribe to our newsletter
					</h3>
					<p class="text-base md:text-lg font-medium">
						Lorem Ipsum is simply dummy text of the printing.
					</p>
				</hgroup>
			</div>
		</AccentContainer>
	</Container>
</template>
