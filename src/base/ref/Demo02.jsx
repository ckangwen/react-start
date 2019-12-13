import React from 'react'

export default class CustomTextInput extends React.Component {
  constructor(props) {
    super(props)
    this.textInput = React.createRef()
  }

  focusTextInput = () => {
    console.log('has focused')
    this.textInput.current.focus()
  }

  UNSAFE_componentWillMount() {
    // { current: null }
    console.log(this.textInput)
  }

  componentDidMount() {
    // { current: DOM }
    console.log(this.textInput)
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.textInput} className="input" />
        <button className="btn" onClick={this.focusTextInput}>Focus the text Input</button>
      </div>
    )
  }
}

