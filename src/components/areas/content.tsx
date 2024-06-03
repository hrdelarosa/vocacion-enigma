// "use client";

// import { useEffect, useState } from "react";
import CardArea from "../cards/area";
import Image from "next/image";
import SkeletonAreas from "../skeleto/cardArea";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from "next/headers";
import { getUserIdByEmail } from "@/lib/data";

type Areas = {
  id: number;
  area: string;
  descripcion: string;
};

export default async function ContentAreas() {
  const supabase = createServerComponentClient({ cookies })
  const { data: areas } = await supabase.from('areas').select('*')

  const areasEstu: Areas[] = areas || []

  return (
    <div className="flex flex-col items-center py-8 px-5 sm:py-12 sm:px-28">
      <section className="flex flex-col items-center sm:flex-row sm:gap-12">
        <div className="text-center mb-3 sm:text-left">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Áreas de estudio de la UAGro.
          </h2>
          <p className="text-lg mt-3 sm:text-xl">
            En nuestra plataforma de Orientación Vocacional, te ofrecemos una
            amplia variedad de áreas de estudio que abarcan todos los campos
            académicos disponibles dentro de la Universidad Autónoma de
            Guerrero.
          </p>
        </div>
        <Image
          className="w-64 sm:w-80 rounded-2xl"
          src="/img/areas.jpg"
          alt="Imagen referenciada con las areas de estudio."
          width={808}
          height={469}
        />
      </section>
      <div className="grid grid-flow-row justify-center px-4 pt-8 sm:p-0 sm:grid-cols-3 gap-x-14 gap-y-9 sm:pt-10">
        {
          areasEstu.map((area) => (
            <CardArea
              key={area.id}
              area={area.area}
              text={`${area.descripcion.split('.')[0]}.`}
            />
          ))
        }
      </div>
    </div>
  );
}
