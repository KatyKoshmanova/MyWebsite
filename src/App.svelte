<script lang="ts">
	import About from "./Parts/About.svelte";
	import Api from "./Parts/Api.svelte";
	import Intro from "./Parts/Intro.svelte";
	import Navigation from "./Parts/Navigation.svelte";
	import Portfolio from "./Parts/Portfolio.svelte";
</script>

<main>
    <Navigation/>
    <Intro/>
    <About/>
    <Portfolio/>
    <Api/>
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