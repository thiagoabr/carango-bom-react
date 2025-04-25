import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from '../components/Menu';
import CadastroUsuario from '../pages/Usuario/CadastroUsuario';
import ListaUsuarios from '../pages/Usuario/ListaUsuario';
import Autenticacao from '../pages/Autenticacao';
import RotaPrivada from '../components/RotaPrivada';
import CadastroVeiculo from './Veiculo/CadastroVeiculo';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Menu />
        <div>
          <h1>Bem-vindo à nossa Loja Carango Bom!</h1>
          <p>Gerencie Veículos e Marcas de forma simples e eficiente.</p>
        </div>
        <Routes>
          <Route path='/' element={<Autenticacao />} />
          
          <Route path="/usuarios/cadastro" element={
            <RotaPrivada>
              <CadastroUsuario />
            </RotaPrivada>
          } />

          <Route path="/usuarios" element={
            <RotaPrivada>
              <ListaUsuarios />
            </RotaPrivada>
          } />

          <Route path="/veiculos/cadastro" element={
            <RotaPrivada>
              <CadastroVeiculo />
            </RotaPrivada>
          } />

          <Route path="*" element={<Autenticacao />} /> {}
        </Routes>
      </div>
    </Router>
  );
}
