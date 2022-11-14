import supabase from './db';

export const signUp = async (email, password) => await supabase.auth.signUp({email,password})

export const signIn = async (email, password) => await supabase.auth.signInWithPassword({email, password})

export const logoutService = async () => await supabase.auth.signOut()

export const getUser = () => supabase.auth.getUser()

export const getProfile = async (id) => await supabase.from('profiles').select("*").eq('id', id)

export const updateProfile = async (data, id) => await supabase.from('profiles').update(data).eq('id', id)

export const uploadAvatar = async (data) => await supabase.storage.from('avatars').upload(`public/${data.name}`, data, {cacheControl: '3600',upsert: false})

export const getAvatar = async (id) => supabase.from('profiles').select('avatar_url').eq('id', id)

export const getImages = async (image) => supabase.storage.from('avatar').getPublicUrl(image)


