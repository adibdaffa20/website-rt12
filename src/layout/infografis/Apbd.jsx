import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { apbdList } from '../../data/InfoGrafis.jsx';
import "../../style/InfoGrafis.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Fungsi bantu untuk parsing angka dari string "Rp"
const parseRupiah = (str) => {
  return parseFloat(str.replace(/[^0-9,-]+/g, '').replace(',', '.')) || 0;
};

function Apbd() {
  const [selectedYear, setSelectedYear] = useState(null);

  const handleSelectChange = (e) => {
    const tahun = parseInt(e.target.value);
    setSelectedYear(tahun);
  };

  const dataTahun = apbdList.find((item) => item.tahun === selectedYear);

  // Siapkan data grafik (kalau tahun dipilih)
  const chartData1 = dataTahun
    ? [
        {
          name: 'Pendapatan dan Belanja',
          Pendapatan: parseRupiah(dataTahun.pendapatan),
          Belanja: parseRupiah(dataTahun.belanja),
        },
      ]
    : [];

  const chartData2 = dataTahun
    ? [
        {
          name: 'Penerimaan dan Pengeluaran',
          Penerimaan: parseRupiah(dataTahun.penerimaan),
          Pengeluaran: parseRupiah(dataTahun.pembiayaan),
        },
      ]
    : [];

  return (
    <div className="container apbd mt-5 mb-5">
      <div className="row">
        <div className="col-md-12">
          <Form.Select aria-label="Pilih Tahun" onChange={handleSelectChange} defaultValue="">
            <option value="" disabled>
              Pilih Tahun
            </option>
            {apbdList.map((item, index) => (
              <option key={index} value={item.tahun}>
                {item.tahun}
              </option>
            ))}
          </Form.Select>
        </div>

        {dataTahun && (
          <div className="col-md-12 mt-5">
            <div className="row">
              <div className="col-md-5">
                <h2>APB Desa Kersik Tahun {dataTahun.tahun}</h2>
                <h4>
                  Desa Kersik, Kecamatan Marang Kayu, Kabupaten Kutai Kartanegara, Provinsi Kalimantan Timur
                </h4>
              </div>
              <div className="col-md-7">
                <div className="row">
                  <div className="col-md-6 mt-2">
                    <div className="card">
                      <div className="card-body">
                        <h5>Pendapatan</h5>
                        <h3>{dataTahun.pendapatan}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mt-2">
                    <div className="card">
                      <div className="card-body">
                        <h5>Belanja</h5>
                        <h3>{dataTahun.belanja}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12 mt-3">
                    <div className="card">
                      <div className="card-body">
                        <h5 className='text-center'>Pembiayaan</h5>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="card">
                              <div >
                                <h5>Penerimaan</h5>
                                <h3>{dataTahun.penerimaan}</h3>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="card">
                              <div >
                                <h5>Pengeluaran</h5>
                                <h3>{dataTahun.pembiayaan}</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                 

                </div>
              </div>

              . {/* Grafik Pendapatan vs Belanja */}
                  <div className="col-md-12 mt-5">
                    <h2 className=" mb-3">Grafik Pendapatan dan Belanja</h2>
                    <div className="card">
                      <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={chartData1}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip formatter={(value) => `Rp${value.toLocaleString()}`} />
                        <Legend />
                        <Bar dataKey="Pendapatan" fill="#28a745" />
                        <Bar dataKey="Belanja" fill="#dc3545" />
                      </BarChart>
                    </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Grafik Penerimaan vs Pengeluaran */}
                  <div className="col-md-12 mt-5">
                    <h2 className="mb-3">Grafik Penerimaan dan Pengeluaran</h2>
                    <div className="card">
                      <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={chartData2}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip formatter={(value) => `Rp${value.toLocaleString()}`} />
                        <Legend />
                        <Bar dataKey="Penerimaan" fill="#17a2b8" />
                        <Bar dataKey="Pengeluaran" fill="#ffc107" />
                      </BarChart>
                    </ResponsiveContainer>
                    </div>
                  </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Apbd;
