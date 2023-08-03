import { error } from '@sveltejs/kit';

import { getBook } from '$lib/utils/sanity';

export const ssr = false;

export const load = async ({ params }) => {
	/** @type {import('$lib/types/book.d.ts').Book} */
	const book = await getBook(params.slug);
	if (book) return book;

	throw error(404, 'Not found');
};
