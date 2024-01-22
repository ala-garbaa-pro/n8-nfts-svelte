<script>
	import './style.scss';
	import n8SmallSignature from '$lib/images/n8SmallSignature.png';

	const currentYear = new Date().getFullYear();
</script>

<div class="page">
	<header class="main-header">
		<nav class="navbar">
			<a class="logo-text" href="/">
				<img alt="N8 small signature" src={n8SmallSignature} />
				<span>NFTs</span> Svelte</a
			>
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

	<footer>
		<div class="footer-wrapper">
			<div>
				Developed by <a href="https://www.alagarbaa.com/" target="_blank">Ala GARBAA</a> | All
				rights reserved <span>{currentYear === 2024 ? '2024' : `2024 - ${currentYear}`}</span>
			</div>
			<div class="misc-links">
				<a href="/">Terms of use</a>
				<span>•</span>
				<a href="/">Privacy Policy</a>
			</div>
			<div class="socials">
				<a href="/">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor"
						><path
							d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"
						/></svg
					>
				</a>
				<a href="/">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
						><title>email</title><path
							d="M5,5H18C19.66,5 21,6.34 21,8V17C21,18.66 19.66,20 18,20H5C3.34,20 2,18.66 2,17V8C2,6.34 3.34,5 5,5M5,6C4.5,6 4.06,6.17 3.72,6.47L11.5,11.5L19.28,6.47C18.94,6.17 18.5,6 18,6H5M11.5,12.71L3.13,7.28C3.05,7.5 3,7.75 3,8V17C3,18.1 3.9,19 5,19H18C19.1,19 20,18.1 20,17V8C20,7.75 19.95,7.5 19.87,7.28L11.5,12.71Z"
						/></svg
					>
				</a>
				<a href="/"
					><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
						><title>linkedin</title><path
							d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"
						/></svg
					>
				</a>
			</div>
		</div>
	</footer>
</div>

<style lang="scss">
	// TODO: Make the design responsive for mobile.
	.page {
		width: 88vw;
		max-width: 144rem;
		margin: auto;
	}
	header {
		position: sticky;
		top: 0;
		z-index: 999;
		width: 100%;
		backdrop-filter: blur(1rem);
		border-bottom: 1px solid #ffffff14;
		transition: 0.5s;

		// & > * {
		// 	width: 144rem;
		// 	margin: auto;
		// }
	}
	main {
		/* as container */
		padding-top: 1.5rem;
		min-height: 83.5dvh;
		// width: 144rem;
		// margin: auto;
		// & > * {
		// 	width: 144rem;
		// 	padding: 0.2rem 1.6rem;
		// }
	}
	nav.navbar {
		display: flex;
		height: 8.5rem;
		padding: 0.2rem 1.6rem;
		align-items: center;
		justify-content: space-between;

		ul.mainmenu {
			@media (max-width: 700px) {
				display: none;
			}
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
					&:hover {
						text-decoration: underline;
						color: var(--color-white);
					}
				}
			}
		}
	}
	a.logo-text {
		font-size: 2.2rem;
		text-decoration: none;
		font-weight: 700;
		color: var(--color-white);
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		user-select: none;

		cursor: pointer;

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

	footer {
		border-top: 1px solid var(--color-border);
		background: var(--background-color-1);
		padding: 20px 0;
		bottom: 0;

		& .footer-wrapper {
			// width: 144rem;
			margin: auto;
			padding: 0.2rem 1.6rem;
			display: flex;
			justify-content: space-between;
			gap: 1rem;
		}

		a {
			color: var(--color-primary);
			text-decoration: none;
			&:hover {
				text-decoration: underline;
			}
		}

		& .socials {
			display: flex;
			gap: 1rem;
			a {
				background-color: var(--color-border);
				filter: blur(0.6px);
				&:hover {
					background-color: var(--color-primary);
					filter: blur(0);
					&:before {
						width: 1px;
						height: 1px;
						position: absolute;
						content: '';
						scale: 0.2;
						right: 0;
						top: 50%;
						transform: translateY(-50%);
						box-shadow: -72px 0px 120px 60px #0ff;
					}
				}
				border-radius: 3.2rem;
				width: 3.2rem;
				height: 3.2rem;
				display: flex;
				align-items: center;
				justify-content: center;
				svg {
					width: 2.3rem;
					height: 2.3rem;
					color: var(--color-white);
				}
			}
		}

		.misc-links {
			display: flex;
			gap: 1rem;
		}
	}
</style>
