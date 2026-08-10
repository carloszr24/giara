'use client'

export function HeroCarousel() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-ink">
      {/* Atmospheric brand field — warm interior light over forest green */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 90% 70% at 72% 28%, rgba(197,148,88,0.28), transparent 55%),
            radial-gradient(ellipse 60% 50% at 18% 80%, rgba(47,61,56,0.9), transparent 60%),
            linear-gradient(145deg, #121A18 0%, #1A2421 42%, #24302C 78%, #1A2421 100%)
          `,
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 top-1/4 h-[28rem] w-[28rem] rounded-full bg-gold/20 blur-3xl animate-soft-glow"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />
      {/* Soft architectural grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.45) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-transparent to-ink/70" aria-hidden="true" />
    </div>
  )
}
