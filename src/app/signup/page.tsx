"use client"

import { useState, useEffect } from "react";
import FormSignup from "@/components/forms/signup";

interface Preparatoria {
  id: number;
  nombre: string;
}

export default function SignupPage() {
  const [preparatorias, setPreparatorias] = useState<Preparatoria[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/api/preparatorias')
    .then((response) => {
      if (!response.ok) throw new Error('Network response was not ok')
      
      return response.json()
    })
    .then((data) => {
      if (Array.isArray(data.data)) setPreparatorias(data.data)
      else throw new Error('Invalid data format')
    })
    .catch((error) => console.error('There was a problem with the fetch operation:', error))
  }, [])
  

  return (
    <main className="h-[90vh]">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>


      <div className="flex min-h-full flex-col justify-center sm:mx-0 mx-4">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Crear una Cuenta
          </h1>
        </div>
        <div className="mt-3 mb-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <FormSignup />
          <p className="mt-4 text-center text-sm text-gray-500">
            Ya tiene una Cuenta.
            <a
              href="/login"
              className="font-semibold leading-6 text-[#0066a6] hover:text-[#007fcb]"
            >
              Iniciar Sesión
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
