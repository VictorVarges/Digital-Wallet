import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SelectCurrencies extends Component {
  render() {
    const { handleChanges, currency, currencies } = this.props;
    return (
      <label htmlFor="currency">
        Moeda
        <select
          id="currency"
          name="currency"
          onChange={ handleChanges }
          value={ currency }
        >
          { currencies.map((option, i) => (
            <option value={ option } key={ i }>
              { option }
            </option>
          )) }
        </select>
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

SelectCurrencies.propTypes = {
  handleChanges: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, null)(SelectCurrencies);
