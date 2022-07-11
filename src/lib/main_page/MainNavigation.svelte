<script lang="ts">
	import { base } from '$app/paths';
</script>

<div class="wrapper">
	<nav>
		<a href="{base}/#about">About Me</a>
		<a href="{base}/#portfolio">My Achievements</a>
		<a href="{base}/number-fact">Random Fact About Numbers</a>
	</nav>
</div>

<style>
	nav {
		display: flex;
		justify-content: center;
	}

	nav a {
		margin-left: 25px;
		margin-right: 25px;
		color: rgb(98, 59, 10);
	}
</style>
