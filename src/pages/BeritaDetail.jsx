import React from 'react';
import { useParams } from 'react-router-dom';
import { beritaList } from '../data/BeritaList.jsx';
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
import "../style/BeritaDesa.css";

import { useNavigate } from 'react-router-dom'

import {
  IconCalendar,
  IconUser,
  IconEye,
} from '@tabler/icons-react';
import '../style/BeritaDesa.css';
import Aduan from './Aduan.jsx';
import EmergencyWa from './EmergencyWa.jsx';
const BeritaDetail = () => {
  const navigate = useNavigate()

  const handleCardClick = (id) => {
    navigate(`/berita/${id}`)
  }



  const { id } = useParams();
  const berita = beritaList.find((item) => item.id.toString() === id);

  if (!berita) {
    return <div className="container mt-5">Berita tidak ditemukan</div>;
  }

  return (
    <div className="berita-detail">
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-10">
            <div className="card p-3 mt-5 mb-5">
              <h2>{berita.title}</h2>
              <div className="d-flex justify-content-between text-muted small mb-3">
                <div className="d-flex align-items-center gap-1">
                  <span><IconUser size={16} /></span>
                  <strong>{berita.author}</strong>
                </div>
                <div className="d-flex align-items-center gap-1">
                  <span><IconCalendar size={16} /></span>
                  <strong>{berita.date}</strong>
                </div>
                <div className="d-flex align-items-center gap-1">
                  <span><IconEye size={16} /></span>
                  <strong>{berita.views}x</strong>
                </div>
              </div>

              <img src={berita.image} alt={berita.title} className="img-fluid mb-4" />
              <p className="formatted-paragraph">{berita.desc}</p>

            </div>
          </div>


          <div className="col-md-2 mt-5 mb-5 card">
            <div className="terbaru pt-3">
              <h4>Berita Terbaru</h4>
              <div className="row">
                {[...beritaList].slice(-5).reverse().map((berita) => (
                  <div className="col-md-12 mb-1" key={berita.id}>
                    <div
                      className="card h-100"
                      onClick={() => handleCardClick(berita.id)}

                      style={{ cursor: 'pointer' }}
                    >
                      <img
                        src={berita.image}
                        className="card-img-top"
                        alt={berita.title}
                      />

                      <p className="card-title p-1">{berita.title}</p>



                    </div>
                  </div>
                ))}
              </div>
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

export default BeritaDetail;
