export interface Edition {
  /** Slug usado para los anchors del CTA por edición. */
  id: string;
  /** Mes en formato presentación. */
  month: string;
  /** Días separados por «·». */
  days: string;
  /** Año. */
  year: string;
  /** Detalle adicional (ubicaciones, peculiaridad de la edición). */
  note: string;
  /** Estado para colorear la card y filtrar inventario. */
  status: 'urgent' | 'open' | 'closed';
  statusLabel: string;
  /** ISO start/end para el JSON-LD Event. */
  startDate: string;
  endDate: string;
  /** Etiqueta usada en el JSON-LD. */
  ldTitle: string;
}

export const editions: Edition[] = [
  {
    id: 'mayo',
    month: 'Mayo',
    days: '29 · 30 · 31',
    year: '2026',
    note: '3 días · Sabinar + La Fenasosa + Ruta',
    status: 'urgent',
    statusLabel: 'Pocas plazas',
    startDate: '2026-05-29',
    endDate: '2026-05-31',
    ldTitle: 'Mayo 2026',
  },
  {
    id: 'julio',
    month: 'Julio',
    days: '10 · 11 · 12',
    year: '2026',
    note: 'Edición especial · 2 días en La Fenasosa',
    status: 'open',
    statusLabel: 'Plazas disponibles',
    startDate: '2026-07-10',
    endDate: '2026-07-12',
    ldTitle: 'Julio 2026',
  },
  {
    id: 'septiembre',
    month: 'Septiembre',
    days: '18 · 19 · 20',
    year: '2026',
    note: '3 días · Sabinar + La Fenasosa + Ruta',
    status: 'open',
    statusLabel: 'Plazas disponibles',
    startDate: '2026-09-18',
    endDate: '2026-09-20',
    ldTitle: 'Septiembre 2026',
  },
];
