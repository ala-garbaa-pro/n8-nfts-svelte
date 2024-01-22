import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { pba } }) => {
    // Look at: https://pocketbase.io/docs/files-handling
    console.log(`🟩 /+page.server.ts -> load`);

    const nfts = await pba.collection('nfts').getFullList({
        sort: '-created'
    });

    return { nfts };
};
