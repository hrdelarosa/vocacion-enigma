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
    let result
    const { data, error } = await supabase
      .from('usuario')
      .select(`
        cuestionario_id
      `)
      .eq('email', user?.email)
      .single();

    // Verifica si hubo algún error
    if (error) {
      throw error;
    }

    // Retorna los datos obtenidos
    // console.log(data)
    cuestionario_id =  data.cuestionario_id;

    if (cuestionario_id) {
      // Realiza la consulta a la base de datos
      const { data, error } = await supabase
        .from('cuestionario')
        .select(`
          resultado
        `)
        .eq('id', cuestionario_id)
        .single();
  
      // Verifica si hubo algún error
      if (error) {
        throw error;
      }
  
      // Retorna los datos obtenidos
      console.log(data)
      result = data;
    }
    resultado = result?.resultado
  } catch (error) {
    console.error('Error al obtener el resultado del cuestionario:', error);
    return null;
  }
  
  return (
    <ResultArea user={user} result={resultado} />
  );
}
