// /utils/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NNEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey);

export const storeScore = async (score) => {
  const { data, error } = await supabase.from('scores').insert([{ score }]);
  if (error) {
    console.error('Error storing score:', error);
  }
};
aquibk580gmail.com