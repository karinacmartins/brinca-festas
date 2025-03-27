import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Modal, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa6';


const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Enviar o e-mail usando o EmailJS
    emailjs
      .sendForm('service_0p75yc8', 'template_9krhmn7', e.target, '9fNOk1hXz04fqtCoi')
      .then(
        (result) => {
          alert('Mensagem enviada com sucesso! Vamos agendar a diversão!');
          // Limpar o formulário após o envio
          setFormData({
            nome: '',
            email: '',
            mensagem: ''
          });
        },
        (error) => {
          alert('Ocorreu um erro, tente novamente.');
          console.error(error.text);
        }
      );
  };

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const buttonStyle = {
    backgroundColor: '#4c85ff',     
    color: '#fff',
    
  };

  const iconStyle = {
    color: '#fff',
    fontSize: '50px',
  };

  return (
    <section id="contato" className="pt-5 mt-5" style={{ background: 'linear-gradient(to right,#ccd1ff,#4c85ff)', paddingTop: '110px', marginTop: '-110px' }}>
      <div className="container p-5">
        <h2 className="fw-bold my-4">Entre em Contato com o Brinca Festas!</h2>
        
        {/* Chamada para ação */}
        <p className="lead text-center mb-5">Nosso time está pronto para tornar sua festa inesquecível! Preencha o formulário ou entre em contato pelos canais abaixo.</p>

        {/* Formulário de Envio de Mensagem */}
        <form
          name="contato"
          onSubmit={handleSubmit}
          method="POST"
          className="mb-5"
        >
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">Nome</label>
            <input
              type="text"
              className="form-control"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">E-mail</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mensagem" className="form-label">Mensagem</label>
            <textarea
              className="form-control"
              id="mensagem"
              name="mensagem"
              rows="4"
              value={formData.mensagem}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn" style={buttonStyle}>Enviar</button>
        </form>

        {/* Informações de Contato Visíveis */}
        <div className="text-center mb-5">
          <p><strong>Telefone:</strong> (XX) XXXX-XXXX</p>
          <p><strong>E-mail:</strong> contato@brincafestas.com</p>
          <p><strong>Endereço:</strong> Rua Festa Alegre, 123, Cidade, Estado</p>
        </div>

        {/* Redes Sociais */}
        <div className="text-center">
          <p className="lead">Siga-nos nas redes sociais e acompanhe as novidades:</p>
          <div>
            <a href="https://wa.me/seunumerodetelefone" className="me-3" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp style={iconStyle} />
            </a>
            <a href="https://www.instagram.com/brincafestas" className="me-3" target="_blank" rel="noopener noreferrer">
              <FaInstagram style={iconStyle} />
            </a>
            <a href="https://www.facebook.com/brincafestas" target="_blank" rel="noopener noreferrer">
              <FaFacebook style={iconStyle} />
            </a>
          </div>
        </div>

        {/* Ícone para abrir o Modal */}
        <div className="my-4 text-center">
          <Button variant="info" onClick={handleShow} style={buttonStyle}>
            <FaMapMarkerAlt /> Ver Localização
          </Button>
        </div>

        {/* Modal com o Mapa */}
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Localização do Brinca Festas</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              title="Localização Brinca Festas"
            ></iframe>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose} style={buttonStyle}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      {/* Footer */}
      <footer className="text-white text-center py-3 mt-5" style={{ backgroundColor: '#4c85ff' }}>
        <p>&copy; 2025 Brinca Festas. Todos os direitos reservados.</p>
      </footer>
    </section>
  );
}

export default Contato;
