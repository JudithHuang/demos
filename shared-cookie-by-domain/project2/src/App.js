import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          this is project2, react port is 3002
        </p>
        <p>
          读取到的cookie是: {document.cookie}
        </p>
      </header>
    </div>
  );
}

export default App;
