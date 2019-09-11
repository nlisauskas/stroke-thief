import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCourse } from '../actions/courseActions'

class CourseForm extends Component {

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      name: '0',
      city: '0',
      state: '',
      slope: 0.0,
      rating: 0.0
    }
  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.addCourse(this.state)
    this.setState({
      name: '0',
      city: '0',
      state: '',
      slope: 0.0,
      rating: 0.0
    });
    var form = document.getElementById("course-form");
    form.reset();
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="course-container">
      <h1 className='center'>Don't see your course? Add a new course below!</h1>
          <form id="course-form" onSubmit={this.handleSubmit}>
            <label>Name</label><br></br>
            <input type="text" placeholder="Name" name="name" onChange={this.handleChange}/><br></br>
            <label>City</label><br></br>
            <input type="text" placeholder="City" name="city" onChange={this.handleChange}/><br></br>
            <label>State</label><br></br>
            <input type="text" placeholder="State" name="state" onChange={this.handleChange}/><br></br>
            <label>Slope</label><br></br>
            <input type="integer" placeholder="Slope" name="slope" onChange={this.handleChange}/><br></br>
            <label>Rating</label><br></br>
            <input type="integer" placeholder="Rating" name="rating" onChange={this.handleChange}/><br></br>
            <button type="submit">Add Course</button>
          </form>
</div>
    )
  }
}

export default connect(null, { addCourse })(CourseForm)
