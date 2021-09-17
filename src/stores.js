import { writable } from 'svelte/store';

export let repos = writable([
	{
		name: 'Project',
		description: 'Description',
		url: '#'
	},
	{
		name: 'Project',
		description: 'Description',
		url: '#'
	},
	{
		name: 'Project',
		description: 'Description',
		url: '#'
	},
	{
		name: 'Project',
		description: 'Description',
		url: '#'
	},
	{
		name: 'Project',
		description: 'Description',
		url: '#'
	},
	{
		name: 'Project',
		description: 'Description',
		url: '#'
	}
]);
export let skills = writable([
	{ label: 'Svelte', value: 'Svelte', color: '#ff3e00' },
	{ label: 'Python', value: 'Python', color: 'blue' },
	{ label: 'ML', value: 'Machine Learning', color: 'green' }
]);
