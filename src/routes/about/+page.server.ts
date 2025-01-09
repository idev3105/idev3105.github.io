import type { PageServerLoad } from '../$types';
import blog from '@src/../blog.json';

export const load: PageServerLoad = async () => {
	const bio = blog.bio;

	return {
		bio
	};
};

export const prerender = true;
