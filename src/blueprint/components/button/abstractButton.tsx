import React from 'react'
import classNames from 'classnames'

import {
  ActionProps,
  Alignment,
  AbstractPureComponent,
  Utils,
  Classes
} from '../../common'

export interface ButtonProps extends ActionProps {
  active?: boolean
  alignText?: Alignment
  // A ref handler that receives the native HTML element backing this component
  elementRef?: (ref: HTMLElement | null) => any
  loading?: boolean
  type?: 'submit' | 'reset' | 'button'
}

export interface ButtonState {
  isActive: boolean
}

export abstract class AbstractButton<H extends React.HTMLAttributes<any>> extends AbstractPureComponent<ButtonProps & H, ButtonState> {
  public state = {
    isActive: false
  }

  protected buttonRef!: HTMLButtonElement
  protected refHandler = {
    button: (ref: HTMLButtonElement) => {
      this.buttonRef = ref
      Utils.safeInvoke(this.props.elementRef, ref)
    }
  }

  private currentKeyDown: number = 0

  public abstract render(): JSX.Element

  protected getCommomButtonProps() {
    const { alignText, loading, tabIndex, intent } = this.props;
    const disabled = this.props.disabled || loading

    const className = classNames(
      Classes.BUTTON,
      {
        [Classes.ACTIVE]: this.state.isActive || this.props.active,
        [Classes.DISABLED]: disabled,
        [Classes.LOADING]: loading,
      },
      Classes.alignmentClass(alignText),
      Classes.intentClass(intent)
    )
    return {
      className,
      disabled,
      onClick: disabled ? undefined : this.props.onClick,
      ref: this.refHandler.button,
      tabIndex: disabled ? -1 : tabIndex
    }
  }

  protected renderChild(): React.ReactNode {
    const { children, text } = this.props
    return [
      ((!Utils.isReactNodeEmpty(text) || !Utils.isReactNodeEmpty(children)) && (
        <span key="text" className={Classes.BUTTON_TEXT}>
          {text}
          {children}
        </span>
      ))
    ]
  }
}

// HTMLButtonElement