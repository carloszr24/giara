export const LOGO_SRC = '/images/giara.png'
export const LOGO_WHITE_SRC = '/images/giara.png'

/** Intrinsic dimensions — giara.png (gold on transparent, square canvas). */
export const LOGO_RENDER = {
  width: 1254,
  height: 1254,
}

/** Header mark height — keep transparent, no forced black plate. */
export const LOGO_HEADER_HEIGHT_CLASS = 'h-8 md:h-9'

export const LOGO_FOOTER_HEIGHT_CLASS = 'h-14 md:h-16'

export const LOGO_IMAGE_CLASS = 'site-logo site-logo--header'

export const LOGO_FOOTER_CLASS = 'site-logo site-logo--footer'

/** Fixed bar (~58–62px). Slightly under pre-shrink h-14; keep in sync with HEADER_OFFSET_CLASS. */
export const HEADER_HEIGHT_CLASS = 'h-[3.65rem] md:h-[3.85rem]'

export const HEADER_OFFSET_CLASS = 'pt-[3.65rem] md:pt-[3.85rem]'

export type LogoTone = 'light' | 'dark'
