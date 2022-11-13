import { writable } from "svelte/store";
const userData = JSON.parse(localStorage.getItem('sb-trnsohfvgkrqzwrtqrnk-auth-token'))
export const userStore = writable(userData)

export const avatar_url = writable('')

export const userProfileRef = writable([])

