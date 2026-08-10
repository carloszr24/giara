import { cn } from '@/lib/utils'

type Props = {
  className?: string
}

export function BrandName({ className }: Props) {
  return (
    <span className={cn('font-display font-medium tracking-[0.04em]', className)}>
      Giara
    </span>
  )
}
