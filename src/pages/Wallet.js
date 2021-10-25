import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRequisition, fetchDescriptions, addAction } from '../actions';
import Header from './Header';
import ButtonExpenses from '../components/ButtonExpenses';
import InputExpenses from '../components/InputExpenses';
import SelectCurrencies from '../components/SelectCurrencies';
import SelectMethod from '../components/SelectMethod';
import SelectTag from '../components/SelectTag';
import AreaDescription from '../components/AreaDescription';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      total: 0,
    };
    this.handleChanges = this.handleChanges.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.calculateQuote = this.calculateQuote.bind(this);
  }

  componentDidMount() {
    const { requisitionCurrencies } = this.props;
    requisitionCurrencies();
  }

  componentDidUpdate(prevProps) {
    const { expenses } = this.props;

    if (expenses !== prevProps.expenses) {
      this.calculateQuote();
    }
  }

  handleChanges({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { value, currency, method, tag, description } = this.state;
    const { accExpenses } = this.props;
    const saveState = {
      value,
      currency,
      method,
      tag,
      description,
    };
    accExpenses(saveState);
  }

  calculateQuote() {
    const { expenses } = this.props;
    const saveTotalExpenses = expenses.reduce((acc, current) => {
      acc += current.value * current.exchangeRates[current.currency].ask;
      return acc;
    }, 0);
    this.setState({
      total: Math.round(saveTotalExpenses * 100) / 100,
    });
  }

  render() {
    const { value, currency, method, tag, description, total } = this.state;
    return (
      <div>
        <section>
          <Header
            total={ total }
          />
        </section>
        <div>
          <header>
            <form onSubmit={ this.handleSubmit }>
              <InputExpenses
                handleChanges={ this.handleChanges }
                value={ value }
              />
              <SelectCurrencies
                handleChanges={ this.handleChanges }
                currency={ currency }
              />
              <SelectMethod
                handleChanges={ this.handleChanges }
                method={ method }
              />
              <SelectTag
                handleChanges={ this.handleChanges }
                tag={ tag }
              />
              <AreaDescription
                handleChanges={ this.handleChanges }
                description={ description }
              />
              <ButtonExpenses />
            </form>
          </header>
        </div>
      </div>
    );
  }
}

Wallet.propTypes = {
  requisitionCurrencies: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
  accExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  requisitonCurrencies: () => dispatch(fetchRequisition()),
  accExpenses: (payload) => dispatch(fetchDescriptions(payload)),
  addEmail: (payload) => dispatch(addAction(payload)),
  requisitionCurrencies: () => dispatch(fetchRequisition()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
