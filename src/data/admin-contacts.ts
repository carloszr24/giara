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

/** Demo CRM vacío — listo para datos reales de Giara. */
export const ADMIN_CONTACTS: AdminContact[] = []
