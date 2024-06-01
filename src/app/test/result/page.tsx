import Result from "@/components/result"
import { createClient } from "@/utils/supabase/server"

export default async function ResultPage() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return <Result user={user} />
}


// 'use client'

// import { useEffect, useState } from "react";
// import ResultArea from "@/components/areas/result";
// import FinishedArea from "@/components/areas/finished";
// import { areas } from "@/const/area-description";
// import CardUniversities from "@/components/cards/universities";

// interface Universi {
//   id: string
//   Facultad: string
//   SitioWeb: string
//   Direccion:string
//   Area: string
//   Ubicacion: string
//   Programa: string
// }

// export default function ResultPage() {
//   const [area, setArea] = useState('')
//   const [universidades, setUniversidades] = useState<Universi[]>([]);
//   const [resultado, setResultado] = useState(false)

//   useEffect(() => {
//     try {
//       fetch('http://localhost:3000/api/prueba/usuario', {
//         method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         body: JSON.stringify({ email: resultado })
//       })
//     } catch (error) {
//       console.error("Error fetching de usuario actualizar el id_cuestionario:", error);
//     }

//     try {
//       fetch('http://localhost:3000/api/resultado/1')
//       .then((response) => response.json())
//       .then((data) => {
//         if (Array.isArray(data.data)) {
//           console.log(data.data[0].resultado)
//           setArea(data.data[0].resultado);
//         }
//         else throw new Error("Invalid data format");
//       })
//     } catch (error) {
//       console.error("Error fetching universidades:", error);
//     }

//     const apiUrl = `http://localhost:3000/api/universidades/${area}`
    
//     try {
//       fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         if (Array.isArray(data.data)) setUniversidades(data.data);
//         else throw new Error("Invalid data format");
//       })
//     } catch (error) {
//       console.error("Error fetching universidades:", error);
//     }
//   }, [area, resultado])

//   function handleClick() {
//     setResultado(true)
//   }

//   console.log(universidades)

//   return (
//     <>
//       {
//         resultado ? (
//           <ResultArea area={area}>
//             <h1 className="text-lg font-bold mt-4 text-center text-zinc-600 sm:text-xl sm:text-left sm:mt-7">Universidades del Area.</h1>
//             <section className="grid grid-cols-3 justify-center gap-x-14 gap-y-6 pt-8">
//               {
//                 universidades.map((unis, i) => (
//                   <CardUniversities 
//                     key={i}
//                     facultad={unis.Facultad}
//                     sitioWeb={unis.SitioWeb}
//                     direccion={unis.Direccion}
//                     ubicacion={unis.Ubicacion}
//                     programa={unis.Programa}
//                   />
//                 ))
//               }
//             </section>
//           </ResultArea>
          
//         ) : (
//           <FinishedArea>
//             <button
//               onClick={handleClick}
//               className="flex items-center gap-1 bg-[#042842] text-[#d9eef4] border-[1px] border-[#d9eef4] cursor-pointer py-2 px-8 text-base font-medium transition duration-300 ease-linear hover:bg-[#d9eef4] hover:text-[#054a71] hover:border-[#054a71] shadow-2xl"
//             >
//               Resultado
//             </button>
//           </FinishedArea>
//         )
//       }
//     </>
//   );
// }
