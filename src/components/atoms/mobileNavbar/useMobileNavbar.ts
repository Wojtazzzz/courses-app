import { ref } from 'vue';

export const useMobileNavbar = () => {
	const isActive = ref(false);

	const open = () => {
		isActive.value = true;
	};

	const close = () => {
		isActive.value = false;
	};

	return {
		isActive,
		open,
		close,
	};
};
