import React from 'react'
const ThemeContext = React.createContext()

const THEMES = {
  dark: '#401c44',
  light: '#9b95c9'
}

export default class ThemeSwitcher2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: 'light',
      bgColor: THEMES['light']
    }
  }
  onClick = () => {
    const newTheme = this.state.theme === 'dark' ? 'light' : 'dark'
    this.setState({
      theme: newTheme,
      bgColor: THEMES[newTheme]
    })
  }
  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <div className="theme-wrapper2 toggler">
          <ThemeContent />
          <button className="btn" onClick={this.onClick}>Toggle</button>
        </div>
      </ThemeContext.Provider>
    )
  }
}

const ThemeContent = () => (
  <ThemeContext.Consumer>
    {
      context => (
        <div style={{ backgroundColor: THEMES[context.theme] }} className="box"></div>
      )
    }
  </ThemeContext.Consumer>
)