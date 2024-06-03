import { type User } from "@supabase/supabase-js";
import AccountForm from "./forms/account";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function AccountContent({ user }: { user: User | null }) {
  const supabase = createServerComponentClient({ cookies });

  let usuario
  const { data, error } = await supabase
    .from("usuario")
    .select("full_name, email, matricula, preparatoria_id")
    // .select("full_name, email, matricula, preparatorias(preparatoria)")
    .eq("email", user?.email || '');

  if (error) throw error;
  usuario = data;
  // console.log(usuario)

  return (
    <section className="flex flex-col justify-center items-center h-[89vh]">
      
      <div className="mx-5 w-4/5 sm:mx-auto sm:w-3/5">
        <div className="text-3xl font-semibold text-center sm:text-left sm:text-6xl">
          <h1 className="text-3xl font-semibold sm:text-6xl">Mi Cuenta</h1>
          <p className="mt-2 text-lg sm:text-2xl">Estos son tus datos...</p>
        </div>
        <div className="mt-3 sm:mt-7 gap-x-6">
          <AccountForm user={usuario[0]} />
        </div>
      </div>
    </section>
  );
}
