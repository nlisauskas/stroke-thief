import React from 'react';
import { connect } from 'react-redux';
import './stylesheets/App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import RoundsContainer from './containers/RoundsContainer';
import SignupPage from './containers/SignupPage';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom'
import {logOutUser} from './actions/userActions';

class App extends React.Component {
  constructor(props) {
    super();
    this.logOut = this.logOut.bind(this);
  }

  logOut(event) {
    event.preventDefault();
    this.props.logOutUser();
  }

  render() {
    return (
      <Router>
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/">Home</Link></li>
            <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/rounds">Rounds</Link></li>
            {
               this.props.loggedIn || localStorage.getItem('jwt')  ?
                <li className="nav-item"><Link exact className="nav-link" to="/logout" onClick={this.logOut}>Log Out</Link></li>
              :
                <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/login">Log In</Link></li>
            }
          </ul>
        </nav>
            {

              this.props.loggedIn || localStorage.getItem('jwt')  ?
              <div>
              <Route exact path="/" component={Dashboard}/>
              <Route path="/rounds" component={RoundsContainer}/>
              </div>
            :
              <div>
              {
                this.props.signUpSuccess ?
              <Route path="/login" component={Login} />
              :
              <Route exact path="/" component={SignupPage}/>
              }

              {
                this.props.signUpError ?
                <strong>Please confirm you entered a valid e-mail address and password.</strong>
                :
                <p></p>
              }
              <p>Already have an account? <Link exact className="nav-link" activeClassName="active" to="/login">Log In</Link></p>
              <Route path="/login" component={Login} />
              </div>
            }
        </div>
        </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {  loggedIn: state.users.loggedIn,
            logInError: state.users.logInError,
            signUpError: state.users.signUpError,
            signUpSuccess: state.users.signUpSuccess}
}

const mapDispatchToProps = (dispatch) => {
  return { logOutUser: () => dispatch(logOutUser())}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
