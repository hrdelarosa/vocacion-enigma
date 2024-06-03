'use client'

import TermsConditionsTest from "@/components/terminos-test";
import { type User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

export default function FormStartTest({ user }: { user: User | null }) {
    const router = useRouter();

    const handleClick = () => {
        router.push('/test/start')
    }
  return (
    <form className="flex flex-col items-center sm:items-start">
      <div className="flex mt-2 mb-2 justify-center sm:justify-normal sm:mt-5 sm:mb-3">
        <button
          formAction={handleClick}
          className={`${
            user
              ? "bg-blue-950 hover:bg-blue-900 border-blue-950 cursor-pointer"
              : "bg-gray-300 border-gray-400 hover:border-red-600 hover:bg-gray-200 hover:text-red-600 cursor-not-allowed"
          } text-white border-2 font-medium transition-all ease-in-out duration-300 rounded-lg text-base px-5 py-2 md:px-8 md:py-2.5`}
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
        <p className="text-sm font-medium">
          Para empezar debera{" "}
          <a className="text-blue-600 hover:underline" href="/login">
            iniciar sesión
          </a>{" "}
          antes.
        </p>
      )}
    </form>
  );
}
