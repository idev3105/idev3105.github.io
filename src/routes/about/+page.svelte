<script lang="ts">
	import GitHub from '@src/icons/GitHub.svelte';
	import type { PageData } from './$types';
	import DevTo from '@src/icons/DevTo.svelte';

	let { data }: { data: PageData } = $props();
	const { bio } = data;
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
			href="https://github.com/idev3105"
			target="_blank"
			rel="noopener noreferrer"
			class="btn-social"><GitHub /> GitHub</a
		><a
			href="https://dev.to/cng_khanhtrnduy_84974"
			target="_blank"
			rel="noopener noreferrer"
			class="btn-social"><DevTo /> DEV.to</a
		>
	</div>
</div>

<style>
	.btn-social {
		@apply inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-gray-500 px-4 py-2 text-sm font-medium transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0;
	}
</style>
