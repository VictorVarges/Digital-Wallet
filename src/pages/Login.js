import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addAction } from '../actions';

const MIN_CARACTERES_PASSWORD = 6;
const LOGIN_REGEX = /\S+@\S+\.\S+/;

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      email: event.target.value,
    });
  }

  render() {
    const { email, password } = this.state;
    const { addEmail } = this.props;
    return (
      <div>
        <input
          type="text"
          data-testid="email-input"
          value={ email }
          onChange={ this.handleChange }
          placeholder="email"
        />
        <input
          type="password"
          data-testid="password-input"
          value={ password }
          onChange={ (event) => this.setState({ password: event.target.value }) }
          placeholder="password"
        />
        {/* // utilizei este site como referência para utilizar o REGEX: https://www.kindacode.com/article/live-email-validation-in-react-with-regex/ */}
        <Link to="/carteira">
          <button
            disabled={ password.length < MIN_CARACTERES_PASSWORD
            || !LOGIN_REGEX.test(email) }
            type="button"
            onClick={ () => addEmail(email) }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  addEmail: (payload) => dispatch(addAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  addEmail: PropTypes.func.isRequired,
};
