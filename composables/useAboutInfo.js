import { useAboutStore } from '~/stores/about.js';

export const useAboutInfo = () => {
	const { about } = storeToRefs(useAboutStore());

	return computed(() => about.value?.[0] ?? null);
};
