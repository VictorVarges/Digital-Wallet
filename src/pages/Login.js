import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <input
          data-testid="email-input"
          type="email"
        />
        <input
          type="password"
          data-testid="password-input"
        />
        <button type="button">
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
