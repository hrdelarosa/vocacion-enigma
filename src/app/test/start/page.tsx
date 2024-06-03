import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from "next/headers";
import { resultadoArea } from "../../../../logic/resultado";
import StartTestContent from '@/components/start';

export default async function StartTestPage() {

  return(
    <StartTestContent />
  )
}
