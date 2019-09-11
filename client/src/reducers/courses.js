export default function coursesReducer(state = {
  loading: false,
  courses: [
    {
      name: '',
      city: '',
      state: '',
      slope: 0,
      rating: 0
    }
  ]
}, action) {
  switch (action.type) {
    case "LOADING_COURSES":
      return {loading: true, courses: state.courses}

    case "GET_COURSES":
      return {loading: false, courses: action.payload}

      case "SENDING_COURSE":
        return {loading: true, courses: state.courses}

      case "SENT_COURSE":
        return {loading: false, courses: [...state.courses, action.payload]}
    default:
      return state;
  }
};
