import supabase from './db';

export const  getUserRef = () =>  supabase.from('ref_profiles').select('*')
export const  addUserRef = async (data) => await supabase.from('ref_profiles').insert(data)
export const  updateUserRef = async (data,id) => await supabase.from('ref_profiles').update(data).eq('id', id)
export const  deleteUserRef = async (id) => await supabase.from('ref_profiles').delete().eq('id', id)

