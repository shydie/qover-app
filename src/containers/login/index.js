/**
 * Created by askorodumov on 24.09.17.
 */
import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { fetchLogin } from '../../actions/auth'
import { bindActionCreators } from 'redux'
import {
  Row, Col, Card, CardBlock, CardHeader, Form, Label, Input, Button, FormGroup
} from 'reactstrap'
import { connect } from 'react-redux'
import { validateLogin } from '../../validators/index'

class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      errors: {},
    }
  }

  isValid () {
    const {errors, isValid} = validateLogin(this.state)
    if (!isValid) {
      this.setState({errors})
    }
    return isValid
  }

  onSubmit (e) {
    const {email, password} = this.state
    e.preventDefault()
    if (this.isValid()) {
      //TODO: Remove hardcoded values
      this.props.fetchLogin('test+exercice@qover.com', 'qoverexercise')
      //this.props.fetchLogin(email, password)
    }
  }

  onChange (e) {
    this.setState({[e.target.name]: e.target.value})
  }

  componentWillMount () {
    const {isLoggedIn, changePage} = this.props
    if (isLoggedIn) {
      changePage()
    }
  }

  render () {
    const {errors, email, password} = this.state

    return (
      <Row className="justify-content-center">
        <Col xs="12" sm="8" md="6">
          <Card color="light">
            <CardHeader className="h4">
              Log In
            </CardHeader>
            <CardBlock>
              <Form onSubmit={this.onSubmit.bind(this)}>
                <FormGroup>
                  <Label for="email" className="auth-label">Email:</Label>
                  <Input type="text"
                         id="email"
                         name="email"
                         value={email}
                         onChange={this.onChange.bind(this)}
                         className={errors.email ? 'is-invalid' : ''}
                  />
                  {errors.email ? <div className='invalid-feedback'>{errors.email}</div> : null}

                </FormGroup>
                <FormGroup color={errors.password ? 'danger' : ''}>
                  <Label for="pwd" className="auth-label">Password:</Label>
                  <Input type="password"
                         id="pwd"
                         name="password"
                         value={password}
                         onChange={this.onChange.bind(this)}
                         className={errors.username ? 'is-invalid' : ''}
                  />
                  {errors.password ? <div className='invalid-feedback'>{errors.password}</div> : null}
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
  changePage: bindActionCreators(() => push('/form'), dispatch),
  fetchLogin: bindActionCreators(fetchLogin, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)