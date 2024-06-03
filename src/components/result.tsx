import ResultArea from "@/components/areas/result";
import { type User } from "@supabase/supabase-js";
import { obtenerResultadoCuestionarioPorEmail } from "@/lib/data";

export default async function Result({ user }: { user: User | null }) {  
  let resultado: string
  try {
    const result = await obtenerResultadoCuestionarioPorEmail(user?.email || '')
    resultado = result?.resultado
    // console.log(resultado)
  } catch (error) {
    console.error("Unexpected error:", error);
    throw error;
  }
  
  return (
    <ResultArea user={user} result={resultado} />
  );
}
