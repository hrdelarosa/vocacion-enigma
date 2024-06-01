'use client'

import { useEffect, useState } from "react";
import { type User } from "@supabase/supabase-js";
import AccountSkeleton from "./skeleto/account";
import AccountForm from "./forms/account";

export default function AccountContent({ user }: { user: User | null }) {
  const [account, setAccount] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAccount(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="flex flex-col justify-center items-center h-[89vh]">
      
      <div className="mx-5 w-4/5 sm:mx-auto sm:w-3/5">
        <div className="text-3xl font-semibold text-center sm:text-left sm:text-6xl">
          <h1 className="text-3xl font-semibold sm:text-6xl">Mi Cuenta</h1>
          <p className="mt-2 text-lg sm:text-2xl">Estos son tus datos...</p>
        </div>
        <div className="mt-3 sm:mt-7 gap-x-6">
          <AccountForm user={user} />
        </div>
      </div>
    </section>
  );
}
