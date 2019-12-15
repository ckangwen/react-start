import React from 'react'
import './demo02.css'

const DealerContext = React.createContext()

class DealerProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'New Dealer',
      dealerId: 1234,
      groupId: 1,
      editing: false
    }
  }
  render() {
    return (
      <DealerContext.Provider value={{
        state: this.state,
        updateDealerName: event => {
          this.setState({
            name: event.target.value
          })
        },
        toogleEdit: () => {
          if (this.state.editing) {
            this.setState({
              editing: false
            })
          } else {
            this.setState({
              editing: true
            })
          }
        }
      }}>
        {this.props.children}
      </DealerContext.Provider>
    )
  }
}

class DealerProfile extends React.Component {
  render() {
    return (
      <div className="dealer-profile">
        <DealerContext.Consumer>
          {
            context => {
              let text = 'Edit'
              if (context.state.editing) {
                text = 'save'
              }
              return (
                <React.Fragment>
                  <p>Name: {context.state.name}</p>
                  <button onClick={context.toogleEdit}>{text}</button>
                  <p>Dealer ID: {context.state.dealerId}</p>
                </React.Fragment>
              )
            }
          }
        </DealerContext.Consumer>
      </div>
    )
  }
}

class DealerAction extends React.Component {
  render() {
    return (
      <DealerContext.Consumer>
        {
          context => (
            <React.Fragment>
              {
                context.state.editing
                  ?
                  <input
                    type="text"
                    defaultValue={context.state.name}
                    onChange={context.updateDealerName.bind(this)}
                  />
                  : null
              }
            </React.Fragment>
          )
        }
      </DealerContext.Consumer>
    )
  }
}

const DealerCard = () => {
  return (
    <div className="dealer-page">
      <DealerProfile />
      <DealerAction />
    </div>
  )
}

export default class DealerApp extends React.Component {
  render() {
    return (
      <DealerProvider>
        <h1>Dealer Card</h1>
        <DealerCard />
        <p><em>Using React Context API with React 16.4</em></p>
      </DealerProvider >
    )
  }
}