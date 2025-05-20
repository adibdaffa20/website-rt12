import React, { useState } from 'react';
import { statntingList } from '../../data/InfoGrafis.jsx'; 
import {
    IconPlus,
    IconEdit,
    IconEye,
    IconTrash,
    IconSearch
} from "@tabler/icons-react";

import '../../style/GaleriAdmin.css';

function Stunting() {
    const [stuntingData, setStuntingData] = useState(statntingList);
    const [selectedStunting, setSelectedStunting] = useState(null);
    const [modalLihat, setModalLihat] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        tahun: '',
        jumlah: ''
    });

    const itemsPerPage = 5;

    const filteredData = stuntingData.filter((s) =>
        s.tahun.toString().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleAddStunting = (e) => {
        e.preventDefault();
        if (!formData.tahun || !formData.jumlah) {
            alert("Harap lengkapi semua data.");
            return;
        }
        setStuntingData([...stuntingData, formData]);
        setFormData({ tahun: '', jumlah: '' });
        setShowForm(false);
    };

    const handleUpdateStunting = (e) => {
        e.preventDefault();
        setStuntingData(
            stuntingData.map((item) =>
                item.tahun === selectedStunting.tahun ? selectedStunting : item
            )
        );
        setSelectedStunting(null);
    };

    const handleDeleteStunting = (tahun) => {
        if (window.confirm("Yakin ingin menghapus data stunting ini?")) {
            setStuntingData(stuntingData.filter((item) => item.tahun !== tahun));
        }
    };

    return (
        <div className="container galeri-admin my-4">
            <div className="tabel-galeri card p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="nama">
                        <h4>Data Kasus Stunting</h4> 
                        <button className="btn btn-primary btn-sm m-2" onClick={() => setShowForm(!showForm)}>
                            <IconPlus size={16} className="me-1" /> Tambah Data
                        </button>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <div className="input-group input-group-sm">
                            <span className="input-group-text"><IconSearch size={16} /></span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Cari berdasarkan tahun..."
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1);
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Form Tambah Data */}
                {showForm && (
                    <form onSubmit={handleAddStunting} className="border p-3 rounded mb-4">
                        <h5 className="mb-3">Form Tambah Data Stunting</h5>
                        <div className="row mb-2">
                            <div className="col-md-6 mb-2">
                                <label className="form-label">Tahun</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={formData.tahun}
                                    onChange={(e) => setFormData({ ...formData, tahun: e.target.value })}
                                />
                            </div>
                            <div className="col-md-6 mb-2">
                                <label className="form-label">Jumlah Kasus</label>
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

                {/* Tabel Data */}
                <table className="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Tahun</th>
                            <th>Jumlah Kasus</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.length > 0 ? (
                            paginatedData.map((stunting, index) => (
                                <tr key={stunting.tahun}>
                                    <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                                    <td>{stunting.tahun}</td>
                                    <td>{stunting.jumlah}</td>
                                    <td>
                                        <button className="btn btn-sm btn-warning me-2" onClick={() => setSelectedStunting(stunting)}>
                                            <IconEdit size={16} className="me-1" /> Edit
                                        </button>
                                        <button className="btn btn-sm btn-info text-white me-2" onClick={() => setModalLihat(stunting)}>
                                            <IconEye size={16} className="me-1" /> Lihat
                                        </button>
                                        <button className="btn btn-sm btn-danger" onClick={() => handleDeleteStunting(stunting.tahun)}>
                                            <IconTrash size={16} className="me-1" /> Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center text-muted">Tidak ada data stunting ditemukan.</td>
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
            {selectedStunting && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form onSubmit={handleUpdateStunting}>
                                <div className="modal-header">
                                    <h5 className="modal-title">Edit Data Stunting</h5>
                                    <button type="button" className="btn-close" onClick={() => setSelectedStunting(null)}></button>
                                </div>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label className="form-label">Tahun</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            value={selectedStunting.tahun}
                                            onChange={(e) =>
                                                setSelectedStunting({ ...selectedStunting, tahun: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Jumlah Kasus</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            value={selectedStunting.jumlah}
                                            onChange={(e) =>
                                                setSelectedStunting({ ...selectedStunting, jumlah: e.target.value })
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={() => setSelectedStunting(null)}>Tutup</button>
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
                                <h5 className="modal-title"><IconEye className="me-2" /> Detail Data Stunting</h5>
                                <button type="button" className="btn-close" onClick={() => setModalLihat(null)}></button>
                            </div>
                            <div className="modal-body">
                                <p><strong>Tahun:</strong> {modalLihat.tahun}</p>
                                <p><strong>Jumlah Kasus:</strong> {modalLihat.jumlah}</p>
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

export default Stunting;