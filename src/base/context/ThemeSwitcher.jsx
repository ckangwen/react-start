import React from 'react'
import './theme.css'

const ThemeContext = React.createContext()
const ThemeConsumer = ThemeContext.Consumer

const THEMES = {
  dark: '#401c44',
  light: '#9b95c9'
}

export default class ThemeSwitcher extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }
  render() {
    return (
      <Main ref={this.ref}>
        <ThemeProvider forwardRef={this.ref}>
          <ThemeChanger />
        </ThemeProvider>
      </Main>
    )
  }
}

const Main = React.forwardRef((props, ref) => (
  <div className="theme-wrapper" ref={ref}>
    {props.children}
  </div>
))

class ThemeProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: 'dark',
      size: 'small'
    }
  }

  toggleTheme = () => {
    const body = this.props.forwardRef.current
    const { theme } = this.state
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    this.setState({ theme: newTheme })

    body.style.backgroundColor = THEMES[newTheme]
  }

  toggleSize = () => {

  }

  render() {
    return (
      <ThemeContext.Provider value={{
        ...this.state,
        toggleTheme: this.toggleTheme,
        toggleSize: this.toggleSize
      }}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

const ThemeRender = ({ theme, toggleTheme }) => {
  return (
    <section className="toggler">
      <p>Theme is {theme}</p>
      <button className="btn" onClick={toggleTheme}>Toggle Theme</button>
    </section>
  )
}

const ThemeChanger = () => (
  <ThemeConsumer>
    {
      context => {
        return (
          <ThemeRender {...context} />
        )
      }
    }
  </ThemeConsumer>
)