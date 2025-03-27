import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css"; 


const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', 
  });
};

function NavbarComponent() {
  return (
    
    <Navbar expand="lg" fixed="top" className="navbar-custom mt-0 fs-3" >
      <div className="promo">
        <p>Aproveite 15% de desconto somente este mês!</p>
      </div>
      <Container>
        <Navbar.Brand href="/" className="py-0 ">          
          <img src="./images/logo (1).png" alt="Logo" width="250" height="100" style={{ objectFit: 'cover' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto gap-4 ">
            <Nav.Link href="#sobre">Sobre</Nav.Link>
            <Nav.Link href="#produtos">Produtos</Nav.Link>
            <Nav.Link href="#galeria">Galeria</Nav.Link>
            <Nav.Link href="#depoimentos">Depoimentos</Nav.Link>
            <Nav.Link href="#contato">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

        {/* Botão de voltar ao topo com seta */}
        <button className="back-to-top" onClick={scrollToTop}>
        <i className="fas fa-arrow-up"></i> {/* Ícone de seta para cima */}
      </button>
    </Navbar>
  );
}

export default NavbarComponent;