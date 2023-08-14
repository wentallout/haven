<script>
	import Footer from '$lib/components/Layout/Footer.svelte';
	import Header from '$lib/components/Layout/Header.svelte';

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
