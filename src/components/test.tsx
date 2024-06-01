"use client";

import Question from "@/components/question";
import React, { useState, useEffect } from "react";
import { preguntas } from "@/const/test-chaside";
import { useRouter } from "next/navigation";
import { resultadoArea } from "../../logic/resultado";
import { type User } from "@supabase/supabase-js";

const data: number[] = [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0];

export default function StartTest({ user }: { user: User | null }) {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [textoBoton, setTextoBoton] = useState("Siguiente");
  const [resultado, setResultado] = useState([])
  const router = useRouter()

  console.log(user?.email)
  const totalPregun = Object.keys(preguntas).length;

  useEffect(() => {
    const preguntaFromStorage = window.localStorage.getItem("preguntaActual");
    setPreguntaActual(
      preguntaFromStorage ? parseInt(preguntaFromStorage) + 1 : 0
    );
    // console.log(preguntaFromStorage);
  }, []);
  
  function guardarRespuestas() {
    const valorSeleccionado = document.querySelector(
      'input[name="value-radio"]:checked'
    ) as HTMLInputElement

    if (valorSeleccionado !== null) {
      const nuevaRespuesta = parseInt(valorSeleccionado.value)

      const respuestasGuardadas = JSON.parse(window.localStorage.getItem("repuestasUser") || "[]")
      respuestasGuardadas.push(nuevaRespuesta)
      setResultado(respuestasGuardadas)

      window.localStorage.setItem("repuestasUser", JSON.stringify(respuestasGuardadas))

      console.log('result', respuestasGuardadas);
      console.log('result', typeof window.localStorage.getItem('repuestasUser'));
      console.log('respuesta de usuario', window.localStorage.getItem("repuestasUser"));
      
      if (valorSeleccionado.checked === true) valorSeleccionado.checked = false;
    }
  }

  function siguientePregunta(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    const valorSeleccionado = document.querySelector(
      'input[name="value-radio"]:checked'
    );
    const error = document.querySelector(".error");
    if (!error) return
    else if (valorSeleccionado === null) error?.classList.remove("invisible")
    else if (valorSeleccionado !== null) {
      if (error.className.includes("invisible")) {
        if (preguntaActual < totalPregun - 1) {
          setPreguntaActual(preguntaActual + 1);
          guardarRespuestas();

          if (preguntaActual === totalPregun - 2) setTextoBoton("Terminar")
          else setTextoBoton("Siguiente");
        } else if (preguntaActual === totalPregun - 1) {
          guardarRespuestas()
          fetch('http://localhost:3000/api/prueba', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prueba: resultado })
          })

          const result = resultadoArea(resultado)
          console.log(result)
          
          fetch('http://localhost:3000/api/resultado', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ area: result })
          })

          // fetch(`http://localhost:3000/api/prueba/${}`)

          window.localStorage.removeItem("repuestasUser")
          window.localStorage.removeItem("preguntaActual")
          router.push('/test/result')
        }
      } else {
        if (preguntaActual < totalPregun - 1){
          setPreguntaActual(preguntaActual + 1)
          guardarRespuestas()
          error.classList.add("invisible")

          if (preguntaActual === totalPregun - 2) setTextoBoton("Terminar")
          else setTextoBoton("Siguiente")
        } else if (preguntaActual === totalPregun - 1) {
          guardarRespuestas()
          fetch('http://localhost:3000/api/prueba', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prueba: resultado })
          })

          const result = resultadoArea(resultado)
          console.log(result)

          fetch('http://localhost:3000/api/resultado', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ area: result })
          })
          window.localStorage.removeItem("repuestasUser")
          window.localStorage.removeItem("preguntaActual")
          router.push('/test/result')
        }
      }

      window.localStorage.setItem("preguntaActual", preguntaActual.toString());
    }
  }
  
  function remo() {
    window.localStorage.removeItem("repuestasUser")
    window.localStorage.removeItem("preguntaActual")
    console.log(preguntaActual);
  }


  return (
    <main className="flex items-center h-[90vh]">
      <section className="mx-5 items-center text-center sm:text-left sm:mx-auto sm:max-w-7xl w-[1100px]">
        <div>
          <h1 className="text-3xl font-semibold mb-2 sm:text-4xl sm:mb-1">
            Prueba de Orientación <q>Chaside</q>.
          </h1>
          <p className="text-xs sm:text-base">
            Este test se adapta a sus necesidades, es gratuito y le llevará
            menos de 15 minutos.
          </p>
        </div>
        <form id="formulario" action="">
          <div>
            {Object.values(preguntas)[preguntaActual] && (
              <Question
                pregunta={Object.values(preguntas)[preguntaActual].pregunta}
                numPreg={preguntaActual + 1}
                totPreg={totalPregun}
                respuestas={Object.values(preguntas)[preguntaActual].respuestas}
              />
            )}
          </div>
          <div className="mt-4 flex flex-col items-center justify-between sm:flex-row sm:mt-10">
            <div className="h-11">
              <div className={`error invisible items-center py-2 px-3 sm:p-3 text-red-800 rounded-lg bg-red-50`}>
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <p className="ms-3 text-[10px] text-left font-medium sm:text-sm">
                  Debes seleccionar una respuesta antes de continuar.
                </p>
              </div>
            </div>
            <button
              onClick={siguientePregunta}
              className="sig-btn flex items-center gap-1 mt-2 sm:mt-0 bg-[#042842] text-[#d9eef4] border-[1px] border-[#d9eef4] cursor-pointer py-2 px-8 text-base font-medium transition duration-300 ease-linear hover:bg-[#d9eef4] hover:text-[#054a71] hover:border-[#054a71] shadow-2xl"
            >
              {textoBoton}
            </button>
          </div>
        </form>
        <span className="flex justify-center mt-5 text-xs sm:mt-6 sm:text-sm">
          Utilizamos tus respuestas para orientarte a encontrar una Vocación.
        </span>
      </section>
      <button onClick={remo}>remove</button>
    </main>
  );
}
