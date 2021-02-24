import './App.css';
import Header from './components/Header';
import MainApp from './components/MainApp';
import React, { useState } from 'react';

function App() {
  const [baseCurrency, setBaseCurrency] = useState('');
  const [currencies, setCurrencies] = useState([]);
  const [date, setDate] = useState('');

  return (
    <div className="App">
      <Header date={date} setDate={setDate} />
      <MainApp
        date={date ? date : 'latest'}
        setDate={setDate}
        baseCurrency={baseCurrency}
        setBaseCurrency={setBaseCurrency}
        currencies={currencies}
        setCurrencies={setCurrencies}
      />
    </div>
  );
}

export default App;
