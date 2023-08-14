<script>
	import FontCard from '$lib/components/Font/FontCard.svelte';
	export let data;
</script>

<h1>Variable Fonts</h1>

<section>
	<div class="fonts">
		{#if data.fonts.length}
			{#each data.fonts as font}
				<FontCard {font} />
			{/each}
		{:else}
			<p>Loading</p>
		{/if}
	</div>
</section>

<style>
	.fonts {
		display: grid;
		grid-gap: var(--gap);
		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
		--min: 18ch;
		--gap: 1rem;
	}
</style>
