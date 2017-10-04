/**
 * Created by askorodumov on 26.09.17.
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Navbar, Nav, Container } from 'reactstrap'

class Header extends Component {

  renderNav () {
    const {isLoggedIn} = this.props
    if (isLoggedIn) {
      return (
        <Navbar color="dark">
          <Container>
            <Nav className="ml-auto" navbar>
              <Link className="text-white" to="/logout">Logout</Link>
            </Nav>
          </Container>
        </Navbar>

      )
    }
    return null
  }

  render () {
    return (
      <header>
        {this.renderNav()}
      </header>

    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
})

export default connect(mapStateToProps)(Header)