'use client'

import { useEffect, useState } from "react";
import ResultArea from "@/components/areas/result";
import FinishedArea from "@/components/areas/finished";
import { type User } from "@supabase/supabase-js";

export default function Result({ user }: { user: User | null }) {  
  useEffect(() => {
    try {
      fetch(`http://localhost:3000/api/prueba/${user?.email}`)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.data)) console.log(data.data)
      })
    } catch (error) {
      console.error("Error fetching de usuario actualizar el id_cuestionario:", error);
    }
  }, [user?.email])

  return (
    <ResultArea user={user} />
    // <>
    //   {
    //     resultado ? (
    //       <ResultArea area={area} />
    //     ) : (
    //       <FinishedArea>
    //         <button
    //           onClick={handleClick}
    //           // className="flex items-center gap-1 bg-[#042842] text-[#d9eef4] border-[1px] border-[#d9eef4] cursor-pointer py-2 px-8 text-base font-medium transition duration-300 ease-linear hover:bg-[#d9eef4] hover:text-[#054a71] hover:border-[#054a71] shadow-2xl"
    //           className="bg-blue-950 hover:bg-blue-900 text-white border-blue-950 border-2 font-medium transition-all ease-in-out duration-300 rounded-lg text-base px-5 py-2 md:px-8 md:py-2.5 cursor-pointer"
    //         >
    //           Resultado
    //         </button>
    //       </FinishedArea>
    //     )
    //   }
    // </>
  );
}
