import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () => {
	return [
		{ name: 'khanh' },
		{ name: 'huyen' }
	];
};

export const load: PageServerLoad = async ({ params }) => {
    const name = params.name;
    return {
        name
    }
};

export const prerender = true;