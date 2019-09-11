import React from 'react';

const Round = props => (
  <div className="single-round">
    <strong>Course: {props.courseName}</strong>
    <p>Score: {props.score}</p>
    <p>Putts: {props.putts}</p>
    <button onClick={() => props.editRound(props.id)}>Edit Round </button>
    <button onClick={() => props.deleteRound(props.user_id, props.id)}>Delete Round </button>
  </div>
)

export default Round;
