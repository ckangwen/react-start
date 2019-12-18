import React from 'react'
// import Drag from './Drag'
import TogglerApp from './Toggler'
import { MouseTracker1, MouseTracker2, MouseTracker3 } from './MouseTracker'

export default class RenderPropsDemo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        {/* <Drag /> */}
        <TogglerApp />
        <MouseTracker1 />
        <MouseTracker2 />
        <MouseTracker3 />
      </div>
    )
  }
}