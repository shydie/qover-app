/**
 * Created by askorodumov on 28.09.17.
 */
import React, { Component } from 'react'
import { fetchLeads } from '../../actions/leads'
import { bindActionCreators } from 'redux'
import { Alert } from 'reactstrap'
import { connect } from 'react-redux'
import PricesList from '../../components/prices/PricesList'
import Loader from '../../components/common/Loader'

class Prices extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.state       = {
      visible: true
    }

    this.onDismiss = this.onDismiss.bind(this)
  }

  onDismiss () {
    this.setState({visible: false})
  }

  handleClick () {
    const {fetchLeads, draftId, userEmail} = this.props
    fetchLeads(draftId, userEmail)
  }

  prepareState (props) {
    if (!props) {
      this.setState({visible: false})
    } else {
      this.setState({visible: props.leads.message.length > 0})
    }
  }

  renderAlert () {
    const {leads} = this.props
    if (leads.message) {
      return (
        <Alert
          color={leads.error ? 'danger' : 'primary'}
          isOpen={this.state.visible}
          toggle={this.onDismiss}
        >
          {leads.message}
        </Alert>
      )
    }
    return null
  }

  componentWillMount () {
    this.prepareState()
  }

  componentWillReceiveProps (nextProps) {
    this.prepareState(nextProps)
  }

  render () {
    const {prices, leads} = this.props
    return (
      <div>
        {this.renderAlert()}
        {leads.isLoading ? <Loader/> : null}
        <h1 className="mb-4">Please, choose your price plan</h1>
        <PricesList prices={prices} onClick={this.handleClick}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  draftId: state.draft.draftId,
  prices: state.prices,
  leads: state.leads,
  userEmail: state.user.email
})

const mapDispatchToProps = dispatch => ({
  fetchLeads: bindActionCreators(fetchLeads, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Prices)