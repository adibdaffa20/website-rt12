import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { datapekerjaanList } from '../../data/InfoGrafis.jsx';  // sesuaikan path

function JumlahPerkerjaan() {
  // Urutkan berdasarkan jumlah terbesar
  const top6Pekerjaan = [...datapekerjaanList]
    .sort((a, b) => b.jumlah - a.jumlah)
    .slice(0, 6);

  return (
    <div className="pekerjaan">
      <div className="card-body">
        <h2 className="mb-3">Berdasarkan Pekerjaan</h2>
        <div className="row">
          {/* List semua pekerjaan */}
          <div className="col-md-5 mt-3">
            <div
              style={{
                maxHeight: "300px",
                overflowY: "auto",
              }}
            >
              <ListGroup variant="flush">
                {datapekerjaanList.map((job, index) => (
                  <ListGroup.Item
                    key={index}
                    className="d-flex justify-content-between"
                  >
                    <span>{job.pekerjaan}</span>
                    <span className="fw-bold">{job.jumlah}</span>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </div>

          {/* Card 6 data tertinggi */}
          <div className="col-md-7 mt-3">
            <div className="row">
              {top6Pekerjaan.map((job, index) => (
                <div className="col-md-4 mb-3" key={index}>
                  <div className="card p-2 text-center">
                    <h3>{job.jumlah}</h3>
                    <h6>{job.pekerjaan}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JumlahPerkerjaan;
