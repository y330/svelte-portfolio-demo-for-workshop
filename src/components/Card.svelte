<script>
  export let name;
  export let desc;
  export let url;
</script>

<div>
  <h2>{name}</h2>
  <p>{desc}</p>
  <a href={url} title="View Project">Go to project</a>
</div>

<style>
  div {
    background-color: #eee;
    border: 2px solid #888;
	border-radius: 0.25em;
	padding: 1em;
	margin-inline: auto;
	width: 800px;
  }
</style>
