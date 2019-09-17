import {axios, post, get} from 'axios';

export function getRounds() {
  var token = localStorage.getItem("jwt");
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
     return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
 }).join(''));
 var parsed = JSON.parse(jsonPayload);
  let id = parsed.sub;
  const url = `/api/users/${id}/rounds`
  return (dispatch) => {
    dispatch({ type: 'LOADING_ROUNDS' });
    let token = "Bearer " + localStorage.getItem("jwt");
    fetch(url, {
      method: 'GET',
      headers: {
        "Authorization":`${token}`
      }
    })
      .then(response => response.json())
      .then(rounds => dispatch({ type: 'GET_ROUNDS', payload: rounds }));
  };
}

export function addRound(user_id, data) {
  const url = `/api/users/${user_id}/rounds`
  return(dispatch) => {
    dispatch({type: 'SENDING_ROUND'});
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    })
    .then(response => response.json())
    .then(round => dispatch({type: 'SENT_ROUND', payload: round}))
    .catch(err => console.log(err))
  }
}

export function deleteRound(user_id, id) {
  const url = `/api/users/${user_id}/rounds/${id}`
  return(dispatch) => {
    dispatch({type: 'DELETING_ROUND'});
    fetch(url, {
      method: 'DELETE'
      }
    )
    .then(response => response.json())
    .then(payload => dispatch({type: 'DELETED_ROUND', payload: payload}))
    .catch(err => console.log(err))
  }
}

export function editRound(id) {
  return(dispatch) => {
    dispatch({type: 'EDITING_ROUND', payload: id});
  }
}

export function updateRound(user_id, id, data) {
  const url = `/api/users/${user_id}/rounds/${id}`
  return(dispatch) => {
    dispatch({type: 'SENDING_ROUND'});
    fetch(url, {
      method: 'PUT',
      body: JSON.stringify({score: data.newScore, putts: data.newPutts}),
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    }).then(response => response.json())
    .then(round => dispatch({type: 'UPDATED_ROUND', payload: round}))
    .catch(err => console.log(err))
  }
}
