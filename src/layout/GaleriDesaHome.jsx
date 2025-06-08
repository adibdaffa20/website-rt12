import React from 'react'
import { galeriList } from '../data/GaleriList.jsx'
import "../style/GaleriDesa.css"
import { motion } from "framer-motion";

import { zoomInOnScroll, slideInLeftOnScroll } from "../animasi/animations.jsx";
const GaleriDesa = () => {
  const [selectedImage, setSelectedImage] = React.useState(null)

  const handleImageClick = (imageSrc, title) => {
    setSelectedImage({ src: imageSrc, title })
  }

  return (
    <div className="galeri-desa">
      <motion.div {...slideInLeftOnScroll}>
      <h2>Galeri RT</h2>
      <p>Menampilkan kegiatan-kegiatan yang berlangsung di RT 12</p>
      </motion.div>
      <motion.div {...zoomInOnScroll}>
      <div className="row">
        {[...galeriList].slice(-3).reverse().map((item) => (
          <div className="col-md-3 mb-3" key={item.id}>
            <img
              src={item.image}
              className="img-fluid rounded"
              alt={item.title}
              onClick={() => handleImageClick(item.image, item.title)}
              style={{ cursor: 'pointer' }}
            />
          </div>
        ))} 
      </div>
     </motion.div>

      {selectedImage && (
        <div
          className="modal"
          style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedImage.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedImage(null)}
                ></button>
              </div>
              <div className="modal-body text-center">
                <img
                  src={selectedImage.src}
                  className="img-fluid"
                  alt={selectedImage.title}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GaleriDesa
