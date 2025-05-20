import React, { useState } from 'react';
import { idmList } from '../../data/InfoGrafis.jsx'; 
import {
    IconPlus,
    IconEdit,
    IconEye,
    IconTrash,
    IconSearch
} from "@tabler/icons-react";

import '../../style/GaleriAdmin.css';

function Idm() {
    const [idmData, setIdmData] = useState(idmList);
    const [selectedIDM, setSelectedIDM] = useState(null);
    const [modalLihat, setModalLihat] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        tahun: '',
        skor: '',
        status: ''
    });

    const itemsPerPage = 5;

    const filteredData = idmData.filter((item) =>
        item.tahun.toString().includes(searchTerm.toLowerCase()) ||
        item.status.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleAddIDM = (e) => {
        e.preventDefault();
        if (!formData.tahun || !formData.skor || !formData.status) {
            alert("Harap lengkapi semua data.");
            return;
        }
        setIdmData([...idmData, {
            ...formData,
            tahun: parseInt(formData.tahun),
            skor: parseInt(formData.skor)
        }]);
        setFormData({ tahun: '', skor: '', status: '' });
        setShowForm(false);
    };

    const handleUpdateIDM = (e) => {
        e.preventDefault();
        setIdmData(
            idmData.map((item) =>
                item.tahun === selectedIDM.tahun ? selectedIDM : item
            )
        );
        setSelectedIDM(null);
    };

    const handleDeleteIDM = (tahun) => {
        if (window.confirm("Yakin ingin menghapus data IDM ini?")) {
            setIdmData(idmData.filter((item) => item.tahun !== tahun));
        }
    };

    return (
        <div className="container galeri-admin my-4">
            <div className="tabel-galeri card p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="nama">
                        <h4>Daftar Indeks Desa Membangun (IDM)</h4> 
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
                                placeholder="Cari berdasarkan tahun/status..."
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1);
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Form Tambah IDM */}
                {showForm && (
                    <form onSubmit={handleAddIDM} className="border p-3 rounded mb-4">
                        <h5 className="mb-3">Form Tambah Data IDM</h5>
                        <div className="row mb-2">
                            <div className="col-md-4 mb-2">
                                <label className="form-label">Tahun</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={formData.tahun}
                                    onChange={(e) => setFormData({ ...formData, tahun: e.target.value })}
                                />
                            </div>
                            <div className="col-md-4 mb-2">
                                <label className="form-label">Skor</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={formData.skor}
                                    onChange={(e) => setFormData({ ...formData, skor: e.target.value })}
                                />
                            </div>
                            <div className="col-md-4 mb-2">
                                <label className="form-label">Status</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={formData.status}
                                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="d-flex justify-content-end gap-2">
                            <button type="button" className="btn btn-secondary btn-sm" onClick={() => setShowForm(false)}>Batal</button>
                            <button type="submit" className="btn btn-success btn-sm">Simpan</button>
                        </div>
                    </form>
                )}

                {/* Tabel IDM */}
                <table className="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Tahun</th>
                            <th>Skor</th>
                            <th>Status</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.length > 0 ? (
                            paginatedData.map((idm, index) => (
                                <tr key={idm.tahun}>
                                    <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                                    <td>{idm.tahun}</td>
                                    <td>{idm.skor.toLocaleString()}</td>
                                    <td>{idm.status}</td>
                                    <td>
                                        <button className="btn btn-sm btn-warning me-2" onClick={() => setSelectedIDM(idm)}>
                                            <IconEdit size={16} className="me-1" /> Edit
                                        </button>
                                        <button className="btn btn-sm btn-info text-white me-2" onClick={() => setModalLihat(idm)}>
                                            <IconEye size={16} className="me-1" /> Lihat
                                        </button>
                                        <button className="btn btn-sm btn-danger" onClick={() => handleDeleteIDM(idm.tahun)}>
                                            <IconTrash size={16} className="me-1" /> Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center text-muted">Tidak ada data IDM ditemukan.</td>
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
            {selectedIDM && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form onSubmit={handleUpdateIDM}>
                                <div className="modal-header">
                                    <h5 className="modal-title">Edit Data IDM</h5>
                                    <button type="button" className="btn-close" onClick={() => setSelectedIDM(null)}></button>
                                </div>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label className="form-label">Tahun</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            value={selectedIDM.tahun}
                                            onChange={(e) =>
                                                setSelectedIDM({ ...selectedIDM, tahun: parseInt(e.target.value) })
                                            }
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Skor</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            value={selectedIDM.skor}
                                            onChange={(e) =>
                                                setSelectedIDM({ ...selectedIDM, skor: parseInt(e.target.value) })
                                            }
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Status</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={selectedIDM.status}
                                            onChange={(e) =>
                                                setSelectedIDM({ ...selectedIDM, status: e.target.value })
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={() => setSelectedIDM(null)}>Tutup</button>
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
                                <h5 className="modal-title"><IconEye className="me-2" /> Detail Data IDM</h5>
                                <button type="button" className="btn-close" onClick={() => setModalLihat(null)}></button>
                            </div>
                            <div className="modal-body">
                                <p><strong>Tahun:</strong> {modalLihat.tahun}</p>
                                <p><strong>Skor:</strong> {modalLihat.skor.toLocaleString()}</p>
                                <p><strong>Status:</strong> {modalLihat.status}</p>
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

export default Idm;