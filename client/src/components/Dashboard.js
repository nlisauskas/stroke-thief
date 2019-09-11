import React from 'react';
import UserContainer from '../containers/UserContainer';
import RoundsContainer from '../containers/RoundsContainer';
import CourseForm from '../containers/CourseForm';

const Dashboard = () => {
  return (
    <div>
      <UserContainer />
      <RoundsContainer />
      <CourseForm />
    </div>
  )
}

export default Dashboard
