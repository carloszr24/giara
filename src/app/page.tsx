import Link from 'next/link'
import { getFeaturedPropertiesForHome, getPublicProperties } from '@/lib/properties-store'
import { toPropertyMapPoints } from '@/lib/property-map'
import { FeaturedPropertiesGrid } from '@/components/home/FeaturedPropertiesGrid'
import { HeroCarousel } from '@/components/home/HeroCarousel'
import { ScrollHint } from '@/components/home/ScrollHint'
import { HeroActions } from '@/components/home/HeroActions'

export const dynamic = 'force-dynamic'

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-5 w-5" aria-hidden="true">
      <path d="M3 11.25 12 4l9 7.25" />
      <path d="M5.25 10.5V20h13.5v-9.5" />
      <path d="M9.75 20v-5.5h4.5V20" />
    </svg>
  )
}

function ScaleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-5 w-5" aria-hidden="true">
      <path d="M12 3v18M5 7h14M7 7l-2 6h4l-2-6M17 7l-2 6h4l-2-6" />
    </svg>
  )
}

function BankIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-5 w-5" aria-hidden="true">
      <path d="M3 10h18M5 10V20M9 10V20M15 10V20M19 10V20M2 20h20M12 4l8 6H4l8-6Z" />
    </svg>
  )
}

function ClipboardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-5 w-5" aria-hidden="true">
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <path d="M9 12h6M9 16h6" />
    </svg>
  )
}

export default async function HomePage() {
  const featured = await getFeaturedPropertiesForHome()
  const mapPoints = toPropertyMapPoints(await getPublicProperties())

  return (
    <>
      <section className="relative flex h-svh min-h-[34rem] flex-col items-center justify-center overflow-hidden pb-10 md:pb-12">
        <div className="absolute inset-0">
          <HeroCarousel />
        </div>

        <div className="relative z-10 flex w-full flex-1 items-center justify-center px-5 min-[400px]:px-6">
          <div className="mx-auto w-full max-w-3xl text-center">
            <p
              className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.32em] text-gold-light animate-fade-up"
              style={{ opacity: 0, animationFillMode: 'forwards' }}
            >
              Giara Inmobiliaria
            </p>
            <h1
              className="font-display text-balance text-[clamp(2.4rem,6vw+0.4rem,4.25rem)] font-medium leading-[1.08] text-white mb-6 animate-fade-up"
              style={{ opacity: 0, animationDelay: '0.08s', animationFillMode: 'forwards' }}
            >
              Propiedades excepcionales
              <br className="hidden sm:block" />
              {' '}en <span className="italic text-gold-light">Lleida</span>
            </h1>
            <p
              className="mx-auto mb-10 max-w-md text-pretty text-base font-normal leading-relaxed text-white/75 sm:text-lg animate-fade-up"
              style={{ opacity: 0, animationDelay: '0.16s', animationFillMode: 'forwards' }}
            >
              Marketing inmobiliario personalizado. Te acompañamos en cada paso de la compra o venta.
            </p>
            <div
              className="animate-fade-up"
              style={{ opacity: 0, animationDelay: '0.24s', animationFillMode: 'forwards' }}
            >
              <HeroActions mapPoints={mapPoints} />
            </div>
          </div>
        </div>

        <ScrollHint />
      </section>

      <section className="bg-ink px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-[0.65rem] font-medium uppercase tracking-[0.28em] text-gold">
              Cómo te ayudamos
            </p>
            <h2 className="font-display text-3xl font-medium leading-snug text-white md:text-[2.5rem]">
              Todo lo que necesitas, con claridad
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm font-normal leading-relaxed text-white/65">
              Oficina en Lleida. Un trato cercano y un proceso pensado para cada cliente.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: HomeIcon,
                title: 'Compra y venta',
                desc: 'Acompañamiento completo durante toda la operación, de principio a fin.',
              },
              {
                icon: ScaleIcon,
                title: 'Asesoramiento jurídico',
                desc: 'Orientación en documentación, trámites y formalización con diligencia.',
              },
              {
                icon: BankIcon,
                title: 'Financiación a medida',
                desc: 'Estudio personalizado de las opciones más adecuadas para tu operación.',
              },
              {
                icon: ClipboardIcon,
                title: 'Gestión integral',
                desc: 'Coordinación del proceso inmobiliario hasta la firma en notaría.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors duration-300 hover:border-gold/35 hover:bg-white/[0.06]"
              >
                <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gold/30 text-gold">
                  <item.icon />
                </span>
                <h3 className="mb-2 font-display text-xl font-medium text-white">{item.title}</h3>
                <p className="text-sm font-normal leading-relaxed text-white/65">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        {featured.length > 0 ? (
          <div className="space-y-8">
            <div className="relative min-h-10">
              <h2 className="text-center font-display text-4xl font-medium leading-tight md:text-5xl">
                Nuevas <span className="italic text-gold">oportunidades</span>
              </h2>
              <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 md:flex">
                <Link href="/propiedades" className="btn-outline text-[10px] shrink-0">
                  Ver todas →
                </Link>
              </div>
            </div>
            <FeaturedPropertiesGrid properties={featured} />
            <div className="flex justify-end md:hidden">
              <Link href="/propiedades" className="btn-outline text-[10px] shrink-0">
                Ver todas →
              </Link>
            </div>
          </div>
        ) : (
          <div className="rounded-3xl border border-sand-200 bg-white px-8 py-16 text-center md:px-12">
            <p className="mb-2 text-[0.65rem] font-medium uppercase tracking-[0.28em] text-gold">
              Catálogo
            </p>
            <h2 className="font-display text-3xl font-medium text-ink md:text-4xl">
              Pronto nuevas propiedades
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-stone-500">
              Estamos preparando el catálogo de Giara. Mientras tanto, cuéntanos qué buscas y te avisamos.
            </p>
            <Link href="/contacto" className="btn-primary mt-8">
              Hablar con el equipo
            </Link>
          </div>
        )}
      </section>

      <section className="relative overflow-hidden bg-ink px-6 py-24 md:px-10">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(ellipse 70% 80% at 80% 20%, rgba(197,148,88,0.22), transparent 55%)',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="mb-5 font-display text-4xl font-medium leading-tight text-white md:text-[2.75rem]">
            ¿Buscas tu próximo hogar?
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-base font-normal leading-relaxed text-white/70">
            Cuéntanos qué necesitas y prepararemos la estrategia más adecuada para ti.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/contacto"
              className="inline-flex min-h-[3rem] items-center justify-center rounded-full bg-gold px-10 py-3 text-xs font-medium uppercase tracking-[0.08em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-dark hover:shadow-soft"
            >
              Hablar con el equipo
            </Link>
            <Link
              href="/propiedades"
              className="inline-flex min-h-[3rem] items-center justify-center rounded-full border border-white/35 px-10 py-3 text-xs font-medium uppercase tracking-[0.08em] text-white transition-colors duration-200 hover:border-white hover:bg-white/5"
            >
              Ver propiedades
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
