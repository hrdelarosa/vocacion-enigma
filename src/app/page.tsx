import Hero from "@/components/hero";
import AboutInformation from "@/components/about-project/information";
import CardInformation from "@/components/cards/information";
import ContentAreas from "@/components/areas/content";
import Footer from "@/components/footer";
import Image from "next/image";

import { university } from "@/const/university";
import { test } from "@/const/about-test";
import { aboutEnigma } from "@/const/information-enigma";
import { Suspense } from "react";
import SkeletonAreas from "@/components/skeleto/cardArea";
import { fetchUniversidades } from "@/lib/data";

export default async function Home() {
  return (
    <>
      <main>
        <Hero />

        <AboutInformation title={university.title} text={university.text}>
          <Image
            className="w-56 h-auto sm:w-72"
            src="/img/uagroLetras.png"
            alt="Logo de la UAGro con letras"
            width={488}
            height={186}
          ></Image>
        </AboutInformation>

        <section className="flex flex-col items-center px-5 py-8 sm:py-12 sm:px-28">
          <div className="text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">
              ¿Por qué Vocación Enigma?
            </h2>
            <p className="text-lg sm:text-xl sm:pt-4 sm:px-12">
              Vocación Enigma nace por la necesidad de brindar a los estudiantes
              de nivel medio superior de la Universidad Autónoma de Guerrero una
              herramienta integral para explorar sus intereses y tomar
              decisiones informadas sobre su educación superior.
            </p>
          </div>

          <div className="grid grid-cols-1 mt-6 gap-6 sm:grid-cols-3 sm:gap-8 sm:mt-10">
            {Object.values(aboutEnigma).map((about, index) => (
              <CardInformation
                key={index}
                title={about.title}
                text={about.text}
              />
            ))}
          </div>
        </section>

        <AboutInformation title={test.title} text={test.text}>
          <Image
            className="w-64 h-auto sm:w-72 rounded-2xl"
            src="/img/pruebaVg.jpg"
            alt="Imagen de un chico realizando una prueba"
            width={2185}
            height={1229}
          />
        </AboutInformation>
            
        <ContentAreas />
      </main>
      <Footer />
    </>
  );
}
