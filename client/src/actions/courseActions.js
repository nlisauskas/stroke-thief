//let token = "Bearer " + localStorage.getItem("jwt");
//axios({method: 'get', url: `/api/rounds/${this.props.match.params.id}`, headers: {'Authorization': token }})

export function getCourses() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_COURSES' });
    return fetch(`/api/courses`)
      .then(response => response.json())
      .then(courses => dispatch({ type: 'GET_COURSES', payload: courses }));
  };
}

export function addCourse(data) {
  const url = `/api/courses`
  return(dispatch) => {
    dispatch({type: 'SENDING_COURSE'});
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    })
    .then(response => response.json())
    .then(course => dispatch({type: 'SENT_COURSE', payload: course}))
    .catch(err => console.log(err))
  }
}
