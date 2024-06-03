import Result from "@/components/result"
import { getLastCuestionarioId, getUserIdByEmail, obtenerResultadoCuestionarioPorEmail, updateUserCuestionarioId } from "@/lib/data";
import { createClient } from "@/utils/supabase/server"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function ResultPage() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  
  console.log(user?.email)

  return <Result user={user} />
}
