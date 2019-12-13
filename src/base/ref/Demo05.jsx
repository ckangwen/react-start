import React from 'react'

class List extends React.Component {
  _ref = el => {
    if (el) {
      if (!this.els) {
        this.els = []
      }
      this.els.push(el)
    } else {
      this.els = []
    }
  }
  render() {
    const { list } = this.props
    return (
      <ul className="list">
        {
          list.map((item, index) => {
            return (
              <li className="item" ref={this._ref} key={index}>
                {item}
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default class Demo05 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      list: ['defaultValue']
    }
  }

  changeHandler = (e) => {
    const value = e.target.value
    this.setState({
      value
    })
  }

  clickHandler = () => {
    const { list, value } = this.state
    list.push(value)
    console.log(value)
    this.setState({
      list,
      value: ''/*向list中添加新项之后，将input中的文本清空*/
    })
  }

  render() {
    const { list, value } = this.state
    return (
      <div>
        <div className="inline">
          <input className="input" value={value} type="text" onChange={this.changeHandler} />
          <button className="btn" onClick={this.clickHandler}>Add</button>
        </div>
        <List list={list} />
      </div>
    )
  }
}