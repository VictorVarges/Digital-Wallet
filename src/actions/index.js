export const LOGIN = 'LOGIN';
export const WALLET = 'WALLET';

export const addAction = (payload) => ({ type: LOGIN, payload });

export const addWallet = (payload) => ({ type: WALLET, payload });
