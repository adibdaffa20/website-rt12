import React from 'react';

function BukuPedoman() {
  const pdfPath = "/img/bukupedoman.pdf"; // path relatif dari folder public

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <h2 className="text-center mb-4">Buku Pedoman Warga RT 12</h2>
          <div className="card shadow-sm">
            <div className="card-body">
              <embed
                src={pdfPath}
                type="application/pdf"
                width="100%"
                height="600px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BukuPedoman;
