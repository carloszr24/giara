import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const sans = Poppins({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
})

const display = Poppins({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Giara Inmobiliaria | Lleida',
  description:
    'Marketing inmobiliario personalizado para propiedades excepcionales. Compra y venta de viviendas en Lleida con Giara Inmobiliaria.',
  keywords:
    'giara inmobiliaria, inmobiliaria lleida, comprar piso lleida, venta vivienda lleida, inmogiara, agencia inmobiliaria lleida',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${sans.variable} ${display.variable}`}>
      <body className="bg-sand-50 text-ink antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
