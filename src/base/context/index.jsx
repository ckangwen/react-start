import React from 'react'
import Demo01 from './Demo01'
import Demo02 from './Demo02'
import Demo04 from './Demo04'
import Demo03 from './Demo03'

export default class ReactContextDemos extends React.Component {
  render() {
    return (
      <div>
        <Demo01 />
        <Demo02 />
        <Demo03 />
        <Demo04 />
      </div>
    )
  }
}