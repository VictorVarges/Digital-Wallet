import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectMethod extends Component {
  render() {
    const { handleChanges, method } = this.props;
    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          id="method"
          name="method"
          onChange={ handleChanges }
          value={ method }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

SelectMethod.propTypes = {
  handleChanges: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
};

export default SelectMethod;
