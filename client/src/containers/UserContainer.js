import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from '../components/User';
import {getUser} from '../actions/userActions';

class UserContainer extends Component {

  componentDidMount() {
      this.props.getUser();
    }

    render() {
      if(this.props.user === null || this.props.user === []) {
        return(
          <div>
            <p>Still loading...</p>
          </div>
        )
      } else {
      return(
        <div>
        <User name={this.props.user.name} handicap={this.props.user.handicap} lowest_score={84} lowest_score_course={"Phillip's Park"} />
        </div>
      )

    }}
  };

const mapStateToProps = (state) => {
  return { user: state.users.user}
}

const mapDispatchToProps = (dispatch) => {
  return {getUser: () => dispatch(getUser())}
       };

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
