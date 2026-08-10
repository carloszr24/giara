import Link from 'next/link'
import {
  AGENT,
  CONTACT,
  OFFICES,
  emailHref,
  hasEmail,
  mapsHref,
  phoneHref,
  whatsappHref,
} from '@/lib/contact'
import { SiteLogo } from '@/components/SiteLogo'

export function Footer() {
  return (
    <footer className="mt-24 border-t border-sand-200 bg-ink text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <SiteLogo variant="footer" tone="light" />
            <p className="mt-5 max-w-md text-sm font-normal leading-relaxed text-white/60">
              {AGENT.tagline}
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-[10px] font-medium uppercase tracking-[0.18em] text-gold">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm font-normal">
              <li>
                <Link href="/propiedades" className="transition-colors hover:text-white">
                  Propiedades
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="transition-colors hover:text-white">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="transition-colors hover:text-white">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/aviso-legal" className="transition-colors hover:text-white">
                  Aviso legal
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidad" className="transition-colors hover:text-white">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="/politica-cookies" className="transition-colors hover:text-white">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-[10px] font-medium uppercase tracking-[0.18em] text-gold">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm font-normal">
              <li>
                <a href={phoneHref} className="transition-colors hover:text-white">
                  {CONTACT.phone.label}: {CONTACT.phone.display}
                </a>
              </li>
              {hasEmail && (
                <li>
                  <a href={emailHref} className="transition-colors hover:text-white">
                    {CONTACT.email}
                  </a>
                </li>
              )}
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  WhatsApp: +34 {CONTACT.phone.display}
                </a>
              </li>
              <li className="pt-2">
                <p className="mb-0.5 text-xs font-normal text-white/40">{OFFICES.primary.label}</p>
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {OFFICES.primary.full}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-t border-white/10 pt-6 text-xs font-normal text-white/40 lg:flex-row lg:items-center lg:justify-between">
          <span className="shrink-0">
            © {new Date().getFullYear()} {AGENT.name}. Todos los derechos reservados.
          </span>
          <p className="text-[10px] leading-snug lg:whitespace-nowrap lg:text-right">
            Toda la información contenida en esta web carece de carácter contractual, siendo su
            contenido meramente informativo.
          </p>
        </div>
      </div>
    </footer>
  )
}
