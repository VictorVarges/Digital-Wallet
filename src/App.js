import React from 'react';
import { Route } from 'react-router';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Route exact component={ Login } path="/" />
    </div>
  );
}

export default App;
