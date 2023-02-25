<script setup lang="ts">
import AccentContainer from '../atoms/AccentContainer.vue';
import Container from '../atoms/Container.vue';
import FloatingIcon from '../atoms/FloatingIcon.vue';
import InputBox from '../atoms/InputBox.vue';
import LightBulbFilledIcon from '../icons/floating/light-bulb-filled.svg';
import CurledOrangeArrowIcon from '../icons/floating/curled-orange-arrow.svg';
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

			<FloatingIcon
				:icon="LightBulbFilledIcon"
				class="bottom-3 md:bottom-4 right-[1%] md:right-[15%]"
			/>
			<FloatingIcon
				:icon="CurledOrangeArrowIcon"
				class="-bottom-1 md:-bottom-3 left-[3%] md:left-[13%]"
			/>

			<div class="text-center">
				<hgroup class="text-white space-y-2">
					<h3 class="font-semibold text-2xl md:text-3xl lg:text-4xl">
						Subscribe to our newsletter
					</h3>
					<p class="text-base md:text-lg font-medium">
						Lorem Ipsum is simply dummy text of the printing.
					</p>
				</hgroup>

				<div class="mt-8">
					<InputBox
						variant="secondary"
						button-text="Send"
						input-placeholder="Email Address"
					/>
				</div>
			</div>
		</AccentContainer>
	</Container>
</template>
