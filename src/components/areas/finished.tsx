"use client"

import Link from "next/link";

function remo() {
  window.localStorage.removeItem("repuestasUser");
  window.localStorage.removeItem("preguntaActual");
}

export default function FinishedArea() {
  return (
    <main className="flex items-center h-[89vh]">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>

      <div className="mx-5 sm:mx-auto sm:max-w-5xl">
        <div className="text-center">
          <h1 className="text-3xl font-semibold sm:text-5xl">
            En hora buena has terminado la Prueba.
          </h1>
          <p className="mt-4 text-base sm:mt-6 sm:text-2xl">
            ¡Felicidades por completar la prueba de orientación vocacional!
            Basándonos en tus respuestas, hemos analizado tus intereses,
            habilidades y preferencias. Tu perfil vocacional ha sido determinado
            tomando en cuenta diversos factores como tus intereses personales,
            tus habilidades y tus aspiraciones profesionales. Este resultado
            tiene como objetivo guiarte hacia áreas en las que puedes destacar y
            sentirte satisfecho con tu carrera profesional. Para presentarte el
            resultado de tu prueba presiona el boton:
          </p>
          <div className="mt-5 sm:mt-10 flex items-center justify-center gap-x-6">
            <button onClick={remo}>
              <Link
                href="/test/result"
                className="bg-blue-950 hover:bg-blue-900 text-white border-blue-950 border-2 font-medium transition-all ease-in-out duration-300 rounded-lg text-base px-5 py-2 md:px-8 md:py-2.5 cursor-pointer"
                >
                Resultado
              </Link>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
