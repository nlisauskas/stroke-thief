import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {logOutUser} from '../actions/userActions';

class Header extends React.Component {
  constructor(props) {
    super();
    this.logOut = this.logOut.bind(this);
  }

  logOut(event) {
    event.preventDefault();
    this.props.logOutUser();
    this.setState({ session: false });
  }


  render() {
    if (this.props.logged_in) {
      return (
            <div>
              <Link to="/">Dashboard </Link>
              <Link to="/users">Users </Link>
              <Link to="/rounds">Rounds </Link>
              <Link to="/courses">Courses </Link>
              <Link to="/logout" onClick={this.logOut}>Log Out </Link>
              <p>Become the best version of yourself through golf.</p>
            </div>
      );
    } else {
      return (
            <div>
              <Link to="/login">Log In</Link>
            </div>
      );
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return { logOutUser: () => dispatch(logOutUser())}
       };

function mapStateToProps(state) {
  return {logged_in: state.users.sessionUser.session};
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
