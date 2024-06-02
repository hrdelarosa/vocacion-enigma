import AccountContent from "@/components/account";
import { createClient } from "@/utils/supabase/server";

export default async function Account() {
    const supabase = createClient()
    
    const {
        data: { user },
    } = await supabase.auth.getUser()
    
    return (
        <main>
            <AccountContent user={user} />
        </main>
    ) 
}