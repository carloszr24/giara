export type ServiceItem = {
  title: string
  desc: string
  partner?: string
  partnerLogo?: string
}

/** Proceso de trabajo — estudio, presentación y negociación. */
export const WORK_PROCESS: ServiceItem[] = [
  {
    title: 'Estudio y valoración',
    desc: 'Iniciamos cada proyecto con un análisis exhaustivo del mercado y una valoración profesional gratuita, combinando el valor del suelo con las ventas reales del entorno para fijar una estrategia de precio sólida.',
  },
  {
    title: 'Presentación profesional',
    desc: 'Reportaje fotográfico profesional y una presentación cuidada hasta el último detalle: una buena imagen puede despertar el interés del comprador incluso antes de visitar la vivienda.',
  },
  {
    title: 'Negociación y cierre',
    desc: 'Negociamos cada oferta con un único objetivo: obtener el mejor resultado posible para nuestros clientes, defendiendo siempre sus intereses con transparencia, compromiso y profesionalidad.',
  },
]

/** Qué puedes esperar — alineado con el acompañamiento comercial. */
export const HOME_EXTRA_SERVICES: ServiceItem[] = [
  {
    title: 'Asesoramiento personalizado',
    desc: 'Desde el primer día te acompañamos con una estrategia adaptada a tu vivienda y a tus objetivos de venta o alquiler.',
  },
  {
    title: 'Máxima difusión',
    desc: 'Publicamos y promovemos tu inmueble en los principales portales inmobiliarios y redes sociales para llegar al comprador o inquilino ideal.',
  },
  {
    title: 'Gestión transparente',
    desc: 'Acompañamiento claro en cada fase del proceso: sabes en todo momento cómo avanza tu operación, sin sorpresas ni letra pequeña.',
  },
  {
    title: 'Negociación profesional',
    desc: 'Defendemos tu posición en cada oferta para conseguir el mejor precio y las condiciones más favorables para tu propiedad.',
  },
]

/** Servicios complementarios — «Más que una inmobiliaria». */
export const PRIMARY_SERVICES: ServiceItem[] = [
  {
    title: 'Financiación',
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
