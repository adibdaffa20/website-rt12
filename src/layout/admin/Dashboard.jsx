import React from 'react'
import { datapendudukList, statntingList, dataagamaList, dataperkawinanList, idmList, apbdList } from '../../data/InfoGrafis.jsx';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from 'recharts';
function Dashboard() {
    const totalData = datapendudukList.find(item => item.kategori === "Total");

    const sortedData = [...statntingList].sort((a, b) => a.tahun - b.tahun);
    const lastFiveYears = sortedData.slice(-5);
    const latestYear = lastFiveYears[lastFiveYears.length - 1];


    const latestData = idmList[idmList.length - 1];


    const data = datapendudukList.filter(item =>
        item.kategori === 'Laki-laki' || item.kategori === 'Perempuan'
    );
    const COLORS = ['#007bff', '#dc3545'];

    const dataagama = dataagamaList.filter(item =>
        item.agama === 'Islam' || item.agama === 'Kristen' || item.agama === 'Hindu' || item.agama === 'Buddha' || item.agama === 'Konghucu' || item.agama === 'katolik'
    );
    const COLORSagama = ['#007bff', '#dc3545', '#28a745', '#ffc107', '#17a2b8', '#6c757d'];

    const datastatus = dataperkawinanList.filter(item =>
        item.status === 'Menikah' || item.status === 'Belum Menikah' || item.status === 'Cerai Hidup' || item.status === 'Cerai Mati'
    );
    const COLORSstatus = ['#007bff', '#dc3545', '#28a745', '#ffc107'];



    const parseRupiah = (str) => {
        return Number(str.replace(/[^\d]/g, ''));
    };
    const recentData = apbdList.slice(-5).map((item) => ({
        tahun: item.tahun,
        pendapatan: parseRupiah(item.pendapatan),
        belanja: parseRupiah(item.belanja),
    }));

    const dataidm = idmList.slice(-5).map((item) => ({
        tahun: item.tahun,
        skor: item.skor,
        status: item.status,
    }));

    return (
        <div>
            <div className="container">
                <div className="row">

                    <div className="col-md-4 mt-3 mb-3">
                        <div className="card shadow-sm border-0">
                            <div className="card-body text-center">
                                <h5 className="card-title">{totalData.kategori} Penduduk Desa</h5>
                                <p className="card-text text-warning fs-4 fw-bold">{totalData.jumlah.toLocaleString()} </p>
                                <p className="badge bg-success fs-6">Jiwa</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mt-3 mb-3">
                        <div className="card text-center shadow-sm border-0">
                            <div className="card-body">
                                <h5>Stanting Tahun {latestYear.tahun}</h5>
                                <p className="card-text fs-4 text-danger fw-bold">{latestYear.jumlah.toLocaleString()} </p>
                                <p className="badge bg-success fs-6">Anak</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mt-3 mb-3">
                        <div className="card text-center shadow-sm border-0">
                            <div className="card-body">
                                <h5 className="card-title mb-3">Skor IDM ({latestData.tahun})</h5>
                                <p className="fs-4 fw-bold text-primary mb-1">{latestData.skor.toLocaleString()}</p>
                                <p className="badge bg-success fs-6">{latestData.status}</p>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-4 mt-3 mb-3">
                        <div className="card shadow-sm border-0">
                            <ResponsiveContainer width="100%" height={250}>
                                <PieChart>
                                    <Pie
                                        data={data}
                                        dataKey="jumlah"
                                        nameKey="kategori"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={80}
                                        fill="#8884d8"
                                        label
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Legend verticalAlign="bottom" height={36} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="col-md-4 mt-3 mb-3">
                        <div className="card shadow-sm border-0">
                            <ResponsiveContainer width="100%" height={250}>
                                <PieChart>
                                    <Pie
                                        data={dataagama}
                                        dataKey="jumlah"
                                        nameKey="agama"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={80}
                                        fill="#8884d8"
                                        label
                                    >
                                        {dataagama.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORSagama[index % COLORSagama.length]} />
                                        ))}
                                    </Pie>
                                    <Legend verticalAlign="bottom" height={36} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>


                    <div className="col-md-4 mt-3 mb-3">
                        <div className="card shadow-sm border-0">
                            <ResponsiveContainer width="100%" height={250}>
                                <PieChart>
                                    <Pie
                                        data={datastatus}
                                        dataKey="jumlah"
                                        nameKey="status"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={80}
                                        fill="#8884d8"
                                        label
                                    >
                                        {datastatus.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORSstatus[index % COLORSstatus.length]} />
                                        ))}
                                    </Pie>
                                    <Legend verticalAlign="bottom" height={36} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>



                    <div className="col-md-12 mt-3 mb-3">
                        <div className="card shadow-sm border-0">
                            <div className="card-body">
                                <h5 className="card-title text-center mb-4">Grafik IDM 5 Tahun Terakhir</h5>
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart
                                        data={dataidm}
                                        margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="tahun" />
                                        <YAxis />
                                        <Tooltip formatter={(value) => `${value.toLocaleString()} skor`} />
                                        <Line
                                            type="monotone"
                                            dataKey="skor"
                                            stroke="#007bff"
                                            strokeWidth={3}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-12 mt-3 mb-3"><div className="card shadow-sm border-0">
                        <div className="card shadow-sm border-0">
                            <div className="card-body">
                                <h5 className="card-title text-center mb-4">Grafik APBDes (Pendapatan vs Belanja)</h5>
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={recentData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="tahun" />
                                        <YAxis />
                                        <Tooltip formatter={(value) => `Rp${value.toLocaleString()}`} />
                                        <Legend />
                                        <Line type="monotone" dataKey="pendapatan" stroke="#28a745" name="Pendapatan" strokeWidth={2} />
                                        <Line type="monotone" dataKey="belanja" stroke="#dc3545" name="Belanja" strokeWidth={2} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Dashboard
