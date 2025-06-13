import React from 'react';
import '../../style/LaporanKeuangan.css';

function LaporanKeuangan() {
  const pdfPath = "/img/laporankeuangan.pdf"; // path relatif dari folder public

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <h2 className="text-center mb-4">Laporan Keuangan RT 12</h2>
          <div className="card shadow-sm text-center p-4">
            <p className="mb-4">Klik tombol di bawah ini untuk mengunduh file PDF Laporan Keuangan RT 12.</p>
            <a href={pdfPath} download className="btn custom-download-btn">
             Unduh PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LaporanKeuangan;
