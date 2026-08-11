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
    title: 'Compra y venta',
    desc: 'Te acompañamos en todo el proceso para comprar o vender tu propiedad, con un seguimiento cercano de principio a fin.',
  },
  {
    title: 'Broker inmobiliario',
    desc: 'Conectamos oportunidades con asesoría profesional y estratégica, orientada a defender tus intereses en cada operación.',
  },
  {
    title: 'Tasaciones',
    desc: 'Valoramos tu propiedad con criterios técnicos y de mercado para establecer una estrategia sólida y realista.',
  },
  {
    title: 'Gestión de documentación',
    desc: 'Nos encargamos de todo el proceso documental y legal para que avances con tranquilidad, claridad y seguridad.',
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
