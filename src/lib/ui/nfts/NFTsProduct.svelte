<script lang="ts">
	import { PUBLIC_BASE_PB_URL } from '$env/static/public';

	export let data: any;
	console.log('🚀 ~ data:', data);

	const href = '';
	const src = `${PUBLIC_BASE_PB_URL}/api/files/${data.collectionId}/${data.id}/${data.image}`; // ?thumb=100x300
	let title: string;
	const alt = (title = data.title);
	const category = data.category;
</script>

<article class="nfts-product">
	<div class="card-thumbnail">
		<a {href}><img {src} {alt} /></a>
	</div>
	<div class="inner-block">
		<h4 style="padding-top: 1rem;">{title}</h4>
		<h4 class="category">{category}</h4>
		<h5 class="auther">From <b>{data.artist}</b></h5>
		<!-- TODO: When creating the artist page, include a link to the artist profile page. -->
		<div class="react">
			<svg
				viewBox="0 0 17 16"
				fill="none"
				width="16"
				height="16"
				class="sc-bdnxRM sc-hKFxyN kBvkOu"
			>
				<path
					d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
					stroke="currentColor"
					stroke-width="2"
				></path>
			</svg>
			<span class="number">99</span>
			<!-- TODO: Once I add the unique user with login credentials, I will incorporate the dynamic value in React. -->
		</div>
	</div>
</article>

<style lang="scss">
	article.nfts-product {
		padding: 2rem;
		border-radius: 1rem;
		background: var(--background-color-4);
		height: 100%;
		position: relative;
		z-index: 5;
		transition: box-shadow 1s ease;

		& * {
			cursor: pointer;
		}

		&:hover {
			box-shadow:
				inset 0 0 12px whitesmoke,
				inset 29px 0 40px #f0f,
				inset -40px 0 0px #0ff,
				inset 2px 0 3px #f0f,
				inset -20px 0 40px #0ff,
				0 0 6px #fff,
				-10px 0 20px #f0f,
				10px 0 50px #0ff;
		}

		&:hover::before {
			transform: rotate(2deg) translateX(-0.7rem) translateY(1.1rem);
		}

		&::before {
			content: '';
			position: absolute;
			top: auto;
			bottom: 0;
			left: 0;
			border-radius: 1.5rem;
			background-image: linear-gradient(100deg, #13131d, #0398ed);
			background-repeat: repeat-x;
			-webkit-transition: all 0.5s;
			transition: all 0.5s;
			width: 100%;
			height: 100%;
			z-index: -2;
		}
		&::after {
			content: '';
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
			background: #242435;
			position: absolute;
			border-radius: 10px;
			z-index: -1;
		}
	}

	.card-thumbnail {
		overflow: hidden;
		border-radius: 5px;
		position: relative;
		margin: -15px;

		a img {
			border-radius: 0.5rem;
			object-fit: cover;
			width: 100%;
			height: auto;
			transition: 0.5s;
			border: 0;
			vertical-align: middle;
			max-width: 22.5rem;
		}
	}

	h4 {
		font-size: 1.6rem;
	}

	h5 b {
		color: var(--color-primary);
	}

	.inner-block {
		margin: 15px -15px -15px -15px;
	}

	.category {
		padding-block: 0.5rem;
		font-size: 1.4rem;
		font-weight: 600;
		color: var(--color-heading-gray-2);
	}
	.auther {
	}

	.react {
		background-color: var(--color-primary);
		border-radius: 3px;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		width: fit-content;
		color: var(--color-white);
		margin-left: auto;
		padding: 0.5rem 1rem;
		svg {
			margin-right: 1rem;
		}
	}
</style>
