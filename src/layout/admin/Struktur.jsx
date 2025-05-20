import React, { useState } from 'react';
import { baganList, jabatanList } from '../../data/ProfileList.jsx';
import {
    IconPlus,
    IconEdit,
    IconEye,
    IconTrash,
    IconSearch
} from "@tabler/icons-react";

import '../../style/GaleriAdmin.css';

function Struktur() {
    // State for Bagan
    const [showBaganForm, setShowBaganForm] = useState(false);
    const [selectedBagan, setSelectedBagan] = useState(null);
    const [baganSearchTerm, setBaganSearchTerm] = useState('');
    const [baganCurrentPage, setBaganCurrentPage] = useState(1);
    const [modalBaganLihat, setModalBaganLihat] = useState(null);

    // State for Jabatan
    const [showJabatanForm, setShowJabatanForm] = useState(false);
    const [selectedJabatan, setSelectedJabatan] = useState(null);
    const [jabatanSearchTerm, setJabatanSearchTerm] = useState('');
    const [jabatanCurrentPage, setJabatanCurrentPage] = useState(1);
    const [modalJabatanLihat, setModalJabatanLihat] = useState(null);

    const itemsPerPage = 5;

    // Filter and pagination for Bagan
    const filteredBaganData = baganList.filter((b) =>
        b.title.toLowerCase().includes(baganSearchTerm.toLowerCase())
    );
    const baganTotalPages = Math.ceil(filteredBaganData.length / itemsPerPage);
    const paginatedBaganData = filteredBaganData.slice(
        (baganCurrentPage - 1) * itemsPerPage,
        baganCurrentPage * itemsPerPage
    );

    // Filter and pagination for Jabatan
    const filteredJabatanData = jabatanList.filter((j) =>
        j.jabatan.toLowerCase().includes(jabatanSearchTerm.toLowerCase()) ||
        j.nama.toLowerCase().includes(jabatanSearchTerm.toLowerCase())
    );
    const jabatanTotalPages = Math.ceil(filteredJabatanData.length / itemsPerPage);
    const paginatedJabatanData = filteredJabatanData.slice(
        (jabatanCurrentPage - 1) * itemsPerPage,
        jabatanCurrentPage * itemsPerPage
    );

    // Handlers for Bagan
    const handleUpdateBagan = (e) => {
        e.preventDefault();
        console.log("Bagan diperbarui:", selectedBagan);
        setSelectedBagan(null);
    };

    const handleDeleteBagan = (title) => {
        if (window.confirm(`Yakin ingin menghapus bagan ${title}?`)) {
            console.log("Bagan dihapus:", title);
        }
    };

    // Handlers for Jabatan
    const handleUpdateJabatan = (e) => {
        e.preventDefault();
        console.log("Jabatan diperbarui:", selectedJabatan);
        setSelectedJabatan(null);
    };

    const handleDeleteJabatan = (jabatan) => {
        if (window.confirm(`Yakin ingin menghapus jabatan ${jabatan}?`)) {
            console.log("Jabatan dihapus:", jabatan);
        }
    };

    return (
        <div className="container galeri-admin my-4">
            {/* BAGAN SECTION */}
            <div className="card mb-4">
                <div className="card-header bg-primary text-white">
                    <h4 className="mb-0">Bagan Struktur Organisasi</h4>
                </div>
                <div className="card-body">
                    <div className="accordion mb-4" id="accordionBagan">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button 
                                    className="accordion-button" 
                                    type="button" 
                                    onClick={() => setShowBaganForm(!showBaganForm)}
                                >
                                    {showBaganForm ? 'Tutup Form Tambah Bagan' : 'Tambah Bagan'}
                                </button>
                            </h2>
                            <div className={`accordion-collapse collapse ${showBaganForm ? 'show' : ''}`}>
                                <div className="accordion-body">
                                    <form>
                                        <div className="mb-3">
                                            <label className="form-label">Judul Bagan</label>
                                            <input type="text" className="form-control" placeholder="Masukkan judul bagan" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Deskripsi</label>
                                            <textarea className="form-control" rows="3" placeholder="Masukkan deskripsi bagan"></textarea>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Gambar Bagan</label>
                                            <input type="file" className="form-control" accept="image/*" />
                                        </div>
                                        <button type="submit" className="btn btn-success">
                                            <IconPlus className="me-2" /> Simpan Bagan
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-3 d-flex justify-content-between align-items-center">
                        <div className="input-group w-50">
                            <span className="input-group-text"><IconSearch size={18} /></span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Cari judul bagan..."
                                value={baganSearchTerm}
                                onChange={(e) => {
                                    setBaganSearchTerm(e.target.value);
                                    setBaganCurrentPage(1);
                                }}
                            />
                        </div>
                    </div>

                    <table className="table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Judul Bagan</th>
                            <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedBaganData.length > 0 ? (
                                paginatedBaganData.map((bagan, index) => (
                                    <tr key={index}>
                                        <td>{(baganCurrentPage - 1) * itemsPerPage + index + 1}</td>
                                        <td>{bagan.title}</td>
                                        
                                        <td>
                                            <button 
                                                className="btn btn-sm btn-warning me-2" 
                                                onClick={() => setSelectedBagan(bagan)}
                                            >
                                                <IconEdit size={16} className="me-1" /> Edit
                                            </button>
                                            <button 
                                                className="btn btn-sm btn-info text-white me-2" 
                                                onClick={() => setModalBaganLihat(bagan)}
                                            >
                                                <IconEye size={16} className="me-1" /> Lihat
                                            </button>
                                            <button 
                                                className="btn btn-sm btn-danger"
                                                onClick={() => handleDeleteBagan(bagan.title)}
                                            >
                                                <IconTrash size={16} className="me-1" /> Hapus
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center text-muted">Tidak ada bagan ditemukan.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    <nav className="d-flex justify-content-end mt-3">
                        <ul className="pagination pagination-sm mb-0">
                            <li className={`page-item ${baganCurrentPage === 1 ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={() => setBaganCurrentPage(baganCurrentPage - 1)}>&laquo;</button>
                            </li>
                            {[...Array(baganTotalPages)].map((_, i) => (
                                <li key={i} className={`page-item ${baganCurrentPage === i + 1 ? 'active' : ''}`}>
                                    <button className="page-link" onClick={() => setBaganCurrentPage(i + 1)}>{i + 1}</button>
                                </li>
                            ))}
                            <li className={`page-item ${baganCurrentPage === baganTotalPages ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={() => setBaganCurrentPage(baganCurrentPage + 1)}>&raquo;</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* JABATAN SECTION */}
            <div className="card">
                <div className="card-header bg-success text-white">
                    <h4 className="mb-0">Daftar Jabatan</h4>
                </div>
                <div className="card-body">
                    <div className="accordion mb-4" id="accordionJabatan">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button 
                                    className="accordion-button" 
                                    type="button" 
                                    onClick={() => setShowJabatanForm(!showJabatanForm)}
                                >
                                    {showJabatanForm ? 'Tutup Form Tambah Jabatan' : 'Tambah Jabatan'}
                                </button>
                            </h2>
                            <div className={`accordion-collapse collapse ${showJabatanForm ? 'show' : ''}`}>
                                <div className="accordion-body">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">Jabatan</label>
                                                <input type="text" className="form-control" placeholder="Masukkan nama jabatan" />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">Nama Pejabat</label>
                                                <input type="text" className="form-control" placeholder="Masukkan nama pejabat" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">Masa Jabatan</label>
                                                <input type="text" className="form-control" placeholder="Contoh: 2023-2027" />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">Foto</label>
                                                <input type="file" className="form-control" accept="image/*" />
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-success">
                                            <IconPlus className="me-2" /> Simpan Jabatan
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-3 d-flex justify-content-between align-items-center">
                        <div className="input-group w-50">
                            <span className="input-group-text"><IconSearch size={18} /></span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Cari jabatan/nama..."
                                value={jabatanSearchTerm}
                                onChange={(e) => {
                                    setJabatanSearchTerm(e.target.value);
                                    setJabatanCurrentPage(1);
                                }}
                            />
                        </div>
                    </div>

                    <table className="table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Jabatan</th>
                                <th>Nama Pejabat</th>
                                <th>Masa Jabatan</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedJabatanData.length > 0 ? (
                                paginatedJabatanData.map((jabatan, index) => (
                                    <tr key={index}>
                                        <td>{(jabatanCurrentPage - 1) * itemsPerPage + index + 1}</td>
                                        <td>{jabatan.jabatan}</td>
                                        <td>{jabatan.nama}</td>
                                        <td>{jabatan.tahun}</td>
                                        <td>
                                            <button 
                                                className="btn btn-sm btn-warning me-2" 
                                                onClick={() => setSelectedJabatan(jabatan)}
                                            >
                                                <IconEdit size={16} className="me-1" /> Edit
                                            </button>
                                            <button 
                                                className="btn btn-sm btn-info text-white me-2" 
                                                onClick={() => setModalJabatanLihat(jabatan)}
                                            >
                                                <IconEye size={16} className="me-1" /> Lihat
                                            </button>
                                            <button 
                                                className="btn btn-sm btn-danger"
                                                onClick={() => handleDeleteJabatan(jabatan.jabatan)}
                                            >
                                                <IconTrash size={16} className="me-1" /> Hapus
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center text-muted">Tidak ada jabatan ditemukan.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    <nav className="d-flex justify-content-end mt-3">
                        <ul className="pagination pagination-sm mb-0">
                            <li className={`page-item ${jabatanCurrentPage === 1 ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={() => setJabatanCurrentPage(jabatanCurrentPage - 1)}>&laquo;</button>
                            </li>
                            {[...Array(jabatanTotalPages)].map((_, i) => (
                                <li key={i} className={`page-item ${jabatanCurrentPage === i + 1 ? 'active' : ''}`}>
                                    <button className="page-link" onClick={() => setJabatanCurrentPage(i + 1)}>{i + 1}</button>
                                </li>
                            ))}
                            <li className={`page-item ${jabatanCurrentPage === jabatanTotalPages ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={() => setJabatanCurrentPage(jabatanCurrentPage + 1)}>&raquo;</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* MODAL EDIT BAGAN */}
            {selectedBagan && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Bagan Struktur</h5>
                                <button type="button" className="btn-close" onClick={() => setSelectedBagan(null)}></button>
                            </div>
                            <form onSubmit={handleUpdateBagan}>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label className="form-label">Judul Bagan</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={selectedBagan.title}
                                            onChange={(e) => setSelectedBagan({ ...selectedBagan, title: e.target.value })}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Deskripsi</label>
                                        <textarea
                                            className="form-control"
                                            rows="3"
                                            value={selectedBagan.description}
                                            onChange={(e) => setSelectedBagan({ ...selectedBagan, description: e.target.value })}
                                        ></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Gambar Bagan</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            accept="image/*"
                                            onChange={(e) => {
                                                const file = e.target.files[0];
                                                if (file) {
                                                    const imageUrl = URL.createObjectURL(file);
                                                    setSelectedBagan({ ...selectedBagan, image: imageUrl });
                                                }
                                            }}
                                        />
                                        {selectedBagan.image && (
                                            <div className="mt-3">
                                                <img src={selectedBagan.image} alt="Preview" className="img-thumbnail" width="200" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={() => setSelectedBagan(null)}>Tutup</button>
                                    <button type="submit" className="btn btn-primary">Simpan Perubahan</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* MODAL LIHAT BAGAN */}
            {modalBaganLihat && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header bg-info text-white">
                                <h5 className="modal-title">
                                    <IconEye className="me-2" /> Detail Bagan Struktur
                                </h5>
                                <button type="button" className="btn-close" onClick={() => setModalBaganLihat(null)}></button>
                            </div>
                            <div className="modal-body">
                                <h4 className="text-center mb-4">{modalBaganLihat.title}</h4>
                                <p className="mb-4">{modalBaganLihat.description}</p>
                                {modalBaganLihat.image && (
                                    <div className="text-center">
                                        <img
                                            src={modalBaganLihat.image}
                                            alt={modalBaganLihat.title}
                                            className="img-fluid rounded shadow"
                                            style={{ maxHeight: '500px' }}
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={() => setModalBaganLihat(null)}>Tutup</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* MODAL EDIT JABATAN */}
            {selectedJabatan && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Jabatan</h5>
                                <button type="button" className="btn-close" onClick={() => setSelectedJabatan(null)}></button>
                            </div>
                            <form onSubmit={handleUpdateJabatan}>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Jabatan</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={selectedJabatan.jabatan}
                                                onChange={(e) => setSelectedJabatan({ ...selectedJabatan, jabatan: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Nama Pejabat</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={selectedJabatan.nama}
                                                onChange={(e) => setSelectedJabatan({ ...selectedJabatan, nama: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Masa Jabatan</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={selectedJabatan.tahun}
                                                onChange={(e) => setSelectedJabatan({ ...selectedJabatan, tahun: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Foto</label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                accept="image/*"
                                                onChange={(e) => {
                                                    const file = e.target.files[0];
                                                    if (file) {
                                                        const imageUrl = URL.createObjectURL(file);
                                                        setSelectedJabatan({ ...selectedJabatan, image: imageUrl });
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {selectedJabatan.image && (
                                        <div className="text-center mt-3">
                                            <img 
                                                src={selectedJabatan.image} 
                                                alt="Foto Pejabat" 
                                                className="img-thumbnail" 
                                                width="150" 
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={() => setSelectedJabatan(null)}>Tutup</button>
                                    <button type="submit" className="btn btn-primary">Simpan Perubahan</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* MODAL LIHAT JABATAN */}
            {modalJabatanLihat && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header bg-info text-white">
                                <h5 className="modal-title">
                                    <IconEye className="me-2" /> Detail Jabatan
                                </h5>
                                <button type="button" className="btn-close" onClick={() => setModalJabatanLihat(null)}></button>
                            </div>
                            <div className="modal-body text-center">
                                {modalJabatanLihat.image && (
                                    <img 
                                        src={modalJabatanLihat.image} 
                                        alt={modalJabatanLihat.nama}
                                        className="img-fluid rounded-circle mb-3 shadow"
                                        width="150"
                                        height="150"
                                    />
                                )}
                                <h4 className="fw-bold">{modalJabatanLihat.nama}</h4>
                                <h5 className="text-primary">{modalJabatanLihat.jabatan}</h5>
                                <p className="text-muted">Masa Jabatan: {modalJabatanLihat.tahun}</p>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={() => setModalJabatanLihat(null)}>Tutup</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Struktur;