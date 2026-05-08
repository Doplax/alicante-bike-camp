export interface Faq {
  q: string;
  a: string;
}

// Notas de mantenimiento:
// - C-05: «¿Y si nunca he ido a un bikepark?» aclara explícitamente que se
//   asume experiencia previa en monte (no contradice «No es para ti si nunca
//   has pisado el monte» de la sección Niveles).
// - O-05: las 4 preguntas logísticas (pensión, lluvia, cómo llegar, seguro)
//   tienen respuestas seguras que invitan a contactar para detalle exacto.
//   TODO Kevin: confirmar qué incluye la pensión, política de cancelación
//   por climatología, dirección concreta del hotel y si quieres recomendar
//   un seguro específico.
export const faqs: Faq[] = [
  {
    q: '¿Sirve para cualquier nivel?',
    a:
      'No es para todos los niveles, pero sí para la mayoría. Trabajaremos en grupos según se forme la convocatoria (habitualmente 2 grupos: Kevin y Carlos como monitores, turnándonos). Si tienes dudas con tu nivel, escríbeme y lo vemos juntos.',
  },
  {
    q: '¿Y si nunca he ido a un bikepark?',
    a:
      'Perfecto, esta es la mejor ocasión: yo lo conozco a fondo y te guiaré en todo momento. Eso sí, asumimos que ya has rodado en monte aunque no en bikepark — el camp no es para alguien que jamás haya tocado MTB. Descubrirás uno de los mejores bikeparks de Europa.',
  },
  {
    q: '¿Puedo ir solo/a?',
    a:
      '¡Claro! La mayoría de riders vienen solos. El ambiente de grupo es top y acabarás haciendo amigos para futuras rutas. Si vienes acompañado tenéis descuento de pareja (ver bloque de precios arriba).',
  },
  {
    q: '¿Qué incluye la opción Todo Incluido?',
    a:
      'Alojamiento en hotel cercano, pensión completa desde viernes por la tarde hasta domingo por la tarde, entrada al bikepark sábado y domingo, formación técnica los 3 días y pack regalo. ¿Dudas sobre el menú o detalles? Escríbeme y te lo cuento exacto.',
  },
  {
    q: '¿Qué pasa si el tiempo es malo?',
    a:
      'Adaptamos al máximo: entrenamos con técnica de barro, lluvia ligera o frío. Si una jornada se cancela por seguridad real, ajustamos el plan para recuperar contenido. Si tienes dudas con la previsión los días previos, escríbeme y lo hablamos.',
  },
  {
    q: '¿Cómo llego al lugar del camp?',
    a:
      'Si vienes en coche te paso ubicación exacta del hotel y de los bikeparks cuando reserves. Si vienes en avión a Alicante o Valencia, te recomiendo cómo llegar y opciones de traslado. Escríbeme y lo organizamos.',
  },
  {
    q: '¿Necesito seguro propio?',
    a:
      'Sí: cada rider debe tener su propio seguro de MTB (federación FCEC, seguro de bici personal o equivalente). El camp no incluye seguro personal. Si tienes dudas con esto, lo hablamos antes de la reserva.',
  },
];
