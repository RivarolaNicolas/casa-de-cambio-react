import './App.css';
import Header from './components/Header';
import Api from './components/Api';
import React, { useState } from 'react';

function App() {
  const [baseCurrency, setBaseCurrency] = useState('');
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <Header baseCurrency={baseCurrency} setBaseCurrency={setBaseCurrency} data={data} />
      <Api
        date={data == true ? data.date : 'latest'}
        baseCurrency={baseCurrency}
        setBaseCurrency={setBaseCurrency}
        data={data}
        setData={setData}
      />
    </div>
  );
}

export default App;
