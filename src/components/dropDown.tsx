'use client'

import Link from "next/link";
import { type User } from "@supabase/supabase-js";
import { useState } from "react";

export default function DropDown({ 
  user, 
  result 
}: { 
  user: User | null 
  result: string | null
}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-lg md:hidden bg-blue-950 hover:bg-blue-900 border-2 border-blue-950 shadow-sm px-2 py-2 text-sm font-medium text-white transition-all ease-in-out duration-300"
                onClick={toggleDropdown}
              >
                <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
              </button>
            </div>
              {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link href="/" className="block px-4 py-2 text-sm text-blue-950 font-semibold hover:bg-[#C9EBFF]" role="menuitem">Inicio</Link>
                    <Link href="/universidades" className="block px-4 py-2 text-sm text-blue-950 font-semibold hover:bg-[#C9EBFF]" role="menuitem">Universidades</Link>
                    <Link href={user ? (result ? "/test/result" : "/test") : "/test"} className="block px-4 py-2 text-sm text-blue-950 font-semibold hover:bg-[#C9EBFF]" role="menuitem">Prueba</Link>
                    <a href="https://www.uagro.mx/" className="block px-4 py-2 text-sm text-blue-950 font-semibold hover:bg-[#C9EBFF]" role="menuitem">UAGro</a>
                  </div>
                </div>
              )}
            </div>
    )
}