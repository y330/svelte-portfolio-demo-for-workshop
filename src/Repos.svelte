<script>
	import Card from "./components/Card.svelte"
  export let repos;
</script>

{#each repos as repo}
	<Card name={repo.name} desc={repo.description} url={repo.url} />
{/each}
