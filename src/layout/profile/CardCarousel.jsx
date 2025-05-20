import React, { useRef } from 'react';
import { jabatanList } from '../../data/ProfileList'; // sesuaikan path-nya
import '../../style/CardJabatan.css';
import { motion } from "framer-motion";
import { zoomInOnScroll } from "../../animasi/animations.jsx";
const CardCarousel = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = current.offsetWidth * 0.5;
    if (direction === 'left') {
      current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="jabatan">
      <div className="carousel-wrapper">
        <motion.div {...zoomInOnScroll}>
        <button className="nav-button left" onClick={() => scroll('left')}>
          &#10094;
        </button>

        <div className="carousel-container" ref={scrollRef}>
          <div className="carousel-track">
            {jabatanList.map((item, index) => (
              <div className="carousel-card" key={index}>

                <div className="card text-center">
                  <img
                    src={item.image}
                    alt={item.nama}
                    className="card-img-top mx-auto"
                  />
                  <div className="card-body">
                    <h6 className="card-title">{item.nama}</h6>
                    <p className="jabatan">{item.jabatan}</p>
                    <p className="priode">{item.tahun}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="nav-button right" onClick={() => scroll('right')}>
          &#10095;
        </button>

        </motion.div>
      </div>
    </div>
  );
};

export default CardCarousel;
