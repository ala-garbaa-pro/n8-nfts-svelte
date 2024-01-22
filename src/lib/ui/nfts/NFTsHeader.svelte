<script lang="ts">
	export let title: string;
	export let href: string;
</script>

<div class="wrapper">
	<div class="heading">
		<h3>{title}</h3>
	</div>
	<div class="more">
		<a {href}
			>VIEW ALL<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-arrow-right"
				><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"
				></polyline></svg
			></a
		>
	</div>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		width: 100%;
		flex-wrap: wrap;
		margin-bottom: 5rem;
		align-items: center;
        justify-content: space-between;
	}

	.heading h3 {
		font-size: 3.2rem;
		line-height: 1.14;
		font-weight: 700;
		color: var(--color-white);
		user-select: none;
	}
	.more a {
		color: var(--color-body);
		transition: 0.4s;
		font-weight: 500;
		display: flex;
		align-items: center;
		svg {
			margin-left: 1rem;
		}
		&:hover{
			color: var(--color-primary);
		}
	}
</style>
