import FinishedArea from "@/components/areas/finished";
import Link from "next/link";
import { getLastCuestionarioId, getUserIdByEmail, updateUserCuestionarioId } from "@/lib/data";
import { createClient } from "@/utils/supabase/server"

export default async function FinishedPage() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  try {
    const cuestionarioId = await getLastCuestionarioId();
    const userId = await getUserIdByEmail(user?.email || '');
    // console.log('id usuario',userId)

    if (cuestionarioId === null) throw new Error('No se pudo obtener el último cuestionario');
    if (userId === null) throw new Error('No se pudo encontrar el usuario con el email proporcionado');

    await updateUserCuestionarioId(userId, cuestionarioId);
  } catch (error) {
    console.error("Unexpected error:", error);
    throw error;
  }

  return (
    <FinishedArea>
      <Link
        href="/test/result"
        // className="flex items-center gap-1 bg-[#042842] text-[#d9eef4] border-[1px] border-[#d9eef4] cursor-pointer py-2 px-8 text-base font-medium transition duration-300 ease-linear hover:bg-[#d9eef4] hover:text-[#054a71] hover:border-[#054a71] shadow-2xl"
        className="bg-blue-950 hover:bg-blue-900 text-white border-blue-950 border-2 font-medium transition-all ease-in-out duration-300 rounded-lg text-base px-5 py-2 md:px-8 md:py-2.5 cursor-pointer"
      >
        Resultado
      </Link>
    </FinishedArea>
  );
}
