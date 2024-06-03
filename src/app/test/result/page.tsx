import Result from "@/components/result"
import { createClient } from "@/utils/supabase/server"

export default async function ResultPage() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  
  console.log(user?.email)

  return <Result user={user} />
}
