import { writable } from "svelte/store"

export let repos = writable([{}])
export let skills = writable([
	{ label: "Svelte", value: "Svelte", href: "#" },
	{ label: "Python", value: "Python", href: "#" },
	{ label: "ML", value: "Machine Learning", href: "#" },
]
)