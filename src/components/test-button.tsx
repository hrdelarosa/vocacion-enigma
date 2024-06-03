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
    console.log(data?.cuestionario_id)

    if (error) {
      throw error;
    }
    // Retorna los datos obtenidos
    resultado = data.cuestionario_id;
  }

  return (
    <>
      {
        resultado === null ? (
          <Link
            className="bg-blue-950 hover:bg-blue-900 text-white border-blue-950 border-2 font-medium transition-all ease-in-out duration-300 rounded-lg text-base px-5 py-2 md:px-8 md:py-2.5 cursor-pointer"
            href={"/test/result"}
          >
            Resultado
          </Link>
        ) : (
          <Link
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
