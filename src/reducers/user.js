import { LOGIN } from '../actions';

const INITIAL_LOGIN = {
  email: '',
};

export default function user(state = INITIAL_LOGIN, action) {
  switch (action.type) {
  case LOGIN:
    return { ...state, email: action.payload };
  default:
    return state;
  }
}
