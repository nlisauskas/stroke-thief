import React, { Component } from 'react';
import { connect } from 'react-redux';
import Round from '../components/Round';
import { getRounds, editRound, deleteRound } from '../actions/roundActions';
import RoundForm from './RoundForm';
import EditRound from './EditRound';
import CourseForm from './CourseForm';

class RoundsContainer extends Component {

  componentDidMount() {
      this.props.getRounds();
    }

    renderRounds = () => this.props.rounds.map((round, id) =>
      (
        <div key={round.id}>
            {round.isEditing ? <EditRound key={round.id} round={round} /> :
            <Round key={round.id} id={round.id} user_id={this.props.user.id} score={round.score} putts={round.putts} courseName={round.course.name} deleteRound={this.props.deleteRound} editRound={this.props.editRound} />}
        </div>
      ));

  render() {
    if(this.props.rounds === null || this.props.rounds === [] || this.props.rounds.length === 0) {
      return(
        <div>
          <p>Log your first round!</p>
          <RoundForm />
          <CourseForm />
        </div>
      )
    } else {
      return(
        <div>
          <strong>Take a look at your rounds below!</strong>
          {this.renderRounds()}
          <RoundForm />
          <CourseForm />
        </div>
      );
    }
  }
};

const mapStateToProps = (state) => {
  return { rounds: state.rounds.rounds,
           user: state.users.user}
}

const mapDispatchToProps = (dispatch) => {
  return { getRounds: () => dispatch(getRounds()),
          deleteRound: (user_id, id) => dispatch(deleteRound(user_id, id)),
          editRound: id => dispatch(editRound(id))
       }};

export default connect(mapStateToProps, mapDispatchToProps)(RoundsContainer);
