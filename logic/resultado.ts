import { evaluarPrueba } from "./evalPrueba";
import { mayorArea } from "./areaResultado";
import { C, H, A, S, I, D, E } from "@/const/chaside";

export function resultadoArea(result: number[]): string {
  let areaResult = ''

  if (result.length > 0) {
    const c = evaluarPrueba(result, C);
    const h = evaluarPrueba(result, H);
    const a = evaluarPrueba(result, A);
    const s = evaluarPrueba(result, S);
    const i = evaluarPrueba(result, I);
    const d = evaluarPrueba(result, D)
    const e = evaluarPrueba(result, E);

    const valores = { C: c, H: h, A: a, S: s, I: i, D: d, E: e };
    const area = mayorArea(valores);

    if (area === "C") areaResult = "Área Administrativa";
    else if (area === "H") areaResult = "Área de Humanidades y Ciencias Sociales y Jurídicas";
    else if (area === "A") areaResult = "Área Artística ";
    else if (area === "S") areaResult = "Área de Ciencias de la Salud";
    else if (area === "I") areaResult = "Área de Enseñanzas Técnicas";
    else if (area === "D") areaResult = " Área de Defensa y Seguridad";
    else if (area === "E") areaResult = "Área de Ciencias Experimentales";
  }

  return areaResult
}
