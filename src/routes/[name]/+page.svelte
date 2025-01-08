<script lang="ts">
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();
</script>

<div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-6xl font-bold">Hello {data.name}</h1>
</div>