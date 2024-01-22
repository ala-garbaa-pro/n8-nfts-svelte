<script lang="ts">
	import NfTsProduct from '$lib/ui/nfts/NFTsProduct.svelte';
import NFTsWrapper from '$lib/ui/nfts/NFTsWrapper.svelte';

	export let data;

	const nfts: any[] = data.nfts;
</script>

<NFTsWrapper headerTitle="Trending NFTs" headerHref="">
	<!-- TODO: for now will use normal nfts list and then when i create the page of single NFT will add counter view fonctionality. -->
	{#each nfts as nft}
		<NfTsProduct data={nft} /> 
	{/each}
</NFTsWrapper>
