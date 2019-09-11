import React from 'react';

const Course = props => (
  <div className="single-user">
    <h2>Course Name: {props.name}</h2>
    <p>Location: {props.city}, {props.state}</p>
  </div>
)

export default Course;
