
import './App.css';
import Home from './components/home/Home.js';
import NavbarComponent from './components/navbar/Navbar.js';
import Sobre from './components/sobre/Sobre.js';
import Produtos from './components/produtos/Produtos.js';
import Galeria from './components/galeria/Galeria.js';
import Depoimentos from './components/depoimentos/Depoimentos.js'
import Contato from './components/contato/Contato.js';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Home />
      <Sobre/>
      <Produtos />
      <Galeria />
      <Depoimentos />
      <Contato />
    </div>
  );
}

export default App;
