<script>
	import { PortableText } from '@portabletext/svelte';
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';

	/** @type {import('$lib/types/book.d.ts').Book} */
	export let data;
</script>

<article class="book">
	<hgroup>
		<h1>{data.title}</h1>
		<p>{formatDate(data._createdAt)}</p>
	</hgroup>

	<div class="book__container">
		{#if data.bookCoverImage}
			<img
				width="240"
				class="book__cover"
				src={urlFor(data.bookCoverImage).url()}
				alt="Cover image for {data.title}" />
		{/if}

		<div class="book__content prose">
			<PortableText value={data.body} />
			<a rel="external" target="_blank" href={data.downloadLink}>
				<button>Download Book</button>
			</a>
		</div>
	</div>
</article>

<style>
	hgroup {
		margin-bottom: 2rem;
	}

	.book {
		justify-content: space-between;
	}

	.book__container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: var(--spacing);
	}

	.book__cover {
		max-width: 240px;
		height: auto;
	}
</style>
