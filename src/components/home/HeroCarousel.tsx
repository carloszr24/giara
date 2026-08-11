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
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-header/55 via-header/35 to-header/75"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-header/40 via-transparent to-header/25"
        aria-hidden="true"
      />
    </div>
  )
}
