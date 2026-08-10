export const CONTACT_EMAIL = 'info@inmogiara.com'

export const AGENT = {
  name: 'Giara Inmobiliaria',
  title: 'Agencia inmobiliaria',
  tagline:
    'Marketing inmobiliario personalizado para propiedades excepcionales en Lleida y alrededores.',
} as const

export const LEGAL = {
  ownerName: 'Giara Inmobiliaria',
  legalForm: 'autónomo',
  taxId: '',
  address: 'Lleida, Catalunya',
} as const

export const OFFICES = {
  primary: {
    label: 'Oficina',
    line1: 'Lleida',
    line2: 'Catalunya',
    full: 'Lleida, Catalunya',
    mapsQuery: 'Lleida,+Catalunya',
  },
} as const

const contactEmail = (process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? CONTACT_EMAIL).trim()

export const CONTACT = {
  address: OFFICES.primary,
  offices: OFFICES,
  phone: {
    display: '611 22 19 31',
    e164: '+34611221931',
    wa: '34611221931',
    label: 'Teléfono',
  },
  email: contactEmail,
  social: {
    instagram: 'https://www.instagram.com/',
    facebook: 'https://www.facebook.com/',
  },
} as const

export const mapsHref = `https://maps.google.com/?q=${CONTACT.address.mapsQuery}`
export const phoneHref = `tel:${CONTACT.phone.e164}`
export const hasEmail = CONTACT.email.length > 0
export const emailHref = hasEmail ? `mailto:${CONTACT.email}` : ''
export const whatsappHref = `https://wa.me/${CONTACT.phone.wa}`
export const whatsappDisplay = `+34 ${CONTACT.phone.display}`
