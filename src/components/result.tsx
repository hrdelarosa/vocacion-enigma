// 'use client'

import { useEffect, useState } from "react";
import ResultArea from "@/components/areas/result";
import { type User } from "@supabase/supabase-js";
import { obtenerResultadoCuestionarioPorEmail, getLastCuestionarioId, getUserIdByEmail, updateUserCuestionarioId } from "@/lib/data";

export default async function Result({ user }: { user: User | null }) {  
  let resultado: string
  try {
    const cuestionarioId = await getLastCuestionarioId();
    const userId = await getUserIdByEmail(user?.email || '');
    // console.log('id usuario',userId)

    if (cuestionarioId === null) throw new Error('No se pudo obtener el último cuestionario');
    if (userId === null) throw new Error('No se pudo encontrar el usuario con el email proporcionado');

    await updateUserCuestionarioId(userId, cuestionarioId);

    const result = await obtenerResultadoCuestionarioPorEmail(user?.email || '')
    // console.log( result?.cuestionario.resultado)
    resultado = result?.cuestionario.resultado
  } catch (error) {
    console.error("Unexpected error:", error);
    throw error;
  }

  // useEffect(() => {
  //   try {
  //     fetch(`http://localhost:3000/api/prueba/${user?.email}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data)
  //     })
  //   } catch (error) {
  //     console.error("Error fetching de usuario actualizar el id_cuestionario:", error);
  //   }
  // }, [user?.email])

  return (
    <ResultArea user={user} result={resultado} />
  );
}
