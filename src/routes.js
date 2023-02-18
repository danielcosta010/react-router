import PaginaPadrao from 'componentes/PaginaPadrao';
import Rodape from 'componentes/Rodape';
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
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path='sobremim' element={<Sobre />}/>
        </Route>

        <Route path='*' element={<div>Página não encontrada</div>}/>
      </Routes>

      <Rodape />
    </BrowserRouter>
  )
  
}

export default AppRoutes;
