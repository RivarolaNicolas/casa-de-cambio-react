import './App.css';
import Api from './components/Api';

function App() {
  return (
    <div className="App">
      <Api date={'2010-01-12'} baseCurrency={'EUR'} />
    </div>
  );
}

export default App;
