<script lang="ts">
	import GitHub from '@src/icons/GitHub.svelte';
	import type { PageData } from './$types';
	import DevTo from '@src/icons/DevTo.svelte';
	import { onMount } from 'svelte';

	let { data }: { data: PageData } = $props();
	const { bio, social } = data;

	const gitHub = $state(social[0]);

	function abbreviateNumber(number: number) {
		if (number >= 1e9) return (number / 1e9).toFixed(1) + 'B';
		if (number >= 1e6) return (number / 1e6).toFixed(1) + 'M';
		if (number >= 1e3) return (number / 1e3).toFixed(1) + 'K';
		return number.toString();
	}

	onMount(async () => {
		// fetch github followers
		const githubRes = await fetch(`https://api.github.com/users/${social[0].username}`);
		if (!githubRes.ok) {
			throw new Error('Followers not found');
		}
		const githubData = await githubRes.json();
		const githubFollowers = githubData.followers;
		gitHub.followers = githubFollowers;
	});
</script>

<div class="flex flex-col items-center justify-center">
	<div class="avatar mb-4">
		<div class="w-24 rounded-full">
			<img src="https://github.com/idev3105.png" alt="Matthew's Avatar" />
		</div>
	</div>
	<h1 class="text-2xl font-bold">idev</h1>
	<p class="text-muted-foreground max-w-md text-center">{bio}</p>
	<p class="text-muted-foreground mt-8 text-sm">Help me grow by following me! 🚀</p>
	<div class="mt-6 flex flex-col gap-4 sm:flex-row">
		<a
			href={gitHub.url}
			target="_blank"
			rel="noopener noreferrer"
			class="btn-social flex items-center gap-1"
		>
			<GitHub /> GitHub
			<span class="badge badge-sm">{abbreviateNumber(gitHub.followers)}</span>
		</a>
		<a
			href={social[1].url}
			target="_blank"
			rel="noopener noreferrer"
			class="btn-social flex items-center gap-1"
		>
			<DevTo />
			{social[1].name}
			<span class="badge badge-sm">{abbreviateNumber(social[1].followers)}</span>
		</a>
	</div>
</div>

<style>
	.btn-social {
		@apply inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-gray-500 px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-content focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0;
	}
</style>
