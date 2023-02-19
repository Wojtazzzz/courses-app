<script setup lang="ts">
import Hero from '../molecules/Hero.vue';
import PremiumExperienceSection from '../molecules/PremiumExperienceSection.vue';
import FeedbackSection from '../organisms/FeedbackSection.vue';
import OurTracksSection from '../organisms/OurTracksSection.vue';
</script>

<template>
	<Hero />

	<div class="mt-14 lg:mt-64">
		<OurTracksSection />
	</div>

	<div class="mt-20 md:mt-28">
		<PremiumExperienceSection />
	</div>

	<div class="mt-20 md:mt-28">
		<FeedbackSection />
	</div>
</template>
