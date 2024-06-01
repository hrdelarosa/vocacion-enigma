"use client";

import Modal from "./modal";
import { useState } from "react";

export default function TermsConditionsTest() {
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
        <div className="flex flex-col gap-2 text-left">
          <h1 className="text-base sm:text-2xl">
            Términos y Condiciones de la Prueba de Orientación Vocacional.
          </h1>
          <p className="text-[10px] sm:text-sm">
            <strong>1. Aceptación de los Términos </strong>
            <br className="hidden sm:block" />
            Al realizar la prueba de orientación vocacional en nuestro sitio
            web, usted acepta estos Términos y Condiciones. Si no está de
            acuerdo, no debe realizar la prueba. <br />
            <strong>2. Uso Personal </strong>
            <br className="hidden sm:block" />
            La prueba está destinada únicamente para su uso personal. No puede
            utilizar los resultados para fines comerciales o ilegales. <br />
            <strong>3. Exactitud de la Información </strong>
            <br className="hidden sm:block" />
            Debe proporcionar información precisa y veraz al realizar la prueba.
            Los resultados se basan en la información que usted proporciona.
            <br />
            <strong>4. Resultados de la Prueba </strong>
            <br className="hidden sm:block" />
            La prueba ofrece sugerencias basadas en sus respuestas. No
            garantizamos la exactitud o adecuación de los resultados para sus
            necesidades personales. No somos responsables de las decisiones que
            tome basadas en los resultados de la prueba. <br />
            <strong>5. Privacidad y Uso de Datos </strong>
            <br className="hidden sm:block" />
            Sus datos personales serán tratados conforme a nuestra Política de
            Privacidad. Recopilamos y utilizamos su información para mejorar la
            precisión de la prueba y proporcionarle resultados relevantes.
            <br />
            <strong>6. Propiedad Intelectual </strong>
            <br className="hidden sm:block" />
            El contenido y diseño de la prueba son propiedad de Vocación Enigma y están protegidos por leyes de derechos de autor. No está
            permitido copiar, distribuir o utilizar este contenido sin nuestro
            permiso por escrito. <br />
            <strong>7. Modificaciones </strong>
            <br className="hidden sm:block" />
            Nos reservamos el derecho de modificar estos Términos y Condiciones
            en cualquier momento. Los cambios serán publicados en esta página.
            Es su responsabilidad revisar estos términos periódicamente. <br />
            <strong>8. Terminación </strong>
            <br className="hidden sm:block" />
            Podemos restringir o terminar su acceso a la prueba en cualquier
            momento si incumple estos Términos y Condiciones. <br />
            <strong>9. Ley Aplicable </strong>
            <br />
            Estos Términos y Condiciones se rigen por las leyes de
            México, sin consideración de sus principios de conflicto de
            leyes. <br />
            <strong>10. Contacto Si tiene alguna pregunta sobre</strong>
            <br className="hidden sm:block" />
            estos Términos y Condiciones, puede contactarnos en example@uagro.mx.
            <br className="hidden sm:block" />
          </p>
          <hr className="border-t-solid border-1 border-grey hidden sm:block" />
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
