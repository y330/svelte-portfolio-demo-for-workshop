<script>
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	export let name;
	export let desc;
	export let url;

	let hovered = false;
	const shadow = tweened(0, { duration: 500, easing: cubicOut });

	const handleMouseEnter = () => {
		shadow.set(1);
		hovered = true;
	};
	const handleMouseLeave = () => {
		shadow.set(0);
		hovered = false;
	};
	const randomInt = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
	};

	let mounted = false;
	onMount(() => (mounted = true));
</script>

<div
	on:mouseenter={handleMouseEnter}
	on:touchstart={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
	on:touchend={handleMouseLeave}
	transition:slide={{ delay: randomInt(200, 500) }}
	style="box-shadow: {$shadow * 6}px {$shadow * 3}px #4300b0, {$shadow * 12}px {$shadow * 6}px #4d02b045, {$shadow *
		18}px {$shadow * 9}px #413ab022;"
>
	<h2 transition:fade={{ delay: randomInt(250, 500) }}>{name}</h2>
	<p transition:fade={{ delay: randomInt(250, 1000) }}>{desc}</p>
	<a href={url} title="View Project">Go to project</a>
</div>

<style>
	div {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		background-color: #eee;
		border: 1px solid #999;
		border-radius: 0.5em;
		min-width: 20vw;
		padding: 1em;
	}
	p {
		padding-inline: 1em;
		overflow-wrap: normal;
		text-overflow: clip;
	}
</style>
