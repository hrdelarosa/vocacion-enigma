"use client";

import Modal from "./modal";
import { useState } from "react";

export default function TermsConditions() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex">
      <label
        htmlFor="remember"
        className="ms-2 text-sm font-medium text-gray-900"
      >
        Acepto los{" "}
      </label>
      <p
        onClick={() => setOpen(true)}
        className="cursor-pointer ms-1 text-sm font-medium text-blue-600 hover:underline"
      >
        Términos y Condiciones.
      </p>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl">
            Términos y Condiciones de Registro de Usuarios.
          </h1>
          <p className="text-sm">
            <strong>1. Aceptación de los Términos</strong> <br />
            Al registrarse en nuestro sitio web y utilizar nuestros servicios,
            usted acepta estos Términos y Condiciones. <br />
            <strong>2. Registro de Usuario</strong> <br />
            Para acceder a la prueba de orientación vocacional, deberá completar
            el formulario de registro con información veraz y actualizada. Usted
            es responsable de mantener la confidencialidad de su cuenta y
            contraseña. <br />
            <strong>3. Uso del Servicio</strong> <br />
            El servicio está destinado únicamente para uso personal. No utilice
            el servicio para ningún propósito ilegal. <br />
            <strong>4. Privacidad</strong>
            <br />
            Consulte nuestra Política de Privacidad para saber cómo manejamos su
            información personal.
            <br />
            <strong>5. Propiedad Intelectual</strong> <br />
            Los contenidos del sitio web son propiedad de Vocación Enigma
            y están protegidos por leyes de derechos de autor. <br />
            <strong>6. Limitación de Responsabilidad</strong>
            <br />
            Vocación Enigma no será responsable por daños derivados del
            uso del servicio.
            <br /> <strong>7. Modificaciones</strong> <br />
            Podemos modificar estos Términos y Condiciones en cualquier momento.
            Los cambios serán publicados en esta página.
            <br /> <strong>8. Terminación</strong> <br />
            Podemos cancelar su cuenta y acceso al servicio en cualquier momento
            por incumplimiento de estos Términos.
            <br /> <strong>9. Ley Aplicable</strong> <br />
            Estos Términos se regirán por las leyes de México.
            <br /> <strong>10. Contacto</strong> <br />
            Si tiene alguna pregunta, contáctenos en example@uagro.mx.
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
    </div>
  );
}
