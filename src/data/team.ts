export type TeamMember = {
  id: string
  name: string
  role: string
  tenure?: string | null
  initials: string
  /** Ruta en public, p. ej. /images/team/asesor.jpg */
  photo?: string | null
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'equipo-giara',
    name: 'Equipo Giara',
    role: 'Asesoramiento inmobiliario',
    tenure: null,
    initials: 'GI',
    photo: null,
  },
]

export const TEAM_QUOTE = {
  text: 'Cada vivienda cuenta una historia. Nuestro trabajo es contarla bien y encontrar a quien la valore.',
  attribution: 'Giara Inmobiliaria',
  role: 'Lleida',
} as const
