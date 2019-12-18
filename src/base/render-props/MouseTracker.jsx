import React from 'react'
import './mouseTracker.css'

export class MouseTracker1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      y: 0
    }
  }
  handleMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render() {
    return (
      <div className="playground" onMouseMove={this.handleMouseMove}>
        <h3>Move the mouse around</h3>
        <p>the current mouse position is ({this.state.x}, {this.state.y})</p>
      </div>
    )
  }
}

export class MouseTracker2 extends React.Component {
  render() {
    return (
      <div>
        <h3>Move the mouse around</h3>
        <Mouse />
      </div>
    )
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      y: 0
    }
  }
  handleMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render() {
    return (
      <div className="playground" onMouseMove={this.handleMouseMove}>
        <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
      </div>
    )
  }
}

export class MouseTracker3 extends React.Component {
  render() {
    return (
      <div>
        <h3>Move the mouse around</h3>
        <MouseWithCat />
      </div>
    )
  }
}

class MouseWithCat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      y: 0
    }
  }
  handleMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render() {
    return (
      <div className="playground" onMouseMove={this.handleMouseMove}>
        <Cat mouse={this.state} />
      </div>
    )
  }
}

class Cat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      y: 0
    }
  }

  render() {
    const { x, y } = this.props.mouse
    console.log(x, y)
    return (
      <div className="img" style={{ left: x, top: y }}></div>
    )
  }
}

// 问题： 每当要鼠标位置用于不同的用例时，必须创建一个新的组件

// 解决： 提供一个带有函数prop的组件， 来动态决定什么需要渲染，而不是将组件硬编码入目标组件中



export class MouseTracker4 extends React.Component {
  render() {
    return (
      <div>
        <h3>Move the mouse around</h3>
        <Mouse2 render={
          () => (
            <Cat />
          )
        } />
      </div>
    )
  }
}

class Mouse2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      y: 0
    }
  }
  handleMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render() {
    return (
      <div className="playground">
        {
          this.props.render(this.state)
        }
      </div>
    )
  }
}
// Instead of providing a static representation of what <Mouse> renders
// user the `render` prop to dynamically determine what to render

// render props 是一个用于告知组件需要渲染什么内容的函数prop
// 这项技术使得共享行为非常容易