// "use client"

import Image from "next/image";
import Link from "next/link";
import { type User } from "@supabase/supabase-js";
import DropDown from "./dropDown";
import { useState, useEffect } from "react";
import { obtenerIdCuestionario } from "@/lib/data";

export default async function Header({ user }: { user: User | null }) {
  let resultado: string
  try {
    const result = await obtenerIdCuestionario(user?.email || '')
    resultado = result?.cuestionario_id
    console.log(typeof resultado)
  } catch (error) {
    console.error("Unexpected error:", error);
    throw error;
  }
  // const [result, setResult] = useState<string | null>(null);
  
  // useEffect(() => {
  //   if (user?.email) {
  //     try {
  //       fetch(`http://localhost:3000/api/resultado/${user?.email}`)
  //         .then((response) => response.json())
  //         .then((data) => {
  //           if (data.resultado) {
  //             setResult(data.resultado)
  //             // console.log(result);
  //           }
  //         });
  //     } catch (error) {
  //     }
  //   }
  // }, [user?.email ,result]);

  return (
    <nav className="">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-[10px]">
        <Link href="/" className="flex items-center space-x-2 sm:space-x-3 rtl:space-x-reverse">
          <Image
            className="h-[58px] w-auto"
            src="/img/Logo-Vocacion-Enigma.png"
            alt="Logo de Vocación Enigma."
            width={172}
            height={136}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap hidden sm:block text-black">
            Enigma
          </span>
        </Link>

        <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
          {user ? (
            <>
              <Link
                href="/account"
                className="text-blue-950 bg-white border-bluebg-blue-950 border-blue-950 border-2 hover:text-white hover:bg-blue-950 font-medium transition-all ease-in-out duration-500 rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5"
              >
                Cuenta
              </Link>
              <form action="/auth/signout" method="post"
                className="bg-blue-950 hover:bg-blue-900 text-white border-blue-950 border-2 border-bluebg-blue-950 font-medium transition-all ease-in-out duration-300 rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 cursor-pointer"
              >
                <button className="" type="submit">Cerrar Sesión</button>
              </form>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-blue-950 bg-white border-bluebg-blue-950 border-blue-950 border-2 hover:text-white hover:bg-blue-950 font-medium transition-all ease-in-out duration-500 rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5"
              >
                Iniciar Sesión
              </Link>
              <Link
                href="/signup"
                className="bg-blue-950 hover:bg-blue-900 text-white border-blue-950 border-2 border-bluebg-blue-950 font-medium transition-all ease-in-out duration-300 rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5"
              >
                Regístrarse
              </Link>
            </>
          )}

          <DropDown user={user} result={resultado} />

        </div>
        <div
          id="mega-menu"
          className="items-center justify-between w-full md:flex md:w-auto md:order-1 hidden"
        >
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-gray-700 font-semibold border-b md:border-0 md:hover:text-blue-700 md:p-0 transition ease-out duration-300 hover:scale-105 hover:-translate-y-[1px]"
                aria-current="page"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/universidades"
                className="block py-2 px-3 text-gray-700 font-semibold border-b md:border-0 md:hover:text-blue-700 md:p-0 transition ease-out duration-300 hover:scale-105 hover:-translate-y-[1px]"
              >
                Universidades
              </Link>
            </li>
            <li>
            <Link
                href={user ? (resultado ? "/test/result" : "/test") : "/test"}
                className="block py-2 px-3 text-gray-700 font-semibold border-b md:border-0 md:hover:text-blue-700 md:p-0 transition ease-out duration-300 hover:scale-105 hover:-translate-y-[1px]"
              >
                Prueba
              </Link>
            </li>
            <li>
              <a
                href="https://www.uagro.mx/"
                target="_blank"
                className="block py-2 px-3 text-gray-700 font-semibold border-b md:border-0 md:hover:text-blue-700 md:p-0 transition ease-out duration-300 hover:scale-105 hover:-translate-y-[1px]"
              >
                UAGro
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
