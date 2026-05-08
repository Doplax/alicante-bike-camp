export interface Day {
  n: number;
  name: string;
  weekday: string;
  location: string;
  schedule: string;
  /** Foto opcional para encabezar la card del día. */
  photo: string | null;
  photoAlt?: string;
  pitch: string;
  skills: string[];
  blocks: string[];
}

export const days: Day[] = [
  {
    n: 1,
    name: 'El Reset',
    weekday: 'Viernes',
    location: 'Sabinar Bike Park',
    schedule: '17:00 → 20:00 aprox.',
    photo: null,
    pitch:
      'Borramos los vicios. Si frenas con dos dedos, mal. Si vas con el peso repartido entre brazos y piernas, mal. Aquí te enseño a ser una roca sobre los pedales.',
    skills: [
      'Posición perfecta sobre la bici',
      'Optimización de frenada',
      'Caballito · Manual · Pumping',
      'Cabra hop · Bunny hop',
      'Curvas planas',
      'Iniciación a drops',
    ],
    blocks: ['Bloque 1 · Instrucción y corrección técnica'],
  },
  {
    n: 2,
    name: 'El Templo',
    weekday: 'Sábado',
    location: 'La Fenasosa Bike Park',
    schedule: '10:00–14:00 + 16:00–19:00 (tarde opcional)',
    photo: null,
    pitch:
      'El bike park de referencia en España. Aquí ocurre el «clic». Si no fluyes en 20 cm, no saltamos medio metro: progresión real, sin presiones absurdas.',
    skills: [
      'Curvas peraltadas',
      'Análisis de trazadas',
      'Paso de obstáculos',
      'Drops medianos',
      'Iniciación a saltos',
      'Bajadas con rocas',
    ],
    blocks: [
      'Mañana · Bloque 1 · Instrucción y corrección técnica',
      'Tarde · Bloque 2 · Aplicación narrada y flow guiado',
    ],
  },
  {
    n: 3,
    name: 'La Graduación',
    weekday: 'Domingo',
    location: 'Ruta salvaje',
    schedule: '09:00 → 13:30 aprox.',
    photo: null,
    pitch:
      'Aplicamos todo en terreno virgen. Senderos naturales donde demuestras que ya no eres el que llegó el viernes con miedo.',
    skills: [
      'Bajadas adaptadas al nivel de cada grupo',
      'Curvas cerradas y zetas',
      'Derrapes',
      'Pumping en terreno natural',
      'Y mucho más, según fluya el grupo',
    ],
    blocks: ['Bloque 2 · Aplicación narrada y flow guiado'],
  },
];
