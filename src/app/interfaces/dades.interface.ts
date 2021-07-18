export interface DataObject {
  estats: Estat[];
  home: Home;
  productes: Productes[];
  producte: Producte;
}

interface Home {
  desc: string;
  titol: string;
}

interface Estat {
  msg: string;
  gif?: string;
}

interface Productes {
  categoria: string;
  cod: string;
  titulo: string;
  url: string;
}

interface Producte {
  categoria: string;
  desc1: string;
  desc2: string;
  producto: string;
  resumen: string;
  subtitulo1: string;
  subtitulo2: string;
}