<script>
	import './style.scss';
</script>

<header class="main-header">
	<nav class="navbar">
		<a class="logo-text" href="/"><span>N8</span> NFTs Svelte</a>
		<ul class="mainmenu">
			<li><a href="/search">Search</a></li>
			<li><a href="/favorites">Favorites</a></li>
			<li><a href="/login">Log in</a></li>
		</ul>
	</nav>
</header>
<main class="main-content">
	<slot />
</main>

<style lang="scss">
	header {
		position: sticky !important;
		top: 0;
		z-index: 999;
		width: 100%;
		backdrop-filter: blur(1rem);
		border-bottom: 1px solid #ffffff14;
		transition: 0.5s;

		& > * {
			width: 144rem;
			margin: auto;
		}
	}
	main {
		/* as container */
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		& > * {
			width: 144rem;
			padding: 0.2rem 1.6rem;
		}
	}
	nav.navbar {
		display: flex;
		height: 8.5rem;
		padding: 0.2rem 1.6rem;
		display: flex;
		align-items: center;
        justify-content: space-between;

		ul.mainmenu {
			display: flex;
			list-style: none;
			padding: 0;
			margin: 0;
			justify-content: flex-start;
			flex-wrap: wrap;
			li {
				font-size: 1.4rem;
				line-height: 1.5;
				color: var(--color-body);
				margin-top: 0;
				margin-bottom: 0;

				a {
					font-weight: 500;
					padding: 28px 12px;
					font-size: 16px;
					display: block;
					color: var(--color-body);
					margin: 0 8px;
					border-radius: 3px;
					transition: var(--transition);
					text-decoration: none;
				}
			}
		}
	}
	a.logo-text {
		font-size: 2.2rem;
		text-decoration: none;
		color: var(--color-white);
		span {
			background: var(--color-primary);
			padding: 0.5rem;
			border-radius: 0.5rem;
		}

		padding-right: 3.2rem;

		margin-right: 1.7rem;

		&::after {
			background: var(--color-border);
			width: 1px;
			height: 36px;
			position: absolute;
			content: '';
			right: 0;
			top: 50%;
			transform: translateY(-50%);
		}
	}
</style>
