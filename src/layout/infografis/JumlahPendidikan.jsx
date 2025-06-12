import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import { pendidikanList } from '../../data/InfoGrafis.jsx';

function JumlahPendidikan() {
  return (
    <div className="pendidikan">
        <h3 className="text-center mb-4 fw-bold text-primary">
        Jumlah Penduduk Berdasarkan Pendidikan
      </h3>
        <div className="card shadow-sm rounded-4  bg-white border-0">
      
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={450}>
          <BarChart
            data={pendidikanList}
            margin={{
              top: 20,
              right: 30,
              left: 10,
              bottom: 70
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis
              dataKey="pendidikan"
              angle={-45}
              textAnchor="end"
              interval={0}
              height={80}
              tick={{ fontSize: 12 }}
            />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{ borderRadius: '8px', backgroundColor: '#f8f9fa' }}
              labelStyle={{ fontWeight: 'bold' }}
            />
            <Legend wrapperStyle={{ fontSize: '14px' }} />
            <Bar
              dataKey="jumlah"
              fill="url(#colorUv)"
              radius={[8, 8, 0, 0]}
              animationDuration={1000}
            />
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4dabf7" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#228be6" stopOpacity={0.6} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
    </div>
  );
}

export default JumlahPendidikan;