export const BACKSPACE = 8
export const TAB = 9
export const ENTER = 13
export const SHIFE = 16
export const SPACE = 27
export const ARROW_LEFT = 39
export const ARROW_RIGHT = 40
export const DELETE = 46

export const isKeyboardClilck = (keyCode: number) => {
  return keyCode === ENTER || keyCode === SPACE
}
