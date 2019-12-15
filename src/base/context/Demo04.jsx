import React from 'react'
import './demo04.css'
const ThemeContext = React.createContext()


class ThemeProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: 'dark',
      size: 'small',
      toggleTheme: this.toggleTheme.bind(this),
      toggleSize: this.toggleSize.bind(this),
    }
  }

  toggleTheme() {
    const { theme } = this.state
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    this.setState({ theme: newTheme })

    const themes = { dark: '#46485f', light: '#7bbfea' }
    const colors = { dark: '#fff', light: '#000' }
    const body = this.props.forwardRef.current
    body.style.backgroundColor = themes[newTheme]
    body.style.color = colors[newTheme]
  }
  toggleSize() {
    const { size } = this.state
    const newSize = size === 'small' ? 'large' : 'small'
    this.setState({ size: newSize })

    const sizes = { small: '1em', large: '1.4em' }
    const body = this.props.forwardRef.current
    body.style.fontSize = sizes[newSize]
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

const ThemeRenderer = ({ theme, toggleTheme }) => {
  return (
    <section>
      <p>Theme is <span className="value">{theme}</span></p>
      <button className="btn" onClick={toggleTheme}>Toggle Theme</button>
    </section>
  )
}

const SizeRenderer = ({ size, toggleSize }) => {
  return (
    <section>
      <p>Size is: <span className='value'>{size}</span></p>
      <button className='btn' onClick={toggleSize}>Toggle Size</button>
    </section>
  )
}

const ThemeChanger = () => (
  <ThemeContext.Consumer>
    {
      context => {
        const { theme, toggleTheme } = context
        return (
          <ThemeRenderer {...{
            theme,
            toggleTheme
          }} />
        )
      }
    }
  </ThemeContext.Consumer>
)

const SizeChanger = () => (
  <ThemeContext.Consumer>
    {
      context => (
        <SizeRenderer {...context} />
      )
    }
  </ThemeContext.Consumer>
)

const Main = React.forwardRef((props, ref) => (
  <main className="body" ref={ref}>
    {props.children}
  </main>
))

export default class ThemeToggler extends React.Component {
  constructor(props) {
    super(props)
    this.container = React.createRef()
  }
  render() {
    return (
      <Main ref={this.container}>
        <ThemeProvider forwardRef={this.container} >
          <ThemeChanger />
          <SizeChanger />
        </ThemeProvider>
      </Main>
    )
  }
}