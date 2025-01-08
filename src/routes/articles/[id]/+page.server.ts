import type { EntryGenerator, PageServerLoad } from './$types';
import { env } from '$env/dynamic/private'

export const entries: EntryGenerator = async () => {

    const apiKey = "7qxxdCeR9p8vuBNuJiwRv2LX"
    if (!apiKey) {
        throw new Error('API key not found');
    }

    const res = await fetch("https://dev.to/api/articles/me", {
        method: 'GET',
        headers: {
            'api-key': apiKey
        }
    });

    if (!res.ok) {
        throw new Error('Article not found');
    }

    const data = await res.json();

	return data.map((v: {id: number }) => ({id: v.id}));
};

export const load: PageServerLoad = async ({ params }) => {

    const id = params.id;

    const res = await fetch(`https://dev.to/api/articles/${id}`);

    if (!res.ok) {
        throw new Error('Article not found');
    }

    const data = await res.json();

    return {
        id: data.id,
        title: data.title,
        coverImage: data.cover_image,
        bodyHtml: data.body_html
    };
};

export const prerender = true;