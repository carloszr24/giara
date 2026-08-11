export type ContactStage = 'potencial' | 'proximo' | 'futuro' | 'activo'

export type ContactProfile =
  | 'piso_playa'
  | 'familia'
  | 'inversion'
  | 'alquiler_vacacional'
  | 'primera_vivienda'
  | 'segunda_residencia'

export type AdminContact = {
  id: string
  fullName: string
  age: number
  phone: string
  email: string
  stage: ContactStage
  profile: ContactProfile
  zone: string
  budgetLabel: string
  calledFor: string
  propertyId: string | null
  notes: string
  lastContactAt: string
}

export const CONTACT_STAGE_LABELS: Record<ContactStage, string> = {
  potencial: 'Potencial',
  proximo: 'Próximo',
  futuro: 'Futuro',
  activo: 'Activo',
}

export const CONTACT_PROFILE_LABELS: Record<ContactProfile, string> = {
  piso_playa: 'Piso cerca de playa',
  familia: 'Vivienda familiar',
  inversion: 'Inversión',
  alquiler_vacacional: 'Alquiler vacacional',
  primera_vivienda: 'Primera vivienda',
  segunda_residencia: 'Segunda residencia',
}

/** Demo CRM con ejemplos de Giara ligados a propiedades actuales. */
export const ADMIN_CONTACTS: AdminContact[] = [
  {
    id: 'contacto-anna-puig',
    fullName: 'Anna Puig',
    age: 38,
    phone: '646 18 27 54',
    email: 'anna.puig@example.com',
    stage: 'activo',
    profile: 'familia',
    zone: 'Lleida',
    budgetLabel: '150.000 € - 175.000 €',
    calledFor: 'Busca piso amplio en Lleida para cambio de vivienda familiar.',
    propertyId: 'piso-ramon-soldevila-instituts',
    notes:
      'Le encaja por metros y distribución. Ha pedido visita por la mañana y quiere valorar gastos de reforma ligera en cocina.',
    lastContactAt: '2026-08-11T09:15:00.000Z',
  },
  {
    id: 'contacto-marc-soler',
    fullName: 'Marc Soler',
    age: 31,
    phone: '673 42 90 15',
    email: 'marc.soler@example.com',
    stage: 'proximo',
    profile: 'inversion',
    zone: 'Balàfia',
    budgetLabel: '110.000 € - 140.000 €',
    calledFor: 'Analiza opciones para alquilar por habitaciones en Lleida.',
    propertyId: 'piso-balafia-lleida',
    notes:
      'Quiere estudiar rentabilidad neta y gastos de puesta al día. Pendiente de enviar estimación de renta por habitaciones.',
    lastContactAt: '2026-08-10T16:40:00.000Z',
  },
  {
    id: 'contacto-laia-vila',
    fullName: 'Laia Vila',
    age: 44,
    phone: '620 55 73 84',
    email: 'laia.vila@example.com',
    stage: 'potencial',
    profile: 'familia',
    zone: 'Cappont',
    budgetLabel: '180.000 € - 220.000 €',
    calledFor: 'Necesita vivienda con 4 habitaciones en Cappont y terraza.',
    propertyId: 'piso-cappont-lleida',
    notes:
      'Muy interesada por la adaptación de accesibilidad y la terraza. Espera coordinar visita con su pareja esta semana.',
    lastContactAt: '2026-08-09T11:10:00.000Z',
  },
  {
    id: 'contacto-jordi-ribes',
    fullName: 'Jordi Ribes',
    age: 29,
    phone: '611 80 24 91',
    email: 'jordi.ribes@example.com',
    stage: 'futuro',
    profile: 'primera_vivienda',
    zone: 'Lleida',
    budgetLabel: '140.000 € - 165.000 €',
    calledFor: 'Primera vivienda en Lleida; compara zonas y financiación.',
    propertyId: null,
    notes:
      'Todavía pendiente de preaprobación hipotecaria. Interesado en recibir nuevas captaciones en ciudad.',
    lastContactAt: '2026-08-07T18:25:00.000Z',
  },
]
