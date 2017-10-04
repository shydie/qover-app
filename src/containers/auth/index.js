import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { setAuthHeader } from '../../utils/auth'
import { bindActionCreators } from 'redux'
import store, { history } from '../../store'
import { persistStore } from 'redux-persist'

export default function checkAuth (Component) {
  class AuthenticatedComponent extends React.Component {
    componentWillMount () {
      const {isLoggedIn} = this.props
      this.checkAuth(isLoggedIn)
    }

    componentWillReceiveProps (nextProps) {
      this.checkAuth(nextProps.isLoggedIn)
    }

    checkAuth (isLoggedIn) {
      const {changePage} = this.props
      if (!isLoggedIn) {
        //setAuthHeader(null)
        //persistStore(store, localStorage.removeItem('token')).purge()
        changePage()
      }
    }

    render () {
      const {isLoggedIn} = this.props
      return (
        <div>
          {
            isLoggedIn === true
              ? <Component {...this.props} />
              : null
          }
        </div>
      )
    }
  }

  const mapStateToProps    = (state) => ({
    isLoggedIn: state.auth.isLoggedIn
  })
  const mapDispatchToProps = dispatch => ({
    changePage: bindActionCreators(() => push('/'), dispatch)
  })

  return connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent)
}