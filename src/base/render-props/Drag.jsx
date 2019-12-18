/* eslint-disable no-unused-vars */
import React from 'react'
import './drag.css'

class Mouse extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      y: 0
    }
  }
  handleMovement = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }
  render() {
    return (
      <div className="mouse" onMouseMove={this.handleMovement}>
        {
          this.props.show(this.state)
        }
      </div>
    )
  }
}

export default class MouseApp extends React.Component {

  state = {
    isClicked: false,
    posX: 0,
    posY: 0,
    outOfBox: true
  }

  handleMove = (event) => {
    const { isClicked, posX, posY } = this.state;
    if (isClicked) {
      this.setState({
        posX: event.clientX - 27,
        posY: event.clientY - 27
      })

      if ((posX < this.boxWrapper.offsetLeft ||
        posX > this.boxWrapper.offsetLeft + 500) ||
        (posY < this.boxWrapper.offsetTop ||
          posY > this.boxWrapper.offsetTop + 270)) {
        this.setState({ outOfBox: true });
      }
      else {
        this.setState({ outOfBox: false });
      }
    }
  }

  render() {
    const { posX, posY, outOfBox } = this.state;
    return (
      <div className="wrapper">
        <Mouse show={({ x, y }) => {
          const boxStyles = {
            left: `${posX}px`,
            top: `${posY}px`,
            background: outOfBox ? '#ff0000' : '#004dff'
          };
          return (
            <div className="inner-wrapper"
              onMouseMove={this.handleMove}
            >
              <div className="box-wrapper" ref={wrapper => this.boxWrapper = wrapper}>
                <h3>x:{posX}, y:{posY}</h3>
                <div
                  className="box"
                  onMouseDown={() => { this.setState({ isClicked: true }) }}
                  style={boxStyles}
                  onMouseUp={() => { this.setState({ isClicked: false }) }}
                >{outOfBox ? 'Drag me In' : 'Cool'}</div>
              </div>
            </div>
          )
        }}
        />
      </div>
    )
  }
}