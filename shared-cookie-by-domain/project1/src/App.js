import Cookies from 'js-cookie';
import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    Cookies.set('name', 'Judith Huang', { domain: 'judith.com' });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          this is project1, react port is 3001
        </p>
      </header>
    </div>
  );
}

export default App;
