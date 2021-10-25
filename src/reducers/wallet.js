import { SAVE_CURRENCY } from '../actions';

const WALLET = 'WALLET';

const INITIAL_WALLET = {
  currencies: [],
  expenses: [],
};

export default function wallet(state = INITIAL_WALLET, action) {
  switch (action.type) {
  case WALLET:
    return {
      // retorna estado anterior espalhado, depois crio uma chave expenses que é um array, onde espalha o seu estado anterior e adiciona um objeto ao array espalhando o objeto payload dentro dele (que é a minha expense) e acrescenta a esse objeto um ID (associado ao tamanho do array).
      // action.payload: action é um objeto e payload é a chave desse objeto que carrega o objeto expenses (que são as informações que eu preciso).
      ...state,
      expenses: [...state.expenses, { ...action.payload, id: state.expenses.length }] };
  case SAVE_CURRENCY:
    return { ...state, currencies: action.payload };
  default:
    return state;
  }
}
