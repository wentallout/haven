<script>
	import { urlFor } from '$lib/utils/sanity.js';

	/** @type {import('$lib/types/book.d.ts').Book} */
	export let book;
	console.log(book);
</script>

<a class="book" href={'/book/' + book.slug.current}>
	<div class="book__thumbnail">
		<img class="book__img" src={urlFor(book.bookCoverImage)} alt="" />
	</div>
	<div class="book__title">
		{book.title}
	</div>
</a>

<style>
	.book {
		display: flex;
		flex-direction: column;
		border: 1px solid var(--border-color);
		border-radius: var(--border-radius);
		overflow: hidden;
		background-color: var(--card-background-color);
		border: 1px solid var(--muted-border-color);
	}

	.book__thumbnail {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 240px;
		border-bottom: 1px solid var(--muted-border-color);

		overflow: hidden;
	}

	.book__img {
		height: 100%;
		width: auto;
		object-fit: cover;
	}

	.book__title {
		padding: 1rem 1.5rem;
		width: 100%;
		color: var(--h1-color);
	}
</style>
