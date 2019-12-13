import React from 'react'
import Demo02 from './Demo02'

export default class AutuoFocusTextInput extends React.Component {
  constructor(props) {
    super(props)
    this.textInput = React.createRef()
  }

  componentDidMount() {
    // CustomTextInput { props ..., docusTextInput ... }
    console.log(this.textInput.current)
    this.textInput.current.focusTextInput()
  }

  render() {
    return (
      <Demo02 ref={this.textInput} />
    )
  }
}
