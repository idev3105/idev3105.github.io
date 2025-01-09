<script lang="ts">
	import type { PageData } from './$types';
	import { base } from '$app/paths';

	let { data }: { data: PageData } = $props();
	const { id, title, coverImage, bodyHtml } = data;
</script>

<main class="container mx-auto p-4">
	<!-- Image Cover -->
	<div class="relative">
		<img src={coverImage} alt="Article cover" class="h-64 w-full rounded-lg object-cover" />
	</div>

	<!-- Title -->
	<h1 class="mt-4 text-3xl font-bold">{title}</h1>

	<!-- Body HTML -->
	<div class="article-body mt-4">
		{@html bodyHtml}
	</div>
</main>

<style>
	.article-body img {
		object-fit: contain;
		max-height: calc(50vh + 180px);
	}
</style>
