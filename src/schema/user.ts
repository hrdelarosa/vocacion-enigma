import { z } from "zod";

export const userSignScheme = z.object({
  fullname: z
    .string()
    .min(3, {
      message: "El nombre debe de ser de una longitud mayor a 3 caracteres.",
    })
    .max(150, {
      message: "El nombre debe de ser de una longitud menor a 150 caracteres.",
    }),
  email: z.string().email({
    message: "Ingrese un correo valido.",
  }).endsWith("@uagro.mx", {
    message: "El correo debe ser institucional (uagro.mx)."
  }),
  password: z.string().min(6, {
    message: "Debe ser mayor de 6 caracteres.",
  }),
  comfirmPassword: z.string().min(6, {
    message: "Debe ser mayor de 6 caracteres.",
  }),
  matricula: z.string().length(8, {
    message: "Debe de ser de 8 caracteres."
  }),
  preparatoria: z.string(),
}).refine(data => data.password === data.comfirmPassword, {
  message: "La contraseña debe coincidir.",
  path: ["comfirmPassword"]
})

export const userLogScheme = z.object({
  email: z.string().email({
    message: "Ingrese un correo valido.",
  }).endsWith("@uagro.mx", {
    message: "El correo debe ser institucional (uagro.mx)."
  }),
  password: z.string().min(6, {
    message: "Debe ser mayor de 6 caracteres.",
  })
})
