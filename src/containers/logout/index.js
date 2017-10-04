import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchLogout } from '../../actions/auth'

class Logout extends Component {

  componentDidMount () {
    this.props.fetchLogout()
  }

  render () {
    return (
      <h1 className="loading-text">
        Logging out...
      </h1>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchLogout: bindActionCreators(fetchLogout, dispatch)
})

export default connect(null, mapDispatchToProps)(Logout)
