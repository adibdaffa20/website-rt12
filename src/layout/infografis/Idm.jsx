import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { idmList } from '../../data/InfoGrafis.jsx';

function Idm() {
    // Ambil data tahun terakhir (maks tahun)
    const latestYear = Math.max(...idmList.map(item => item.tahun));
    const latestData = idmList.find(item => item.tahun === latestYear);

    return (
        <div className='idm'>
            <div className="row">
                <div className="col-md-6">
                    <h2>Indeks Desa Membangun</h2>
                    <p>
                        Indeks Desa Membangun (IDM) adalah sebuah alat ukur
                        yang digunakan untuk menilai tingkat kemajuan dan
                        perkembangan suatu desa dalam berbagai aspek,
                        termasuk ekonomi, sosial, budaya, dan lingkungan.
                        IDM memberikan gambaran tentang sejauh mana desa
                        tersebut telah mencapai tujuan pembangunan yang
                        berkelanjutan.
                    </p>
                </div>

                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card ">
                                <div className="card-body">
                                    <h6 className="card-title">Skor IDM {latestData.tahun}</h6>
                                    <h3 className="card-text  text-center fs-4 fw-bold">{latestData.skor}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card ">
                                <div className="card-body">
                                    <h6 className="card-title">Status IDM {latestData.tahun}</h6>
                                    <h3 className="card-text text-center fs-5">{latestData.status}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-12 mt-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="text-center">Grafik Skor IDM per Tahun</h5>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={idmList} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="tahun" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="skor" stroke="#8884d8" activeDot={{ r: 8 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Idm;
