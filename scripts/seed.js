const { db } = require("@vercel/postgres");

async function seedAreas(client) {
  try {
    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS Areas (
            id SERIAL PRIMARY KEY,
            area VARCHAR(255) NOT NULL,
            descripcion TEXT NOT NULL
        );
      `;

    console.log(`Created "Areas" table`);

    const insertedAreas = await client.sql`
        INSERT INTO Areas (area, descripcion) VALUES
        ('Área Administrativa', 'El área administrativa se centra en la gestión y organización de recursos dentro de una entidad, ya sea una empresa, una organización sin fines de lucro o una institución gubernamental. Sus funciones incluyen la planificación, dirección, control y coordinación de actividades y recursos para lograr los objetivos organizacionales. Profesionales en esta área manejan aspectos como recursos humanos, finanzas, logística, y procesos administrativos, asegurando el funcionamiento eficiente y eficaz de la entidad.'),
        ('Área de Humanidades y Ciencias Sociales y Jurídicas', 'Esta área abarca disciplinas que estudian al ser humano y la sociedad desde diversas perspectivas. Incluye carreras como filosofía, historia, sociología, psicología, antropología, derecho, ciencias políticas y comunicación, entre otras. Los profesionales en esta área se dedican a comprender, analizar y mejorar la condición humana, las estructuras sociales y los sistemas jurídicos, contribuyendo al desarrollo cultural, social y político de las comunidades.'),
        ('Área Artística', 'El área artística engloba disciplinas relacionadas con la expresión creativa y la producción de obras de arte. Incluye artes visuales (pintura, escultura, fotografía), artes escénicas (teatro, danza, música), y otras formas de expresión artística como el cine y la literatura. Los profesionales en esta área trabajan como artistas, críticos, curadores, y educadores, contribuyendo al enriquecimiento cultural y estético de la sociedad.'),
        ('Área de Ciencias de la Salud', 'Esta área se enfoca en el estudio y la práctica de la medicina y otras disciplinas relacionadas con el cuidado de la salud. Incluye carreras como medicina, enfermería, odontología, farmacia, fisioterapia, y salud pública. Los profesionales de este campo trabajan en la prevención, diagnóstico, tratamiento y rehabilitación de enfermedades, así como en la promoción de hábitos saludables y la mejora de la calidad de vida de las personas.'),
        ('Área de Enseñanzas Técnicas', 'El área de enseñanzas técnicas abarca disciplinas que se centran en la aplicación práctica de conocimientos científicos y tecnológicos. Incluye ingeniería (civil, eléctrica, mecánica, informática, etc.), arquitectura, y tecnologías de la información y comunicación. Los profesionales en esta área desarrollan, implementan y gestionan soluciones técnicas para problemas complejos, contribuyendo al avance tecnológico y al desarrollo industrial y económico.'),
        ('Área de Ciencias Experimentales', 'Esta área se dedica al estudio de los fenómenos naturales mediante la observación, experimentación y análisis. Incluye disciplinas como física, química, biología, geología, y ciencias ambientales. Los profesionales en ciencias experimentales investigan y descubren los principios fundamentales que rigen el mundo natural, desarrollando nuevos conocimientos y tecnologías que pueden aplicarse en diversos campos, desde la medicina hasta la ingeniería y la protección del medio ambiente.'),
        ('Área de Defensa y Seguridad', 'El Área de Defensa y Seguridad se centra en la protección de la nación y la preservación del orden público. Esta área incluye disciplinas y profesiones relacionadas con la defensa nacional, la seguridad pública, la gestión de emergencias, y la aplicación de la ley. Comprende fuerzas armadas, cuerpos de policía, agencias de inteligencia, y servicios de bomberos y protección civil.');
    `;

    console.log(`Datos insertados en la tabla Areas`);

    return {
      createTable,
      insertedAreas,
    };
  } catch (error) {
    console.error("Error seeding Areas:", error);
    throw error;
  }
}

async function seedUbicacion(client) {
  try {
    const createTable = await client.sql`
        CREATE TABLE Ubicacion (
            id SERIAL PRIMARY KEY,
            ubicacion VARCHAR(60) NOT NULL
        );      
    `;

    console.log(`Created "Ubicacion" table`);

    const insertedUbicacion = await client.sql`
        INSERT INTO Ubicacion (ubicacion) VALUES
        ('Acapulco'),
        ('Chilpancingo'),
        ('Zihuatanejo'),
        ('Tixtla'),
        ('Tecoanapa'),
        ('Zumpango del Río'),
        ('Taxco'),
        ('Ometepec'),
        ('Coyuca de Catalán'),
        ('Huamuxtitlán'),
        ('CD. Altamirano'),
        ('Cuajinicuilapa'),
        ('Técpan de Galeana'),
        ('Cruz Grande'),
        ('Petaquillas'),
        ('Iguala');
    `;

    console.log(`Datos insertados en la tabla Ubicacion`);

    return {
      createTable,
      insertedUbicacion,
    };
  } catch (error) {
    console.error("Error seeding Ubicacion:", error);
    throw error;
  }
}

async function seedProgramaEducativo(client) {
  try {
    const createTable = await client.sql`
        CREATE TABLE Programa_Educativo (
            id SERIAL PRIMARY KEY,
            programa VARCHAR(255) NOT NULL
        );
    `;

    console.log(`Created "Programa Educativo" table`);

    const insertedProgramaEducativo = await client.sql`
        INSERT INTO Programa_Educativo (programa) VALUES
        ('Lic. En Administración'),
        ('Lic. en Contaduría'),
        ('Lic. Ciencias de la Comunicación'),
        ('Lic En Mercadotecnia'),
        ('Lic. En Economía'),
        ('Lic. En Gobierno y Gestión Pública'),
        ('Lic. En Ciencia Política y Administración Pública'),
        ('Lic. En Gestión Túristica'),
        ('Lic. En Innovacón Hotelera y Gestión Turística Sustentable'),
        ('Lic. En Antropología Social'),
        ('Lic. En Derecho'),
        ('Lic. En Sociología'),
        ('Lic. En Historia'),
        ('Lic. En Filosofía'),
        ('Lic. En Literatura Hispanoamericana'),
        ('Lic. En Sociología de la Comunicación y Educación'),
        ('Lic. En Desarrollo Regional'),
        ('Lic. En Ciencias de la Educación'),
        ('Lic. En Enseñanza del Idioma Inglés'),
        ('Lic. En Artes'),
        ('Lic. En Arquitectura'),
        ('Lic. En Diseño Gráfico'),
        ('Lic. En Diseño Industrial'),
        ('Lic. En Arquitecto Urbanista'),
        ('Lic. Como Medico Cirujano'),
        ('Lic. Como Cirujano Dentista'),
        ('Lic. En Psicología'),
        ('Lic. En Enfermería'),
        ('Lic. En Nutrición y Ciencia de los Alimentos'),
        ('Lic. En Fisioterapia'),
        ('Lic Como Médico Veterinario Zootecnista'),
        ('Lic. En Cultura Física y Deportes'),
        ('Lic. en Ciencia y Tecnología de los Alimentos'),
        ('Ingeniero Civil'),
        ('Ingeniero en Computación'),
        ('Ingeniero Constructor'),
        ('Ingeniero Topógrafo y Geomático'),
        ('Ingeniero en Mecatrónica y Sistemas Ciber Físicos'),
        ('Lic. En Ciencias y Tecnologías de la Información'),
        ('Lic. En Ingeniero en Prevención de Desatres y Protección Civil'),
        ('Lic. En Ingeniero en Minas'),
        ('Lic. En Edificación y Administración de Obras'),
        ('Ingeniería en Energías Limpias'),
        ('Ingeniería en Producción Sustentable Alimentaria'),
        ('Lic. En Biotecnología'),
        ('Lic. Como Químico Biólogo Parasitólogo'),
        ('Lic. En Biología'),
        ('Lic. Como Químico Farmacéutico Biólogo'),
        ('Lic. En Biología Experimental'),
        ('Lic. En Ciencias Ambientales'),
        ('Lic. En Ecología Marina'),
        ('Ingeniería en Producción Sustentable'),
        ('Ingeniería en Sistemas Ambientales'),
        ('Ingeniero Agrónomo'),
        ('Ingeniero en Agroecología'),
        ('Lic. En Geología'),
        ('Lic. En Geografía'),
        ('Téc. Superior Universitario en Matemáticas Aplicadas'),
        ('Téc. Superior Universitario en Informática'),
        ('Lic. En Matemática Educativa'),
        ('Lic. En Ciencias de Datos');
    `;

    console.log(`Datos insertados en la tabla Programa Educativo`);

    return {
      createTable,
      insertedProgramaEducativo,
    };
  } catch (error) {
    console.error("Error seeding Programa Educativo:", error);
    throw error;
  }
}

async function seedFacultad(client) {
  try {
    const createTable = await client.sql`
        CREATE TABLE Facultad (
            id SERIAL PRIMARY KEY,
            facultad VARCHAR(255) NOT NULL,
            web TEXT,
            direccion TEXT,
            area_id INTEGER,
            ubicacion_id INTEGER,
            FOREIGN KEY (area_id) REFERENCES Areas(id),
            FOREIGN KEY (ubicacion_id) REFERENCES Ubicacion(id)
        );
    `;

    console.log(`Created "Facultad" table`);

    const insertedFacultad = await client.sql`
        INSERT INTO Facultad(area_id, ubicacion_id, facultad, web, direccion) VALUES
        (1, 1, 'Contaduría y Administración', ${"https://uacontayadmon.wixsite.com/uagro-fca"}, ${"https://www.google.com/maps/dir//Av.+Adolfo+Ruiz+Cortinez+s%2Fn,+Alta+Progreso,+39610+Acapulco+de+Ju%C3%A1rez,+Gro./@16.8748781,-99.9673956,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x85ca57923d5d4613:0x1b6c43cb333f04cd!2m2!1d-99.8849938!2d16.8748946?entry=ttu"}),
        (1, 2, 'Comunicación y Mercadotecnica', ${"https://facom.uagro.mx/"}, ${"https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yDQgCEAAYiwMYgAQYogQyDQgDEAAYiwMYgAQYogQyDQgEEAAYiwMYgAQYogTSAQkxMDMyM2oxajSoAgCwAgA&um=1&ie=UTF-8&fb=1&gl=mx&sa=X&geocode=KScid7F-7MuFMQ_irJ-GQ4H5&daddr=Bachilleres+SN+Fraccionamiento+Villas+Camino+del+Sur,,+esquina,+V%C3%ADa+L%C3%A1ctea+Fraccionamiento+Villa+caminos+Del+Sur,+39097+Chilpancingo+de+los+Bravo,+Gro."}),
        (1, 1, 'Ciencias Económicas', ${"https://www.facebook.com/p/Unidad-Academica-Regional-Superior-Campus-Llano-Largo-100057565925264/?locale=es_LA"}, ${"https://www.google.com/maps/dir/16.8732255,-99.8906539/economia+uagro/@16.8439705,-99.926817,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x85ca5b9e4b4e19d5:0xa516438aba205dd2!2m2!1d-99.7950732!2d16.8300419?entry=ttu"}),
        (1, 1, 'Economía Campus Llano Largo', ${"https://www.facebook.com/p/Unidad-Academica-Regional-Superior-Campus-Llano-Largo-100057565925264/?locale=es_LA"}, ${"https://www.google.com/maps/dir/16.8732255,-99.8906539/economia+uagro/@16.8439705,-99.926817,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x85ca5b9e4b4e19d5:0xa516438aba205dd2!2m2!1d-99.7950732!2d16.8300419?entry=ttu"}),
        (1, 2, 'Gobierno y Gestión Pública', ${"https://www.facebook.com/fgygp/?locale=es_LA"}, ${"https://www.google.com/maps/dir/?api=1&destination=17.62999397428%2C-99.521799087524&fbclid=IwZXh0bgNhZW0CMTAAAR31IqO9t-fkdTy2vN9a4GW7UaxznxP36HgT5E_JjAgExylWQoeaeG41_M8_aem_ARpEs4ihgCgGBNxHqbSoppfDE6nnWQQ0sGAWpWRDajcEfhYPx0ZGY9AC9_d0UCYDKJmoG2ZByM56StgTIXQulMr3"}),
        (1, 1, 'Instituto Internacional de Estudios Políticos Avanzados', ${"http://iiepa.uagro.mx/inicio/index.php/component/users/"}, ${"https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqEAgBEC4YrwEYxwEYgAQYjgUyBggAEEUYOTIQCAEQLhivARjHARiABBiOBTIHCAIQABiABDIHCAMQABiABDINCAQQLhivARjHARiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABNIBCDc5NjBqMGo0qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=mx&sa=X&geocode=KUUfMT-7V8qFMaCW4FzRtGvb&daddr=Del+Espanto+24-29,+Hornos+Insurgentes,+39350+Acapulco+de+Ju%C3%A1rez,+Gro."}),
        (1, 1, 'Facultad de Turismo', ${"http://www.turismo.uagro.mx/"}, ' '),
        (1, 3, 'Escuela Superior de Turismo Zihuatanejo', ${"http://www.turismozihuatanejo.uagro.mx/"}, ${"https://www.google.com/maps?sca_esv=ce3d99e6953b6c80&sca_upv=1&gs_lp=Egxnd3Mtd2l6LXNlcnAiHWVzY3VlYSBzdXBlcmlvciBkZSB0dXJpc21vIHppKgIIADINEC4YgAQYxwEYDRivATINEC4YgAQYxwEYDRivATIHEAAYgAQYDTINEC4YgAQYxwEYDRivATIHEAAYgAQYDTINEC4YgAQYxwEYDRivATIHEAAYgAQYDTIHEAAYgAQYDTIHEAAYgAQYDTIHEAAYgAQYDTIcEC4YgAQYxwEYDRivARiXBRjcBBjeBBjgBNgBAkiLRFCfBljLOXABeACQAQGYAawFoAHRK6oBDDAuNC4xMC4xLjIuMrgBA8gBAPgBAZgCFKAC8juoAgrCAhYQABgDGLQCGOUCGOoCGIwDGI8B2AEBwgIWEC4YAxi0AhjlAhjqAhiMAxiPAdgBAcICChAAGIAEGEMYigXCAgsQLhiABBjRAxjHAcICERAuGIAEGLEDGNEDGIMBGMcBwgIFEAAYgATCAgsQABiABBixAxiDAcICEBAuGIAEGEMYxwEYigUYrwHCAg4QLhiABBixAxjRAxjHAcICChAuGIAEGEMYigXCAg4QABiABBixAxiDARjJA8ICCxAAGIAEGJIDGIoFwgIfEC4YgAQYQxjHARiKBRivARiXBRjcBBjeBBjgBNgBAsICBRAuGIAEwgIKEAAYgAQYyQMYCsICBxAAGIAEGArCAgoQABiABBixAxgKwgIHEC4YgAQYCsICEBAuGIAEGMcBGA0YjgUYrwHCAgoQABiABBixAxgNwgINEAAYgAQYsQMYyQMYDcICHxAuGIAEGMcBGA0YjgUYrwEYlwUY3AQY3gQY4ATYAQKYAyi6BgQIARgKugYGCAIQARgUkgcQMS4xLjEyLjIuMi4xLjgtMaAH6-sD&um=1&ie=UTF-8&fb=1&gl=mx&sa=X&geocode=KWF-K-aKdzSEMeKerWQKBQEd&daddr=Brisas+del+Mar,+40880+Zihuatanejo,+Gro."}),
        (2, 4, 'Antropología Social', ${"http://antropologiasocial.uagro.mx/08f02110849/html/"}, ${"https://www.google.com/maps/dir/16.8732255,-99.8906539/antropologia+social+uagro/@17.2406733,-99.9662023,10z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x85cbef177a686e49:0x7a79ad88337f37c2!2m2!1d-99.3828278!2d17.5872589?entry=ttu"}),
        (2, 2, 'Derecho', ${"https://www.facebook.com/FacultaddeDerechoChilpo?locale=es_LA"}, ${"https://www.google.com/maps/dir//L%C3%A1zaro+C%C3%A1rdenas+88,+Zona+Sin+Asignaci%C3%B3n+Denombre+de+Col+21,+39086+Chilpancingo+de+los+Bravo,+Gro./@17.5372046,-99.5792949,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x85cbec7f111e0759:0x14070b1bfe1a42f7!2m2!1d-99.4969005!2d17.5372232?entry=ttu"}),
        (2, 1, 'Derecho Acapulco', ${"https://www.derechoacapulco-uagro.org/"}, ${"https://www.google.com/maps/dir//derecho+uagro+acapulco/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x85ca570036611a75:0xd9f4a1d6a6b58528?sa=X&ved=1t:3061&ictx=111"}),
        (2, 2, 'Filosofía y Letras', ${"http://www.filosofiayletras.uagro.mx/"}, ${"https://www.google.com/maps/place/Universidad+Aut%C3%B3noma+de+Guerrero/@17.5369204,-99.495612,15z/data=!4m5!3m4!1s0x0:0xee61157af5e864ac!8m2!3d17.5369204!4d-99.495612"}),
        (2, 1, 'Sociología', ${"https://www.facebook.com/p/Sociolog%C3%ADa-UAGro-100063541844289/"}, ${"https://www.google.com/maps/dir/16.8732255,-99.8906539/sociologia+uagro/@16.8732884,-99.8922951,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x85ca57efe6089c29:0xbbda10954954a5!2m2!1d-99.8896143!2d16.8740262?entry=ttu"}),
        (2, 5, 'Ciencias de Desarrollo Regional No.2', ${"http://www.escdr2elpericon.uagro.mx/"}, ${"https://www.google.com/maps/place/39270+Tecoanapa,+Gro./@16.9892687,-99.2646295,15z/data=!4m6!3m5!1s0x85ca2be1bd85bfcd:0xd3cb17e67573bf44!8m2!3d16.9865731!4d-99.2604936!16s%2Fm%2F053y4x9?entry=ttu"}),
        (2, 2, 'Ciencias de la educación', ${"https://www.facebook.com/people/Escuela-Superior-Ciencias-De-la-Educaci%C3%B3n/100063507075843/"}, 'Escuela Superior de Ciencias de la Educación | UAGro, Teófilo Olea y Leyva, Sta Cruz, 39000 Chilpancingo de los Bravo, Gro.'),
        (2, 1, 'Ciencias de la educación No. 2', ${"https://www.facebook.com/uacedacapulco/?ti=as"}, ' '),
        (2, 1, 'Lenguas extranjeras', ${"http://www.lenguasextranjeras.uagro.mx/"}, ${"https://www.google.com.mx/maps/place/Facultad+de+Lenguas+Extranjeras+%7C+UAGro/@16.8575721,-99.8559288,17z/data=!3m1!4b1!4m5!3m4!1s0x85ca59d478474d1f:0xb8cb691ff884c276!8m2!3d16.8575743!4d-99.8537112"}),
        (3, 6, 'Artes', ${"http://www.artes.uagro.mx/"}, ' '),
        (3, 7, 'Diseño y Arquitectura', ${"http://www.esda.uagro.mx/"}, ${"https://www.google.com/maps/dir/16.8732255,-99.8906539/18.5605276,-99.5648196/@17.7186977,-100.3359435,9z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0?entry=ttu"}),
        (3, 2, 'Arquitectura y Urbanismo', ${"https://www.facebook.com/FacultadARQyURB"}, ${"https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqBwgBEAAYgAQyBggAEEUYOTIHCAEQABiABDIHCAIQLhiABDIHCAMQLhiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDgyMzRqMGo0qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=mx&sa=X&geocode=Kc-DkiOO7MuFMWmT_qJzleU9&daddr=Av.+Benito+Ju%C3%A1rez+38,+Centro,+39000+Chilpancingo+de+los+Bravo,+Gro."}),
        (4, 1, 'Medicina', ${"http://www.medicina.uagro.mx/"}, ${"https://www.google.com.mx/maps/place/Facultad+de+Medicina+%7C+UAGro/@16.8713915,-99.8875998,17.35z/data=!4m9!1m2!2m1!1sAv.+Solidaridad+s%2Fn;+Col.+Insurgentes,+C.P.39300!3m5!1s0x85ca57f1e917b59d:0x14c8af09e9acb270!8m2!3d16.8725858!4d-99.8861519!15sCjBBdi4gU29saWRhcmlkYWQgcy9uOyBDb2wuIEluc3VyZ2VudGVzLCBDLlAuMzkzMDCSARFwdWJsaWNfdW5pdmVyc2l0eQ"}),
        (4, 1, 'Odontología', ${"http://www.odontologia.uagro.mx/"}, ${'https://www.google.com.mx/maps/place/Facultad+de+Odontolog%C3%ADa+%7C+UAGro/@16.8739202,-99.8899457,17z/data=!4m8!1m2!2m1!1s"https:%2F%2Fwww.facebook.com%2FFacultadDeOdontologiaUAGro!3m4!1s0x8662bff8053faae3:0x301f949643dd5238!8m2!3d16.8739202!4d-99.887757'}),
        (4, 1, 'Psicología', ${"https://www.facebook.com/EscuelaSuperiorDePsicologiaOficial"}, ${"https://www.google.com.mx/maps/place/Escuela+Superior+de+Psicolog%C3%ADa+%7C+UAGro/@16.8755861,-99.8823601,17z/data=!3m1!4b1!4m5!3m4!1s0x85ca57ed30a81ea1:0xd51730bdae26e18e!8m2!3d16.8755861!4d-99.8801714"}),
        (4, 2, 'Enfermería No. 01', ${"https://www.facebook.com/profile.php?id=100063916060984"}, ${"https://www.google.com/maps/dir/16.8732255,-99.8906539//@16.873209,-99.9730557,12z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0?entry=ttu"}),
        (4, 1, 'Enfermería No. 02', ${"http://www.enfermeria2.uagro.mx/"}, ${"https://www.google.com.mx/maps/place/Facultad+de+Enfermer%C3%ADa+n%C3%BAm.+2+%7C+UAGro/@16.8732901,-99.8895718,18.15z/data=!4m9!1m2!2m1!1senfermeria+n2%2B!3m5!1s0x85ca57ee5aa737e9:0xe19c6ae9d77deb60!8m2!3d16.8737832!4d-99.8890287!15sCg5lbmZlcm1lcmlhIG4yK1oQIg5lbmZlcm1lcmlhIG4yK5IBEXB1YmxpY191bml2ZXJzaXR5mgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJMWDNOUFRHWm5FQUU"}),
        (4, 8, 'Enfermería No. 03', ${"https://www.facebook.com/p/Escuela-Superior-de-Enfermer%C3%ADa-No-3-UAGro-100057493388222/?locale=es_LA"}, ' '),
        (4, 7, 'Enfermería No. 04', ${"https://www.facebook.com/people/Escuela-Superior-de-Enfermer%C3%ADa-No-4/100063505662998/"}, ${"https://maps.app.goo.gl/9qJbzyHobC6ggvsG6"}),
        (4, 9, 'Enfermería No. 05', ${"https://www.facebook.com/profile.php?id=100063559779855"}, ${"https://maps.app.goo.gl/Qs4UiMKjApynhUhr6"}),
        (4, 1, 'Nutrición y Ciencias de los Alimentos', ${"https://www.facebook.com/ESNCAAcapulco"}, ${"https://www.google.com.mx/maps/place/Escuela+Superior+de+Nutrici%C3%B3n+y+Ciencia+de+los+Alimentos+%7C+Llano+Largo+%7C+UAGro/@16.8301019,-99.7956827,17z/data=!3m1!4b1!4m6!3m5!1s0x85ca5bf0f5921e0f:0x24658ecdc5b24296!8m2!3d16.8301019!4d-99.7956827!16s%2Fg%2F11q1w49c1p?entry=ttu"}),
        (4, 10, 'Regional superior de la montaña', ${"https://www.facebook.com/CampusMontanaUAGro/?locale=es_LA"}, ' '),
        (4, 7, 'Regional de educación superior taxco del viejo', ${"http://cres-zn.uagro.mx/"}, ${"https://www.google.com/maps/dir//Taxco+-+Iguala,+40323+Taxco+el+Viejo,+Gro./@18.4730185,-99.6644626,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x85cc4b21dc5f479f:0xe4cd6d7f033c893a!2m2!1d-99.5820609!2d18.4730363?entry=ttu"}),
        (4, 11, 'Medicina Veterinaria y Zootecnica No 1', ${"http://www.univet.uagro.mx/"}, 'Km 3 Carretera Nacional Altamirano-Iguala.'),
        (4, 12, 'Medicina Veterinaria y Zootecnica No 2', ${"https://www.facebook.com/FMVZ2/?locale=es_LA"}, ${"https://www.google.com/maps/dir/?api=1&destination=16.476101569205%2C-98.43180245686&fbclid=IwZXh0bgNhZW0CMTAAAR0hIpciJaSqZ0cvvKswQCQ4OG6xD_s9KqrQUs3nw43zu-azu5Jck9vquaI_aem_ARrdUfQ7ZsNqjGG_8fCMKtMf7iedxpHuw4xmpp9VX_XyjcdqKCH3kpnKyg6HgeOIfIQMmvhBSAz9nQnmBfnUnAbs"}),
        (4, 13, 'Medicina Veterinaria y Zootecnica No 3', ${"https://www.facebook.com/p/Escuela-Superior-de-Medicina-Veterinaria-y-Zootecnia-N03-UAGro-100063527323650/"}, ${"https://www.google.com/maps/dir/?api=1&fbclid=IwZXh0bgNhZW0CMTAAAR3IetLV4F7PCPr8PIgJ9fs878GKzG6RwckhSzonmehBBI0RmWCsuJKSEUw_aem_ARqknQUVSJHn3oYvptbANUcxO6xZxeRNpG7Upas8AX-X1H-uWqcS5HbT6F77TLqb0eZ1Ol0BMpJ63_Ss_ZHaINc2"}),
        (4, 1, 'Cultura física y deportes', ${"https://www.facebook.com/people/Cultura-Fisica-Deporte-Uagro/pfbid0Cv7bbHXRJikuu6EEHxqvkUPjN8Y6ioPcsALsnU3JKKLHGDstRSNeFjkj8YW74fM1l/"}, ' '),
        (4, 14, 'Regional de Educación Superior Campus Cruz Grande', ${"https://campuscostachica.uagro.mx/"}, ${"https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigAdIBCTE0Mzc0ajFqNKgCALACAQ&um=1&ie=UTF-8&fb=1&gl=mx&sa=X&geocode=KdUOBBAWi8mFMfSmSEtA308P&daddr=6+de+Marzo,+41800+Cruz+Grande,+Gro."}),
        (5, 2, 'Ingeniería', ${"http://ingenieria.uagro.mx/"}, ${"https://www.google.com/maps/dir//ingenieria+uagro/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x85cbece296aaaaab:0xd17d9cb4741965ae?sa=X&ved=1t:3061&ictx=111"}),
        (5, 1, 'Ciencias y Tecnologías de la Información', ${"http://www.uacyti.uagro.mx/"}, ${"https://www.google.com/maps/dir//De+las+Colinas+37,+Las+Playas,+39390+Acapulco+de+Ju%C3%A1rez,+Gro./@16.8348175,-99.9807324,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x85caf805e89d0edf:0x47e0711617be029!2m2!1d-99.8983306!2d16.8348339?entry=ttu"}),
        (5, 6, 'Regional de Educación Superior de la Zona Centro', ${"http://www.campuszumpango.uagro.mx/"}, ${"https://www.google.com/maps?sca_esv=de4aec60c2f19a55&sca_upv=1&output=search&q=regional+de+educacion+superior+de+la+zona+centro&source=lnms&entry=mc&ved=1t:200715&ictx=111"}),
        (5, 14, 'Regional de Educación Superior Campus Cruz Grande', ${"https://campuscostachica.uagro.mx/"}, ${"https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigAdIBCTE0Mzc0ajFqNKgCALACAQ&um=1&ie=UTF-8&fb=1&gl=mx&sa=X&geocode=KdUOBBAWi8mFMfSmSEtA308P&daddr=6+de+Marzo,+41800+Cruz+Grande,+Gro."}),
        (5, 10, 'Regional de Educación Superior de la Montaña', ${"https://www.facebook.com/CampusMontanaUAGro/?locale=es_LA"}, ${"https://www.google.com/maps?sca_esv=ce3d99e6953b6c80&sca_upv=1&output=search&q=regional+de+educacion+superior+de+la+monta%C3%B1a&source=lnms&entry=mc&ved=1t:200715&ictx=111"}),
        (6, 2, 'Ciencias Químico Biológicas', ${"http://fcqb.uagro.mx/"}, ${"https://www.google.com/maps?sca_esv=ce3d99e6953b6c80&sca_upv=1&si=ACC90nyWdbALAo_LW5cl9V4bdDgYV7UyZL-hphDyyXUN6mk6FTyfCPegcrUuU2psZtn_N4nh4wbKikgLcTkrmkfeTw3WF8intFtYGYje4KtnCsR2cNZfP6jRykMuX3eTwsIu85WXzZ9TrcK6SYKfWhl1vocFUDPFyZp-MaSzJ1hJ6fD3k4l--XXw-4ooPCd9qUu_f4JU3dQQC3sdi-OSjWot5lWdP8gkpBE1G5jWXkjl-OT1EuIx3ICv7cTTcHvcWtTdBTu8d5fAmywaleSEyZ926VSYgcN_rawCvLWayWEO-mvax-LkQoUd4gm3G6jt2xkOxun6RLmR5t5n9CG2v52q3mTf21uRjiS3YP_JcuebczJaA8Ynm2VwkWRCsiZjWRXnwM_pix2-mEigeNZ3_FxVFqtfpLqwB5qHFLIuMPPoSJRLLfOwdy8%3D&biw=1366&bih=633&dpr=1&um=1&ie=UTF-8&fb=1&gl=mx&sa=X&geocode=KTOZyGl_7MuFMdfGdgWMMRXc&daddr=L%C3%A1zaro+C%C3%A1rdenas,+El+Centenario,+39086+Chilpancingo+de+los+Bravo,+Gro."}),
        (6, 15, 'Ciencias Naturales', ${"http://cienciasnaturales.uagro.mx/"}, ${"https://maps.app.goo.gl/ccKUDJKPWFFD8mxy8"}),
        (6, 1, 'Ciencias Ambientales', ${"https://www.facebook.com/people/Ciencias-Ambientales-Acapulco/100054616682948/"}, ${"https://www.google.com.mx/maps/place/Escuela+Superior+de+Ciencias+Ambientales+%7C+Llano+Largo+%7C+UAGro/@16.8305176,-99.7973104,17z/data=!3m1!4b1!4m5!3m4!1s0x85ca5b3e87441315:0x48e8a28daee2de37!8m2!3d16.8305176!4d-99.7951217"}),
        (6, 1, 'Ecología Marina', ${"https://www.facebook.com/people/Facultad-de-Ecolog%C3%ADa-Marina-Proyecto-2025/100058155376596/"}, ${"https://www.google.com.mx/maps/place/Facultad+de+Ecolog%C3%ADa+Marina+%7C+UAGro/@16.8352589,-99.904897,17z/data=!4m5!3m4!1s0x85caf7dff5bc228d:0xd24735f327692d2f!8m2!3d16.8364604!4d-99.9019037"}),
        (6, 13, 'Desarrollo Sustentable', ${"https://www.facebook.com/DesarrolloSustentableUAGro/?locale=es_LA"}, ${"https://www.google.com/maps/dir/?api=1&destination=17.213608003751%2C-100.63133&fbclid=IwZXh0bgNhZW0CMTAAAR3z1LBv2pkwiXbEBIovPHBT83jzTu5hzOCRyruRx8AIEHVP8n2JGbvmtyY_aem_AT9LVCC0k1AYFPuZFBDy4k4zr_Nv6SrFShoT7g95zkJmkW0_sKKUtZsJba7ILuINGSAk6r0Oqr2Tq4wOSAuR2Ron"}),
        (6, 16, 'Ciencias Agropecuarias y Ambientales', ${"https://agropecuarias.uagro.mx/"}, ${"https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyBwgBEAAYgAQyBwgCEAAYgAQyBggDEEUYOTIHCAQQABiABDINCAUQLhivARjHARiABDIHCAYQABiABDINCAcQLhivARjHARiABDIHCAgQABiABDIHCAkQABiABNIBCDkyMDJqMGo0qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=mx&sa=X&geocode=KbMVlpf0R8yFMQ66MQc02tIs&daddr=Iguala+-+Teloloapan+S/N,+Ignacio+Manuel+Altamirano,+40040+Iguala+de+la+Independencia,+Gro."}),
        (6, 7, 'Ciencias de la Tierra', ${"http://uact.uagro.mx/"}, ${"https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigATIHCAUQIRigAdIBCDY5NDBqMWo0qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=mx&sa=X&geocode=KfHIbVkySsyFMduu4dzl0YcM&daddr=Ex-hacienda+de+San+Juan+Bautista,+Taxco+el+Viejo,+40323+Taxco+el+Viejo,+Gro."}),
        (6, 2, 'Matemáticas', ${"http://www.matematicaschilpo.uagro.mx/"}, ${"https://www.google.com/maps/dir//El+Centenario,+39086+Chilpancingo+de+los+Bravo,+Gro./@17.5367394,-99.5773488,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x85cbec78ca7df695:0x5ab326bef8e9246!2m2!1d-99.494947!2d17.5367564?entry=ttu"}),
        (6, 1, 'Matemáticas', ${"http://matematicasaca.uagro.mx/"}, ${"https://www.google.com.mx/maps/place/Facultad+de+Matem%C3%A1ticas+%7C+Acapulco+%7C+UAGro/@16.8745158,-99.8715396,17z/data=!4m14!1m7!3m6!1s0x85ca579021eebd33:0x6e08829d4fb40c08!2sCarlos+Adame+54,+La+Garita,+39650+Acapulco+de+Ju%C3%A1rez,+Gro.!3b1!8m2!3d16.8744483!4d-99.8700142!3m5!1s0x85ca579026c06b85:0xbb9e7d9456e3bfc9!8m2!3d16.8753308!4d-99.870959!16s%2Fg%2F1tcvplrs?entry=ttu"}),
        (6, 16, 'Matemáticas', ${"https://www.facebook.com/facmat.iguala/?locale=es_LA"}, ${"https://maps.app.goo.gl/aEf6NCmyKakU4PKm8"}),
        (6, 11, 'Matemáticas No. 12', ${"https://www.facebook.com/UAMatematicas/?locale=es_LA"}, ${"https://www.google.com/maps/dir//Escuela+Superior+de+Matem%C3%A1ticas+No.+2+-+UAGro,+Jaime+Torres+Bodet+30,+Col,+Un+Nuevo+Horizonte,+40664+Cdad.+Altamirano,+Gro./@18.3493555,-100.7189089,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x84332dbae0f26ee3:0xea853c740264c2d2!2m2!1d-100.6777088!2d18.3492785?entry=ttu"});
    `;

    console.log(`Datos insertados en la tabla Facultad`);

    return {
      createTable,
      insertedFacultad,
    };
  } catch (error) {
    console.error("Error seeding Facultad:", error);
    throw error;
  }
}

async function seedFacultadPrograma(client) {
  try {
    const createTable = await client.sql`
        CREATE TABLE Facultad_Programa (
            facultad_id INTEGER,
            programa_id INTEGER,
            PRIMARY KEY (facultad_id, programa_id),
            FOREIGN KEY (facultad_id) REFERENCES Facultad(id),
            FOREIGN KEY (programa_id) REFERENCES Programa_Educativo(id)
        );
    `;

    console.log(`Created "Facultad Programa" table`);

    const insertedFacultadPrograma = await client.sql`
    INSERT INTO Facultad_Programa (facultad_id, programa_id) VALUES
    (1, 1),
    (1, 2),
    (2, 3),
    (2, 4),
    (3, 5),
    (4, 5),
    (5, 6),
    (6, 7),
    (7, 8),
    (8, 9),
    (9, 10),
    (10, 11),
    (11, 11),
    (12, 12),
    (12, 13),
    (12, 14),
    (12, 15),
    (13, 16),
    (14, 17),
    (15, 18),
    (16, 18),
    (17, 19),
    (18, 20),
    (19, 21),
    (19, 22),
    (19, 23),
    (20, 24),
    (21, 25),
    (22, 26),
    (23, 27),
    (24, 28),
    (25, 28),
    (26, 28),
    (27, 28),
    (28, 28),
    (29, 29),
    (30, 29),
    (31, 29),
    (31, 30),
    (32, 31),
    (33, 31),
    (34, 31),
    (35, 32),
    (36, 33),
    (37, 34),
    (37, 35),
    (37, 36),
    (37, 37),
    (37, 38),
    (38, 39),
    (39, 40),
    (39, 41),
    (39, 42),
    (40, 43),
    (41, 44),
    (42, 45),
    (42, 46),
    (42, 47),
    (43, 48),
    (43, 49),
    (44, 50),
    (45, 51),
    (46, 52),
    (46, 53),
    (47, 54),
    (47, 55),
    (48, 56),
    (48, 57),
    (49, 58),
    (49, 59),
    (50, 60),
    (51, 60),
    (51, 61),
    (52, 60);
    `;

    console.log(`Datos insertados en la tabla Facultad Programa`);

    return {
      createTable,
      insertedFacultadPrograma,
    };
  } catch (error) {
    console.error("Error seeding Facultad Programa:", error);
    throw error;
  }
}

async function seedPreparatorias(client) {
  try {
    const createTable = await client.sql`
        CREATE TABLE Preparatorias (
            id SERIAL PRIMARY KEY,
            preparatoria VARCHAR(25) NOT NULL
        );
    `;

    console.log(`Created "Preparatorias" table`);

    const insertedPreparatorias = await client.sql`
        INSERT INTO Preparatorias(preparatoria) VALUES
        ('Preparatoria 1'),
        ('Preparatoria 2'),
        ('Preparatoria 3'),
        ('Preparatoria 4'),
        ('Preparatoria 5'),
        ('Preparatoria 6'),
        ('Preparatoria 7'),
        ('Preparatoria 8'),
        ('Preparatoria 9'),
        ('Preparatoria 10'),
        ('Preparatoria 11'),
        ('Preparatoria 12'),
        ('Preparatoria 13'),
        ('Preparatoria 14'),
        ('Preparatoria 15'),
        ('Preparatoria 16'),
        ('Preparatoria 17'),
        ('Preparatoria 18'),
        ('Preparatoria 19'),
        ('Preparatoria 20'),
        ('Preparatoria 21'),
        ('Preparatoria 22'),
        ('Preparatoria 23'),
        ('Preparatoria 24'),
        ('Preparatoria 25'),
        ('Preparatoria 26'),
        ('Preparatoria 27'),
        ('Preparatoria 28'),
        ('Preparatoria 29'),
        ('Preparatoria 30'),
        ('Preparatoria 31'),
        ('Preparatoria 32'),
        ('Preparatoria 33'),
        ('Preparatoria 34'),
        ('Preparatoria 35'),
        ('Preparatoria 36'),
        ('Preparatoria 37'),
        ('Preparatoria 38'),
        ('Preparatoria 39'),
        ('Preparatoria 40'),
        ('Preparatoria 41'),
        ('Preparatoria 42'),
        ('Preparatoria 43'),
        ('Preparatoria 44'),
        ('Preparatoria 45'),
        ('Preparatoria 46'),
        ('Preparatoria 47'),
        ('Preparatoria 48');
    `;

    console.log(`Datos insertados en la tabla Preparatorias`);

    return {
      createTable,
      insertedPreparatorias,
    };
  } catch (error) {
    console.error("Error seeding Preparatorias:", error);
    throw error;
  }
}

async function seedCuestionario(client) {
  try {
    const createTable = await client.sql`
        CREATE TABLE Cuestionario (
            id SERIAL PRIMARY KEY,
            respuestas JSON,
            resultado VARCHAR(90)
        );    
    `;

    console.log(`Created "Cuestionario" table`);

    return {
      createTable,
    };
  } catch (error) {
    console.error("Error seeding Cuestionario:", error);
    throw error;
  }
}

async function seedUsuario(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
        CREATE TABLE Usuario (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            full_name VARCHAR(60) NOT NULL,
            email VARCHAR(60) NOT NULL,
            contraseña VARCHAR(60) NOT NULL,
            matricula VARCHAR(60) NOT NULL,
            createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            preparatoria_id INTEGER NOT NULL,
            cuestionario_id INTEGER,
            FOREIGN KEY (preparatoria_id) REFERENCES Preparatorias(id),
            FOREIGN KEY (cuestionario_id) REFERENCES Cuestionario(id)
        );    
    `;

    console.log(`Created "Cuestionario" table`);

    return {
      createTable,
    };
  } catch (error) {
    console.error("Error seeding Cuestionario:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedAreas(client);
  await seedUbicacion(client);
  await seedProgramaEducativo(client);
  await seedFacultad(client);
  await seedFacultadPrograma(client);
  await seedPreparatorias(client);
  await seedCuestionario(client);
  await seedUsuario(client);
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
