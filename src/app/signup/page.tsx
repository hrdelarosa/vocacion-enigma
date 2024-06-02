import FormSignup from "@/components/forms/signup";
import { fetchPreparatorias } from "@/lib/data";

interface Preparatoria {
  id: number;
  nombre: string;
}

export default async function SignupPage() {
  const preparatoria = await fetchPreparatorias()
  console.log(preparatoria)
  return (
    <main className="h-[89vh]">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>


      <div className="flex min-h-full flex-col justify-center sm:mx-0 mx-4">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Crear una Cuenta
          </h1>
        </div>
        <div className="mt-3 mb-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <FormSignup prep={preparatoria} />
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
