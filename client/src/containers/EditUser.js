import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../actions/userActions'


class EditUser extends Component {

handleEdit = (e) => {
  e.preventDefault();
  const newName = this.getName.value;
  const newAge = this.getAge.value;
  const newHometown = this.getHometown.value;
  const data = {
    newName,
    newAge,
    newHometown
  }
  this.props.updateUser(this.props.user.id, data)
}

render() {
return (
<div>
  <form onSubmit={this.handleEdit}>
    <input required type="text" ref={(input) => this.getName = input}
    defaultValue={this.props.user.name} placeholder="Enter Name" /><br /><br />
    <input required type="integer" ref={(input) => this.getAge = input}
    defaultValue={this.props.user.age} placeholder="Enter Age" /><br /><br />
    <input required type="text" ref={(input) => this.getHometown = input}
    defaultValue={this.props.user.hometown} placeholder="Enter Hometown" /><br /><br />
    <button>Update Profile</button>
  </form>
</div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
           updateUser: (id, data) => dispatch(updateUser(id, data))
         }
       };

export default connect(null, mapDispatchToProps)(EditUser);
