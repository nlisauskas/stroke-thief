import React, { Component } from 'react';
import {connect} from 'react-redux';
import {signupUser} from '../actions/userActions';

class SignupPage extends Component {
  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)
    this.onSave = this.onSave.bind(this)

    this.state = {
      user: {email: '',
      password: '',
      password_confirmation: '',
      hometown: '',
      age: 0,
      name: ''}
    }

  }

  onChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    return this.setState({user: user});
  };

  onSave(event) {
    event.preventDefault();
    this.props.signupUser(this.state.user);
  };

  render() {
    return (
      < div>
        <h2>Sign Up for Stroke Thief below!</h2>
        < form>
          <label>Name</label><br></br>
          < input
            name="name"
            label="name"
            value={this.state.user.name}
            onChange={this.onChange}/><br></br>
            <label>E-mail</label><br></br>
          <input
            name="email"
            label="email"
            value={this.state.user.email}
            onChange={this.onChange}/><br></br>
          <label>Password</label><br></br>
          < input
            name="password"
            label="password"
            type="password"
            value={this.state.user.password}
            onChange={this.onChange}/><br></br>
            <label>Confirm Password</label><br></br>
            < input
              name="password_confirmation"
              label="password_confirmation"
              type="password"
              value={this.state.user.password_confirmation}
              onChange={this.onChange}/><br></br>
            <label>Age</label><br></br>
              < input
                name="age"
                label="age"
                type="number"
                value={this.state.user.age}
                onChange={this.onChange}/><br></br>
            <label>Hometown</label><br></br>
              < input
                name="hometown"
                label="hometown"
                value={this.state.user.hometown}
                onChange={this.onChange}/><br></br>
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
  return { signupUser: userInfo => dispatch(signupUser(userInfo))}
       };

export default connect(null, mapDispatchToProps)(SignupPage);
