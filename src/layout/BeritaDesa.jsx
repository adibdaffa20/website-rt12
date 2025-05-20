import React from 'react'
import { useNavigate } from 'react-router-dom'
import { beritaList } from '../data/BeritaList.jsx'
import {
  IconCalendar,
  IconUser,
  IconEye,
} from '@tabler/icons-react';
import '../style/BeritaDesa.css';

import { motion } from "framer-motion";


const BeritaDesa = () => {
  const navigate = useNavigate()

  const handleCardClick = (id) => {
  navigate(`/berita/${id}`)
}

  return (
    <div className="berita-desa">
     
        <h2>Berita Desa</h2>
        <p>Menyajikan informasi terbaru tentang peristiwa, berita terkini, dan artikel-artikel jurnalistik dari Desa  </p>
     
        <div className="row">
          {beritaList.map((berita) => (
            <div className="col-md-4 mb-3" key={berita.id}>
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
                <div className="card-body">
                  <h5 className="card-title">{berita.title}</h5>
                  <p className="card-text">
                    {berita.desc.length > 30 ? berita.desc.substring(0, 30) + "..." : berita.desc}
                  </p>
                  <div className="info d-flex justify-content-between align-items-center small mt-2">
                    <div className="d-flex align-items-center me-2">
                      <IconCalendar size={16} className="me-1" />
                      <span>{berita.date}</span>
                    </div>
                    <div className="d-flex align-items-center me-2">
                      <IconUser size={16} className="me-1" />
                      <span>{berita.author}</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <IconEye size={16} className="me-1" />
                      <span>{berita.views}x</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
    
    </div>
  )
}

export default BeritaDesa
