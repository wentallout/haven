<script>
	import { PortableText } from '@portabletext/svelte';
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';

	/** @type {import('$lib/types/font.d.ts').Font} */
	export let data;
</script>

<article class="font">
	<hgroup>
		<h1>{data.title}</h1>
		<p>{formatDate(data._createdAt)}</p>
	</hgroup>

	<div class="font__container">
		{#if data.fontCoverImage}
			<img
				class="font__cover"
				src={urlFor(data.fontCoverImage).url()}
				alt="Cover image for {data.title}" />
		{/if}

		<div class="font__content prose">
			<PortableText value={data.body} />
		</div>
	</div>
</article>

<style>
	hgroup {
		margin-bottom: 2rem;
	}

	.font {
		justify-content: space-between;
	}

	.font__container {
		display: flex;
		flex-direction: column;

		gap: var(--spacing);
	}

	.font__cover {
		width: 100%;
		max-height: 900px;
		aspect-ratio: 16/9;
	}
</style>
