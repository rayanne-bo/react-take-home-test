import './App.css';
import ComputationOptions from './Components/ComputationOptions/ComputationOptions';

function App() {
  // Feel free to remove the contents of the header tag to make more room for your code
  return (
    <div className="App">
      <header className="App-header">
        <img src={'https://cdn.syro.co/static/app/img/syroco-logo-01.94520e9a990e.svg'} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <ComputationOptions />
    </div>
  );
}

export default App;
