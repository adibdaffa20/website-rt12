import React from 'react';
import { statntingList } from '../../data/InfoGrafis.jsx';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

function Stanting() {
  // Urutkan data berdasarkan tahun dan ambil 5 terakhir
  const sortedData = [...statntingList].sort((a, b) => a.tahun - b.tahun);
  const lastFiveYears = sortedData.slice(-5);

  const latestYear = lastFiveYears[lastFiveYears.length - 1];

  return (
    <div className="stanting container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card text-center">
            <div className="card-body">
              <h4>Jumlah Stanting Tahun {latestYear.tahun}</h4>
              <h1>{latestYear.jumlah.toLocaleString()}</h1>
              <h5>Penduduk</h5>
            </div>
          </div>
        </div>

        <div className="col-md-12 mt-4">
          <h2 className=" mb-5">Grafik Stanting 5 Tahun Terakhir</h2>
          <div className="card">
            <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lastFiveYears}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="tahun" />
              <YAxis />
              <Tooltip formatter={(value) => `${value.toLocaleString()} penduduk`} />
              <Line type="monotone" dataKey="jumlah" stroke="#007bff" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stanting;
