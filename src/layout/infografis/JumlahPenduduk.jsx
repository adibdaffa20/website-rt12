import React from 'react'
import '../../style/InfoGrafis.css' 
import {datapendudukList}  from '../../data/InfoGrafis.jsx'; 

function JumlahPenduduk() {
  return (
    <div className='data-penduduk'>
    
           <h2>Jumlah Penduduk dan Kepala Keluarga</h2>
            <div className="card-body">
              <div className="row">
                {datapendudukList.map((item, index) => (
                  <div className="col-md-6 mt-3" key={index}>
                    <div className="card">
                      <div className="row p-3">
                        <div className="col-md-3 d-flex text-center justify-content-center align-items-center">
                          <img
                            src={item.icon} 
                            alt="icon"
                          />
                        </div>
                        <div className="col-md-9 text-center">
                          <h5>{item.kategori}</h5>
                          <h3>{item.jumlah}</h3>
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

export default JumlahPenduduk
