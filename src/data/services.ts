export type ServiceItem = {
  title: string
  desc: string
  partner?: string
  partnerLogo?: string
}

/** Tarjetas principales — «Más que una inmobiliaria». */
export const PRIMARY_SERVICES: ServiceItem[] = [
  {
    title: 'Financiación 100%',
    desc: 'Te ayudamos a estudiar y gestionar opciones de financiación adaptadas a tu operación, con un acompañamiento claro en cada fase.',
  },
  {
    title: 'Plusvalía',
    desc: 'Asesoramiento y gestión en materia de plusvalía municipal para que conozcas tus obligaciones y plazos con total transparencia.',
  },
  {
    title: 'Cambio de titularidad de luz sin coste',
    desc: 'Tramitamos el cambio de titularidad del suministro eléctrico sin coste adicional, para que puedas entrar en tu vivienda con menos preocupaciones.',
  },
  {
    title: 'Asesoramiento jurídico',
    desc: 'Orientación profesional en documentación, trámites notariales y registrales, con la máxima diligencia en cada operación.',
  },
]

/** Servicios destacados de valor para compradores y vendedores. */
export const HOME_EXTRA_SERVICES: ServiceItem[] = [
  {
    title: 'Asesoramiento',
    desc: 'Al comprador: te acompañamos en todo el proceso, desde la búsqueda del inmueble hasta la finalización de la compra.',
  },
  {
    title: 'Propuesta de valor',
    desc: 'La experiencia de operaciones recientes y el conocimiento del mercado local dan como resultado una valoración realista de tu propiedad.',
  },
  {
    title: 'Tasación e informe',
    desc: 'Al vendedor: tu inmueble se valora no solo con parámetros tradicionales, sino también considerando su potencial.',
  },
  {
    title: 'Comunicación y marketing',
    desc: 'Marketing inmobiliario personalizado: diseño, difusión en redes y portales, y una narrativa clara para destacar tu propiedad.',
  },
]

/** Menú de navegación — resumen de servicios. */
export const SERVICE_ITEMS: ServiceItem[] = [
  {
    title: 'Compra y venta',
    desc: 'Acompañamiento integral en operaciones de compraventa en Lleida y alrededores.',
  },
  ...HOME_EXTRA_SERVICES,
  {
    title: 'Alquiler',
    desc: 'Gestión de alquileres residenciales con acompañamiento en cada fase del proceso.',
  },
]
