import React, { useState } from 'react';
import { AduanList } from '../../data/Aduan.jsx'; // pastikan data tersedia
import {
    IconEye,
    IconTrash,
    IconSearch
} from "@tabler/icons-react";

import '../../style/GaleriAdmin.css';

function Aduan() {
    const [aduanData, setAduanData] = useState(AduanList);
    const [modalLihat, setModalLihat] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 5;

    const filteredData = aduanData.filter((a) =>
        a.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
        a.jenis.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleDeleteAduan = (id) => {
        if (window.confirm("Yakin ingin menghapus aduan ini?")) {
            setAduanData(aduanData.filter((item) => item.id !== id));
        }
    };

    return (
        <div className="container galeri-admin my-4">
            <div className="tabel-galeri card shadow-sm border-0 p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="nama">
                        <h4>Daftar Aduan</h4>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <div className="input-group input-group-sm">
                            <span className="input-group-text"><IconSearch size={16} /></span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Cari Aduan..."
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1);
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Tabel Aduan */}
                <table className="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama Pengadu</th>
                            <th>Jenis Aduan</th>
                            <th>Email</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.length > 0 ? (
                            paginatedData.map((aduan, index) => (
                                <tr key={aduan.id}>
                                    <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                                    <td>{aduan.nama}</td>
                                    <td>{aduan.jenis}</td>
                                    <td>{aduan.email}</td>
                                    <td>
                                        <button className="btn btn-sm btn-info text-white me-2" onClick={() => setModalLihat(aduan)}>
                                            <IconEye size={16} className="me-1" /> Lihat
                                        </button>
                                        <button className="btn btn-sm btn-danger" onClick={() => handleDeleteAduan(aduan.id)}>
                                            <IconTrash size={16} className="me-1" /> Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center text-muted">Tidak ada aduan ditemukan.</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                {/* Pagination */}
                <nav className="d-flex justify-content-end">
                    <ul className="pagination pagination-sm mb-0">
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>&laquo;</button>
                        </li>
                        {[...Array(totalPages)].map((_, i) => (
                            <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                <button className="page-link" onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
                            </li>
                        ))}
                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>&raquo;</button>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Modal Lihat */}
            {modalLihat && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header bg-info text-white">
                                <h5 className="modal-title"><IconEye className="me-2" /> Detail Aduan</h5>
                                <button type="button" className="btn-close" onClick={() => setModalLihat(null)}></button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p><strong>Nama Pengadu:</strong> {modalLihat.nama}</p>
                                        <p><strong>Email:</strong> {modalLihat.email}</p>
                                        <p><strong>Jenis Aduan:</strong> {modalLihat.jenis}</p>
                                    </div>
                                    <div className="col-md-6">
                                        {modalLihat.foto && (
                                            <div className="mb-3">
                                                <strong>Foto:</strong>
                                                <div className="mt-2">
                                                    <img 
                                                        src={modalLihat.foto} 
                                                        alt="Foto Aduan" 
                                                        className="img-fluid rounded"
                                                        style={{ maxHeight: '200px' }}
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <strong>Isi Aduan:</strong>
                                    <p className="mt-2 p-3 bg-light rounded">{modalLihat.isi}</p>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={() => setModalLihat(null)}>Tutup</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Aduan;