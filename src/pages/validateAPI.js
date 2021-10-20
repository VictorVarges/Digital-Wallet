const fetchCurrencies = async () => {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const json = await request.json();
  const jsonArray = Object.keys(json);
  return jsonArray
    .filter((currencies) => currencies !== 'USDT' && currencies !== 'DOGE');
};

export default fetchCurrencies;
