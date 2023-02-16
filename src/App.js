import './App.css';
import Inicio from './paginas/Inicio/inicio';
import Sobre from './paginas/Sobre/Sobre';

console.log(window.location);
const paginas = window.location.pathname === '/' ? <Inicio /> : <Sobre />

function App() {
  return paginas
  
}

export default App;
