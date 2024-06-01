import Response from "./response";

export default function Question({
  pregunta,
  numPreg,
  totPreg,
  respuestas,
}: {
  pregunta: string;
  numPreg: number;
  totPreg: number;
  respuestas: string[];
}) {
  return (
    <section className="text-left">
      <h2 className="text-base font-bold text-gray-700 mt-5 sm:text-lg sm:mt-8">{`Pregunta ${numPreg} de ${totPreg}`}</h2>
      <div>
        <h1 className="text-lg font-bold h-28 mt-2 sm:h-14 sm:text-xl sm:mt-4">
          {pregunta}
        </h1>
        <div className="mt-4">
          {respuestas.map((resp, index) => (
            <Response key={index} respuesta={resp} value={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
