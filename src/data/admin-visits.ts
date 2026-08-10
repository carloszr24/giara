export type VisitChannel =
  | 'interesada'
  | 'llamada'
  | 'mail'
  | 'whatsapp'
  | 'visita_presencial'
  | 'referido'
  | 'seguimiento'

export type AdminVisit = {
  id: string
  propertyId: string
  contactName: string
  phone: string
  channel: VisitChannel
  summary: string
  notes: string
  occurredAt: string
  nextAction: string
}

export const VISIT_CHANNEL_LABELS: Record<VisitChannel, string> = {
  interesada: 'Interesada',
  llamada: 'Llamada',
  mail: 'Contacto por mail',
  whatsapp: 'WhatsApp',
  visita_presencial: 'Visita presencial',
  referido: 'Recomendación / referidos',
  seguimiento: 'Seguimiento',
}

/** Demo CRM vacío — listo para datos reales de Giara. */
export const ADMIN_VISITS: AdminVisit[] = []
