export default function roundsReducer(state = {
  loading: false,
  rounds: [
    {
      id: 0,
      courseName: '',
      score: 0,
      putts: 0,
      course: {
        name: ''
      },
      isEditing: false
    }
  ]
}, action) {
  switch (action.type) {
    case "LOADING_ROUNDS":
      return {loading: true, rounds: state.rounds}

    case "GET_ROUNDS":
      return {loading: false, rounds: action.payload}
      case "SENDING_ROUND":
       return {loading: true, rounds: state.rounds}
       case "SENT_ROUND":
       return {loading: false, rounds: [...state.rounds, {
         id: action.payload.round.id,
         courseName: action.payload.course.name,
         score: action.payload.round.score,
         putts: action.payload.round.putts,
         course: {
           name: action.payload.course.name
         }}]}

     case "DELETING_ROUND":
     return {loading: true, rounds: [...state.rounds]}
     case "DELETED_ROUND":
     
     return {loading: false, rounds: state.rounds.filter(round => round.id !== action.payload.id)}

   case "EDITING_ROUND":
   return {loading: false, rounds: state.rounds.map((round) => round.id === action.payload ? {...round, isEditing:!round.isEditing}:round)}
    case 'UPDATED_ROUND':
    return {loading: false, rounds: state.rounds.map((round)=>{
      if(round.id === action.payload.round.id) {
        return {
           ...round,
           score:action.payload.round.score,
           putts:action.payload.round.putts,
           isEditing: !round.isEditing
        }
      } else return round;
    })}

    default:
      return state;
  }
};
