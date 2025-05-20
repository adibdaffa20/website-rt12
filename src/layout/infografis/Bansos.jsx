import React from 'react';
import { penerimabansosList } from '../../data/InfoGrafis.jsx';

function Bansos() {
    return (
        <div>
            <div className="bansos">
                <h2 className="text-center mt-3">Jumlah Penerima Bantuan Sosial</h2>
                <div className="card-body">
                    <div className="row">
                        {penerimabansosList.map((item, index) => (
                            <div className="col-md-4 mt-3" key={index}>
                                <div className="card h-100">
                                    <div className="card-body">
                                        <div className="row align-items-center">
                                            <div className="col-md-4 text-center">
                                               
                                                <h5 className="card-title mt-2">{item.jumlah}</h5>
                                                <p className="card-text">Penduduk</p>
                                            </div>
                                            <div className="col-md-8 text-center">
                                                <h6 className="card-title text-wrap">
                                                    Mendapatkan Bantuan {item.jenis}
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bansos;
