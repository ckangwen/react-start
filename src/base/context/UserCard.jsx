import React from 'react'

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
      username: ''
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
            <div className="subtitle">Profile Page for </div>
            <h1 className="title">{context.username}</h1>

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
        <p><b>Username: </b>{context.username}</p>
      }
    }
  </UserConsumer>
)