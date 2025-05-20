import React from 'react'
import { dataagamaList } from '../../data/InfoGrafis.jsx'; 

function JumlahAgama() {
  return (
    <div className='agama'>
      <h2 className="mb-2">Jumlah Penduduk Berdasarkan Agama</h2>
      <div className="card-body">
        <div className="row">
          {dataagamaList.map((item, index) => (
            <div className="col-md-3 mt-3" key={index}>
              <div className="card">
                <div className="row p-3">
                  <div className="col-md-3 d-flex justify-content-center">
                    <img
                      
                      src={item.icons} 
                      alt="icon"
                    />
                  </div>
                  <div className="col-md-8 text-center">
                   
                    <h3>{item.jumlah}</h3>
                     <h6>{item.agama}</h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default JumlahAgama
