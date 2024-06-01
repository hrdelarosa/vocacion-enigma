"use client";

import { signup } from "@/utils/actions";
import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSignScheme } from "@/schema/user";
import TermsConditions from "../terminos";
import toast from "react-hot-toast";

interface Preparatoria {
  id: number;
  preparatoria: string;
}

type Inputs = {
  fullname: string
  email: string
  password: string
  comfirmPassword: string
  matricula: string
  preparatoria: string
}

const comfirmEmail = () => toast.success("Te hemos enviado un correo de confirmación. Por favor, revisa tu bandeja de entrada.", {
  position: 'bottom-center',
  duration: 7000,
})

export default function FormSignup() {
  const { register, handleSubmit, watch, setValue ,formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(userSignScheme),
    defaultValues: {
      preparatoria: '1'
    }
  })

  const [preparatorias, setPreparatorias] = useState<Preparatoria[]>([])

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const formdata = new FormData()
    
    Object.entries(data).forEach(([key, value]) => {
      formdata.append(key, value)
    })

    // console.log(formdata)
    signup(formdata)
    comfirmEmail()
  }

  useEffect(() => {
    fetch('http://localhost:3000/api/preparatorias')
    .then((response) => response.json())
    .then((data) => {
      if (Array.isArray(data.data)) {
        setPreparatorias(data.data)
        if (data.data.length > 0) setValue('preparatoria', data.data[0].id.toString())
      }
      else throw new Error('Invalid data format')
    })
    .catch((error) => console.error('There was a problem with the fetch operation:', error))
  }, [setValue])

  // console.log(preparatorias)

  return (
    <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
      <section>
        <label
          htmlFor="fullname"
          className="block mb-1 text-base font-semibold text-gray-900"
        >
          Nombre
        
        </label>
        <div className="h-14 mb-1">
          <div className="flex">
            <span className={`inline-flex items-center px-2.5 text-sm text-gray-900 bg-gray-200 border-2 rounded-e-0 ${errors.fullname?.message ? 'border-red-400 focus:outline-red-400' : 'border-blue-400 focus:outline-[#0066a6]'} border-e-0 rounded-s-md`}>
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
            </span>
            <input
              type="text"
              id="fullname"
              placeholder="Marco Pérez López"
              className={`rounded-none rounded-e-lg bg-gray-50 border-2 text-sm font-semibold  text-gray-900 ${errors.fullname?.message ? 'border-red-400 focus:outline-red-400' : 'border-blue-400 focus:outline-[#0066a6]'} block flex-1 min-w-0 w-full p-2`}
              {...register('fullname')}
            />
          </div>
          {
            errors.fullname?.message && <p className="text-xs font-semibold text-red-500 mb-1">{errors.fullname.message}</p>
          }
        </div>

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
      </section>
      <section className="grid grid-cols-2 gap-x-2">
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
        <div>
          <label
            htmlFor="comfirmPassword"
            className="block mb-1 text-base font-semibold text-gray-900"
          >
            Confirmar Contraseña
          </label>
          <div className="">
            <input
              type="password"
              id="comfirmPassword"
              aria-label="disabled input"
              placeholder="••••••"
              className={` bg-gray-100 border-2 text-gray-900 text-sm font-semibold rounded-lg ${errors.comfirmPassword?.message ? 'border-red-400 focus:outline-red-400' : 'border-blue-400 focus:outline-[#0066a6]'} block w-full p-2`}
              {...register('comfirmPassword')}
            />
            {
              errors.comfirmPassword?.message && <p className="text-xs font-semibold text-red-500 mb-1">{errors.comfirmPassword.message}</p>
            }
          </div>
        </div>

        <div>
          <label
            htmlFor="matricula"
            className="block mb-1 text-base font-semibold text-gray-900"
          >
            Matricula
          </label>
          <div className="">
            <input
              type="text"
              id="matricula"
              aria-label="disabled input"
              placeholder="20113027"
              className={`bg-gray-100 border-2 text-gray-900 text-sm font-semibold rounded-lg ${errors.matricula?.message ? 'border-red-400 focus:outline-red-400' : 'border-blue-400 focus:outline-[#0066a6]'} block w-full p-2`}
              {...register('matricula')}
            />
            {
              errors.matricula?.message && <p className="text-xs font-semibold text-red-500 mb-1">{errors.matricula.message}</p>
            }
          </div>
        </div>
        <div>
          <label
            htmlFor="input-group-1"
            className="block mb-1 text-base font-semibold text-gray-900"
          >
            Preparatorias
          </label>
          <div className="mb-4">
            <select
              id="preparatoria"
              className="mb-6 bg-gray-100 border-2 text-gray-900 text-sm font-semibold rounded-lg border-blue-400 block w-full p-2"
              {...register('preparatoria')}
            >
              {preparatorias.map((preparatoria) => (
                <option key={preparatoria.id} value={preparatoria.id}>
                  {preparatoria.preparatoria}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <div>
        <div className="flex items-start mb-2">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <TermsConditions />
        </div>

        <button 
          className="flex w-full justify-center rounded-md bg-[#0066a6] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#055687] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:-translate-y-[2px] transition duration-300"
        >
          Regístrarse
        </button>
      </div>
    </form>
  );
}
