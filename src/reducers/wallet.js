const WALLET = 'WALLET';

const INITIAL_WALLET = {
  currencies: [],
  expenses: [],
};

export default function Wallet(state = INITIAL_WALLET, action) {
  switch (action.type) {
  case WALLET:
    return { ...state, expenses: action.payload };
  default:
    return state;
  }
}
