import React, { useState } from 'react';
import { apbdList } from '../../data/InfoGrafis.jsx'; // pastikan data tersedia
import {
    IconPlus,
    IconEdit,
    IconEye,
    IconTrash,
    IconSearch
} from "@tabler/icons-react";

import '../../style/GaleriAdmin.css';

function Apbdes() {
    const [apbdData, setApbdData] = useState(apbdList);
    const [selectedAPBD, setSelectedAPBD] = useState(null);
    const [modalLihat, setModalLihat] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        tahun: '',
        pendapatan: '',
        belanja: '',
        penerimaan: '',
        pembiayaan: ''
    });

    const itemsPerPage = 5;

    const filteredData = apbdData.filter((a) =>
        a.tahun.toString().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleAddAPBD = (e) => {
        e.preventDefault();
        if (!formData.tahun || !formData.pendapatan || !formData.belanja || !formData.penerimaan || !formData.pembiayaan) {
            alert("Harap lengkapi semua data.");
            return;
        }
        setApbdData([...apbdData, formData]);
        setFormData({ 
            tahun: '',
            pendapatan: '',
            belanja: '',
            penerimaan: '',
            pembiayaan: ''
        });
        setShowForm(false);
    };

    const handleUpdateAPBD = (e) => {
        e.preventDefault();
        setApbdData(
            apbdData.map((item) =>
                item.tahun === selectedAPBD.tahun ? selectedAPBD : item
            )
        );
        setSelectedAPBD(null);
    };

    const handleDeleteAPBD = (tahun) => {
        if (window.confirm("Yakin ingin menghapus data APBDes tahun ini?")) {
            setApbdData(apbdData.filter((item) => item.tahun !== tahun));
        }
    };

    return (
        <div className="container galeri-admin my-4">
            <div className="tabel-galeri card p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="nama">
                        <h4>Daftar APBDes</h4> 
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
                    <form onSubmit={handleAddAPBD} className="border p-3 rounded mb-4">
                        <h5 className="mb-3">Form Tambah Data APBDes</h5>
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
                                <label className="form-label">Pendapatan</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={formData.pendapatan}
                                    onChange={(e) => setFormData({ ...formData, pendapatan: e.target.value })}
                                    placeholder="Format: RpX.XXX.XXX,XX"
                                />
                            </div>
                            <div className="col-md-4 mb-2">
                                <label className="form-label">Belanja</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={formData.belanja}
                                    onChange={(e) => setFormData({ ...formData, belanja: e.target.value })}
                                    placeholder="Format: RpX.XXX.XXX,XX"
                                />
                            </div>
                            <div className="col-md-4 mb-2">
                                <label className="form-label">Penerimaan</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={formData.penerimaan}
                                    onChange={(e) => setFormData({ ...formData, penerimaan: e.target.value })}
                                    placeholder="Format: RpX.XXX.XXX,XX"
                                />
                            </div>
                            <div className="col-md-4 mb-2">
                                <label className="form-label">Pembiayaan</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={formData.pembiayaan}
                                    onChange={(e) => setFormData({ ...formData, pembiayaan: e.target.value })}
                                    placeholder="Format: RpX.XXX.XXX,XX"
                                />
                            </div>
                        </div>
                        <div className="d-flex justify-content-end gap-2">
                            <button type="button" className="btn btn-secondary btn-sm" onClick={() => setShowForm(false)}>Batal</button>
                            <button type="submit" className="btn btn-success btn-sm">Simpan</button>
                        </div>
                    </form>
                )}

                {/* Tabel APBDes */}
                <table className="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Tahun</th>
                            <th>Pendapatan</th>
                            <th>Belanja</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.length > 0 ? (
                            paginatedData.map((apbd, index) => (
                                <tr key={apbd.tahun}>
                                    <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                                    <td>{apbd.tahun}</td>
                                    <td>{apbd.pendapatan}</td>
                                    <td>{apbd.belanja}</td>
                                    <td>
                                        <button className="btn btn-sm btn-warning me-2" onClick={() => setSelectedAPBD(apbd)}>
                                            <IconEdit size={16} className="me-1" /> Edit
                                        </button>
                                        <button className="btn btn-sm btn-info text-white me-2" onClick={() => setModalLihat(apbd)}>
                                            <IconEye size={16} className="me-1" /> Lihat
                                        </button>
                                        <button className="btn btn-sm btn-danger" onClick={() => handleDeleteAPBD(apbd.tahun)}>
                                            <IconTrash size={16} className="me-1" /> Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center text-muted">Tidak ada data APBDes ditemukan.</td>
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
            {selectedAPBD && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form onSubmit={handleUpdateAPBD}>
                                <div className="modal-header">
                                    <h5 className="modal-title">Edit Data APBDes Tahun {selectedAPBD.tahun}</h5>
                                    <button type="button" className="btn-close" onClick={() => setSelectedAPBD(null)}></button>
                                </div>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label className="form-label">Tahun</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            value={selectedAPBD.tahun}
                                            onChange={(e) =>
                                                setSelectedAPBD({ ...selectedAPBD, tahun: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Pendapatan</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={selectedAPBD.pendapatan}
                                            onChange={(e) =>
                                                setSelectedAPBD({ ...selectedAPBD, pendapatan: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Belanja</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={selectedAPBD.belanja}
                                            onChange={(e) =>
                                                setSelectedAPBD({ ...selectedAPBD, belanja: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Penerimaan</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={selectedAPBD.penerimaan}
                                            onChange={(e) =>
                                                setSelectedAPBD({ ...selectedAPBD, penerimaan: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Pembiayaan</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={selectedAPBD.pembiayaan}
                                            onChange={(e) =>
                                                setSelectedAPBD({ ...selectedAPBD, pembiayaan: e.target.value })
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={() => setSelectedAPBD(null)}>Tutup</button>
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
                                <h5 className="modal-title"><IconEye className="me-2" /> Detail APBDes Tahun {modalLihat.tahun}</h5>
                                <button type="button" className="btn-close" onClick={() => setModalLihat(null)}></button>
                            </div>
                            <div className="modal-body">
                                <p><strong>Tahun:</strong> {modalLihat.tahun}</p>
                                <p><strong>Pendapatan:</strong> {modalLihat.pendapatan}</p>
                                <p><strong>Belanja:</strong> {modalLihat.belanja}</p>
                                <p><strong>Penerimaan:</strong> {modalLihat.penerimaan}</p>
                                <p><strong>Pembiayaan:</strong> {modalLihat.pembiayaan}</p>
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

export default Apbdes;