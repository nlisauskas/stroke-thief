import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateRound } from '../actions/roundActions'


class EditRound extends Component {

handleEdit = (e) => {
  e.preventDefault();
  const newScore = this.getScore.value;
  const newPutts = this.getPutts.value;
  const data = {
    newScore,
    newPutts
  }
  this.props.updateRound(this.props.user.id, this.props.round.id, data)
}

render() {
return (
<div>
  <form onSubmit={this.handleEdit}>
    <input required type="integer" ref={(input) => this.getScore = input}
    defaultValue={this.props.round.score} placeholder="Edit Score" /><br /><br />
    <input required type="integer" ref={(input) => this.getPutts = input}
    defaultValue={this.props.round.putts} placeholder="Edit Putts" /><br /><br />
    <button>Update</button>
  </form>
</div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.users.user}
}

const mapDispatchToProps = (dispatch) => {
  return {
           updateRound: (user_id, id, data) => dispatch(updateRound(user_id, id, data))
         }
       };

export default connect(mapStateToProps, mapDispatchToProps)(EditRound);
