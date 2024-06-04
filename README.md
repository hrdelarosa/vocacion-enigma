![Logo de Vocación Enigma](https://github.com/hrdelarosa/vocacion-enigma/blob/master/public/capturas/LogoEdit.png?raw=true)

# Vocación Enigma

Este proyecto es una aplicación web diseñada para ayudar a los usuarios a identificar su área de estudio ideal a través de una prueba de orientación vocacional. Al completar la prueba, los usuarios recibirán recomendaciones sobre áreas de estudio y las universidades que ofrecen programas en esas áreas.

<details>
<summary>Tabla de contenidos</summary>

- [Web Vocación Enigma](#vocación-enigma)
- [Características](#características)
  - [Capturas de Pantalla de la Web Vocación Enigma](#capturas-de-pantalla-de-la-web-vocación-enigma)
- [🛠️ Stack](#️-stack)
- [Para empezar](#para-empezar)
  - [Instalación](#instalación)
  - [Ejecuta el proyecto](#ejecuta-el-proyecto)

</details>

## Características

- Prueba de Orientación Vocacional: Una serie de preguntas diseñadas para evaluar los intereses y aptitudes del usuario.
- Resultados Personalizados: Al finalizar la prueba, se proporcionan sugerencias de áreas de estudio que se alinean con las respuestas del usuario.
- Recomendaciones de Universidades: Listado de universidades que ofrecen programas en las áreas de estudio recomendadas.
- Interfaz Intuitiva: Diseño amigable y fácil de usar para garantizar una experiencia fluida para los usuarios.

### Capturas de Pantalla de la Web Vocación Enigma

![Captura de pantalla 1](https://github.com/hrdelarosa/vocacion-enigma/blob/master/public/capturas/CapturaHero.png?raw=true)
![Captura de pantalla 2](https://github.com/hrdelarosa/vocacion-enigma/blob/master/public/capturas/CapturaUniversidades.png?raw=true)

## 🛠️ Stack
- Frontend: 
    - [![Next.js][Next.js-badge]][Next.js-url] - Un framework de trabajo React para el desarrollo de aplicaciones web estáticas y dinámicas.
    - [![Typescript][typescript-badge]][typescript-url] - Es un superconjunto de JavaScript, que esencialmente añade tipos estáticos y objetos basados en clases.
    - [![Tailwind CSS][tailwind-badge]][tailwind-url] -Un framework de trabajo CSS que prioriza las utilidades para crear rápidamente diseños personalizados.
- Backend: [![Supabase][Supabase-badge]][Supabase-url].
- Base de Datos: [![Postgresql][Postgresql-badge]][Postgresql-url] - Un sistema de gestión de bases de datos relacional.

## Para empezar

### Instalación

1. Clonar el repositorio:

     ```sh
     git clone https://github.com/hrdelarosa/vocacion-enigma.git
     ```

2. Instala los paquetes de NPM:

     ```sh
     npm install
     ```

3. Configurar la base de datos:
    - Asegúrate de tener tu base de datos en funcionamiento (en este caso en Supabase).
    - Debera de tener la informacion que es necesaria en la base de datos (dentro del script esta).
    - Configura la conexión de de la base de datos de Supabase. (no sera necessario por que si usa la autencicacion con Supabase solo tendra que hacer lo <a href="#autenticacion-email">siguiente</a> para que le funcionen la autenticacion y la base de datos).
    [Script para crear las tablas Base de Datos](https://drive.google.com/file/d/14Me-AexVD4K5emThscmPNnQUHURBIA0s/view?usp=drive_link)

     ```sh
     -- Tabla Areas
     CREATE TABLE Areas (
     id SERIAL PRIMARY KEY,
     area VARCHAR(255) NOT NULL,
     descripcion TEXT NOT NULL
     );
     ...
     ```

### Ejecuta el proyecto

1. Iniciar la aplicación:

     ```sh
     npm run dev
     ```

2. Instala los paquetes de NPM:

     - Abre tu navegador web y ve a http://localhost:3000.

<a name="autenticacion-email"></a>

3. Autenticación mediante email 
    - Accede a [![Supabase][Supabase-badge]][Supabase-url], crea y configura tu proyecto.
    - Obtén el Project URL y Project API keys (anon) del proyecto.
    - Crea un archivo llamado ```.env.local``` e integra estas variabes y reemplaza su valor por tu URL y Keys
    ```sh
     # Sacar de tu proyecto de Supabase
     NEXT_PUBLIC_SUPABASE_URL="project-url"
     NEXT_PUBLIC_SUPABASE_ANON_KEY="project-anon-keys"

     ```

[Next.js-url]: https://nextjs.org/
[typescript-url]: https://www.typescriptlang.org/
[tailwind-url]: https://tailwindcss.com/
[Postgresql-url]: https://www.postgresql.org/
[Supabase-url]: https://supabase.com/

[Next.js-badge]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[typescript-badge]: https://img.shields.io/badge/Typescript-007ACC?style=for-the-badge&logo=typescript&logoColor=white&color=blue
[tailwind-badge]: https://img.shields.io/badge/Tailwind-ffffff?style=for-the-badge&logo=tailwindcss&logoColor=38bdf8
[Postgresql-badge]: https://img.shields.io/badge/postgresql-4169e1?style=for-the-badge&logo=postgresql&logoColor=white
[Supabase-badge]: https://shields.io/badge/supabase-black?logo=supabase&style=for-the-badge