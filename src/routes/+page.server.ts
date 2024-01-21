import { db } from '$lib/fakeDB';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { pba } }) => {
    console.log(`🟩 /+page.server.ts -> load`);

    const nfts = db;
    // const nfts = await pba.collection('nfts').getFullList({
    //     sort: '-created'
    // });

    return { nfts };
};
