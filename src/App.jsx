import logo from './logo.svg';
import './App.css';
import Mensajes from './views/Mensajes.view'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>ReactJS | Imagina Formación</h1>
      </header>
      <div className="App-body">
        <Mensajes />
      </div>
    </div>
  );
}

export default App;
