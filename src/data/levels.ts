export interface Level {
  n: number;
  name: string;
  pitch: string;
  body: string;
  photo: string;
  photoAlt: string;
}

export const levels: Level[] = [
  {
    n: 1,
    name: 'El Rider con Base',
    pitch: 'No eres nuevo, pero te falta el «clic».',
    body:
      'Sales por senderos, pero cuando la cosa se pone «sucia» (raíces, piedras o un escalón de más de 10 cm), tus dedos se clavan en el freno y te pones rígido como un palo. Tu bici es mejor que tu técnica y lo sabes. Aquí te enseñamos a dejar de bajarte de la bici en cada dificultad.',
    photo: '/images/clases-mtb.jpg',
    photoAlt: 'Clase de MTB · grupo aprendiendo posición sobre la bici',
  },
  {
    n: 2,
    name: 'El Intermedio (Buscando el Flow)',
    pitch: 'Bajas por casi todos sitios, pero «sobreviviendo».',
    body:
      'Tienes fondo físico, pero acabas las rutas con los brazos destrozados de la tensión. No pilotas: eres un pasajero que espera que la suspensión lo arregle todo. Te falta esa fluidez para que la bici no se detenga en cada curva cerrada o zona técnica.',
    photo: '/images/la-fenasosa.jpeg',
    photoAlt: 'Rider en La Fenasosa Bike Park · zona de flow',
  },
  {
    n: 3,
    name: 'El Intermedio-Alto (Domando el Terreno)',
    pitch: 'Ya vas rápido, pero quieres precisión de cirujano.',
    body:
      'Saltas un poco, haces algún drop, pero sientes que te has estancado. Quieres aprender a leer el terreno como un pro, a ganar inercia donde otros frenan y a despegarte del suelo con la seguridad de que vas a aterrizar donde tú quieres.',
    photo: '/images/nivel-3-forest.jpg',
    photoAlt: 'Rider derrapando en sendero natural · terreno avanzado',
  },
];
