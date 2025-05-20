import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { beliList } from '../data/BeliList.jsx';
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
import Card from "react-bootstrap/Card";
import {
  IconTag,
  IconUsers,
  IconUser,
  IconBrandWhatsapp

} from '@tabler/icons-react';

import "../style/Beli.css";
import Aduan from './Aduan.jsx';
import EmergencyWa from './EmergencyWa.jsx';
const BeliDetail = () => {
   const navigate = useNavigate()
  const handleCardClick = (id) => {
    navigate(`/beli/${id}`)
  }
  const { id } = useParams();
  const product = beliList.find((item) => item.id.toString() === id);

  if (!product) {
    return <div className="container mt-5">Produk tidak ditemukan</div>;
  }

  // Buat link WhatsApp
  const whatsappLink = `https://wa.me/${product.whatsapp.replace(/^0/, "62")}?text=Halo%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(product.name)}`;


  return (
    <div>
      <Navbar />
      <div className="container beli-detail mt-5 pt-5 mb-5">
        <div className="row">
          <div className="col-md-10 mb-5">
            <div className="card p-4">
              <div className="row g-4">
                {/* Gambar Produk */}
                <div className="col-md-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="img-fluid rounded shadow-sm"
                  />
                </div>

                {/* Detail Produk */}
                <div className="col-md-6 d-flex flex-column justify-content-between">
                  <div>
                    <h3 className="fw-bold mb-3">{product.name}</h3>
                    <p className="text-muted">{product.description}</p>

                    <h4 className="fw-semibold d-flex align-items-center">

                      <strong className="ms-2"> Rp  {product.harga}</strong>
                    </h4>

                    <div className="d-flex flex-wrap gap-3 mt-3">
                      <div className="d-flex align-items-center">
                        <IconTag size={20} className="me-2 text-primary" />
                        <strong className="ms-1">{product.kategori}</strong>
                      </div>
                      <div className="d-flex align-items-center">
                        <IconUsers size={20} className="me-2 text-warning" />
                        Qty: <strong className="ms-1">{product.jumlah}</strong>
                      </div>
                      <div className="d-flex align-items-center">
                        <IconUser size={20} className="me-2 text-info" />
                        <strong className="ms-1">{product.penjual}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Tombol WhatsApp */}
                  <div className="mt-4 ">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success d-flex align-items-center justify-content-center gap-2"
                    >
                      <IconBrandWhatsapp size={20} />
                      Hubungi Penjual via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="col-md-2 ">
<h4>Produk Lainya</h4>
            <div className="row">
              {[...beliList].slice(-5).reverse().map((product) => (
                <div key={product.id} className="col-12 col-sm-12 col-lg-12 mb-4">
                  <Card
                    onClick={() => handleCardClick(product.id)}
                    style={{ cursor: "pointer" }}
                    className="h-100 cursor-pointer"
                  >
                    <Card.Img
                      variant="top"
                      src={product.image}
                      alt={product.name}
                      
                    />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
      <Footer />
        <Aduan />
            <EmergencyWa />
    </div>
  );
};

export default BeliDetail;
