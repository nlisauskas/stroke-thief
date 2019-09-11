import React, { Component } from 'react';
import { connect } from 'react-redux';
import Course from '../components/Course';
import {getCourses} from '../actions/courseActions';

class CoursesContainer extends Component {

  componentDidMount() {
      this.props.getCourses();
    }

    renderCourses = () => this.props.courses.map((course, id) =>
      (
        <div key={course.id}>
            {<Course key={course.id} id={course.id} name={course.name} city={course.city} state={course.state} />}
        </div>
      ));

  render() {
    if(this.props.courses === null || this.props.courses === []) {
      return(
        <div>
          <p>Still loading...</p>
        </div>
      )
    } else {
      return(
        <div>
          <h2>Take a look at your courses below!</h2>
          {this.renderCourses()}
        </div>
      );
    }
  }
};

const mapStateToProps = (state) => {
  return { courses: state.courses.courses}
}

const mapDispatchToProps = (dispatch) => {
  return { getCourses: () => dispatch(getCourses())}
       };

export default connect(mapStateToProps, mapDispatchToProps)(CoursesContainer);
