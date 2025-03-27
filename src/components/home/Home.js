import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; 
import './Home.css'; 

function Home() {
  return (
    <div className="container-fluid p-0 ">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="https://i.pinimg.com/1200x/f8/b4/02/f8b402d99b5ddf2f4489489b936c05fd.jpg" 
            alt="Primeira imagem"
          />
          <Carousel.Caption>
            <h3 className="custom-caption">Festa dos Sonhos</h3>
            <p>Transformamos seu evento em um momento inesquecível.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="https://i.pinimg.com/1200x/3c/b6/6c/3cb66cf7b9b12734fb94d9fc9f309b28.jpg" 
            alt="Segunda imagem"
          />
          <Carousel.Caption>
            <h3 className="custom-caption">Decoração Encantadora</h3>
            <p>Cada detalhe pensado para encantar você e seus convidados.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="https://i.pinimg.com/1200x/5e/2d/e6/5e2de6fe18a4c78e481bafee8e764f68.jpg" 
            alt="Terceira imagem"
          />
          <Carousel.Caption>
            <h3 className="custom-caption">Brinquedos e Diversão</h3>
            <p>A diversão dos pequenos é garantida com nossos brinquedos exclusivos.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
