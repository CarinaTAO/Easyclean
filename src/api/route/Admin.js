import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Header from '../../components/General/Header'
import HomePage from '../../pages/HomePage/HomePage'
import TaskDetails from '../../components/TaskDetails'

class Admin extends React.Component {
  render() {
    return (
      <div>
        <Header>
        </Header>
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route path='/Task' component={TaskDetails} />
          <Redirect to='/home'/>
        </Switch>
      </div>
    )
  }
}

export default Admin