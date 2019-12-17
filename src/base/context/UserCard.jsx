import React from 'react'
import './user.css'

const UserContext = React.createContext({
  username: 'aaa-bbb',
  firstName: 'aaa',
  lastName: 'bbb'
})

const UserConsumer = UserContext.Consumer

export class UserCardDefault extends React.Component {
  render() {
    return (
      <div>
        <User />
      </div>
    )
  }
}

export class UserCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'AAA-BBB',
      firstName: 'AAA',
      lastName: 'BBB'
    }
  }
  render() {
    return (
      <UserContext.Provider value={this.state}>
        <User />
      </UserContext.Provider>
    )
  }
}

const User = () => (
  <div className="user-wrapper">
    <UserProfile />
  </div>
)

const UserProfile = () => (
  <UserConsumer>
    {
      context => {
        return (
          <div>
            <div>Profile Page for </div>
            <h3>{context.username}</h3>

            <UserDetail />
          </div>
        )
      }
    }
  </UserConsumer>
)

const UserDetail = () => (
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
)