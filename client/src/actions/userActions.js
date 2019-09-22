import {post} from 'axios';

export function getUser() {
  var token = localStorage.getItem("jwt");
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
     return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
 }).join(''));
 var parsed = JSON.parse(jsonPayload);
  let id = parsed.sub;
  // set id using response from jwt decode
  const url = `/api/users/${id}`
  return (dispatch) => {
    dispatch({ type: 'LOADING_USERS' });
    let token = "Bearer " + localStorage.getItem("jwt");
    fetch(url, {
      method: 'GET',
      headers: {
        "Authorization":`${token}`
      }
    })
      .then(response => response.json())
      .then(usersInfo => dispatch({ type: 'GET_USERS', payload: usersInfo }))
      .catch(err => console.log(err));
  };
}

export function loginUser(credentials) {
  return(dispatch) => {
    dispatch({type: 'LOGGING_IN'}); // alter to logging_in
    post('/api/user_token', credentials)
       .then(response => {
         localStorage.setItem("jwt", response.data.token.token)
         dispatch({type: 'LOG_IN_SUCCESS', payload: response.data.id})
       })
    .catch(err => dispatch({type: 'LOG_IN_ERROR', payload: err}));
  }
}

export function signupUser(userInfo) {
  const url = `api/users`
  return(dispatch) => {
    dispatch({type: 'LOGGING_IN'});
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(userInfo),
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    })
    .then(() => {
        dispatch({type: 'SIGN_UP_SUCCESS'})
      })
    .catch(err => dispatch({type: 'SIGN_UP_ERROR', payload: err}));
  }
}

export function updateUser(id, data) {
  const url = `api/users/${id}`
  return(dispatch) => {
    dispatch({type: 'SENDING_USER'});
    fetch(url, {
      method: 'PUT',
      body: JSON.stringify({
        name: data.newName,
        age: data.newAge,
        hometown: data.newHometown
        }),
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    }).then(response => response.json())
    .then(user => dispatch({type: 'UPDATED_USER', payload: user}))
    .catch(err => console.log(err))
  }
}

export function logOutUser() {
  localStorage.removeItem('jwt');
  return(dispatch) => {
    dispatch({type: 'LOG_OUT'});
  }
}
