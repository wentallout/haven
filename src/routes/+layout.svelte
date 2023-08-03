<script>
	import Footer from '$lib/components/Footer.svelte';

	import Header from '$lib/components/Header.svelte';

	import '$lib/styles/global-postcss.css';
</script>

<Header />
<main class="container">
	<slot />
</main>

<Footer />

<style>
	main {
		min-height: 100vh;
	}
</style>
