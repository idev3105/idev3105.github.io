import type { PageServerLoad } from '../$types';
import blog from '@src/../blog.json';
import { env } from '$env/dynamic/private';

const gatherFollowerCount = async (): Promise<number> => {
	const perPage = 100;
	let page = 0;
	let followers = 0;

	const fetchFollowers = async () => {
		const url = `https://dev.to/api/followers/users?page=${page}&per_page=${perPage}`;

		const response = await fetch(url, {
			headers: {
				'api-key': env.API_TOKEN || ''
			}
		});

		if (!response.ok) {
			throw new Error(`Failed to fetch followers: ${response.status}`);
		}

		const data: { id: number }[] = await response.json();

		followers += data.length;

		if (data.length === perPage) {
			page++;
			await fetchFollowers();
		}
	};

	await fetchFollowers();

	return followers;
};

export const load: PageServerLoad = async () => {
	const bio = blog.bio;
	const social = blog.social;

	const devtoFollowers = await gatherFollowerCount();
	social[1].followers = devtoFollowers;

	return {
		bio,
		social
	};
};

export const prerender = true;
