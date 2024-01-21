<script lang="ts">
	export let data;

	const nfts: any[] = data.nfts;



</script>

<article>
    NFTs:
    <pre>
        {
            JSON.stringify(nfts,null,2)
        }
    </pre>
</article>