import { useState, useEffect } from "react";
import CardUniversities from "../cards/universities";

interface Universi {
  id: string
  Facultad: string
  SitioWeb: string
  Direccion:string
  Area: string
  Ubicacion: string
  Programa: string
}

export default function ContentUniversities() {
  const [universidades, setUniversidades] = useState<Universi[]>([]);

  useEffect(() => {
    const handleInputChange = async () => {
      const selectedInput = document.querySelector(
        'input[name="radio"]:checked'
      ) as HTMLInputElement;
      if (!selectedInput) return;

      const selectedArea = selectedInput.value;
      console.log("area seleccionada", selectedArea);

      const apiUrl = `http://localhost:3000/api/universidades/${selectedArea}`;
      console.log(apiUrl);

      try {
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            if (Array.isArray(data.data)) setUniversidades(data.data);
            else throw new Error("Invalid data format");
          });
      } catch (error) {
        console.error("Error fetching universidades:", error);
      }
    };

    handleInputChange();

    const radioInputs = document.querySelectorAll('input[name="radio"]');
    radioInputs.forEach((input) =>
      input.addEventListener("change", handleInputChange)
    );

    return () => {
      radioInputs.forEach((input) =>
        input.removeEventListener("change", handleInputChange)
      );
    };
  }, []);

  // console.log(universidades)

  return (
    <>
      {
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
      }
    </>
  );
}
