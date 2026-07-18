import {createClient} from "@supabase/supabase-js";

const url=process.env.NEXT_PUBLIC_SUPABASE_URL??"https://lmtiskdbnsaednewsxsf.supabase.co";
const key=process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY??"sb_publishable__geJTeaRjuXAyY8qtgGb-Q_rgj_EL3G";

export const supabase=createClient(url,key);
