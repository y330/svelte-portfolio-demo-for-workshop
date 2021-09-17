<script>
	import { repos } from './../stores.js';
	export let username = 'y330';
	async function fetchRepos() {
		await fetch(`https://api.github.com/users/${username}/repos`)
			.then((repositories) => repositories.json())
			.then((data) => ($repos = data));
	}
	console.log('repos:', $repos);
</script>

<button on:click={() => fetchRepos()}>Fetch repos</button>

<style>
	button {
		margin-top: 2rem;
		border: 2px solid var(--color-text-secondary);
		border-radius: 1em;
		color: var(--color-text-secondary);
		transition: 0.3s ease;
		transition-property: border-color, transform, background-color;
	}
	button:hover {
		border-color: var(--color-primary);
		background-color: var(--color-primary);
		cursor: pointer;
		color: var(--color-background);
	}
	button:active {
		transform: scale(0.9);
	}
</style>
