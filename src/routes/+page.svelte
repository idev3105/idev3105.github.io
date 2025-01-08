<script lang="ts">
	import type { PageData } from './$types';
	import { base } from '$app/paths';

	let { data }: { data: PageData } = $props();
	const { layout } = data;
</script>

<main class="container mx-auto">
	<div class="w-full">
		{#each Object.keys(layout) as name}
			<div class="mt-8">
				<h2 class="text-2xl font-bold">{name}</h2>
				<ul class="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
					{#each layout[name] as article}
						<li>
							<a href={`${base}/articles/${article.id}`}>
								<div class="card w-96 bg-base-100 shadow-xl">
									<figure>
										<img src={article.coverImage} alt="Cover Image" />
									</figure>
									<div class="card-body">
										<h2 class="card-title">
											{article.title}
										</h2>
										<div class="card-actions justify-end"></div>
									</div>
								</div>
							</a>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</main>
