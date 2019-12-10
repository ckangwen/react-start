import React from 'react'
import { DISPLAYNAME_PREFIX, removeNonHTMLProps } from '../../common/props';
import { AbstractButton } from './abstractButton';

export class Button extends AbstractButton<React.ButtonHTMLAttributes<HTMLButtonElement>> {
  public static displayName = `${DISPLAYNAME_PREFIX}.BUTTON`

  public render(): JSX.Element {
    return (
      <button
        type="button"
        {...removeNonHTMLProps(this.props)}
        {...this.getCommomButtonProps()}
      >
        {this.renderChild()}
      </button>
    )
  }
}
