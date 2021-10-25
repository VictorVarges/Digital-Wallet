import { fetchCurrencies, descriptionCurrencies } from '../pages/validateAPI';

export const LOGIN = 'LOGIN';
export const WALLET = 'WALLET';
export const SAVE_CURRENCY = 'SAVE_CURRENCY';

export const addAction = (payload) => ({ type: LOGIN, payload });

export const addWallet = (payload) => ({ type: WALLET, payload });

const saveCurrencies = (payload) => ({ type: SAVE_CURRENCY, payload });

export const fetchRequisition = () => async (dispatch) => {
  const resultCurrencies = await fetchCurrencies();
  dispatch(saveCurrencies(resultCurrencies));
};

export const fetchDescriptions = (saveState) => async (dispatch) => {
  const exchangeRates = await descriptionCurrencies();
  dispatch(addWallet({ ...saveState, exchangeRates }));
};
