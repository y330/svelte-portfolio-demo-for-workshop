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
  }
</style>
