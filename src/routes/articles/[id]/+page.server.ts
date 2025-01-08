import type { EntryGenerator, PageServerLoad } from './$types';
import { env } from '$env/dynamic/private'

export const entries: EntryGenerator = async () => {

    const res = await fetch("https://dev.to/api/articles/me", {
        method: 'GET',
        headers: {
            'api-key': env.DEV_TO_API_KEY
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