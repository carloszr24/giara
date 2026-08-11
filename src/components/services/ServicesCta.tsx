'use client'

import Link from 'next/link'
import { ValoracionGratuitaModal } from '@/components/home/ValoracionGratuitaModal'

export function ServicesCta() {
  return (
    <div className="mt-20 flex flex-col items-start justify-between gap-6 border border-stone-200 bg-white p-8 md:flex-row md:items-center md:p-10">
      <div>
        <h3 className="font-display text-2xl font-light text-stone-900">
          ¿Piensas vender o alquilar en Lleida?
        </h3>
        <p className="mt-2 max-w-lg text-sm font-light leading-relaxed text-stone-500">
          Estaremos encantados de ayudarte. Solicita una valoración gratuita o escríbenos
          y te acompañamos desde el primer paso.
        </p>
      </div>
      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <ValoracionGratuitaModal
          triggerLabel="Solicitar valoración"
          triggerClassName="inline-flex w-full shrink-0 items-center justify-center gap-2 border border-gold bg-gold px-8 py-3.5 text-[10px] font-light uppercase tracking-[0.14em] text-white transition-colors hover:bg-gold-dark sm:w-auto"
        />
        <Link
          href="/contacto"
          className="inline-flex w-full shrink-0 items-center justify-center gap-2 border border-gold px-8 py-3.5 text-[10px] font-light uppercase tracking-[0.14em] text-gold-dark transition-colors hover:bg-gold hover:text-white sm:w-auto"
        >
          Contacto
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  )
}
