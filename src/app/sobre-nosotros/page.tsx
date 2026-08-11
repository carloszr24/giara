import Image from 'next/image'
import Link from 'next/link'
import {
  HOME_EXTRA_SERVICES,
  WORK_PROCESS,
  type ServiceItem,
} from '@/data/services'
import { TEAM_MEMBERS, TEAM_QUOTE } from '@/data/team'
import { HEADER_OFFSET_CLASS } from '@/lib/logo'
import { ServicesCta } from '@/components/services/ServicesCta'

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-5 w-5" aria-hidden="true">
      <path d="M3 11.25 12 4l9 7.25" />
      <path d="M5.25 10.5V20h13.5v-9.5" />
      <path d="M9.75 20v-5.5h4.5V20" />
    </svg>
  )
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-5 w-5" aria-hidden="true">
      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-4 3v-3H6a2 2 0 0 1-2-2V6Z" />
    </svg>
  )
}

function MegaphoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-5 w-5" aria-hidden="true">
      <path d="M3 11v2a1 1 0 0 0 1 1h2l6 3V7L6 10H4a1 1 0 0 0-1 1Z" />
      <path d="M15 9.5a3.5 3.5 0 0 1 0 5M18 8a6 6 0 0 1 0 8" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-5 w-5" aria-hidden="true">
      <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
    </svg>
  )
}

function HandshakeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-5 w-5" aria-hidden="true">
      <path d="M8 13 5.5 10.5a2 2 0 0 1 0-2.8L8 5.2a2 2 0 0 1 2.8 0L12 6.4" />
      <path d="M16 11l2.5 2.5a2 2 0 0 1 0 2.8L16 18.8a2 2 0 0 1-2.8 0L12 17.6" />
      <path d="M9 14.5 12 11l2 2 1.5-1.5" />
      <path d="M7 17h.01M17 7h.01" />
    </svg>
  )
}

const expectationIcons = [ChatIcon, MegaphoneIcon, ShieldIcon, HandshakeIcon]

function ServiceCard({
  service,
  icon: Icon,
}: {
  service: ServiceItem
  icon?: typeof HomeIcon
}) {
  return (
    <div className="group border border-stone-200 bg-white p-8 transition-colors duration-300 hover:border-gold/40">
      {service.partnerLogo ? (
        <div className="mb-6 flex h-12 items-center">
          <Image
            src={service.partnerLogo}
            alt={service.partner ?? service.title}
            width={160}
            height={48}
            className="h-10 w-auto max-w-[9.5rem] object-contain object-left"
          />
        </div>
      ) : Icon ? (
        <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-sm border border-stone-200 text-stone-600 transition-colors group-hover:border-gold/40 group-hover:text-gold-dark">
          <Icon />
        </span>
      ) : null}
      <h3 className="mb-3 font-display text-xl font-light text-stone-900 transition-colors group-hover:text-gold-dark">
        {service.title}
      </h3>
      <p className="text-sm font-light leading-relaxed text-stone-500">{service.desc}</p>
    </div>
  )
}

function TeamAvatar({ name, initials, photo }: { name: string; initials: string; photo?: string | null }) {
  if (photo) {
    return (
      <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full border border-stone-200 bg-stone-100">
        <Image src={photo} alt={name} fill className="object-cover" sizes="96px" />
      </div>
    )
  }

  return (
    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-stone-200 bg-stone-100 text-xl font-light tracking-wide text-stone-500">
      {initials}
    </div>
  )
}

export default function SobreNosotrosPage() {
  return (
    <div className={HEADER_OFFSET_CLASS}>
      <section className="border-b border-stone-200 px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <nav className="mb-8 flex items-center gap-2 text-xs font-light text-stone-400">
            <Link href="/" className="transition-colors hover:text-stone-600">
              Inicio
            </Link>
            <span>/</span>
            <span className="text-stone-600">Servicios</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-display text-4xl font-light leading-tight text-stone-900 md:text-5xl lg:text-6xl">
              La excelencia comienza mucho antes de encontrar un comprador
            </h1>
            <p className="mt-6 text-base font-light leading-relaxed text-stone-500 md:text-lg">
              Vender o alquilar una vivienda no debería ser un proceso lleno de dudas, sino una
              experiencia segura, transparente y orientada al mejor resultado posible.
            </p>
          </div>

          <div className="my-14 h-px bg-stone-200" />

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-ink">
              <Image
                src="/images/properties/piso-cappont/1.png"
                alt="Propiedad actual gestionada por Giara en Lleida"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" aria-hidden="true" />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-8 md:p-10">
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-gold-light">
                  Propiedades actuales
                </p>
                <p className="mt-3 max-w-sm font-display text-3xl font-medium leading-snug text-white md:text-4xl">
                  No vendemos viviendas. Construimos operaciones de éxito.
                </p>
              </div>
            </div>

            <div className="lg:pt-4">
              <h2 className="font-display text-2xl font-light leading-snug text-stone-900 md:text-3xl">
                Tu casa, nuestro compromiso
              </h2>
              <div className="mt-6 space-y-5 text-sm font-light leading-relaxed text-stone-600 md:text-base">
                <p>
                  En Giara Inmobiliaria creemos que cada hogar tiene una historia y merece una
                  estrategia personalizada para encontrar al comprador o inquilino ideal.
                </p>
                <p>
                  Porque no solo vendemos viviendas: ayudamos a las personas a comenzar una nueva
                  etapa con tranquilidad y confianza.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-[10px] font-light uppercase tracking-[0.22em] text-gold">
              Cómo trabajamos
            </p>
            <h2 className="font-display text-3xl font-light text-stone-900 md:text-4xl">
              Del estudio de mercado al cierre
            </h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-stone-500 md:text-base">
              Un método claro, profesional y orientado a defender tus intereses en cada fase.
            </p>
          </div>

          <ol className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {WORK_PROCESS.map((step, index) => (
              <li
                key={step.title}
                className="border border-stone-200 bg-white p-8 transition-colors duration-300 hover:border-gold/40"
              >
                <span className="mb-5 inline-flex h-10 w-10 items-center justify-center border border-stone-200 font-display text-sm font-light text-gold-dark">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mb-3 font-display text-xl font-light text-stone-900">{step.title}</h3>
                <p className="text-sm font-light leading-relaxed text-stone-500">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-stone-200 px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-[10px] font-light uppercase tracking-[0.22em] text-gold">
              Qué puedes esperar
            </p>
            <h2 className="font-display text-3xl font-light text-stone-900 md:text-4xl">
              Acompañamiento en cada decisión
            </h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-stone-500 md:text-base">
              Transparencia, difusión y negociación profesional para vender o alquilar con
              tranquilidad.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HOME_EXTRA_SERVICES.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                icon={expectationIcons[index] ?? HomeIcon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <blockquote className="border border-stone-200 bg-stone-50 px-8 py-10 md:px-12 md:py-12">
            <p className="font-display text-2xl font-light leading-relaxed text-stone-800 md:text-3xl">
              “{TEAM_QUOTE.text}”
            </p>
            <footer className="mt-6 text-sm font-light text-stone-500">
              {TEAM_QUOTE.attribution}
              <span className="text-stone-400"> — {TEAM_QUOTE.role}</span>
            </footer>
          </blockquote>

          <div className="mt-20">
            <p className="mb-3 text-[10px] font-light uppercase tracking-[0.22em] text-gold">El equipo</p>
            <h2 className="font-display text-3xl font-light text-stone-900 md:text-4xl">
              Comprometidos a darte la solución que buscas
            </h2>
            <p className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-stone-500 md:text-base">
              Un equipo cercano, con experiencia en el mercado local de Lleida.
            </p>

            <ul className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:max-w-md">
              {TEAM_MEMBERS.map((member) => (
                <li key={member.id} className="text-center">
                  <TeamAvatar name={member.name} initials={member.initials} photo={member.photo} />
                  <p className="mt-5 font-display text-lg font-light text-stone-900">{member.name}</p>
                  <p className="mt-1 text-sm font-light text-stone-500">{member.role}</p>
                  {member.tenure && (
                    <p className="mt-1 text-xs font-light text-stone-400">{member.tenure}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <ServicesCta />
        </div>
      </section>
    </div>
  )
}
