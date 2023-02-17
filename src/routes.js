import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './componentes/Menu'
import Inicio from './paginas/Inicio/inicio';
import Sobre from './paginas/Sobre/Sobre';




function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/sobremim' element={<Sobre />}/>
        <Route path='*' element={<div>Página não encontrada</div>}/>
      </Routes>
    </BrowserRouter>
  )
  
}

export default AppRoutes;
