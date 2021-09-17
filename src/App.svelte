<script>
	import Theme from './sections/Theme.svelte';
	import Skills from './sections/Skills.svelte';
	import Repos from './sections/Repos.svelte';
	import { repos, skills } from './stores';
</script>

<Theme />
<main>
	<h1>Hey, <br /> I'm Yonah</h1>
	<Skills skills={$skills} />
	<Repos repos={$repos} />
</main>

<style global>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 500;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
