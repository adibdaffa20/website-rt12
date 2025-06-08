import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import "../style/Coursel.css";

const Coursel = () => {
  return (
    <div className="carousel-container mt-6">
      <Carousel fade controls={true} indicators={true}>
        {[1, 2, 3].map((item, idx) => (
          <Carousel.Item key={idx}>
            <div className="carousel-overlay">
              <img
                className="d-block w-100 img-fluid"
                src={`img/desa${item}.jpg`} 
                alt={`Slide ${idx + 1}`}
              />
              <div className="carousel-content">
                
                <h2 className="carousel-text">Selamat Datang di RT 12 RW 06 Sedati Gede</h2>
                
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Coursel;
