import './App.css';
import Header from './components/Header';
import MainApp from './components/MainApp';
import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

function App() {
  const [baseCurrency, setBaseCurrency] = useState('EUR');
  const [currencies, setCurrencies] = useState([]);
  const [date, setDate] = useState('');

  return (
    <div className="App">
      <Grid container direction="row" justify="center" alignItems="center">
        <Header item xs={12} date={date} setDate={setDate} />
        <MainApp
          item
          xs={12}
          date={date ? date : 'latest'}
          setDate={setDate}
          baseCurrency={baseCurrency}
          setBaseCurrency={setBaseCurrency}
          currencies={currencies}
          setCurrencies={setCurrencies}
        />
      </Grid>
    </div>
  );
}

export default App;
