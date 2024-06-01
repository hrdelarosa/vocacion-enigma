"use client";

import { login } from "@/utils/actions";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userLogScheme } from "@/schema/user";
import toast from "react-hot-toast";

type Inputs = {
  email: string
  password: string
}

const notify = () => toast.error("El correo o contraseña no es correcta. Compruébalo de nuevo.", {
  position: 'bottom-center',
  duration: 5000,
})

export default function FormLogin() {
  const { register, handleSubmit, watch ,formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(userLogScheme)
  })

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const formdata = new FormData()

    Object.entries(data).forEach(([key, value]) => {
      formdata.append(key, value)
    })

    const succes = await login(formdata)

    if (succes === false) notify()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 sm:mx-auto sm:w-full sm:max-w-sm" action="">
      <section>
      <label
          htmlFor="email"
          className="block mb-1 text-base font-semibold text-gray-900"
        >
          Correo Electronico
        </label>
        <div className="h-14 mb-1">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input
              type="email"
              id="email"
              placeholder="ejemplo@uagro.mx"
              className={`bg-gray-50 border-2 text-gray-900 text-sm font-semibold rounded-lg ${errors.email?.message ? 'border-red-400 focus:outline-red-400' : 'border-blue-400 focus:outline-[#0066a6]'} block w-full ps-10 p-2`}
              {...register('email')}
            />
          </div>
          {
            errors.email?.message && <p className="text-xs font-semibold text-red-500 mb-1">{errors.email.message}</p>
          }
        </div>

        <div>
          <label
            htmlFor="password"
            className="block mb-1 text-base font-semibold text-gray-900"
          >
            Contraseña
          </label>
          <div className="h-14 mb-1">
            <div className="">
              <input
                type="password"
                id="password"
                placeholder="••••••"
                className={`bg-gray-100 border-2 text-gray-900 text-sm font-semibold rounded-lg ${errors.password?.message ? 'border-red-400 focus:outline-red-400' : 'border-blue-400 focus:outline-[#0066a6]'} block w-full p-2`}
                {...register('password')}
              />
              {
                errors.password?.message && <p className="text-xs font-semibold text-red-500 mb-1">{errors.password.message}</p>
              }
            </div>
          </div>
        </div>
      </section>
      {/* <button id="btn" onClick={notify}>notifi</button> */}

      <div className="pt-2">
        <button 
          // formAction={login} 
          // onClick={() =>{ loginError && notify }}
          className="flex w-full justify-center rounded-md bg-[#0066a6] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#055687] hover:-translate-y-[2px] transition duration-300"
        >
          Iniciar Sesión
        </button>
      </div>
    </form>
  );
}
