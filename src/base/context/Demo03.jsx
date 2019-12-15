import React from 'react'
import './demo03.css'

const themes = {
  brown: {
    bgColor: '#401200',
    textColor: '#FF4800',
  },
  violet: {
    bgColor: '#3F0040',
    textColor: '#FD01FF',
  },
};

const ThemeContext = React.createContext({
  ...themes.brown
})

class ThemeDiv extends React.Component {
  render() {
    let props = this.props
    let { bgColor, textColor } = this.context
    return (
      <div
        className="outer"
        style={{ backgroundColor: bgColor }}
        {
        ...props
        }
      >
        <div className="circle" style={{ backgroundColor: textColor }}></div>
        <div className="line" style={{ backgroundColor: textColor }}></div>
        <div className="line" style={{ backgroundColor: textColor }}></div>
        <div className="square" style={{ backgroundColor: textColor }}></div>
      </div>
    )
  }
}
ThemeDiv.contextType = ThemeContext

export default class Demo03 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: themes.brown
    }
  }

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === themes.brown
        ? themes.violet
        : themes.brown
    }))
  }

  render() {
    return (
      <div className="theme-box">
        <ThemeContext.Provider value={this.state.theme}>
          <ThemeDiv />
          <button className="change" onClick={this.toggleTheme}>Change Theme</button>
        </ThemeContext.Provider>
      </div>
    )
  }
}