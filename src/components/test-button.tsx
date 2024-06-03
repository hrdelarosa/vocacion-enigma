// "use client";

import { useState, useEffect } from "react";
import { type User } from "@supabase/supabase-js";
import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function TestButton({ user }: { user: User | null }) {
  const supabase = createServerComponentClient({ cookies });

  let resultado
  if (user) {
    const { data, error } = await supabase
      .from('usuario')
      .select(`
        cuestionario_id
      `)
      .eq('email', user?.email || '')
      .single();
  
    // Verifica si hubo algún error
    if (error) {
      resultado = null
      return
    }
    // Retorna los datos obtenidos
    resultado = data.cuestionario_id;
  }

  return (
    <>
      {
        resultado ? (
          <Link
            // className="flex items-center gap-1 bg-[#042842] text-[#d9eef4] border-[1px] border-[#d9eef4] cursor-pointer py-2 px-8 text-base font-medium transition duration-300 ease-linear hover:bg-[#d9eef4] hover:text-[#054a71] hover:border-[#054a71] shadow-2xl"
            className="bg-blue-950 hover:bg-blue-900 text-white border-blue-950 border-2 font-medium transition-all ease-in-out duration-300 rounded-lg text-base px-5 py-2 md:px-8 md:py-2.5 cursor-pointer"
            href={"/test/result"}
          >
            Resultado
          </Link>
        ) : (
          <Link
            // className="flex items-center gap-1 bg-[#042842] text-[#d9eef4] border-[1px] border-[#d9eef4] cursor-pointer py-2 px-8 text-base font-medium transition duration-300 ease-linear hover:bg-[#d9eef4] hover:text-[#054a71] hover:border-[#054a71] shadow-2xl"
            className="bg-blue-950 hover:bg-blue-900 text-white border-blue-950 border-2 font-medium transition-all ease-in-out duration-300 rounded-lg text-base px-5 py-2 md:px-8 md:py-2.5 cursor-pointer"
            href={user ? "/test" : "/login"}
          >
            Comenzar
          </Link>
        )
      }
    </>
  );
}
