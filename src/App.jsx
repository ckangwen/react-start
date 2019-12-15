import React from 'react'
// import ReactRefDemos from './base/ref'
import ReactErrorBoundaryDemos from './base/error-boundary'
import './App.css'
export default class App extends React.Component {
  render() {
    return (
      <div className="demos">
        {/* <ReactRefDemos /> */}
        <ReactErrorBoundaryDemos />
      </div>
    )
  }
}
