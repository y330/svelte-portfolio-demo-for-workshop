<script>
	import ResponsiveGrid from '../components/ResponsiveGrid.svelte';
	import Card from '../components/Card.svelte';
	import FetchReposButton from '../components/FetchReposButton.svelte';
	export let repos;
	export let username;
</script>

<FetchReposButton {username} />

<ResponsiveGrid>
	{#each repos as repo}
		<Card name={repo.name} desc={repo.description} url={repo.url} />
	{/each}
</ResponsiveGrid>
