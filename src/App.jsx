import logo from './logo.svg';
import './App.css';
import Mensajes from './views/Mensajes.view'
import { useSelector, useDispatch } from 'react-redux';
import { logOut, logIn } from './redux/actions';

function App() {
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  let controlLoggin = () => {
    if(isLogged) dispatch(logOut());
    else dispatch(logIn());
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>ReactJS | Imagina Formación</h1>
        <button className={(isLogged?"Vaciar":"Nuevo")}
                onClick={controlLoggin}>
          {(isLogged?"Log Out":"Log In")}
        </button>
      </header>
      <div className="App-body">
        <Mensajes />
      </div>
    </div>
  );
}

export default App;
