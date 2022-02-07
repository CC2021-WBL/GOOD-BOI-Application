export const exercisesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PENALTY':
      return [...state, (action.penaltyPoints = action.penaltyPoints - 10)];
    case 'DISQUALIFIED':
      return [...state, (action.specialState = 'dyskwalifikacja')];
    case 'ADD_SECOND_PENALTY': //tylko jesli juz jest przyznane penaltyPoints = -10
      return [...state, (action.specialState = 'dyskwalifikacja')];
    default:
      return state;
  }
};
