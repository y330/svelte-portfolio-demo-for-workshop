<script>
  import { repos } from "./../stores.js";
  export let username = "y330";
  async function fetchRepos() {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    )
      .then((repositories) => repositories.json())
      .then((data) => ($repos = data));
  }
  console.log("repos:", $repos);
</script>

<button on:click={() => fetchRepos()}>Fetch repos</button>
