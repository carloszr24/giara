'use client'

import Image from 'next/image'

export function HeroCarousel() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-header">
      <Image
        src="/images/giara-hero.png"
        alt="Giara Inmobiliaria"
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover object-center brightness-[0.72] saturate-[0.85]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-header/78 via-header/62 to-header/88"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-header/55 via-header/20 to-header/45"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-header/25" aria-hidden="true" />
    </div>
  )
}
