import { getFonts } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';

export const load = async () => {
	/** @type {import('$lib/types/font.d.ts').Font[]} */
	const fonts = await getFonts();

	if (fonts) {
		return {
			fonts
		};
	}

	throw error(404, 'Not found');
};
