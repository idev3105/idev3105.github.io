<script lang="ts">
	import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();
    const { layout } = data;
</script>

<main class="container mx-auto">
	<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each Object.keys(layout) as name}
			<div>
				<h2 class="text-2xl font-bold">{name}</h2>
				<ul>
					{#each layout[name] as article}
						<li>
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
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</main>
