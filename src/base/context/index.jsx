import React from 'react'
// import Demo01 from './Demo01'
import { UserCardDefault, UserCard } from './UserCard'
import DealerCard from './DealerCard'
import ThemeSwitcher from './ThemeSwitcher'
import ThemeSwitcher2 from './ThemeSwitcher2'
import Demo04 from './Demo04'
import Demo03 from './Demo03'

export default class ReactContextDemos extends React.Component {
  render() {
    return (
      <div>
        <UserCardDefault />
        <UserCard />
        <DealerCard />
        <ThemeSwitcher />
        <ThemeSwitcher2 />
        <Demo03 />
        <Demo04 />
      </div>
    )
  }
}