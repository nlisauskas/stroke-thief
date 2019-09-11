export default function usersReducer(state = {
  loading: false,
  user:
    {
      id: 0,
      name: '',
      handicap: 0,
      hometown: '',
      isEditing: false
    },
  loggedIn: false,
  logInError: false,
  signUpError: false,
  signUpSuccess: false
}, action) {
  switch (action.type) {
    case "LOG_IN_SUCCESS":
        return {loading: false, user: {id: action.payload}, loggedIn: true}

    case "LOG_OUT":
      return {loading: false, user: state.user, loggedIn: false}

    case "LOGGING_IN":
      return {loading: true, user: state.user, loggedIn: false}

    case "LOADING_USERS":
      return {loading: true, user: state.user, loggedIn: true}

    case "GET_USERS":
      return {loading: false, user: action.payload, loggedIn: state.loggedIn}

    case 'UPDATED_USER':
      return {loading: false, user: state.user, sessionUser:
           {...state.user,
           name: action.payload.name,
           age: action.payload.age,
           hometown: action.payload.hometown,
           isEditing: !state.user.isEditing}
    }
    case "SENT_ROUND":
      return {loading: false, user: {...state.user, handicap: action.payload.user.handicap}, loggedIn: state.loggedIn}
    case 'UPDATED_ROUND':
      return {loading: false, user: {...state.user, handicap: action.payload.user.handicap}, loggedIn: state.loggedIn}
    case "DELETED_ROUND":
      return {loading: false, user: {...state.user, handicap: action.payload.handicap}, loggedIn: state.loggedIn}
    case 'LOG_IN_ERROR':
      return {loading: false, user: state.user, loggedIn: state.loggedIn, logInError: true}
      case "SIGN_UP_SUCCESS":
        return {loading: false, user: state.user, loggedIn: state.loggedIn, logInError: false, signUpError: false, signUpSuccess: true}
      case 'SIGN_UP_ERROR':
        return {loading: false, user: state.user, loggedIn: state.loggedIn, signUpError: true}
    default:
      return state;
  }
};
