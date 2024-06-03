import { Facultad } from "@/lib/definitions";
import ContentUniversities from "./content";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from "next/headers";

export default async function Universities() {
    const supabase = createServerComponentClient({ cookies })
    const { data: facultad } = await supabase.rpc('cacultad_query')

    const facultades: Facultad[] = facultad || []
    console.log(facultad)
  
  return <ContentUniversities universidades={facultades} />;
}