import React from 'react'
import 'element-theme-default'
import Demo01 from './base/ref/Demo01'
import Demo02 from './base/ref/Demo02'
import Demo03 from './base/ref/Demo03'
import Demo04 from './base/ref/Demo04'
import Demo05 from './base/ref/Demo05'
import './base/ref/demo01.css'
import './App.css'
export default class App extends React.Component {
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
