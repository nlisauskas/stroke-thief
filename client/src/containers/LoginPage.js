import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../actions/userActions';

class LoginPage extends Component {
  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)
    this.onSave = this.onSave.bind(this)

    this.state = {
      credentials: {email: '', password: ''}
    }

  }

  onChange(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials});
  };

  onSave(event) {
    event.preventDefault();
    this.props.loginUser(this.state.credentials);
  };

  render() {
    return (
      < div>
        < form>
          <label>E-mail address</label><br></br>
          <input
            name="email"
            label="email"
            value={this.state.credentials.email}
            onChange={this.onChange}/><br></br>
          <label>Password</label><br></br>
          < input
            name="password"
            label="password"
            type="password"
            value={this.state.credentials.password}
            onChange={this.onChange}/>

          < input
            type="submit"
            className="btn btn-primary"
            onClick={this.onSave}/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return { loginUser: credentials => dispatch(loginUser(credentials))}
       };

export default connect(null, mapDispatchToProps)(LoginPage);
