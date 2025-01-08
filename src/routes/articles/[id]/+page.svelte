<script lang="ts">
    import type { PageData } from "./$types";
    import { base } from '$app/paths';
  
    let { data }: { data: PageData } = $props();
    const { id, title, coverImage, bodyHtml } = data;
</script>

<main class="container mx-auto p-4">
	<!-- Image Cover -->
	<div class="relative">
		<img src={coverImage} alt="Cover Image" class="h-64 w-full rounded-lg object-cover shadow-lg" />
	</div>

	<!-- Title -->
	<h1 class="mt-4 text-3xl font-bold">{title}</h1>

	<!-- Body HTML -->
	<div class="mt-4 rounded-lg bg-base-100 p-4 shadow-md">
		{@html bodyHtml}
	</div>
</main>
