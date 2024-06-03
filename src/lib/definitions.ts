export type Facultad = {
  id: string;
  facultad: string;
  sitioWeb: string;
  direccion: string;
  area: string;
  ubicacion: string;
  programa: string;
};

export type Preparatoria = {
  id: number;
  preparatoria: string;
};

export type Cuestionario = {
  id: string;
};

export type Usuario = {
  full_name: string;
  email: string;
  matricula: string;
  preparatorias: { 
    preparatoria: string
  }[];
};