import React, { useState } from 'react';
import { penerimabansosList } from '../../data/InfoGrafis.jsx'; // pastikan data tersedia
import {
    IconPlus,
    IconEdit,
    IconEye,
    IconTrash,
    IconSearch
} from "@tabler/icons-react";

import '../../style/GaleriAdmin.css';

function Bansos() {
    const [bansosData, setBansosData] = useState(penerimabansosList);
    const [selectedBansos, setSelectedBansos] = useState(null);
    const [modalLihat, setModalLihat] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        jenis: '',
        jumlah: ''
    });

    const itemsPerPage = 5;

    const filteredData = bansosData.filter((b) =>
        b.jenis.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleAddBansos = (e) => {
        e.preventDefault();
        if (!formData.jenis || !formData.jumlah) {
            alert("Harap lengkapi semua data.");
            return;
        }
        setBansosData([...bansosData, formData]);
        setFormData({ jenis: '', jumlah: '' });
        setShowForm(false);
    };

    const handleUpdateBansos = (e) => {
        e.preventDefault();
        setBansosData(
            bansosData.map((item) =>
                item.jenis === selectedBansos.jenis ? selectedBansos : item
            )
        );
        setSelectedBansos(null);
    };

    const handleDeleteBansos = (jenis) => {
        if (window.confirm("Yakin ingin menghapus data bansos ini?")) {
            setBansosData(bansosData.filter((item) => item.jenis !== jenis));
        }
    };

    return (
        <div className="container galeri-admin my-4">
            <div className="tabel-galeri card p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="nama">
                        <h4>Daftar Bansos</h4> 
                        <button className="btn btn-primary btn-sm m-2" onClick={() => setShowForm(!showForm)}>
                            <IconPlus size={16} className="me-1" /> Tambah Bansos
                        </button>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <div className="input-group input-group-sm">
                            <span className="input-group-text"><IconSearch size={16} /></span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Cari Jenis Bansos..."
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1);
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Form Tambah Bansos */}
                {showForm && (
                    <form onSubmit={handleAddBansos} className="border p-3 rounded mb-4">
                        <h5 className="mb-3">Form Tambah Bansos</h5>
                        <div className="row mb-2">
                            <div className="col-md-6 mb-2">
                                <label className="form-label">Jenis Bansos</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={formData.jenis}
                                    onChange={(e) => setFormData({ ...formData, jenis: e.target.value })}
                                />
                            </div>
                            <div className="col-md-6 mb-2">
                                <label className="form-label">Jumlah Penerima</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={formData.jumlah}
                                    onChange={(e) => setFormData({ ...formData, jumlah: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="d-flex justify-content-end gap-2">
                            <button type="button" className="btn btn-secondary btn-sm" onClick={() => setShowForm(false)}>Batal</button>
                            <button type="submit" className="btn btn-success btn-sm">Simpan</button>
                        </div>
                    </form>
                )}

                {/* Tabel Bansos */}
                <table className="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Jenis Bansos</th>
                            <th>Jumlah Penerima</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.length > 0 ? (
                            paginatedData.map((bansos, index) => (
                                <tr key={bansos.jenis}>
                                    <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                                    <td>{bansos.jenis}</td>
                                    <td>{bansos.jumlah}</td>
                                    <td>
                                        <button className="btn btn-sm btn-warning me-2" onClick={() => setSelectedBansos(bansos)}>
                                            <IconEdit size={16} className="me-1" /> Edit
                                        </button>
                                        <button className="btn btn-sm btn-info text-white me-2" onClick={() => setModalLihat(bansos)}>
                                            <IconEye size={16} className="me-1" /> Lihat
                                        </button>
                                        <button className="btn btn-sm btn-danger" onClick={() => handleDeleteBansos(bansos.jenis)}>
                                            <IconTrash size={16} className="me-1" /> Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center text-muted">Tidak ada data bansos ditemukan.</td>
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

            {/* Modal Edit */}
            {selectedBansos && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form onSubmit={handleUpdateBansos}>
                                <div className="modal-header">
                                    <h5 className="modal-title">Edit Bansos</h5>
                                    <button type="button" className="btn-close" onClick={() => setSelectedBansos(null)}></button>
                                </div>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label className="form-label">Jenis Bansos</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={selectedBansos.jenis}
                                            onChange={(e) =>
                                                setSelectedBansos({ ...selectedBansos, jenis: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Jumlah Penerima</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            value={selectedBansos.jumlah}
                                            onChange={(e) =>
                                                setSelectedBansos({ ...selectedBansos, jumlah: e.target.value })
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={() => setSelectedBansos(null)}>Tutup</button>
                                    <button type="submit" className="btn btn-primary">Simpan</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal Lihat */}
            {modalLihat && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header bg-info text-white">
                                <h5 className="modal-title"><IconEye className="me-2" /> Detail Bansos</h5>
                                <button type="button" className="btn-close" onClick={() => setModalLihat(null)}></button>
                            </div>
                            <div className="modal-body">
                                <p><strong>Jenis Bansos:</strong> {modalLihat.jenis}</p>
                                <p><strong>Jumlah Penerima:</strong> {modalLihat.jumlah}</p>
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

export default Bansos;