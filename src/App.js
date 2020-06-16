import React from 'react';
import Header from './components/Header'
import Balance from './components/Balance'
import ExpenceIncome from './components/ExpenceIncome'
import History from './components/History'
import AddTransactions from './components/AddTransactoins'

import {GlobalProvider} from './GlobalContext'

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <div className="main">
          <Header /> 
          <hr />
          <Balance />
          <hr />
          <ExpenceIncome />
          <hr />
          <History />
          <hr />
          <AddTransactions />
          </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
