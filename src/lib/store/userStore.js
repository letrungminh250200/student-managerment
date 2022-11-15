import { writable, readable } from "svelte/store";
import {getUser, getProfile, getAvatar} from "../service/userService"
// const userData = JSON.parse(localStorage.getItem('sb-trnsohfvgkrqzwrtqrnk-auth-token'))
// export const userStore = writable(userData)
export const userDataStore = writable(null)
const user = async () => {
    const {data,error} = await getUser()
    userDataStore.set(data.user)
}
user();
export const profile = writable({})



