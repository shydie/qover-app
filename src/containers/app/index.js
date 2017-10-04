import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Logout from '../logout'
import Login from '../login'
import Header from '../header'
import UserForm from '../userForm'
import Prices from '../prices'
import { Container } from 'reactstrap'
import { setDefaultConfig } from '../../utils/auth.js'
import checkAuth from '../auth'

export default class App extends Component {

  componentDidMount () {
    setDefaultConfig()
  }

  render () {
    return (
      <div>
        <Header/>
        <main>
          <Container>
            <Route exact path="/" component={Login}/>
            <Route exact path="/logout" component={Logout}/>
            <Route exact path="/form" component={checkAuth(UserForm)}/>
            <Route exact path="/prices" component={checkAuth(Prices)}/>
          </Container>
        </main>
      </div>
    )
  }
}