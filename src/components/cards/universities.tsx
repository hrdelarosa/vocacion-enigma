export default function CardUniversities({
    facultad,
    programa,
    ubicacion,
    sitioWeb,
    direccion,
}: {
    facultad: string
    programa: string
    ubicacion: string
    sitioWeb: string
    direccion: string
}) {
  return (
    <div className="max-w-96 p-5 border-8 border-blue-950 bg-white rounded-3xl transition duration-300 ease-in-out group hover:bg-[#d9eef4]">
      <h2 className="mb-3 text-xl font-black text-blue-950 group-hover:text-gray-700">{facultad}</h2>
      <section className="flex flex-col gap-1">
        <div className="flex items-center gap-1 text-gray-700 group-hover:text-blue-950">
          <img className="w-4" src="/programa.svg" alt="Icono de Programa" />
          <p className="text-base font-semibold cursor-default">{programa}</p>
        </div>
        
        <div className="flex items-center gap-1 text-gray-700 group-hover:text-blue-950">
          <img className="w-4" src="/ubicacion.svg" alt="Icono de Ubicacion" />
          <p className="text-base font-semibold cursor-default">{ubicacion}</p>
        </div>

        <a className="flex items-center gap-1 w-fit text-gray-700 hover:underline group-hover:text-blue-950" href={sitioWeb} target="_blank">
          <img className="w-4" src="/link.svg" alt="Icono de Link" />
          <p className="text-base font-semibold">Sitio Web</p>
        </a>

        {
          direccion && (
            <a className="flex items-center gap-1 w-fit text-gray-700 hover:underline group-hover:text-blue-950" href={direccion} target="_blank">
              <img className="w-4" src="/direccion.svg" alt="Icono de direccion" />
              <p className="text-base font-semibold">Ubicacion del Escuela</p>
            </a>
          )
        }        
      </section>
    </div>
  );
}
