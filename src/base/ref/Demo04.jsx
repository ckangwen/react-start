import React from 'react'

export default class Demo04 extends React.Component {
  constructor(props) {
    super(props)
    this.textInput = null
    this.setTextInputRef = ele => {
      this.textInput = ele
    }
  }

  focusTextInput = () => {
    if (this.textInput) {
      this.textInput.focus()
    }
  }

  componentDidMount() {
    this.focusTextInput()
  }
  render() {
    return (
      <div>
        <span>Callback Refs</span>
        <input className="input" type="text" ref={this.setTextInputRef} />
        <button className="btn" onClick={this.focusTextInput}>Focus the text input</button>
      </div>
    )
  }
}