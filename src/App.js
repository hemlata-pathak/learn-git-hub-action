import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" data-testid="custom-element">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          deploy in production chutiya PRODUCTION_DOMAIN
        </a>
      </header>
    </div>
  );
}

export default App;
