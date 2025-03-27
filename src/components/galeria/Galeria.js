import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "lightbox2/dist/css/lightbox.min.css";
import "lightbox2/dist/js/lightbox-plus-jquery.min.js";
import "./Galeria.css";

// Lista de imagens da galeria
const galleryImages = [
  "https://i.pinimg.com/736x/56/73/b4/5673b40dee9a03835edb7488653507a1.jpg",
  "https://i.pinimg.com/1200x/44/bb/f0/44bbf07edcc1c10e64f83663cea6a42a.jpg",
  "https://i.pinimg.com/1200x/d1/3f/c8/d13fc88293933fb41dc60d60638d0cda.jpg",
  "https://i.pinimg.com/1200x/08/ec/31/08ec316e3f15d8708b1e7dbb1a0d8c47.jpg",
  "https://i.pinimg.com/1200x/07/ea/32/07ea32b27b810333c40ab5e719f57ec2.jpg",
  "https://i.pinimg.com/1200x/07/f0/0a/07f00a8f026ac25c60eef2ff15684c66.jpg",
  "https://i.pinimg.com/1200x/16/af/3a/16af3a1d60b45f59afa81d872e162ecc.jpg",
  "https://i.pinimg.com/1200x/14/10/77/141077e06d12c82ee4ad62e972d2d72d.jpg",
  "https://i.pinimg.com/1200x/7d/81/2d/7d812d57de0a6f2dec192f73787ad0ac.jpg",
  "https://i.pinimg.com/1200x/2a/2d/b6/2a2db677f65fd9531ac3baaef3a5efe6.jpg",
  "https://i.pinimg.com/1200x/62/cb/64/62cb64dd9c8c82eadcc4b407c167b4d7.jpg",
  "https://i.pinimg.com/1200x/1d/96/0c/1d960ca78ce18cf3133956e8999ff64f.jpg"
];

function Gallery() {
  return (
    <div className="container mt-5" id="galeria" style={{ paddingTop: '110px', marginTop: '-110px' }}>
      <h2 className="text-center fw-bold mb-4">Galeria de Fotos</h2>
      <div className="row g-4">
        {galleryImages.map((image, index) => (
          <div className="col-md-3 col-sm-6" key={index}>
            <a href={image} data-lightbox="galeria" data-title={`Imagem ${index + 1}`}>
              <div className="card shadow-lg border-0 overflow-hidden">
                <img
                  src={image}
                  alt={`Imagem ${index + 1}`}
                  className="img-fluid rounded gallery-img" // A classe gallery-img agora gerencia o estilo
                />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
