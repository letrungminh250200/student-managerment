import supabase from './db';

export const signup = async (email, password) => {
    return await supabase.auth.signUp({email,password})
}
