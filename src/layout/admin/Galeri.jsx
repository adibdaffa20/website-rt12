import React, { useState } from 'react';
import { galeriList } from '../../data/GaleriList.jsx';
import {
   
    IconPlus,
    IconEdit,
    IconEye,
    IconTrash,
    IconSearch
} from "@tabler/icons-react";

import '../../style/GaleriAdmin.css'

function Galeri() {
    const [showForm, setShowForm] = useState(false);
    const [selectedGaleri, setSelectedGaleri] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [modalLihat, setModalLihat] = useState(null);
    const itemsPerPage = 5;

    const toggleForm = () => setShowForm(!showForm);
    const handleEdit = (galeri) => setSelectedGaleri(galeri);
    const handleCloseModal = () => setSelectedGaleri(null);

    const filteredData = galeriList.filter((g) =>
        g.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleUpdateGaleri = (e) => {
        e.preventDefault();
        console.log("Galeri diperbarui:", selectedGaleri);
        handleCloseModal();
    };

    return (
        <div className="container galeri-admin my-4">
            <div className="accordion" id="accordionGaleri">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" onClick={toggleForm}>
                            {showForm ? 'Tutup Form Tambah Galeri' : 'Tambah Galeri'}
                        </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${showForm ? 'show' : ''}`}>
                        <div className="accordion-body">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Judul</label>
                                    <input type="text" className="form-control" placeholder="Masukkan judul galeri" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Gambar</label>
                                    <input type="file" className="form-control" accept="image/*" />
                                </div>
                                <button type="submit" className="btn btn-success">
                                    <IconPlus className="me-2" /> Simpan
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tabel-galeri card shadow-sm border-0 mt-4 p-4">
                <div className="mb-4 d-flex justify-content-between align-items-center">
                    <h4>Daftar Galeri</h4>
                    <div className="input-group w-50">
                        <span className="input-group-text"><IconSearch size={18} /></span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Cari judul galeri..."
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setCurrentPage(1);
                            }}
                        />
                    </div>
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Judul</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.length > 0 ? (
                            paginatedData.map((galeri, index) => (
                                <tr key={galeri.id}>
                                    <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                                    <td>{galeri.title}</td>
                                    <td>
                                        <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(galeri)}>
                                            <IconEdit size={16} className="me-1" /> Edit
                                        </button>
                                        <button className="btn btn-sm btn-info text-white me-2" onClick={() => setModalLihat(galeri)}>
                                            <IconEye size={16} className="me-1" /> Lihat
                                        </button>
                                        <button className="btn btn-sm btn-danger">
                                            <IconTrash size={16} className="me-1" /> Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="text-center text-muted">Tidak ada galeri ditemukan.</td>
                            </tr>
                        )}
                    </tbody>
                </table>

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

            {/* Modal Edit Galeri */}
            {selectedGaleri && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Galeri</h5>
                                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                            </div>
                            <form onSubmit={handleUpdateGaleri}>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label className="form-label">Judul</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={selectedGaleri.title}
                                            onChange={(e) => setSelectedGaleri({ ...selectedGaleri, title: e.target.value })}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Upload Gambar</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            accept="image/*"
                                            onChange={(e) => {
                                                const file = e.target.files[0];
                                                if (file) {
                                                    const imageUrl = URL.createObjectURL(file);
                                                    setSelectedGaleri({ ...selectedGaleri, image: imageUrl });
                                                }
                                            }}
                                        />
                                        {selectedGaleri.image && (
                                            <div className="mt-3">
                                                <img src={selectedGaleri.image} alt="Preview" className="img-thumbnail" width="200" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Tutup</button>
                                    <button type="submit" className="btn btn-primary">Simpan</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal Lihat Galeri */}
            {modalLihat && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header bg-info text-white">
                                <h5 className="modal-title">
                                    <IconEye className="me-2" /> Lihat Galeri
                                </h5>
                                <button type="button" className="btn-close" onClick={() => setModalLihat(null)}></button>
                            </div>
                            <div className="modal-body text-center">
                                <h5 className="fw-bold mb-3">{modalLihat.title}</h5>
                                {modalLihat.image && (
                                    <img
                                        src={modalLihat.image}
                                        alt="Gambar Galeri"
                                        className="img-fluid rounded shadow"
                                        style={{ maxHeight: '400px', objectFit: 'cover' }}
                                    />
                                )}
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

export default Galeri;
