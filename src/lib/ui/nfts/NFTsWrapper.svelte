<script lang="ts">
	import NFTsHeader from './NFTsHeader.svelte';
	export let headerTitle: string;
	export let headerHref: string;
</script>

<section class="nfts-wrapper">
	<NFTsHeader title={headerTitle} href={headerHref} />
	<div class="nfts-container">
		<slot />
	</div>
</section>

<style lang="scss">
	section.nfts-wrapper {
		padding-top: 10rem;
	}

	.nfts-container {
		width: 100%;
		margin-right: auto;
		margin-left: auto;
		display: flex;
		flex-wrap: wrap;
		gap: 3rem;
		padding: 0.2rem 1.6rem;
	}
</style>
