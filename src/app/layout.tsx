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

  // console.log('id',user?.id)
  
  return (
    <html lang="es">
      <body className={`${manrope.className} antialiased`}>
        <Toaster position="top-right" />
        <Header user={user} />
        {children}
      </body>
    </html>
  );
}
