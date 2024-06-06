import FinishedArea from "@/components/areas/finished";
import { createClient } from "@/utils/supabase/server"

export default async function FinishedPage() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  
  let cuestionarioId
  let userId

  try {
    const { data, error } = await supabase
    .from("cuestionario")
    .select("id")
    .order("id", { ascending: false })
    .limit(1)
    .single();

    if (error) throw error;

    cuestionarioId = data.id
  } catch (error) {
    console.error("Error feching data:", error);
  }

  try {
    const { data, error } = await supabase
    .from("usuario")
    .select("id")
    .eq("email", user?.email)
    .single();

    if (error) throw error;
    userId = data.id
  } catch (error) {
    console.error("Error feching data:", error);
  }

  try {
    const { data, error } = await supabase
      .from("usuario")
      .update({ cuestionario_id: cuestionarioId })
      .eq("id", userId);

    if (error) {
      console.error("Error updating cuestionario_id:", error);
    }

    console.log("Update successful:", data);
  } catch (error) {
    console.error("Unexpected error:", error);
  }

  return (
    <FinishedArea />
  );
}