import React from "react";
import { useNavigate } from "react-router-dom";
import { beliList } from "../data/BeliList.jsx";
import Card from "react-bootstrap/Card";
import { IconUser, IconTags } from "@tabler/icons-react";
// import { motion } from "framer-motion";

// import { zoomInOnScroll } from "../animasi/animations.jsx";
const BeliDesa= () => {
  const navigate = useNavigate()
  const handleCardClick = (id) => {
  navigate(`/beli/${id}`)
  }


  return (
    <div className="beli-desa">
      {/* <motion.div {...zoomInOnScroll}> */}
        <h2 className="mt-5">UMKM RT 12</h2>
              <p>Layanan yang disediakan promosi produk UMKM RT 12 sehingga mampu meningkatkan perekonomian masyarakat Desa</p>
        <div className="row">
          {beliList.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-lg-4 mb-3 mt-5">
              
              <Card
                onClick={() => handleCardClick(product.id)}
                style={{ cursor: "pointer" }}
                className="h-100 cursor-pointer"
              >
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-success">
                    Rp {product.harga}
                  </Card.Subtitle>
                  <Card.Text>{product.description}</Card.Text>
                  <div className="info d-flex justify-content-between text-muted">
                    <small>Qty: {product.jumlah}</small>
                    <small>
                      <IconTags /> {product.kategori}
                    </small>
                    <small>
                      {" "}
                      <IconUser /> {product.penjual}
                    </small>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      {/* </motion.div> */}
    </div>
  );
}

export default BeliDesa