import supabase from './db';

export const  addUserRef = async () => await supabase.from('ref_profiles').insert([{ full_name: 'Le Trung Minh', email: 'minhle252@gmail.com', phone: '0333210321', gender: '1', address: 'Q.12' },])