import { Intent } from './intent'
import { Alignment } from './alignment'

const ns = 'c'

// modifiers
export const ACTIVE = `${ns}-active`
export const ALIGN_LEFT = `${ns}-align-left`
export const ALIGN_RIGHT = `${ns}-align-right`
export const DARK = `${ns}-dark`
export const DISABLED = `${ns}-disabled`
export const FILL = `${ns}-fill`
export const FIXED = `${ns}-fixed`
export const FIXED_TOP = `${ns}-fixed-top`
export const INLINE = `${ns}-inline`
export const INTERACTIVE = `${ns}-interactive`
export const LARGE = `${ns}-large`
export const LOADING = `${ns}-loading`
export const MINIMAL = `${ns}-minimal`
export const MULTILINE = `${ns}-multiline`
export const ROUND = `${ns}-round`
export const SMALL = `${ns}-small`
export const VERTICAL = `${ns}-vertical`


// Component
export const BUTTON = `${ns}-button`
export const BUTTON_GROUP = `${BUTTON}-group`
export const BUTTON_SPINNER = `${BUTTON}-spinner`
export const BUTTON_TEXT = `${BUTTON}-text`


export function intentClass(intent?: Intent) {
  if (intent == null || intent === Intent.NONE) {
    return undefined
  }
  return `${ns}-intent-${intent.toLowerCase()}`
}

export function positionClass(position: Position) {
  if (position == null) {
    return undefined
  }
  return `${ns}-position-${position}`
}
export function alignmentClass(alignment?: Alignment) {
  switch (alignment) {
    case Alignment.LEFT:
      return ALIGN_LEFT
    case Alignment.RIGHT:
      return ALIGN_RIGHT
    default:
      return undefined
  }
}