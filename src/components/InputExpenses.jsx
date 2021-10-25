import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputExpenses extends Component {
  render() {
    const { handleChanges, value } = this.props;

    return (
      <label htmlFor="expense">
        Valor
        <input
          id="expense"
          name="value"
          type="number"
          value={ value }
          onChange={ handleChanges }
        />
      </label>
    );
  }
}

InputExpenses.propTypes = {
  handleChanges: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputExpenses;
