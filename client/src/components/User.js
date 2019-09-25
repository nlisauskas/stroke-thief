import React from 'react';

const User = props => (
  <div className="single-user">
    <h2>Welcome back to Stroke Thief, {props.name}!</h2>
    {props.handicap === 1000 ? <p>You must log at least 5 rounds to maintain a handicap.</p> :
    <p>Your current handicap is {props.handicap} which is in the xxth percentile of all Stroke Thief users.</p>
    }
  </div>
)

export default User;
