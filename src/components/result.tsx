import ResultArea from "@/components/areas/result";
import { type User } from "@supabase/supabase-js";
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

    // Verifica si hubo algún error
    if (error) {
      throw error;
    }

    // console.log(data)
    cuestionario_id =  data.cuestionario_id;
  } catch (error) {
    console.error('Error al obtener el resultado del cuestionario:', error);
    return null;
  }

  try {
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
  
    resultado = data.resultado
  } catch (error) {
    console.error('Error al obtener el resultado del cuestionario:', error);
    return null;
  }

  console.log(resultado)
  
  return (
    <ResultArea user={user} result={resultado} />
  );
}
