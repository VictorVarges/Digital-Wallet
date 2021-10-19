import React from 'react';

class FormWallet extends React.Component {
  render() {
    // const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    // const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <header>
        <form>
          <label htmlFor="expense">
            Valor
            <input id="expense" type="number" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select id="currency" name="currency">
              <option>BRL</option>
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento
            <select id="method" name="method">
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag" name="tag">
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <label htmlFor="descrition">
            Descrição
            <textarea id="descrition" name="descrition" type="text" />
          </label>
          <button type="button" name="button">Adicionar despesa</button>
        </form>
      </header>
    );
  }
}

export default FormWallet;
