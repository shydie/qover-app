/**
 * Created by askorodumov on 26.09.17.
 */
import React, { Component } from 'react'
import { fetchDraft } from '../../actions/draft'
import { setCurrentUser } from '../../actions/user'
import { bindActionCreators } from 'redux'
import {
  Row, Col, Card, CardBlock, CardHeader, Form, Label, Input, Button, FormGroup
} from 'reactstrap'
import { connect } from 'react-redux'
import { validateForm } from '../../validators/'
import data from '../../data'
import vehicles from '../../vehicles'

class UserForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      age: '',
      car: Object.keys(vehicles)[0],
      email: '',
      errors: {},
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  isValid () {
    const {errors, isValid} = validateForm(this.state)
    if (!isValid) {
      this.setState({errors})
    }
    return isValid
  }

  renderOptions () {
    return Object.keys(vehicles).map(o => <option key={o} value={o}>{o}</option>)
  }

  onSubmit (e) {
    const {name, age, car, email}      = this.state
    const {setCurrentUser, fetchDraft} = this.props
    e.preventDefault()
    if (this.isValid()) {
      data.risk.vehicle.details = vehicles[car]
      setCurrentUser(name, age, car, email)
      fetchDraft(data)
    }
  }

  onChange (e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render () {
    const {errors, name, age, car, email} = this.state

    return (
      <Row className="justify-content-center">
        <Col xs="12" sm="8" md="6">
          <Card color="light">
            <CardHeader className="h4">
              Customer Info
            </CardHeader>
            <CardBlock>
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                  <Label for="name">Name:</Label>
                  <Input type="text"
                         id="name"
                         name="name"
                         value={name}
                         onChange={this.onChange}
                         className={errors.name ? 'is-invalid' : ''}
                  />
                  {errors.name ? <div className='invalid-feedback'>{errors.name}</div> : null}
                </FormGroup>
                <FormGroup>
                  <Label for="age">Age:</Label>
                  <Input type="text"
                         id="age"
                         name="age"
                         value={age}
                         onChange={this.onChange}
                         className={errors.age ? 'is-invalid' : ''}
                  />
                  {errors.age ? <div className='invalid-feedback'>{errors.age}</div> : null}
                </FormGroup>
                <FormGroup>
                  <Label for="car">Car model:</Label>
                  <Input type="select"
                         id="car"
                         name="car"
                         value={car}
                         onChange={this.onChange}
                         className={errors.car ? 'is-invalid' : ''}
                  >
                    {this.renderOptions()}
                  </Input>
                  {errors.car ? <div className='invalid-feedback'>{errors.car}</div> : null}
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email:</Label>
                  <Input type="text"
                         id="email"
                         name="email"
                         value={email}
                         onChange={this.onChange.bind(this)}
                         className={errors.email ? 'is-invalid' : ''}
                  />
                  {errors.email ? <div className='invalid-feedback'>{errors.email}</div> : null}
                </FormGroup>
                <Button type="submit" color="success" block>
                  Submit
                </Button>
              </Form>
            </CardBlock>
          </Card>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
})

const mapDispatchToProps = dispatch => ({
  fetchDraft: bindActionCreators(fetchDraft, dispatch),
  setCurrentUser: bindActionCreators(setCurrentUser, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(UserForm)