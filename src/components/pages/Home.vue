<script setup lang="ts">
import Hero from '../molecules/Hero.vue';
import NewsletterSection from '../molecules/NewsletterSection.vue';
import OurTeachers from '../molecules/OurTeachers.vue';
import PremiumExperienceSection from '../molecules/PremiumExperienceSection.vue';
import FeedbackSection from '../organisms/FeedbackSection.vue';
import TopCoursesSection from '../organisms/topCoursesSection/TopCoursesSection.vue';
</script>

<template>
	<Hero />

	<div class="mt-14 lg:mt-64">
		<TopCoursesSection />
	</div>

	<div class="mt-20 md:mt-28">
		<PremiumExperienceSection />
	</div>

	<div class="mt-20 md:mt-28">
		<FeedbackSection />
	</div>

	<div class="mt-12 md:mt-18">
		<OurTeachers />
	</div>

	<div class="mt-24 md:mt-36">
		<NewsletterSection />
	</div>
</template>
