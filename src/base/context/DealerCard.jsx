import React from 'react'
import './dealer.css'

const DealerContext = React.createContext()
const DealerConsumer = DealerContext.Consumer

export default class DealerCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editable: false,
      name: 'ABCD',
      id: '10092'
    }
  }

  onClick = () => {
    this.setState({
      editable: !this.state.editable
    })
  }

  onChange = ({ target: { value } }) => {
    this.setState({ name: value })
  }

  render() {
    return (
      <DealerContext.Provider value={
        {
          onClick: this.onClick,
          onChange: this.onChange,
          ...this.state
        }
      }>
        <div className="dealer-wrapper">
          <h1>Dealer Card</h1>
          <DealerProfile />
        </div>
      </DealerContext.Provider >
    )
  }
}

const DealerProfile = () => (
  <div>
    <DealerDetail />
    <DealerAction />
  </div>
)

const DealerDetail = () => (
  <div>
    <DealerConsumer>
      {
        context => {
          return (
            <div>
              <h3>Name: {context.name}</h3>
              <p>ID: {context.id}</p>
              <button className="save" onClick={context.onClick}>
                {
                  context.editable ? 'Save' : 'Edit'
                }
              </button>
            </div>
          )
        }
      }
    </DealerConsumer>
  </div>
)
const DealerAction = () => (
  <DealerConsumer>
    {
      context => {
        return (
          context.editable
            ?
            <input
              type="text"
              defaultValue={context.name}
              onChange={context.onChange}
            />
            : null
        )
      }
    }
  </DealerConsumer>
)

