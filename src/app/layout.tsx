import type { Metadata } from "next";
import { manrope } from "./fonts";
import Header from "@/components/header";
import { Toaster } from "react-hot-toast";
import "./globals.css";

import { createClient } from "@/utils/supabase/server";
import { obtenerResultadoCuestionarioPorEmail } from "@/lib/data";

export const metadata: Metadata = {
  title: "Vocación Enigma",
  description: "Tu futuro comienza aquí! con Vocación Enigma",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  let resultado: string
  let prueba: boolean = false
  try {
    const result = await obtenerResultadoCuestionarioPorEmail(user?.email || '')
    resultado = result?.resultado
    console.log(resultado)
    if (result) prueba = true
    else if (!result) prueba = false
  } catch (error) {
    console.error("Unexpected error:", error);
    throw error;
  }

  // console.log('id',user?.id)
  
  return (
    <html lang="es">
      <body className={`${manrope.className} antialiased`}>
        <Toaster position="top-right" />
        <Header user={user} resultado={prueba} />
        {children}
      </body>
    </html>
  );
}
