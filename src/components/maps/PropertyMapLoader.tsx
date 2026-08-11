'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { cn } from '@/lib/utils'
import type { PropertyMapPoint } from '@/lib/property-map'

const PropertyMap = dynamic(() => import('./PropertyMap.client'), {
  ssr: false,
  loading: () => <div className="skeleton h-[320px] w-full rounded-sm" />,
})

type Props = {
  points: PropertyMapPoint[]
  className?: string
  title?: string
  /** When true, map starts expanded. Default: collapsed. */
  defaultOpen?: boolean
}

function MapIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={className} aria-hidden>
      <path d="M9 4.5 3.75 6.75v12.5L9 17.05l6 2.45 5.25-2.25V4.75L15 7.05 9 4.5Z" strokeLinejoin="round" />
      <path d="M9 4.5v12.55M15 7.05v12.45" strokeLinecap="round" />
    </svg>
  )
}

export function PropertyMapSection({
  points,
  className,
  title = 'Mapa',
  defaultOpen = false,
}: Props) {
  const [open, setOpen] = useState(defaultOpen)

  if (points.length === 0) return null

  return (
    <section className={cn('space-y-4', className)}>
      <div className="flex flex-col gap-4 border-b border-stone-200 pb-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-[10px] font-light uppercase tracking-[0.22em] text-gold-dark">Ubicación</p>
          <h2 className="font-display text-2xl font-light text-stone-900 md:text-3xl">{title}</h2>
          <p className="mt-2 text-sm font-light text-stone-500">
            {points.length === 1
              ? 'Consulte la ubicación exacta de la propiedad'
              : `${points.length} propiedades disponibles en el mapa`}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          className={cn(
            'inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full border px-5 py-2.5 text-xs font-medium uppercase tracking-[0.12em] transition-all duration-200',
            open
              ? 'border-header/20 bg-header text-white hover:bg-header/90'
              : 'border-gold/50 bg-white text-header hover:border-gold hover:bg-gold hover:text-white'
          )}
        >
          <MapIcon className="h-4 w-4" />
          {open ? 'Ocultar mapa' : 'Ver mapa'}
        </button>
      </div>

      {open && (
        <div className="overflow-hidden rounded-2xl border border-stone-200 shadow-soft animate-fade-in">
          <PropertyMap points={points} className="h-[300px] md:h-[400px]" />
        </div>
      )}
    </section>
  )
}

export { PropertyMap }
