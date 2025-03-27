import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Dados dos depoimentos
const testimonials = [
  {
    name: "Ana Souza",
    text: "Os brinquedos fizeram a festa das crianças! Tudo limpo, organizado e entregue no horário.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    name: "Carlos Mendes",
    text: "Excelente atendimento! O monitor infantil foi incrível, super atencioso com as crianças.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4.5,
  },
  {
    name: "Juliana Lima",
    text: "Aluguei a cama elástica e foi um sucesso! Com certeza irei alugar novamente.",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    rating: 5,
  },
];

function Testimonials() {
  // Configuração do carrossel
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="container my-5" id="depoimentos" style={{ paddingTop: '110px', marginTop: '-110px', paddingBottom: '100px' }}>
      <h2 className="text-center fw-bold mb-5">O que nossos clientes dizem</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index} 
            className="d-flex justify-content-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card shadow-lg p-4 text-center border-0" style={{ maxWidth: "500px" }}>
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="rounded-circle mb-3" 
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />
              <h5 className="fw-bold">{testimonial.name}</h5>
              <p className="text-muted">{testimonial.text}</p>
              <div className="text-warning">
                {"★".repeat(Math.floor(testimonial.rating))}{"☆".repeat(5 - Math.floor(testimonial.rating))}
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;
