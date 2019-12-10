import { Intent } from './intent'

export const DISPLAYNAME_PREFIX = "Blueprint"

export interface ClassNameProps {
  /* A space-delimited list of class names to pass along to a child element  */
  className?: string
}

/**
 * Interface for a clickable action, such as a button or menu
*/
export interface IntentProps {
  /* 不同的状态： primary | success ... */
  intent: Intent
}

export interface ActionProps extends IntentProps, ClassNameProps {
  disabled?: boolean
  onClick?: clickEventHandler
  text?: React.ReactNode
}

export interface LinkProps {
  href?: string
  target?: string
}

type clickEventHandler = (event: React.MouseEvent<HTMLElement>) => void


// 不是有效的HTMLElement props
const INVALID_PROPS = [
  "active",
  "alignText",
  "containerRef",
  "elementRef",
  "fill",
  "icon",
  "inputRef",
  "intent",
  "inline",
  "large",
  "loading",
  "leftIcon",
  "minimal",
  "onChildrenMount",
  "onRemove",
  "panel", // ITabProps
  "panelClassName", // ITabProps
  "popoverProps",
  "rightElement",
  "rightIcon",
  "round",
  "small",
  "text",
];

/**
 * 从传入的props中去除不符合条件的prop，保留原生的attribute或React定义的prop
 * 可以额外添加需要排除的props，通过传递给invalidProps参数
 * 并令shouldMerge为true，合并至初始的INVALID_PROPS中
*/
export function removeNonHTMLProps(
  props: { [key: string]: any },
  invalidProps = INVALID_PROPS,
  shouldMerge = false
): { [key: string]: any } {
  if (shouldMerge) {
    invalidProps = invalidProps.concat(INVALID_PROPS)
  }

  // Array.prototype.reduce( callback(accumulator, currentValue) [, initialValue] )
  // the accumulator accumulates the callback's return values
  // it is the accumulated value previously returned in the last invocation of the callback, or initialValue
  return INVALID_PROPS.reduce(
    (prev, curr) => {
      if (prev.hasOwnProperty(curr)) {
        delete (prev as any)[curr];
      }
      return prev;
    }, {
    ...props
  }
  )
}