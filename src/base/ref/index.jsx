import React from 'react'
import Demo01 from './Demo01'
import Demo02 from './Demo02'
import Demo03 from './Demo03'
import Demo04 from './Demo04'
import Demo05 from './Demo05'
import './demo01.css'
export default class ReactRefDemos extends React.Component {
  render() {
    return (
      <div className="demos">
        <Demo01 />
        <Demo02 />
        <Demo03 />
        <Demo04 />
        <Demo05 />
      </div>
    )
  }
}
