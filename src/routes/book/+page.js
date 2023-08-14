import { getBooks } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';

export const load = async () => {
	/** @type {import('$lib/types/book.d.ts').Book[]} */
	const books = await getBooks();

	if (books) {
		return {
			books
		};
	}

	throw error(404, 'Not found');
};
