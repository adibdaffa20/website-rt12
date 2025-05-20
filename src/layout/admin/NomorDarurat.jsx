import React, { useState } from 'react';
import { EmergencyList } from '../../data/EmergencyList.jsx';
import {
    IconPlus,
    IconEdit,
    IconTrash,
    IconSearch,
    IconPhone
} from "@tabler/icons-react";

import '../../style/GaleriAdmin.css';

function NomorDarurat() {
    const [emergencyData, setEmergencyData] = useState(EmergencyList);
    const [selectedEmergency, setSelectedEmergency] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: ''
    });

    const itemsPerPage = 5;

    const filteredData = emergencyData.filter((e) =>
        e.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleAddEmergency = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.phone) {
            alert("Harap lengkapi semua data.");
            return;
        }
        setEmergencyData([...emergencyData, formData]);
        setFormData({ name: '', phone: '' });
        setShowForm(false);
    };

    const handleUpdateEmergency = (e) => {
        e.preventDefault();
        setEmergencyData(
            emergencyData.map((item) =>
                item.name === selectedEmergency.name ? selectedEmergency : item
            )
        );
        setSelectedEmergency(null);
    };

    const handleDeleteEmergency = (name) => {
        if (window.confirm("Yakin ingin menghapus nomor darurat ini?")) {
            setEmergencyData(emergencyData.filter((item) => item.name !== name));
        }
    };

    return (
        <div className="container galeri-admin my-4">
            <div className="tabel-galeri card shadow-sm border-0 p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="nama">
                        <h4>Daftar Nomor Darurat</h4> 
                        <button className="btn btn-primary btn-sm m-2" onClick={() => setShowForm(!showForm)}>
                            <IconPlus size={16} className="me-1" /> Tambah Nomor
                        </button>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <div className="input-group input-group-sm">
                            <span className="input-group-text"><IconSearch size={16} /></span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Cari nomor darurat..."
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1);
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Form Tambah Nomor Darurat */}
                {showForm && (
                    <form onSubmit={handleAddEmergency} className="border p-3 rounded mb-4">
                        <h5 className="mb-3">Form Tambah Nomor Darurat</h5>
                        <div className="row mb-2">
                            <div className="col-md-6 mb-2">
                                <label className="form-label">Nama Layanan</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Contoh: Polisi, Ambulance"
                                />
                            </div>
                            <div className="col-md-6 mb-2">
                                <label className="form-label">Nomor Telepon</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    placeholder="Contoh: 65532165459"
                                />
                            </div>
                        </div>
                        <div className="d-flex justify-content-end gap-2">
                            <button type="button" className="btn btn-secondary btn-sm" onClick={() => setShowForm(false)}>Batal</button>
                            <button type="submit" className="btn btn-success btn-sm">Simpan</button>
                        </div>
                    </form>
                )}

                {/* Tabel Nomor Darurat */}
                <table className="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama Layanan</th>
                            <th>Nomor Telepon</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.length > 0 ? (
                            paginatedData.map((emergency, index) => (
                                <tr key={emergency.name}>
                                    <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                                    <td>{emergency.name}</td>
                                    <td>
                                        <a href={`tel:${emergency.phone}`} className="text-decoration-none">
                                            <IconPhone size={16} className="me-1" /> 
                                            {emergency.phone}
                                        </a>
                                    </td>
                                    <td>
                                        <button className="btn btn-sm btn-warning me-2" onClick={() => setSelectedEmergency(emergency)}>
                                            <IconEdit size={16} className="me-1" /> Edit
                                        </button>
                                        <button className="btn btn-sm btn-danger" onClick={() => handleDeleteEmergency(emergency.name)}>
                                            <IconTrash size={16} className="me-1" /> Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center text-muted">Tidak ada nomor darurat ditemukan.</td>
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
            {selectedEmergency && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form onSubmit={handleUpdateEmergency}>
                                <div className="modal-header">
                                    <h5 className="modal-title">Edit Nomor Darurat</h5>
                                    <button type="button" className="btn-close" onClick={() => setSelectedEmergency(null)}></button>
                                </div>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label className="form-label">Nama Layanan</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={selectedEmergency.name}
                                            onChange={(e) =>
                                                setSelectedEmergency({ ...selectedEmergency, name: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Nomor Telepon</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={selectedEmergency.phone}
                                            onChange={(e) =>
                                                setSelectedEmergency({ ...selectedEmergency, phone: e.target.value })
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={() => setSelectedEmergency(null)}>Tutup</button>
                                    <button type="submit" className="btn btn-primary">Simpan</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NomorDarurat;