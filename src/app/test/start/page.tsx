import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from "next/headers";
import { resultadoArea } from "../../../../logic/resultado";
import StartTestContent from '@/components/start';

export default async function StartTestPage() {
  const supabase = createServerComponentClient({ cookies })

  async function insertPrueba(respuestas: number[]) {
    const result = resultadoArea(respuestas);
  
    const newEntry = {
      respuestas: JSON.stringify(respuestas),
      resultado: result,
    };
  
    const { data, error } = await supabase
      .from("cuestionario")
      .insert([newEntry])
      .select()
  
    if (error) {
      console.error("Error inserting data:", error);
      return { success: false, error };
    }
  
    console.log("Data inserted:", data);
    return { success: true, data };
  }

  return(
    <StartTestContent insertPrueba={insertPrueba} />
  )
}
