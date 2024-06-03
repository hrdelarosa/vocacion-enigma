import { createClient } from "@/utils/supabase/server";
import TestButton from "./test-button";
import { obtenerResultadoCuestionarioPorEmail } from "@/lib/data";


export default async function Hero() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <section className="flex items-center h-[91vh]">
      {/* <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div> */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>

      <div className="mx-5 sm:mx-auto sm:max-w-5xl">
        <div className="text-center">
          <h1 className="text-3xl font-semibold sm:text-6xl">
            Tu futuro comienza aquí! Encuentra tu vocación con nuestra prueba de orientación.
          </h1>
          <p className="mt-6 text-lg sm:text-2xl">
            Explora tus posibilidades profesionales y descubre tu camino hacia
            el éxito con nuestra plataforma de orientación vocacional. En
            Vocación Enigma, te ofrecemos herramientas y recursos para ayudarte
            a tomar decisiones informadas sobre tu futuro profesional.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <TestButton user={user} />
            {/* <a
              className="flex items-center gap-1 bg-[#042842] text-[#d9eef4] border-[1px] border-[#d9eef4] cursor-pointer py-2 px-8 text-base font-medium transition duration-300 ease-linear hover:bg-[#d9eef4] hover:text-[#054a71] hover:border-[#054a71] shadow-2xl"
              href={user ? (result ? '/test/result' : '/test' ) : '/login'}
              // href={user ? '/test' : '/login'}
            >
              Comenzar
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
