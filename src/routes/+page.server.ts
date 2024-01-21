import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { pba } }) => {
    console.log(`🟩 /+page.server.ts -> load`);

    const nfts = await pba.collection('nfts').getFullList({
        sort: '-created'
    });

    throw new Error("err")

    return { nfts };
};
