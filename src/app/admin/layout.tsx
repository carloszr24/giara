import type { Metadata } from 'next'
import { AdminNav } from '@/components/admin/AdminNav'

export const metadata: Metadata = {
  title: 'Panel Admin | Giara Inmobiliaria',
  robots: { index: false, follow: false },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-sand-50">
      <header className="flex items-center justify-between bg-ink px-6 py-4 text-white">
        <div className="flex items-center">
          <span className="font-display text-lg font-medium tracking-[0.04em]">
            GIARA
            <span className="ml-2 font-sans text-xs font-medium uppercase tracking-[0.18em] text-gold">
              Admin
            </span>
          </span>
          <AdminNav />
        </div>
        <a href="/" className="text-xs text-white/70 transition-colors hover:text-white">
          ← Ver web
        </a>
      </header>
      <div className="mx-auto max-w-6xl px-6 py-10 lg:max-w-7xl">{children}</div>
    </div>
  )
}
