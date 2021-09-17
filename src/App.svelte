<script>
  import Theme from "./components/Theme.svelte";
  import Skills from "./Skills.svelte";
  import Repos from "./Repos.svelte";
  import FetchRepos from "./components/FetchRepos.svelte";
  import { repos, skills } from "./stores";
  let username = "y330";
</script>

<Theme />
<main>
  <h1>Hey, <br /> I'm Yonah</h1>

  <Skills skills={$skills} />
  <FetchRepos {username} />
  <Repos repos={$repos} />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
