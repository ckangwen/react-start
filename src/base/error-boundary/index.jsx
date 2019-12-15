import React from 'react'
import BaseDemo from './BaseDemo'
import { UserInfo, ErrorBoundary } from './Demo02'

export default class ReactErrorBoundaryDemos extends React.Component {

  onErrorClick = () => {
    throw new Error('custom click error')
  }

  render() {
    return (
      <div>
        <BaseDemo />
        <ErrorBoundary>
          <UserInfo />
        </ErrorBoundary>
        <ErrorBoundary>
          <button onClick={this.onErrorClick}>throw an error</button>
        </ErrorBoundary>
      </div >
    )
  }
}