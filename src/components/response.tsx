export default function Response({ 
    respuesta, 
    value
}: {
    respuesta: string,
    value: number
}) {
  return (
    <>
      <input
        type="radio"
        id={`value-${value}`}
        name="value-radio"
        value={value}
        className='input-response'
      />
      <label
      className="label-response"
      htmlFor={`value-${value}`}>{respuesta}</label>
    </>
  );
}
