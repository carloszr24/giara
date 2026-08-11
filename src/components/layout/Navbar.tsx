'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { phoneHref } from '@/lib/contact'
import { HEADER_HEIGHT_CLASS } from '@/lib/logo'
import { cn } from '@/lib/utils'
import { ValoracionGratuitaModal } from '@/components/home/ValoracionGratuitaModal'
import { SiteLogo } from '@/components/SiteLogo'
import { SERVICE_ITEMS } from '@/data/services'

const links = [
  { href: '/propiedades', label: 'Propiedades' },
  { href: '/sobre-nosotros', label: 'Servicios' },
  { href: '/contacto', label: 'Contacto' },
]

const navLinkClass =
  'inline-flex items-center leading-none text-xs font-light uppercase tracking-[0.16em] transition-colors duration-200'

/** Expand full chrome after a short scroll so content isn't covered at rest. */
const SCROLL_EXPAND_PX = 32

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const closeTimer = useRef<NodeJS.Timeout | null>(null)
  const isHome = pathname === '/'
  /** Logo-only (transparent) at top of every public page; full bar once scrolled or mobile menu open. */
  const minimal = !scrolled && !open
  /** Home hero is dark; other pages often start light — hamburger contrast follows that. */
  const lightOnMinimal = isHome

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_EXPAND_PX)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current)
    }
  }, [])

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
  }, [pathname])

  if (pathname.startsWith('/admin')) return null

  const cancelClose = () => {
    if (!closeTimer.current) return
    clearTimeout(closeTimer.current)
    closeTimer.current = null
  }

  const openServices = () => {
    cancelClose()
    setServicesOpen(true)
  }

  const closeServices = () => {
    cancelClose()
    closeTimer.current = setTimeout(() => setServicesOpen(false), 110)
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        minimal
          ? 'border-b border-transparent bg-transparent shadow-none'
          : 'border-b border-white/10 bg-header shadow-sm'
      )}
    >
      <div className="mx-auto max-w-7xl pl-5 pr-4 md:pl-12 md:pr-10">
        <div className={cn('flex w-full items-center', HEADER_HEIGHT_CLASS)}>
          <Link
            href="/"
            className={cn(
              'relative z-10 flex shrink-0 items-center rounded-sm transition-[filter] duration-300',
              minimal &&
                'drop-shadow-[0_1px_1px_rgba(255,255,255,0.45)] drop-shadow-[0_1px_3px_rgba(26,36,33,0.22)]'
            )}
          >
            <SiteLogo priority tone="light" />
          </Link>

          <div
            className={cn(
              'ml-auto hidden shrink-0 items-center gap-8 self-center transition-all duration-300 md:flex',
              minimal
                ? 'pointer-events-none translate-y-1 opacity-0'
                : 'pointer-events-auto translate-y-0 opacity-100'
            )}
            aria-hidden={minimal}
          >
            <nav className="flex items-center gap-8">
              {links.map((link) =>
                link.href === '/sobre-nosotros' ? (
                  <div
                    key={link.href}
                    className="relative inline-flex items-center"
                    onMouseEnter={openServices}
                    onMouseLeave={closeServices}
                  >
                    <Link
                      href={link.href}
                      tabIndex={minimal ? -1 : undefined}
                      className={cn(
                        navLinkClass,
                        'gap-1',
                        pathname === link.href || servicesOpen
                          ? 'text-white'
                          : 'text-white/70 hover:text-white'
                      )}
                    >
                      {link.label}
                      <svg
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className={cn(
                          'h-3 w-3 shrink-0 transition-transform duration-200',
                          servicesOpen && 'rotate-180'
                        )}
                      >
                        <path
                          d="M5.5 7.5 10 12l4.5-4.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                    <div
                      className={cn(
                        'absolute right-0 top-full z-[60] pt-3',
                        servicesOpen ? 'pointer-events-auto' : 'pointer-events-none'
                      )}
                      onMouseEnter={openServices}
                      onMouseLeave={closeServices}
                    >
                      <div
                        className={cn(
                          'w-[min(48rem,calc(100vw-2.5rem))] max-w-[calc(100vw-2.5rem)] rounded-xl border border-stone-200 bg-white p-5 shadow-xl transition-all duration-200 sm:p-6',
                          servicesOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                        )}
                      >
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                          {SERVICE_ITEMS.map((service) => (
                            <Link
                              key={service.title}
                              href="/sobre-nosotros"
                              className="block rounded-lg border border-stone-200/80 bg-stone-50/40 p-4 transition-colors duration-150 hover:border-stone-300 hover:bg-white"
                            >
                              <p className="text-sm font-light text-stone-900">{service.title}</p>
                              <p className="mt-1.5 line-clamp-3 text-xs font-light leading-relaxed text-stone-500">
                                {service.desc}
                              </p>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 border-t border-stone-100 pt-4 text-center">
                          <a
                            href={phoneHref}
                            className="inline-flex items-center justify-center gap-1 text-sm font-light text-gold-dark transition-colors hover:text-ink"
                          >
                            Llámenos y le ofreceremos la solución que busca →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    tabIndex={minimal ? -1 : undefined}
                    className={cn(
                      navLinkClass,
                      pathname === link.href
                        ? 'text-white'
                        : 'text-white/70 hover:text-white'
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            <ValoracionGratuitaModal
              triggerLabel="Valoración gratuita"
              triggerClassName="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-sm border border-gold/80 bg-gold px-4 py-2 text-xs font-light uppercase tracking-[0.12em] text-white transition-colors duration-200 hover:bg-gold-dark"
            />
          </div>

          <button
            type="button"
            className={cn(
              'ml-auto rounded-sm p-2 transition-colors md:hidden',
              minimal && !lightOnMinimal
                ? 'text-ink'
                : 'text-white',
              minimal && lightOnMinimal && 'drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]'
            )}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <div className="w-5 space-y-1.5">
              <span
                className={cn(
                  'block h-px bg-current transition-all duration-300',
                  open && 'translate-y-2 rotate-45'
                )}
              />
              <span
                className={cn(
                  'block h-px bg-current transition-all duration-300',
                  open && 'opacity-0'
                )}
              />
              <span
                className={cn(
                  'block h-px bg-current transition-all duration-300',
                  open && '-translate-y-2 -rotate-45'
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="space-y-4 border-t border-white/10 bg-header px-6 py-6 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-1 text-sm font-light text-white/80 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <ValoracionGratuitaModal
            triggerLabel="Valoración gratuita"
            triggerClassName="btn-primary mt-4 w-full text-center text-xs"
          />
        </div>
      )}
    </header>
  )
}
