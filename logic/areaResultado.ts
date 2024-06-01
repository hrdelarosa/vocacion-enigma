export function mayorArea(obj: object) {
  let areaMayor = null;
  let valorMayor = -1;

  for (const [area, valor] of Object.entries(obj)) {
    if (valor > valorMayor) {
      valorMayor = valor;
      areaMayor = area;
    }
  }

  return areaMayor
}