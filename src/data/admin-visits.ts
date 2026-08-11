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

/** Demo CRM con visitas, llamadas y seguimientos ligados a propiedades actuales. */
export const ADMIN_VISITS: AdminVisit[] = [
  {
    id: 'visita-anna-ramon-soldevila-1',
    propertyId: 'piso-ramon-soldevila-instituts',
    contactName: 'Anna Puig',
    phone: '646 18 27 54',
    channel: 'llamada',
    summary: 'Primera llamada tras ver el anuncio en Idealista.',
    notes:
      'Confirma interés por las 4 habitaciones y pregunta por comunidad, orientación y posibilidad de actualizar cocina.',
    occurredAt: '2026-08-10T09:45:00.000Z',
    nextAction: 'Enviar dossier y proponer visita presencial para el miércoles.',
  },
  {
    id: 'visita-anna-ramon-soldevila-2',
    propertyId: 'piso-ramon-soldevila-instituts',
    contactName: 'Anna Puig',
    phone: '646 18 27 54',
    channel: 'visita_presencial',
    summary: 'Visita presencial realizada con buena impresión general.',
    notes:
      'Valora positivamente la amplitud del salón y la distribución. Se revisará presupuesto orientativo para mejoras estéticas.',
    occurredAt: '2026-08-11T10:30:00.000Z',
    nextAction: 'Llamar en 48 h para feedback y posibles siguientes pasos.',
  },
  {
    id: 'visita-marc-balafia-1',
    propertyId: 'piso-balafia-lleida',
    contactName: 'Marc Soler',
    phone: '673 42 90 15',
    channel: 'whatsapp',
    summary: 'Consulta de inversor sobre rentabilidad en Balàfia.',
    notes:
      'Solicita estimación de renta mensual y coste de adecuación del inmueble para alquiler por habitaciones.',
    occurredAt: '2026-08-10T17:05:00.000Z',
    nextAction: 'Preparar simulación de rentabilidad y enviar por correo.',
  },
  {
    id: 'visita-laia-cappont-1',
    propertyId: 'piso-cappont-lleida',
    contactName: 'Laia Vila',
    phone: '620 55 73 84',
    channel: 'mail',
    summary: 'Solicitud de información por email.',
    notes:
      'Pregunta por medidas aproximadas de terraza, accesibilidad y estado actual de carpinterías y climatización.',
    occurredAt: '2026-08-09T12:20:00.000Z',
    nextAction: 'Responder por email con ficha ampliada y disponibilidad para visita.',
  },
  {
    id: 'visita-laia-cappont-2',
    propertyId: 'piso-cappont-lleida',
    contactName: 'Laia Vila',
    phone: '620 55 73 84',
    channel: 'seguimiento',
    summary: 'Seguimiento comercial posterior al envío de ficha.',
    notes:
      'Mantiene interés. Pendiente de cerrar agenda para visitar la vivienda a final de semana.',
    occurredAt: '2026-08-11T08:50:00.000Z',
    nextAction: 'Confirmar franja de visita para viernes por la tarde.',
  },
]
