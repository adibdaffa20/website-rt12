import React from 'react';
import { dataperkawinanList } from '../../data/InfoGrafis.jsx'; 

function JumlahPerkawinan() {
  return (
    <div className='perkawinan'>
      <h2 className="mt-2">
        Jumlah Penduduk Berdasarkan Perkawinan
      </h2>
      <div className="card-body">
        <div className="row">
          {dataperkawinanList.map((item, index) => (
            <div className="col-md-6 mt-3" key={index}>
              <div className="card">
                <div className="row p-3">
                  <div className="col-md-3 d-flex justify-content-center">
                    <img
                     
                      src={item.icon}
                      alt="foto"
                    />
                  </div>
                  <div className="col-md-8 text-center">
                     <h3>{item.jumlah}</h3>
                    <h6>{item.status}</h6>
                   
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JumlahPerkawinan;
