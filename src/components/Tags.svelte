<script>
  export let tags;
</script>

<div class="tag-list">
  {#each tags as tag}
    <a class="tag-item" href={tag.href} title={tag.value}>{tag.label}</a>
  {/each}
</div>

<style>
  .tag-list {
    color: var(--color-text);
    display: inline;
  }
  .tag-item {
    font-weight: 500;
    color: var(--color-text-secondary);
    border: 2px var(--color-text-secondary) solid;
    border-radius: 0.25em;
    padding: 2px 6px;
    margin-left: 4px;
    transition: 0.5s ease;
    transition-property: border-color, color;
    text-decoration: none;
  }
  .tag-item:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
</style>
