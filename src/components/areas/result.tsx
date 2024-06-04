import { areas } from "@/const/area-description";
import CardUniversities from "../cards/universities";
import { type User } from "@supabase/supabase-js";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from "next/headers";
import { Facultad } from "@/lib/definitions";

interface Universi {
  id: string
  Facultad: string
  SitioWeb: string
  Direccion:string
  Area: string
  Ubicacion: string
  Programa: string
}

export default async function ResultArea({ 
  user,
  result
 }: { 
  user: User | null 
  result: string
}) {
  const supabase = createServerComponentClient({ cookies })
  const { data: facultad } = await supabase.rpc('cacultad_query')

  const facultades: Facultad[] = facultad || []
  console.log(facultad)
  // console.log(result)
  // console.log(facultades)
  const filtradas = facultades.filter(universidad => universidad.area === result);
  // console.log(filtradas)
  
  // const [universidades, setUniversidades] = useState<Universi[]>([]);
  // const [inicio, setInicio] = useState(true)
  // const [area, setArea] = useState('')
  // // const selectedArea = area

  // useEffect(() => {
  //   try {
  //     fetch(`http://localhost:3000/api/resultado/${user?.email}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.resultado) setArea(data.resultado);
  //       // else throw new Error("Invalid data format");
  //     })
  //   } catch (error) {
  //     console.error("Error fetching Resultado:", error);
  //   }
  // }, [user?.email])
  
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setInicio(false)
  //   }, 1000)

  //   return () => clearTimeout(timer)
  // }, [])

  // useEffect(() => {
  //   const apiUrl = `http://localhost:3000/api/universidades/${area}`
    
  //   try {
  //     fetch(apiUrl)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (Array.isArray(data.data)) setUniversidades(data.data);
  //     })
  //   } catch (error) {
  //     console.error("Error fetching universidades:", error);
  //   }
  // }, [area])

  return (
    <main className="mx-5 items-center py-8 sm:py-14 sm:mx-auto sm:max-w-7xl">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
      
      <div className="text-center sm:text-left">
        <h1 className="text-2xl font-semibold sm:text-4xl">Resultado de la Prueba.</h1>
        <p className="text-base mt-0 sm:text-lg sm:mt-1">Según el análisis de tus respuestas, te sugerimos explorar carreras que se alineen con tus intereses y habilidades. Estas áreas de estudio te proporcionarán un entorno en el que podrás desarrollar tu potencial al máximo y alcanzar tus metas profesionales y personales.</p>
      </div>
      <div className="mt-5 text-center sm:text-left">
        <h2 className="text-xl font-semibold text-zinc-700 sm:text-2xl">
          {result}
        </h2>
        <p className="text-base mt-0 sm:text-lg sm:mt-1">
          {areas[result]}
        </p>
        {/* {
          inicio ? (
            <AreaSkeleton />
          ) : (
            <>
              <h2 className="text-xl font-semibold text-zinc-700 sm:text-2xl">
                {area}
              </h2>
              <p className="text-base mt-0 sm:text-lg sm:mt-1">
                {areas[area]}
              </p>
            </>
          )
        } */}
      </div>
      <h1 className="text-lg font-bold mt-4 text-center text-zinc-600 sm:text-xl sm:text-left sm:mt-7">Universidades del Area.</h1>
      {
        result === 'Área de Defensa y Seguridad' ? (
          <>
            <p className="text-base text-center sm:text-left sm:text-lg mt-2">Estimados usuarios, Les informamos que la Universidad Autónoma de Guerrero no cuenta con programas académicos en el área de Defensa y Seguridad.</p>
            <p className="text-base text-center sm:text-left sm:text-lg mt-2">Agradecemos su comprensión.</p>
          </>
        ) : (
          <section className="grid grid-cols-1 sm:grid-cols-3 justify-center sm:gap-x-14 gap-y-4 sm:gap-y-6 pt-4 sm:pt-8">
            {
              filtradas.map((unis, i) => (
                <CardUniversities 
                  key={i}
                  facultad={unis.facultad}
                  sitioWeb={unis.sitioweb}
                  direccion={unis.direccion}
                  ubicacion={unis.ubicacion}
                  programa={unis.programa}
                />
              ))
            }
          </section>
        )
      }
      {/* {
        area === 'Área de Defensa y Seguridad' ? (
          <>
            <p className="text-base text-center sm:text-left sm:text-lg mt-2">Estimados usuarios, Les informamos que la Universidad Autónoma de Guerrero no cuenta con programas académicos en el área de Defensa y Seguridad.</p>
            <p className="text-base text-center sm:text-left sm:text-lg mt-2">Agradecemos su comprensión.</p>
          </>
        ) : (
          <section className="grid grid-cols-1 sm:grid-cols-3 justify-center sm:gap-x-14 gap-y-4 sm:gap-y-6 pt-4 sm:pt-8">
            {
              inicio ? (
                <SkeletonUniversities />
              ) : (
                universidades.map((unis, i) => (
                  <CardUniversities 
                    key={i}
                    facultad={unis.Facultad}
                    sitioWeb={unis.SitioWeb}
                    direccion={unis.Direccion}
                    ubicacion={unis.Ubicacion}
                    programa={unis.Programa}
                  />
                ))
              )
            }
        </section>
        )
      }     */}
    </main>
  );
}
