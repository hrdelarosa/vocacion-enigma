"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { resultadoArea } from "../../logic/resultado";
import crypto from "node:crypto";
import bcrypt from "bcrypt";
import { Facultad } from "./definitions";

const supabase = createServerComponentClient({ cookies });

export async function insertPrueba(respuestas: number[]) {
  const result = resultadoArea(respuestas);

  const newEntry = {
    respuestas: JSON.stringify(respuestas),
    resultado: result,
  };

  const { data, error } = await supabase
    .from("cuestionario")
    .insert([newEntry]);

  if (error) {
    console.error("Error inserting data:", error);
    return { success: false, error };
  }

  console.log("Data inserted:", data);
  return { success: true, data };
}

export async function getLastCuestionarioId() {
  const { data, error } = await supabase
    .from("cuestionario")
    .select("id")
    .order("id", { ascending: false })
    .limit(1)
    .single();

  if (error) throw error;
  return data ? data.id : null;
}

export async function getUserIdByEmail(email: string) {
  const { data, error } = await supabase
    .from("usuario")
    .select("id")
    .eq("email", email)
    .single();

  if (error) throw error;
  return data ? data.id : null;
}

export async function updateUserCuestionarioId(
  userId: number,
  cuestionarioId: number
) {
  try {
    const { data, error } = await supabase
      .from("usuario")
      .update({ cuestionario_id: cuestionarioId })
      .eq("id", userId);

    if (error) {
      console.error("Error updating cuestionario_id:", error);
      throw error;
    }

    console.log("Update successful:", data);
  } catch (error) {
    console.error("Unexpected error:", error);
    throw error;
  }
}

export async function obtenerResultadoCuestionarioPorEmail(email: string) {
  try {
    // Realiza la consulta a la base de datos
    const { data, error } = await supabase
      .from('usuario')
      .select(`
        cuestionario (resultado)
      `)
      .eq('email', email)
      .single();

    // Verifica si hubo algún error
    if (error) {
      throw error;
    }

    // Retorna los datos obtenidos
    return data;
  } catch (error) {
    console.error('Error al obtener el resultado del cuestionario:', error);
    return null;
  }

}

export async function insertUser({
  full_name,
  email,
  contraseña,
  matricula,
  preparatoria_id,
}: {
  full_name: string;
  email: string;
  contraseña: string;
  matricula: string;
  preparatoria_id: string;
}) {
  const uuid = crypto.randomUUID();
  const hashedPassword = await bcrypt.hash(contraseña, 10);

  const { data, error } = await supabase.from("usuario").insert([
    {
      id: uuid,
      full_name,
      email,
      contraseña: hashedPassword,
      matricula,
      preparatoria_id,
    },
  ]);

  if (error) throw error;
  return data;
}

export async function getUser(email: string) {
  const { data, error } = await supabase
    .from("usuario")
    .select("full_name, email, matricula, preparatoria_id")
    // .select("full_name, email, matricula, preparatorias(preparatoria)")
    .eq("email", email);

  if (error) throw error;
  return data;
}

export async function getPreparatoria(email: string) {
  try {
    // Realiza la consulta a la base de datos
    const { data, error } = await supabase
    .from("usuario")
    .select("preparatorias(preparatoria)")
    .eq("email", email);

    if (error) {
      throw error;
    }

    console.log(data[0].preparatorias)
    return data[0].preparatorias;
  } catch (error) {
    console.error('Error al obtener la preparatoria:', error);
    return null;
  }
}

export async function getfacultades() {
  const { data: facultad } = await supabase.rpc('cacultad_query')

  const facultades: Facultad[] = facultad || []
  // console.log(facultad)

  return facultades
}
