import React from 'react'
import './demo01.css'

const UserContext = React.createContext({
  username: 'johnny-appleseed',
  firstName: 'John',
  lastName: 'Appleseed'
})

const UserConsumer = UserContext.Consumer

export default class Demo01 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'jioke',
      firstName: 'Kingsley',
      lastName: 'Silas'
    }
  }
  render() {
    return (
      <UserContext.Provider value={this.state}>
        <div className="box">
          <User />
        </div>
      </UserContext.Provider>
    )
  }
}

const User = () => (
  <div>
    <UserProfile />
  </div>
)

const UserProfile = () => (
  <UserConsumer>
    {
      context => {
        return (
          <div>
            <div className="subtitle">Profile Page for</div>
            <h1 className="title">{context.username}</h1>
            <UserDetails />
          </div>
        )
      }
    }
  </UserConsumer>
)

const UserDetails = () => (
  <div>
    <UserConsumer>
      {
        context => {
          return (
            <div>
              <p><b>Username:</b> {context.username}</p>
              <p><b>First Name:</b> {context.firstName}</p>
              <p><b>Last Name:</b> {context.lastName}</p>
            </div>
          )
        }
      }
    </UserConsumer>
  </div>
)