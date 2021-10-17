const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

export default function myReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'FUTURE_ACTION':
    return [...state, action.value];
  default:
    return state;
  }
}
