"use client";

import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import AccountSkeleton from "../skeleto/account";
import { type User } from "@supabase/supabase-js";

export default function AccountForm({ user }: { user: User | null }) {
  // const supabase = createClient();
  const [loading, setLoading] = useState(true);
  const [fullname, setFullname] = useState<string | null>(null);
  const [matricula, setMatricula] = useState<string | null>(null);
  const [preparatoria, setPreparatoria] = useState<string | null>(null);

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);
      // console.log(user?.email)

      fetch(`http://localhost:3000/api/usuarios/${user?.email}`)
        .then((response) => response.json())
        .then((data) => {
          if (Array.isArray(data.user)) {
            // console.log(data.user);
            setFullname(data.user[0].full_name);
            setMatricula(data.user[0].matricula);
            setPreparatoria(data.user[0].Preparatoria);
          }
        });
    } catch (error) {
      console.error(error);
      alert("Error loading user data!");
    } finally {
      setLoading(false);
    }
  }, [user]);

  const [account, setAccount] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAccount(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // console.log(fullname, matricula, preparatoria)

  useEffect(() => {
    getProfile();
  }, [user, getProfile]);

  return (
    <>
      {account ? (
        <AccountSkeleton />
      ) : (
        <div>
          <label
            htmlFor="website-admin"
            className="block mb-1 text-base font-semibold text-gray-900"
          >
            Nombre
          </label>
          <div className="flex mb-4">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border-2 rounded-e-0 border-gray-800 border-e-0 rounded-s-md">
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
              id="website-admin"
              value={fullname || ""}
              className="rounded-none rounded-e-lg bg-gray-50 border-2 text-sm font-semibold  text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full border-gray-800 p-2.5"
              disabled
            />
          </div>

          <label
            htmlFor="input-group-1"
            className="block mb-1 text-base font-semibold text-gray-900"
          >
            Tu Correo Electronico
          </label>
          <div className="relative mb-4">
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
              type="text"
              id="input-group-1"
              value={user?.email}
              className="bg-gray-50 border-2 border-gray-950 text-gray-900 text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
              disabled
            />
          </div>

          <label
            htmlFor="input-group-1"
            className="block mb-1 text-base font-semibold text-gray-900"
          >
            Matricula
          </label>
          <div className="mb-4">
            <input
              type="text"
              id="disabled-input"
              aria-label="disabled input"
              className="mb-4 bg-gray-100 border-2 border-gray-950 text-gray-900 text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={matricula || ""}
              disabled
            />
          </div>

          <label
            htmlFor="input-group-1"
            className="block mb-1 text-base font-semibold text-gray-900"
          >
            Preparatoria
          </label>
          <div className="mb-4">
            <input
              type="text"
              id="disabled-input"
              aria-label="disabled input"
              className="mb-6 bg-gray-100 border-2 border-gray-950 text-gray-900 text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={preparatoria || ""}
              disabled
            />
          </div>

          <div>
            <form action="/auth/signout" method="post">
              <button
                className="flex items-center gap-1 bg-[#042842] text-[#d9eef4] border-[1px] border-[#d9eef4] cursor-pointer py-2 px-8 text-base font-medium transition duration-300 ease-linear hover:bg-[#d9eef4] hover:text-[#054a71] hover:border-[#054a71] shadow-2xl"
                type="submit"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
