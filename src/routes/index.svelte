<script lang="ts">
	import Intro from '../lib/main_page/Intro.svelte';
	import About from '../lib/main_page/About.svelte';
	import Portfolio from '../lib/main_page/Portfolio.svelte';
	import MainNavigation from '../lib/main_page/MainNavigation.svelte';
</script>

<main>
	<MainNavigation />
	<Intro />
	<About />
	<Portfolio />
</main>

<style>
	:global(body) {
		background-color: blanchedalmond;
		font-family: Comic Sans MS, serif;
	}

	:global(.wrapper) {
		width: 45vw;
		margin: 2vh auto auto;
		border-radius: 20px;
		background-color: rgb(255, 204, 141);
		padding: 20px;
	}
</style>
