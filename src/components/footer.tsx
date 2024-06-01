"use client";

import Image from "next/image";
import Link from "next/link";
import Modal from "./modal";
import { useState } from "react";

export default function Footer() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <footer className="shadow-2xl">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              className="h-[60px] w-auto"
              src="/img/Logo-Vocacion-Enigma.png"
              alt="Logo de Vocación Enigma."
              width={172}
              height={136}
            />
            <span className="self-center text-2xl font-bold whitespace-nowrap text-black">
              Enigma
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-600 sm:mb-0">
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Acerca de
              </Link>
            </li>
            <li className="cursor-pointer">
              <p
                onClick={() => setOpen(true)}
                className="hover:underline me-4 md:me-6"
              >
                Política de Privacidad
              </p>
              <Modal open={open} onClose={() => setOpen(false)}>
                <div className="flex flex-col gap-4 text-black">
                  <h1 className="text-2xl">Política de Privacidad.</h1>
                  <p>
                    <strong>1. Introducción </strong>
                    <br />
                    En Vocación Enigma, protegemos su privacidad y nos
                    comprometemos a salvaguardar su información personal. <br />
                    <strong>2. Información </strong>
                    <br />
                    Recopilada Recopilamos: <br/>
                    Datos de registro (nombre, correo electrónico), Respuestas a la Prueba y Información técnica (IP, navegador) <br />
                    <strong>3. Uso de la Información</strong>
                    <br />
                    Utilizamos su información para: <br/>
                    Administrar la Prueba, Mejorar Nuestros Servicios y Comunicarnos con Usted <br />
                    <strong>4. Compartir Información </strong>
                    <br />
                    No compartimos su información con terceros, salvo:<br/>
                    Proveedores de Servicios que deben mantener la Confidencialidad y Cuando es Requerido por Ley <br />
                    <strong>5. Seguridad</strong>
                    <br />
                    Protegemos su información mediante: <br/>
                    Encriptación y Acceso Restringido <br />
                    <strong>6. Sus Derechos </strong>
                    <br />
                    Usted puede: <br/>
                    Acceder a su Información, Solicitar Correcciones y Solicitar la Eliminación de su Información <br />
                    <strong>7. Cambios a la Política </strong>
                    <br />
                    Podemos actualizar esta política y notificaremos los cambios
                    aquí.
                    <br />
                    <strong>8. Contacto </strong>
                    <br />
                    Para preguntas, contáctenos en example.uagro.mx.
                  </p>
                  <hr className="border-t-solid border-1 border-grey" />
                  <div className="flex flex-row justify-center">
                    <button
                      // className="border border-neutral-300 rounded-lg py-1.5 px-10 bg-blue-500 hover:bg-blue-600 text-white"
                      className="flex w-full justify-center rounded-md bg-[#0066a6] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#055687] hover:-translate-y-[2px] transition duration-300"
                      onClick={() => setOpen(false)}
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </Modal>
            </li>
            <li>
              <a
                href="mailto:20443301@uagro.mx"
                target="_blank"
                className="hover:underline"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-600 sm:text-center">
          © 2023{" "}
          <a href="/" className="hover:underline">
            Vocacion Enigma™
          </a>
          . Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
}
