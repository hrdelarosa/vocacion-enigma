"use client";

import { useState, useEffect } from "react";
import { type User } from "@supabase/supabase-js";
import Link from "next/link";

export default function TestButton({ user }: { user: User | null }) {
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      try {
        fetch(`http://localhost:3000/api/resultado/${user?.email}`)
          .then((response) => response.json())
          .then((data) => {
            if (data.resultado) {
              setResult(data.resultado)
              // console.log(result);
            }
          });
      } catch (error) {
        // console.error("Error fetching Resultado:", error);
      }
    }
  });

  return (
    <Link
      // className="flex items-center gap-1 bg-[#042842] text-[#d9eef4] border-[1px] border-[#d9eef4] cursor-pointer py-2 px-8 text-base font-medium transition duration-300 ease-linear hover:bg-[#d9eef4] hover:text-[#054a71] hover:border-[#054a71] shadow-2xl"
      className="bg-blue-950 hover:bg-blue-900 text-white border-blue-950 border-2 font-medium transition-all ease-in-out duration-300 rounded-lg text-base px-5 py-2 md:px-8 md:py-2.5 cursor-pointer"
      href={user ? (result ? "/test/result" : "/test") : "/login"}
    >
      Comenzar
    </Link>
  );
}
