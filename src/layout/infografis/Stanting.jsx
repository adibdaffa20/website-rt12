import React from 'react';
import '../../style/ProgramKerja.css';

function ProgramKerja(){
  const pdfPath = "/img/programkerja-rt12.pdf"; // path relatif dari folder public

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <h2 className="text-center mb-4">Program Kerja RT 12

          </h2>
          <div className="card shadow-sm text-center p-4">
            <p className="mb-4">Klik tombol di bawah ini untuk mengunduh file PDF Program Kerja RT 12.</p>
            <a href={pdfPath} download className="btn custom-download-btn">
             Unduh PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramKerja;
