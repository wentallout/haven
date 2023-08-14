<script>
	import { urlFor } from '$lib/utils/sanity.js';
	/** @type {import('\$lib/types/font.d.ts').Font} */
	export let font;
</script>

<a class="font" href={'/font/' + font.slug.current}>
	<article>
		<img class="font__thumbnail" src={urlFor(font.fontCoverImage)} alt="" />
		<h5 class="font__title">{font.title}</h5>
	</article>
</a>

<style>
	.font {
	}

	.font__thumbnail {
		display: flex;
		width: 100%;
		aspect-ratio: 16 /9;
	}
</style>
