import type { BlogLayout } from '@src/lib/types';
import type { PageServerLoad } from './$types';
import blog from '@src/../blog.json';

export const load: PageServerLoad = async () => {
    const blogLayout : BlogLayout = {}
    for (const layout of blog.layout) {
        blogLayout[layout.name] = [];
        for (const article of layout.articles) {
            const res = await fetch(`https://dev.to/api/articles/${article}`);
            if (res.ok) {
               const data = await res.json();
               blogLayout[layout.name].push({
                id: data.id,
                title: data.title,
                coverImage: data.cover_image
               });
            }
        }
    }

	return {
        layout:	blogLayout
	};
};

export const prerender = true;