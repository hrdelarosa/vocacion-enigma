import ResultArea from "@/components/areas/result";
import { type User } from "@supabase/supabase-js";
import { obtenerResultadoCuestionarioPorEmail } from "@/lib/data";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Result({ user }: { user: User | null }) {  
  const supabase = createServerComponentClient({ cookies });

  let resultado: string
  let cuestionario_id
  try {
    const { data, error } = await supabase
      .from('usuario')
      .select(`
        cuestionario_id
      `)
      .eq('email', user?.email)
      .single();

    if (error) {
      throw error;
    }
    cuestionario_id = data;
  } catch (error) {
    console.error('Error al obtener el resultado del cuestionario:', error);
    return null;
  }

  try {
    const { data, error } = await supabase
      .from('cuestionario')
      .select(`
        resultado
      `)
      .eq('id', cuestionario_id)
      .single();

    if (error) {
      throw error;
    }
    
    const result = data
    resultado = result.resultado;
  } catch (error) {
    console.error('Error al obtener el resultado del cuestionario:', error);
    return null;
  }
  
  return (
    <ResultArea user={user} result={resultado} />
  );
}
