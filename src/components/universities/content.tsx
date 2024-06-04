'use client'

import { useState, useEffect } from "react";
import CardUniversities from "../cards/universities";
import { Facultad } from "@/lib/definitions";

export default function ContentUniversities({ universidades }: { universidades: Facultad[] }) {
  const [universidadesFiltradas, setUniversidadesFiltradas] = useState<Facultad[]>(universidades);

  useEffect(() => {
    const handleInputChange = () => {
      const selectedInput = document.querySelector('input[name="radio"]:checked') as HTMLInputElement;
      if (!selectedInput) return;  

      const selectedArea = selectedInput.value;
      const filtradas = universidades.filter(universidad => universidad.area === selectedArea);
      console.log("Universidades filtradas:", filtradas);

      setUniversidadesFiltradas(filtradas);
    };

    const radioInputs = document.querySelectorAll('input[name="radio"]');
    radioInputs.forEach(input => input.addEventListener('change', handleInputChange));

    // Ejecutar la función al montar el componente para inicializar el filtro
    handleInputChange();

    return () => {
      radioInputs.forEach(input => input.removeEventListener('change', handleInputChange));
    };
  }, [universidades]);

  return (
    <>
      {
        universidadesFiltradas.map((facultad, index) => (
          <CardUniversities
            key={index}
            facultad={facultad.facultad}
            programa={facultad.programa}
            ubicacion={facultad.ubicacion}
            sitioWeb={facultad.sitioweb}
            direccion={facultad.direccion}
          />
        ))
      }
    </>
  );
}


// 'use client'

// import { useState, useEffect } from "react";
// import CardUniversities from "../cards/universities";
// import { Facultad } from "@/lib/definitions";

// export default function ContentUniversities({ universidades }: { universidades: Facultad[] }) {
//   const [universidadesFiltradas, setUniversidadesFiltradas] = useState<Facultad[]>([]);

//   useEffect(() => {
//     const handleInputChange = () => {
//       const selectedInput = document.querySelector('input[name="radio"]:checked') as HTMLInputElement
//       if (!selectedInput) return;
    
//       const selectedArea = selectedInput.value;    

//       setUniversidadesFiltradas([]);
//       console.log(universidades)
    
//       const filtradas = universidades.filter(universidad => universidad.area === selectedArea)
//       // const filtradas = universidades.filter(universidad => universidad.area === selectedArea);
//       console.log("Universidades filtradas:", filtradas);
//       setUniversidadesFiltradas(filtradas);
//     };    
  
//     handleInputChange();
  
//     const radioInputs = document.querySelectorAll('input[name="radio"]');
//     radioInputs.forEach(input => input.addEventListener('change', handleInputChange));
  
//     return () => {
//       radioInputs.forEach(input => input.removeEventListener('change', handleInputChange));
//     };
//   }, [universidades]);

//   // console.log(universidades)

//   return (
//     <>
//       {
//         universidadesFiltradas.map((facultad, index) => (
//           <CardUniversities
//             key={index}
//             facultad={facultad.facultad}
//             programa={facultad.programa}
//             ubicacion={facultad.ubicacion}
//             direccion={facultad.direccion}
//             sitioWeb={facultad.sitioWeb}
//           />
//         ))
//       }
//       {/* {
//         universidades.map((unis, i) => (
//           <CardUniversities
//             key={i}
//             facultad={unis.Facultad}
//             sitioWeb={unis.SitioWeb}
//             direccion={unis.Direccion}
//             ubicacion={unis.Ubicacion}
//             programa={unis.Programa}
//           />
//         ))
//       } */}
//     </>
//   );
// }
