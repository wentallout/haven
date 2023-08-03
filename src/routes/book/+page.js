import { getBooks } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';

export const load = async () => {
	
	const books = await getBooks();

	if (books) {
		return {
			books
		};
	}

	throw error(404, 'Not found');
};
