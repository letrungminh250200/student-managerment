import supabase from './db';

export const signUp = async (email, password) => {
    return await supabase.auth.signUp({email,password})
}
export const signIn = async (email, password) => {
    return await supabase.auth.signInWithPassword({email, password})
}
export const logoutService = async () => {
    return await supabase.auth.signOut()
}
export const getUser = async () => {
    return supabase.auth.user()
}
