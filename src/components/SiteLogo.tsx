import Image from 'next/image'
import { cn } from '@/lib/utils'
import {
  LOGO_FOOTER_CLASS,
  LOGO_FOOTER_HEIGHT_CLASS,
  LOGO_HEADER_HEIGHT_CLASS,
  LOGO_IMAGE_CLASS,
  LOGO_RENDER,
  LOGO_SRC,
  type LogoTone,
} from '@/lib/logo'
import { AGENT } from '@/lib/contact'

type Props = {
  className?: string
  variant?: 'header' | 'footer'
  /** Kept for API compatibility; PNG is gold-on-black and reads on light or dark chrome. */
  tone?: LogoTone
  priority?: boolean
}

export function SiteLogo({ className, variant = 'header', priority = false }: Props) {
  const isFooter = variant === 'footer'
  const imageClass = isFooter ? LOGO_FOOTER_CLASS : LOGO_IMAGE_CLASS
  const sizes = isFooter ? '96px' : '72px'

  return (
    <span
      role="img"
      aria-label={AGENT.name}
      className={cn(
        'relative inline-flex shrink-0 items-center overflow-hidden rounded-xl',
        isFooter ? LOGO_FOOTER_HEIGHT_CLASS : LOGO_HEADER_HEIGHT_CLASS,
        // Preserve square aspect from the source mark
        isFooter ? 'aspect-square' : 'aspect-square',
        className
      )}
    >
      <Image
        src={LOGO_SRC}
        alt=""
        aria-hidden
        width={LOGO_RENDER.width}
        height={LOGO_RENDER.height}
        sizes={sizes}
        priority={priority}
        className={cn(imageClass, 'rounded-xl')}
      />
    </span>
  )
}
