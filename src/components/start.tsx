"use client";

import Question from "@/components/question";
import React, { useState, useEffect } from "react";
import { preguntas } from "@/const/test-chaside";
import { useRouter } from "next/navigation";
import { insertPruebaFunction } from "@/lib/data";

export default function StartTestContent() {
  // const [preguntaActual, setPreguntaActual] = useState(0);
  // const [textoBoton, setTextoBoton] = useState("Siguiente");
  // const [resultado, setResultado] = useState<number[]>([]);
  // const router = useRouter();

  // const totalPregun = Object.keys(preguntas).length;

  // useEffect(() => {
  //   const preguntaFromStorage = window.localStorage.getItem("preguntaActual");
  //   setPreguntaActual(
  //     preguntaFromStorage ? parseInt(preguntaFromStorage) + 1 : 0
  //   );
  //   // console.log(preguntaFromStorage);
  // }, []);

  // function guardarRespuestas() {
  //   const valorSeleccionado = document.querySelector(
  //     'input[name="value-radio"]:checked'
  //   ) as HTMLInputElement;

  //   if (valorSeleccionado !== null) {
  //     const nuevaRespuesta = parseInt(valorSeleccionado.value);

  //     const respuestasGuardadas = JSON.parse(
  //       window.localStorage.getItem("repuestasUser") || "[]"
  //     );
  //     respuestasGuardadas.push(nuevaRespuesta);
  //     setResultado(respuestasGuardadas);

  //     window.localStorage.setItem(
  //       "repuestasUser",
  //       JSON.stringify(respuestasGuardadas)
  //     );

  //     console.log('result', respuestasGuardadas);
  //     console.log('result', typeof window.localStorage.getItem('repuestasUser'));
  //     console.log('respuesta de usuario', window.localStorage.getItem("repuestasUser"));

  //     if (valorSeleccionado.checked === true) valorSeleccionado.checked = false;
  //   }
  // }

  // async function siguientePregunta(event: React.MouseEvent<HTMLButtonElement>) {
  //   event.preventDefault();
  //   const valorSeleccionado = document.querySelector(
  //     'input[name="value-radio"]:checked'
  //   );
  //   const error = document.querySelector(".error");
  //   if (!error) return;
  //   else if (valorSeleccionado === null) error?.classList.remove("invisible");
  //   else if (valorSeleccionado !== null) {
  //     if (error.className.includes("invisible")) {
  //       if (preguntaActual < totalPregun - 1) {
  //         setPreguntaActual(preguntaActual + 1);
  //         guardarRespuestas();

  //         if (preguntaActual === totalPregun - 2) setTextoBoton("Terminar");
  //         else setTextoBoton("Siguiente");
  //       } else if (preguntaActual === totalPregun - 1) {
  //         guardarRespuestas();
  //         const result = await insertPruebaFunction(resultado);
  //         console.log(result);

  //         window.localStorage.removeItem("repuestasUser");
  //         window.localStorage.removeItem("preguntaActual");
  //         router.push("/test/finished");
  //       }
  //     } else {
  //       if (preguntaActual < totalPregun - 1) {
  //         setPreguntaActual(preguntaActual + 1);
  //         guardarRespuestas();
  //         error.classList.add("invisible");

  //         if (preguntaActual === totalPregun - 2) setTextoBoton("Terminar");
  //         else setTextoBoton("Siguiente");
  //       } else if (preguntaActual === totalPregun - 1) {
  //         guardarRespuestas();
  //         const result = await insertPruebaFunction(resultado);
  //         console.log(result);
          
  //         window.localStorage.removeItem("repuestasUser");
  //         window.localStorage.removeItem("preguntaActual");
  //         router.push("/test/finished");
  //       }
  //     }

  //     window.localStorage.setItem("preguntaActual", preguntaActual.toString());
  //   }
  // }

  // function preguntaAnterior(event: React.MouseEvent<HTMLButtonElement>) {
  //   event.preventDefault();
  //   if (preguntaActual > 0) {
  //     setPreguntaActual(preguntaActual - 1);
  //     setTextoBoton("Siguiente");
  //     const error = document.querySelector(".error");
  //     if (error) error.classList.add("invisible");
  //     window.localStorage.setItem("preguntaActual", (preguntaActual - 1).toString());
  //   }
  // }

  // function remo() {
  //   window.localStorage.removeItem("repuestasUser");
  //   window.localStorage.removeItem("preguntaActual");
  // }


  const [preguntaActual, setPreguntaActual] = useState(0);
  const [textoBoton, setTextoBoton] = useState("Siguiente");
  const [resultado, setResultado] = useState<number[]>([]);
  const [botonesDeshabilitados, setBotonesDeshabilitados] = useState(false);
  const router = useRouter();

  const totalPregun = Object.keys(preguntas).length;

  useEffect(() => {
    const preguntaFromStorage = window.localStorage.getItem("preguntaActual");
    const respuestasFromStorage = window.localStorage.getItem("repuestasUser");
    const respuestas = respuestasFromStorage ? JSON.parse(respuestasFromStorage) : [];
    const preguntaIndex = preguntaFromStorage ? parseInt(preguntaFromStorage) : 0;
    setPreguntaActual(preguntaIndex);
    setResultado(respuestas);

    // Marcar la respuesta previamente seleccionada
    if (respuestas[preguntaIndex] !== undefined) {
      const valorSeleccionado = document.querySelector(
        `input[name="value-radio"][value="${respuestas[preguntaIndex]}"]`
      ) as HTMLInputElement;
      if (valorSeleccionado) {
        valorSeleccionado.checked = true;
      }
    }
  }, []);

  useEffect(() => {
    // Marcar la respuesta seleccionada cada vez que cambia la pregunta actual
    if (resultado[preguntaActual] !== undefined) {
      const valorSeleccionado = document.querySelector(
        `input[name="value-radio"][value="${resultado[preguntaActual]}"]`
      ) as HTMLInputElement;
      if (valorSeleccionado) {
        valorSeleccionado.checked = true;
      }
    }
  }, [preguntaActual, resultado]);

  function guardarRespuestas() {
    const valorSeleccionado = document.querySelector(
      'input[name="value-radio"]:checked'
    ) as HTMLInputElement;

    if (valorSeleccionado !== null) {
      const nuevaRespuesta = parseInt(valorSeleccionado.value);

      const respuestasGuardadas = JSON.parse(
        window.localStorage.getItem("repuestasUser") || "[]"
      );
      respuestasGuardadas[preguntaActual] = nuevaRespuesta;
      setResultado(respuestasGuardadas);

      window.localStorage.setItem(
        "repuestasUser",
        JSON.stringify(respuestasGuardadas)
      );

      if (valorSeleccionado.checked === true) valorSeleccionado.checked = false;

      // Deshabilitar botones si es la última pregunta
      if (preguntaActual === totalPregun - 1) {
        setBotonesDeshabilitados(true);
      }
    }
  }

  async function siguientePregunta(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const valorSeleccionado = document.querySelector(
      'input[name="value-radio"]:checked'
    );
    const error = document.querySelector(".error");
    if (!error) return;
    else if (valorSeleccionado === null) error?.classList.remove("invisible");
    else if (valorSeleccionado !== null) {
      if (error.className.includes("invisible")) {
        guardarRespuestas();
        if (preguntaActual < totalPregun - 1) {
          const nuevaPreguntaActual = preguntaActual + 1;
          setPreguntaActual(nuevaPreguntaActual);
          if (preguntaActual === totalPregun - 2) setTextoBoton("Terminar");
          else setTextoBoton("Siguiente");
        } else if (preguntaActual === totalPregun - 1) {
          const result = await insertPruebaFunction(resultado);
          console.log(result);

          window.localStorage.removeItem("repuestasUser");
          window.localStorage.removeItem("preguntaActual");
          router.push("/test/finished");
        }
      } else {
        if (preguntaActual < totalPregun - 1) {
          const nuevaPreguntaActual = preguntaActual + 1;
          setPreguntaActual(nuevaPreguntaActual);
          error.classList.add("invisible");

          if (preguntaActual === totalPregun - 2) setTextoBoton("Terminar");
          else setTextoBoton("Siguiente");
        } else if (preguntaActual === totalPregun - 1) {
          const result = await insertPruebaFunction(resultado);
          console.log(result);

          window.localStorage.removeItem("repuestasUser");
          window.localStorage.removeItem("preguntaActual");
          router.push("/test/finished");
        }
      }

      window.localStorage.setItem("preguntaActual", preguntaActual.toString());
    }
  }

  function preguntaAnterior(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (preguntaActual > 0) {
      const nuevaPreguntaActual = preguntaActual - 1;
      setPreguntaActual(nuevaPreguntaActual);
      setTextoBoton("Siguiente");
      const error = document.querySelector(".error");
      if (error) error.classList.add("invisible");
      window.localStorage.setItem("preguntaActual", nuevaPreguntaActual.toString());
    }
  }

  function remo() {
    window.localStorage.removeItem("repuestasUser");
    window.localStorage.removeItem("preguntaActual");
  }

  return (
    <main className="flex items-center h-[89vh]">
      <section className="mx-5 items-center text-center sm:text-left sm:mx-auto sm:max-w-7xl w-[1100px]">
        <div>
          <h1 className="text-3xl font-semibold mb-2 sm:text-4xl sm:mb-1">
            Prueba de Orientación <q>Chaside</q>.
          </h1>
          <p className="text-xs text-gray-500 font-medium sm:text-base">
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
          <div className="mt-4 flex flex-col-reverse items-center justify-between gap-3 sm:flex-row sm:mt-10">
            <div className="">
              <div
                className={`error invisible flex items-center py-2 px-3 sm:p-3 text-red-800 rounded-lg bg-red-50`}
              >
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
            <div className="flex flex-row gap-10">
              <button
                onClick={preguntaAnterior}
                className={`${preguntaActual === 0 && 'hidden'} block bg-blue-900 hover:bg-blue-800 text-white border-blue-900 border-2 font-medium transition-all ease-in-out duration-300 rounded-lg text-base px-5 py-2 md:px-8 md:py-2.5 cursor-pointer`}
                disabled={botonesDeshabilitados}
                >
                Anterior
              </button>
              <button
                onClick={siguientePregunta}
                className="bg-blue-950 hover:bg-blue-900 text-white border-blue-950 border-2 font-medium transition-all ease-in-out duration-300 rounded-lg text-base px-5 py-2 md:px-8 md:py-2.5 cursor-pointer"
                disabled={botonesDeshabilitados}
                >
                {textoBoton}
              </button>
            </div>
          </div>
        </form>
        <span className="flex justify-center mt-5 text-xs text-gray-500 sm:mt-6 sm:text-sm">
          Utilizamos tus respuestas para orientarte a encontrar una Vocación.
        </span>
      </section>
      <button
        className="absolute right-0 bottom-0 cursor-default text-white"
        onClick={remo}
      >
        re
      </button>
    </main>
  );
}
