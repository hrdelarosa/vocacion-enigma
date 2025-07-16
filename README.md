# Vocación Enigma

Plataforma web de orientación vocacional oficial de la Universidad Autónoma de Guerrero (UAGro). Permite a estudiantes descubrir el área de estudio que mejor se adapta a sus intereses y habilidades mediante la prueba CHASIDE, sin necesidad de registro y con resultados inmediatos.

## ✨ Características principales

- Prueba CHASIDE automatizada para orientación vocacional.x
- Resultados personalizados y confidenciales.
- Enfoque en la oferta educativa de la UAGro.
- Interfaz moderna, responsiva y accesible.
- Sin necesidad de crear cuenta para realizar la prueba.

## 🚀 Estructura del Proyecto

```
/
├── public/        # Recursos estáticos e imágenes
├── src/
│   ├── components/ # Componentes reutilizables de la UI
│   ├── layouts/    # Plantillas generales
│   ├── pages/      # Rutas y páginas principales
│   └── constants/  # Constantes y configuraciones
├── package.json    # Dependencias y scripts
└── README.md
```

## 🧞 Comandos útiles

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                | Acción                                              |
| ---------------------- | --------------------------------------------------- |
| `pnpm install`         | Instala las dependencias                            |
| `pnpm dev`             | Inicia el servidor de desarrollo (`localhost:4321`) |
| `pnpm build`           | Genera la versión de producción en `./dist/`        |
| `pnpm preview`         | Previsualiza la build localmente                    |
| `pnpm astro ...`       | Ejecuta comandos de Astro (add, check, etc.)        |
| `pnpm astro -- --help` | Ayuda de la CLI de Astro                            |

## 🛠️ Tecnologías principales

- [Astro](https://astro.build/) (framework principal)
- [Preact](https://preactjs.com/) (componentes interactivos)
- [Tailwind CSS](https://tailwindcss.com/) (estilos)
- [Supabase](https://supabase.com/) (backend y autenticación opcional)

## 📄 Licencia

MIT. Creado con ♥️ por [hrdelarosa](https://github.com/hrdelarosa) para la Universidad Autónoma de Guerrero.

---

¿Tienes sugerencias o encontraste un bug? ¡Abre un issue o pull request en [el repositorio de GitHub](https://github.com/hrdelarosa/vocacion-enigma)!
