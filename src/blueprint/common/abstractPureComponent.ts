import * as React from 'react'

export abstract class AbstractPureComponent<P, S = {}, SS = {}> extends React.Component<P, S, SS> {
  // unsafe lifecycle methods
  public componentWillUpdate: never
  public componentWillReceiveProps: never
  public componentWillMount: never

  static getDerivedStateFromProps: never
  public static displayName: string

  // Not bothering to remove entries when their timeouts finish because clearing invalid ID is a no-op
  private timeoutIds: number[] = []

  constructor(props: P, context?: any) {
    super(props, context)
    this.validateProps(props)
  }

  public componentDidUpdate(_prevProps: P, _prevState: S, _snapshot?: SS) {
    this.validateProps(this.props)
  }

  public componentWillUnmount() {
    this.clearTimeouts()
  }

  /**
   * Set a timeout and remember its ID.
   * All stored timeouts will be cleared when component unmounts.
   * @returns a "cancel" function that will clear timeout when invoked.
   */
  public setTimeout(callback: () => void, timeout?: number) {
    const handle = window.setTimeout(callback, timeout)
    this.timeoutIds.push(handle)
    return () => window.clearTimeout(handle)
  }

  public clearTimeouts = () => {
    if (this.timeoutIds.length > 0) {
      for (const timeoutId of this.timeoutIds) {
        window.clearTimeout(timeoutId)
      }
      this.timeoutIds = []
    }
  }

  protected validateProps(_props: P) {
    // implement in subclass
  }
}