import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./Sobre.css";



function AboutUs() {
return (
    <div
        className="container-fluid mt-5"
        id="sobre"
        style={{ paddingTop: '110px', marginTop: '-110px' }} 
    >
        <div className="row">
            <div className="col-12">
                <div className="card mb-4">
                    <div className="row g-0">                       
                        <div className="col-md-4">
                            <img
                                src="https://i.pinimg.com/1200x/36/80/1e/36801e2a52dfc817bf1d6b815519d244.jpg"
                                alt="Equipe"
                                className="img-fluid w-100"
                                style={{ height: '400px', objectFit: 'cover' }} 
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title fs-1 fw-bold">Sobre Nós</h5>
                                <p className="card-text fs-4">
                                    Somos uma equipe apaixonada por criar experiências únicas! Nosso foco é oferecer serviços excepcionais e personalizados para cada evento, com a missão de transformar sonhos em realidade. Cada detalhe do nosso trabalho é pensado para garantir a melhor experiência para nossos clientes.
                                </p>
                                <p className="card-text fs-4">
                                    Se você está buscando uma maneira especial de celebrar momentos únicos, nós somos a escolha certa. De festas infantis a eventos corporativos, trabalhamos para superar suas expectativas. Nosso compromisso é com a qualidade, criatividade e com a felicidade de cada cliente.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* 3 Cards Animados com ícones */}
        <div className="row justify-content-center mt-5">
            {/* Card 1 */}
            <div className="col-md-4 mb-4">
                <div className="card shadow-lg hover-zoom">
                    <div className="card-body text-center">
                        <i className="fas fa-hands-helping" style={{ fontSize: '50px', color: '#007bff' }}></i>
                        <h5 className="mt-3">Solidariedade</h5>
                        <p>Acreditamos que juntos podemos transformar qualquer desafio em oportunidade.</p>
                    </div>
                </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4 mb-4">
                <div className="card shadow-lg hover-zoom">
                    <div className="card-body text-center">
                        <i className="fas fa-smile" style={{ fontSize: '50px', color: '#28a745' }}></i>
                        <h5 className="mt-3">Alegria</h5>
                        <p>Buscamos sempre um ambiente positivo e contagiante para todos ao nosso redor.</p>
                    </div>
                </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4 mb-4">
                <div className="card shadow-lg hover-zoom">
                    <div className="card-body text-center">
                        <i className="fas fa-cogs" style={{ fontSize: '50px', color: '#ffc107' }}></i>
                        <h5 className="mt-3">Inovação</h5>
                        <p>Estamos sempre em busca de soluções criativas para melhorar o que fazemos.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
);
}



export default AboutUs;
