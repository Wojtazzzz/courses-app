<script setup lang="ts">
import Hero from '../molecules/Hero.vue';
import PremiumExperienceSection from '../molecules/PremiumExperienceSection.vue';
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
</template>
