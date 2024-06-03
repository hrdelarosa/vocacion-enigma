import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
// import { startTest } from "@/utils/actions";
import FormStartTest from "@/components/forms/test";

export default async function TestPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="flex items-center h-[89vh]">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>

      <section className="mx-5 items-center text-center sm:text-left sm:mx-auto sm:max-w-7xl">
        <h1 className="text-3xl font-semibold mb-2 sm:text-5xl sm:mb-0">
          Prueba de Orientación Vocacional
        </h1>
        <div className="flex flex-col-reverse gap-0 mt-1 items-center sm:flex-row sm:gap-11">
          <div className="">
            <p className="text-[15px] mt-2 font-medium sm:text-lg">
              Esta prueba, en colaboración con la Universidad Autónoma de
              Guerrero, te ayudará a explorar tus intereses, habilidades y
              valores, brindarte orientación sobre las áreas que se adapta mejor
              a ti. Nuestro objetivo es proporcionarte una guía valiosa que te
              ayude a tomar decisiones informadas sobre tu futuro académico y
              profesional.
            </p>
            <FormStartTest user={user} />
            {/* <form
              className="flex flex-col items-center sm:items-start"
            >
              <div className="flex mt-2 mb-2 justify-center sm:justify-normal sm:mt-5 sm:mb-3">
                <button
                  formAction={handleClick}
                  // className={`flex items-center gap-1 
                  // ${user ? 'bg-[#042842] text-[#d9eef4] border-[1px] border-[#d9eef4] cursor-pointer  hover:bg-[#d9eef4] hover:text-[#054a71] hover:border-[#054a71] shadow-2xl' : 'bg-gray-500 text-slate-400 hover:text-red-500 hover:bg-gray-300 hover:border-red-600 cursor-not-allowed'}
                  // py-2 px-8 text-base font-medium transition duration-300 ease-linear`}
                  className={`${user ? 'bg-blue-950 hover:bg-blue-900 border-blue-950 cursor-pointer' : 'bg-gray-300 border-gray-400 hover:border-red-600 hover:bg-gray-200 hover:text-red-600 cursor-not-allowed'} text-white border-2 font-medium transition-all ease-in-out duration-300 rounded-lg text-base px-5 py-2 md:px-8 md:py-2.5`}
                  disabled={!user}
                >
                  Comenzar
                </button>
              </div>
              {user ? (
                <div className="flex flex-row items-center sm:items-start mb-6">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 cursor-pointer"
                      required
                    />
                  </div>
                  <TermsConditionsTest />
                </div>
              ) : (
                <p className="text-sm font-medium">Para empezar debera <a className="text-blue-600 hover:underline" href="/login">iniciar sesión</a> antes.</p>
              )}
            </form> */}
          </div>
          <Image
            className="rounded-2xl w-64 sm:w-[480px]"
            src="/img/pruebaSF.png"
            alt="Rectoria de la UAGro."
            width={2185}
            height={985}
          />
        </div>
      </section>
    </main>
  );
}
