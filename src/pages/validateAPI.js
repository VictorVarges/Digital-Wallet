export const fetchCurrencies = async () => {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const json = await request.json();
  const jsonArray = Object.keys(json);
  return jsonArray
    .filter((currencies) => currencies !== 'USDT' && currencies !== 'DOGE');
};

export const descriptionCurrencies = async () => {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const json = await request.json();
  if (json.USDT) {
    delete json.USDT;
  }
  if (json.DOGE) {
    delete json.DOGE;
  }
  return json;
};
