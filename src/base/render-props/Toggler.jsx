import React from 'react'
// https://codepen.io/_danko/pen/BPePQE?editors=0010

class Toggler extends React.Component {
  state = {
    active: false
  }

  onClick = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return (
      this.props.children(this.state.active, this.onClick)
    )
  }
}

const TogglerApp = () => (
  <div>
    <Toggler>
      {
        (active, onClick) => (
          <React.Fragment>
            <h3>React Render Props</h3>
            <button onClick={onClick}>Click</button>
            {
              active && <span>To Be Continue ...</span>
            }
          </React.Fragment>
        )
      }
    </Toggler>

  </div>
)

export default TogglerApp
