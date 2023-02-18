import PaginaPadrao from 'componentes/PaginaPadrao';
import Post from 'paginas/Post';
import Rodape from 'componentes/Rodape';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './componentes/Menu'
import Inicio from './paginas/Inicio';
import Sobre from './paginas/Sobre';




function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path='sobremim' element={<Sobre />}/>
          <Route path='post/:id' element={<Post />}/>
        </Route>

        <Route path='*' element={<div>Página não encontrada</div>}/>
      </Routes>

      <Rodape />
    </BrowserRouter>
  )
  
}

export default AppRoutes;
