'use client'

import { useState, useEffect } from "react";
import CardUniversities from "../cards/universities";
import { Facultad } from "@/lib/definitions";

export default function ContentUniversities({ universidades }: { universidades: Facultad[] }) {
  const [universidadesFiltradas, setUniversidadesFiltradas] = useState<Facultad[]>([]);

  useEffect(() => {
    const handleInputChange = () => {
      const selectedInput = document.querySelector('input[name="radio"]:checked') as HTMLInputElement
      if (!selectedInput) return;
    
      const selectedArea = selectedInput.value;    

      setUniversidadesFiltradas([]);
    
      const filtradas = universidades.filter(universidad => universidad.area === selectedArea);
      console.log("Universidades filtradas:", filtradas);
      setUniversidadesFiltradas(filtradas);
    };    
  
    handleInputChange();
  
    const radioInputs = document.querySelectorAll('input[name="radio"]');
    radioInputs.forEach(input => input.addEventListener('change', handleInputChange));
  
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
            direccion={facultad.direccion}
            sitioWeb={facultad.sitioWeb}
          />
        ))
      }
    </>
  );
}
