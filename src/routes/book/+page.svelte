<script>
	import BookCard from '$lib/components/Book/BookCard.svelte';

	export let data;

	console.log('ayo', data);
</script>

<h1>Books for UI/UX Designers</h1>

<section>
	<div class="books">
		{#if data.books.length}
			{#each data.books as book}
				<BookCard {book} />
			{/each}
		{:else}
			<p>Loading</p>
		{/if}
	</div>
</section>

<style>
	.books {
		display: grid;
		grid-gap: var(--gap);
		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
		--min: 18ch;
		--gap: 1rem;
	}

	@media (min-width: 768px) {
		.books {
			--min: 24ch;
			--gap: 1rem;
		}
	}
</style>
