import React from 'react'

export class UserInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputMessage: ''
    }
  }

  handleInputChange = e => {
    const { value } = e.target
    this.setState({
      inputMessage: value
    })
  }
  render() {
    const { inputMessage } = this.state
    if (inputMessage.length > 5) {
      throw new Error("you cannot enter more than five characters!")
    }
    return (
      <div className="input-wrapper">
        <label>Name</label>
        <input
          className="input"
          id="name"
          type="text"
          value={inputMessage}
          onChange={this.handleInputChange}
        />
        <span>{inputMessage}</span>
      </div>
    )
  }
}

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errorInfo: null,
      error: false
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    })
  }

  render() {
    const { error } = this.state
    if (error) {
      return (
        <div>
          <h5>Sorry. More than five characters!</h5>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      )
    }
    return this.props.children
  }
}
