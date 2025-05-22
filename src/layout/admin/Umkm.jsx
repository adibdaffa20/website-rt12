import React, { useState } from 'react';
import { umkmList } from '../../data/Umkm.jsx'; 
import {
    IconPlus,
    IconEdit,
    IconEye,
    IconTrash,
    IconSearch
} from "@tabler/icons-react";

import '../../style/GaleriAdmin.css';

function UMKM() {
    const [umkmData, setUmkmData] = useState(umkmList);
    const [selectedUMKM, setSelectedUMKM] = useState(null);
    const [modalLihat, setModalLihat] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: ''
    });

    const itemsPerPage = 5;

    const filteredData = umkmData.filter((u) =>
        u.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleAddUMKM = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.username || !formData.password) {
            alert("Harap lengkapi semua data.");
            return;
        }
        setUmkmData([...umkmData, formData]);
        setFormData({ name: '', username: '', password: '' });
        setShowForm(false);
    };

    const handleUpdateUMKM = (e) => {
        e.preventDefault();
        setUmkmData(
            umkmData.map((item) =>
                item.username === selectedUMKM.username ? selectedUMKM : item
            )
        );
        setSelectedUMKM(null);
    };

    const handleDeleteUMKM = (username) => {
        if (window.confirm("Yakin ingin menghapus UMKM ini?")) {
            setUmkmData(umkmData.filter((item) => item.username !== username));
        }
    };

    return (
        <div className="container galeri-admin my-4">
            <div className="tabel-galeri card shadow-sm border-0 p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="nama">
                        <h4>Daftar UMKM</h4> <button className="btn btn-primary btn-sm m-2" onClick={() => setShowForm(!showForm)}>
                            <IconPlus size={16} className="me-1" /> Tambah UMKM
                        </button>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        
                        <div className="input-group input-group-sm">
                            <span className="input-group-text"><IconSearch size={16} /></span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Cari UMKM..."
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1);
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Form Tambah UMKM */}
                {showForm && (
                    <form onSubmit={handleAddUMKM} className="border p-3 rounded mb-4">
                        <h5 className="mb-3">Form Tambah UMKM</h5>
                        <div className="row mb-2">
                            <div className="col-md-4 mb-2">
                                <label className="form-label">Nama UMKM</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="col-md-4 mb-2">
                                <label className="form-label">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={formData.username}
                                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                />
                            </div>
                            <div className="col-md-4 mb-2">
                                <label className="form-label">Password</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="d-flex justify-content-end gap-2">
                            <button type="button" className="btn btn-secondary btn-sm" onClick={() => setShowForm(false)}>Batal</button>
                            <button type="submit" className="btn btn-success btn-sm">Simpan</button>
                        </div>
                    </form>
                )}

                {/* Tabel UMKM */}
                <table className="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama UMKM</th>
                            <th>Username</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.length > 0 ? (
                            paginatedData.map((umkm, index) => (
                                <tr key={umkm.username}>
                                    <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                                    <td>{umkm.name}</td>
                                    <td>{umkm.username}</td>
                                    <td>
                                        <button className="btn btn-sm btn-warning me-2" onClick={() => setSelectedUMKM(umkm)}>
                                            <IconEdit size={16} className="me-1" /> Edit
                                        </button>
                                        <button className="btn btn-sm btn-info text-white me-2" onClick={() => setModalLihat(umkm)}>
                                            <IconEye size={16} className="me-1" /> Lihat
                                        </button>
                                        <button className="btn btn-sm btn-danger" onClick={() => handleDeleteUMKM(umkm.username)}>
                                            <IconTrash size={16} className="me-1" /> Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center text-muted">Tidak ada UMKM ditemukan.</td>
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
            {selectedUMKM && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form onSubmit={handleUpdateUMKM}>
                                <div className="modal-header">
                                    <h5 className="modal-title">Edit UMKM</h5>
                                    <button type="button" className="btn-close" onClick={() => setSelectedUMKM(null)}></button>
                                </div>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label className="form-label">Nama UMKM</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={selectedUMKM.name}
                                            onChange={(e) =>
                                                setSelectedUMKM({ ...selectedUMKM, name: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Username</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={selectedUMKM.username}
                                            onChange={(e) =>
                                                setSelectedUMKM({ ...selectedUMKM, username: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={selectedUMKM.password}
                                            onChange={(e) =>
                                                setSelectedUMKM({ ...selectedUMKM, password: e.target.value })
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={() => setSelectedUMKM(null)}>Tutup</button>
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
                                <h5 className="modal-title"><IconEye className="me-2" /> Detail UMKM</h5>
                                <button type="button" className="btn-close" onClick={() => setModalLihat(null)}></button>
                            </div>
                            <div className="modal-body">
                                <p><strong>Nama:</strong> {modalLihat.name}</p>
                                <p><strong>Username:</strong> {modalLihat.username}</p>
                                <p><strong>Password:</strong> {modalLihat.password}</p>
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

export default UMKM;
