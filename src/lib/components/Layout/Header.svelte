<script>
</script>

<header class="header">
	<div class="container">
		<nav>
			<ul>
				<li>
					<a class="header__title" href="/"> <h4>Haven Archive</h4></a>
				</li>
			</ul>

			<ul class="header__list">
				<li>
					<a href="/book">Books</a>
				</li>
				<li>
					<a href="/font">Variable Fonts</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<style>
	.header {
		padding: 1rem;
		border-bottom: 1px solid var(--muted-border-color);
		margin-bottom: 3rem;
	}

	.container {
		padding: 0;
	}

	.header__list {
		display: none;
	}

	@media (min-width: 768px) {
		.header__list {
			display: block;
		}
	}
</style>
