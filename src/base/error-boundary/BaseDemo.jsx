import React from 'react'

export default class BaseDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  // user getDerivedStateFromProps to render a fallback UI anfter an error has been thrown
  static getDerivedStateFromProps() {
    return {
      hasError: true
    }
  }

  // user componentDidCatch to log error infomation
  componentDidCatch(error, errorInfo) {
    console.error('[React Error Boundary: BaseErrorBoundary] ', error, errorInfo)
  }
  render() {
    if (this.state.hasError) {
      return (<h1>Something went wrong</h1>)
    }
    return this.props.children
  }
}