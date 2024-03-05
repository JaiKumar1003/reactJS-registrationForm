// Write your JS code here

import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    requireFirst: false,
    requireLast: false,
    isSubmitted: false,
  }

  onClickSuccessBtn = () => {
    this.setState({firstName: '', lastName: '', isSubmitted: false})
  }

  onBlurFirstError = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({requireFirst: true})
    } else {
      this.setState({requireFirst: false})
    }
  }

  onBlurLastError = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({requireLast: true})
    } else {
      this.setState({requireLast: false})
    }
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '' && lastName === '') {
      this.setState({requireFirst: true, requireLast: true})
    }
    else if (firstName === '') {
      this.setState({requireFirst: true})
    }
    else if ( lastName === '') {
      this.setState({requireLast: true})
    }
    else {
      this.setState({isSubmitted: true})
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  render() {
    const {firstName, lastName, requireFirst, requireLast, isSubmitted} =
      this.state
    const firstErrorMsg = requireFirst ? 'error-msg' : 'non-error-msg'
    const lastErrorMsg = requireLast ? 'error-msg' : 'non-error-msg'
    const registrationForm = isSubmitted ? 'non-registraion' : ''
    const successfullForm = isSubmitted ? '' : 'non-registration'
    return (
      <>
        <div className={`registration-form-container ${registrationForm}`}>
          <div className="registration-card">
            <h1 className="registration-form-heading">Registration</h1>
            <form className="registration-form" onSubmit={this.onSubmitForm}>
              <label className="form-label" htmlFor="firstName">
                FIRST NAME
              </label>
              <input
                value={firstName}
                onChange={this.onChangeFirstName}
                placeholder="First name"
                onBlur={this.onBlurFirstError}
                className="form-input"
                id="firstName"
                type="text"
              />
              <p className={firstErrorMsg}>Required</p>
              <label className="form-label" htmlFor="lastName">
                LAST NAME
              </label>
              <input
                value={lastName}
                onChange={this.onChangeLastName}
                placeholder="Last name"
                onBlur={this.onBlurLastError}
                className="form-input"
                id="lastName"
                type="text"
              />
              <p className={lastErrorMsg}>Required</p>
              <button type="submit" className="form-button">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className={`successfull-form-container ${successfullForm}`}>
          <div className="registration-card">
            <h1 className="registration-form-heading">Registration</h1>
            <img
              className="success-img"
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p className="successfull-deicription">Submitted Successfully</p>
            <button
              onClick={this.onClickSuccessBtn}
              type="button"
              className="successfull-button"
            >
              Submit Another Response
            </button>
          </div>
        </div>
      </>
    )
  }
}

export default RegistrationForm
