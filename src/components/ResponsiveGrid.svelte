<div class="grid">
	<slot />
</div>

<style>
	.grid {
		/* Grid Fallback */
		display: flex;
		flex-wrap: wrap;

		/* Supports Grid */
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-auto-rows: minmax(300px, auto);
		grid-gap: 20px;
	}

	/* If Grid is supported, remove the margin we set for the fallback */
	@supports (display: grid) {
		.module {
			margin: 0;
		}
	}
</style>
