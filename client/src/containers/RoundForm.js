import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRound } from '../actions/roundActions'
import { getCourses } from '../actions/courseActions'

class RoundForm extends Component {

  componentDidMount() {
      this.props.getCourses();
    }

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      score: 0,
      putts: 0,
      course_id: 1
    }
  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.addRound(this.props.user.id, this.state)
    this.setState({
      score: 0,
      putts: 0,
      course_id: 1
    });
    var form = document.getElementById("round-form");
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
      <div className="round-container">
      <h1 className='center'> Add a new round! </h1>
          <form id="round-form" onSubmit={this.handleSubmit}>
            <label>Score</label><br></br>
            <input type="integer" placeholder="Score" name="score" onChange={this.handleChange}/><br></br>
            <label>Putts</label><br></br>
            <input type="integer" placeholder="Putts" name="putts" onChange={this.handleChange}/><br></br>
            <select name="course_id" onChange={this.handleChange} value={this.value} >{this.props.courses.map((course) => <option name="course_id" course_id={course.id} value={course.id}>{course.name}</option>)}</select>
            <button type="submit">Add Round</button>
          </form>
</div>
    )
  }
}

function mapStateToProps(state) {
  return { rounds: state.rounds.rounds,
            courses: state.courses.courses,
            user: state.users.user}
}

export default connect(mapStateToProps, { addRound, getCourses })(RoundForm)
