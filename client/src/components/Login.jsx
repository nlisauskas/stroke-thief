import React, { Component } from 'react'
import {connect} from 'react-redux';
import {loginUser} from '../actions/userActions';

class Login extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const request = {"auth": {"email": email, "password": password}};
    this.props.loginUser(request);
    // Code below needs to move to the actions file.
  //  post('/api/user_token', request)
  //    .then(response => {
  //      localStorage.setItem("jwt", response.data.jwt);

  //    })
  //    .catch(error => console.log('error', error));
 }

  render() {
    return (
      <div>
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input name="email" id="email" type="email" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input name="password" id="password" type="password" className="form-control" />
          </div>
          <button type="submit" className="btn btn-dark">Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { loginUser: credentials => dispatch(loginUser(credentials))}
       };

export default connect(null, mapDispatchToProps)(Login);
