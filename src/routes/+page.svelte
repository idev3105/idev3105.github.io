<script lang="ts">
	import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();
    const { layout } = data;
</script>

<main class="container mx-auto">
	<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each Object.keys(layout) as name}
			<div class="card w-full bg-base-100 shadow-xl">
				<figure>
					<img src="/images/placeholder.png" alt="Shoes" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">
						{name}
						<div class="badge badge-secondary">NEW</div>
					</h2>
					<ul class="menu bg-base-100 p-4">
						{#each layout[name] as article}
							<li>
								<a href={"/blog/" + article.id}>{article.title}</a>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		{/each}
	</div>
</main>
