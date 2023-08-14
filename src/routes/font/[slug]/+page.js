import { error } from '@sveltejs/kit';

import { getFont } from '$lib/utils/sanity';

export const ssr = false;

export const load = async ({ params }) => {
	/** @type {import('$lib/types/font.d.ts').Font} */
	const font = await getFont(params.slug);
	if (font) return font;

	throw error(404, 'Not found');
};
