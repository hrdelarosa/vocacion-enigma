import Image from "next/image";
import "./universities.css";
import Universities from "@/components/universities/universities";
import { Suspense } from "react";
import SkeletonUniversities from "@/components/skeleto/universities";

export default async function UniversidadesPage() {

  return (
    <main className="mx-5 items-center py-24 sm:mx-auto sm:max-w-7xl">
      <section className="text-center sm:text-left">
        <h1 className="text-3xl font-semibold sm:text-5xl">
          Universidades de la UAGro.
        </h1>
        <div className="flex flex-col items-center text-center sm:text-left sm:flex-row">
          <p className="text-base mb-3 sm:text-lg">
            La Universidad Autónoma de Guerrero ofrece una gran variedad de
            Universidades, la plataforma cuenta con todas ellas. Todas las
            universidades van desde instituciones centradas en la tecnología
            hasta aquellas dedicadas a las humanidades y las artes, contamos con
            una amplia red de universidades para satisfacer tus necesidades
            académicas.
          </p>
          <Image
            className="w-64 mt-2 sm:w-80 sm:mt-0 rounded-2xl"
            src="/img/rectoriaUagro.jpg"
            alt="Rectoria de la UAGro."
            width={1024}
            height={629}
          />
        </div>
      </section>
      <div className="flex flex-col mt-9 sm:mt-11">
        <div className="radio-inputs">
          <label className="radio">
            <input type="radio" name="radio" value="Área Administrativa" defaultChecked />
            <span className="name">Área Administrativa</span>
          </label>
          <label className="radio">
            <input type="radio" name="radio" value="Área de Humanidades y Ciencias Sociales y Jurídicas" />
            <span className="name">Área de Humanidades y Ciencias Sociales y Jurídicas</span>
          </label>
          <label className="radio">
            <input type="radio" name="radio" value="Área Artística" />
            <span className="name">Área Artística</span>
          </label>
          <label className="radio">
            <input
              type="radio"
              name="radio"
              value="Área de Ciencias de la Salud"
            />
            <span className="name">Área de Ciencias de la Salud</span>
          </label>
          <label className="radio">
            <input
              type="radio"
              name="radio"
              value="Área de Enseñanzas Técnicas"
            />
            <span className="name">Área de Enseñanzas Técnicas</span>
          </label>
          <label className="radio">
            <input
              type="radio"
              name="radio"
              value="Área de Ciencias Experimentales"
            />
            <span className="name">Área de Ciencias Experimentales</span>
          </label>
        </div>
        <section className="grid grid-flow-row justify-center sm:grid-cols-3 gap-x-14 gap-y-6 pt-8">
          <Suspense fallback={<SkeletonUniversities />}>
            <Universities />
          </Suspense>
        </section>
      </div>
    </main>
  );
}
