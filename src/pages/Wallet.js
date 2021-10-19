import React from 'react';
import FormWallet from './FormWalllet';
import Header from './Header';

class Wallet extends React.Component {
  render() {
    // return <div>TrybeWallet</div>;
    return (
      <section>
        <Header />
        <FormWallet />
      </section>
    );
  }
}

export default Wallet;
