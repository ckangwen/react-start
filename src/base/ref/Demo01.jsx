import React from 'react'

export default class Demo01 extends React.Component {
  constructor(props) {
    super(props)

    this.textInput = React.createRef()
    this.state = {
      name: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      name: this.textInput.current.value
    })
  }
  render() {



    return (
      <div className="box">
        <h1>
          Hello,<span>{this.state.name ? this.state.name : 'Jioke'}</span>
        </h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="name-1">Update Name</label>
            <div className="control">
              <input
                type="text"
                ref={this.textInput}
                autoComplete="off"
                name="name-1"
                className="input"
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button className="btn dark">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}