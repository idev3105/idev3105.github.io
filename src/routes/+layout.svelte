<script lang="ts">
	import '../app.css';
	import { base } from '$app/paths'

	let { children } = $props();
</script>

<header class="navbar bg-base-300">
	<div class="navbar-start">
		<a class="btn btn-ghost text-xl normal-case" href="/">idev's Blog</a>
	</div>
	<div class="navbar-end">
		<a href={base + '/'} class="btn btn-link">Home</a>
		<a href={base + '/about'} class="btn btn-link">About</a>
	</div>
</header>

<main class="container mx-auto min-h-[calc(100vh-140px)] p-4">
	{@render children()}
</main>

<footer class="mt-4 bg-base-200 p-4 text-center">
	<p class="text-base-content">© 2025 idev's Blog. All rights reserved.</p>
</footer>
