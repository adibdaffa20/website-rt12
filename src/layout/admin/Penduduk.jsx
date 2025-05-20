import React, { useState } from 'react';
import { datapendudukList } from '../../data/DataPenduduk.jsx'; // pastikan data tersedia
import {
    IconPlus,
    IconEdit,
    IconEye,
    IconTrash,
    IconSearch,
    IconDownload,
    IconUpload
} from "@tabler/icons-react";

import '../../style/GaleriAdmin.css';

function Penduduk() {
    const [pendudukData, setPendudukData] = useState(datapendudukList);
    const [selectedPenduduk, setSelectedPenduduk] = useState(null);
    const [modalLihat, setModalLihat] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [showImport, setShowImport] = useState(false);
    const [file, setFile] = useState(null);

    const itemsPerPage = 5;

    const filteredData = pendudukData.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.nik.includes(searchTerm)
    );

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleUpdatePenduduk = (e) => {
        e.preventDefault();
        setPendudukData(
            pendudukData.map((item) =>
                item.id === selectedPenduduk.id ? selectedPenduduk : item
            )
        );
        setSelectedPenduduk(null);
    };

    const handleDeletePenduduk = (id) => {
        if (window.confirm("Yakin ingin menghapus data penduduk ini?")) {
            setPendudukData(pendudukData.filter((item) => item.id !== id));
        }
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleImportSubmit = (e) => {
        e.preventDefault();
        if (!file) {
            alert("Harap pilih file terlebih dahulu");
            return;
        }
        
       
        alert(`File ${file.name} berhasil diupload!`);
        setShowImport(false);
        setFile(null);
        
       
    };

    const handleDownloadFormat = () => {
     
        alert("Format Excel berhasil didownload!");
        

    };

    return (
        <div className="container galeri-admin my-4">
            <div className="tabel-galeri card p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="nama">
                        <h4>Daftar Penduduk</h4>
                        <div className="d-flex gap-2">
                            <button 
                                className="btn btn-primary btn-sm m-2" 
                                onClick={() => setShowImport(!showImport)}
                            >
                                <IconUpload size={16} className="me-1" /> Import Data
                            </button>
                            <button 
                                className="btn btn-success btn-sm m-2"
                                onClick={handleDownloadFormat}
                            >
                                <IconDownload size={16} className="me-1" /> Download Format
                            </button>
                        </div>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <div className="input-group input-group-sm">
                            <span className="input-group-text"><IconSearch size={16} /></span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Cari Nama/NIK..."
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1);
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Form Import Excel */}
                {showImport && (
                    <form onSubmit={handleImportSubmit} className="border p-3 rounded mb-4">
                        <h5 className="mb-3">Import Data Penduduk</h5>
                        <div className="mb-3">
                            <label className="form-label">Pilih File Excel</label>
                            <input
                                type="file"
                                className="form-control"
                                accept=".xlsx, .xls, .csv"
                                onChange={handleFileChange}
                                required
                            />
                            <div className="form-text">
                                Pastikan file sesuai dengan format yang telah disediakan
                            </div>
                        </div>
                        <div className="d-flex justify-content-end gap-2">
                            <button 
                                type="button" 
                                className="btn btn-secondary btn-sm" 
                                onClick={() => setShowImport(false)}
                            >
                                Batal
                            </button>
                            <button type="submit" className="btn btn-primary btn-sm">
                                <IconUpload size={16} className="me-1" /> Upload
                            </button>
                        </div>
                    </form>
                )}

                {/* Tabel Penduduk */}
                <table className="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>NIK</th>
                            <th>Nama</th>
                            <th>TTL</th>
                            <th>Alamat</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.length > 0 ? (
                            paginatedData.map((penduduk, index) => (
                                <tr key={penduduk.id}>
                                    <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                                    <td>{penduduk.nik}</td>
                                    <td>{penduduk.name}</td>
                                    <td>
                                        {penduduk.tempat_lahir}, {new Date(penduduk.tanggal_lahir).toLocaleDateString()}
                                    </td>
                                    <td>
                                        {penduduk.alamat}, RT {penduduk.rt}/RW {penduduk.rw}
                                    </td>
                                    <td>
                                        <button 
                                            className="btn btn-sm btn-warning me-2" 
                                            onClick={() => setSelectedPenduduk(penduduk)}
                                        >
                                            <IconEdit size={16} className="me-1" /> Edit
                                        </button>
                                        <button 
                                            className="btn btn-sm btn-info text-white me-2" 
                                            onClick={() => setModalLihat(penduduk)}
                                        >
                                            <IconEye size={16} className="me-1" /> Lihat
                                        </button>
                                        <button 
                                            className="btn btn-sm btn-danger" 
                                            onClick={() => handleDeletePenduduk(penduduk.id)}
                                        >
                                            <IconTrash size={16} className="me-1" /> Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center text-muted">Tidak ada data penduduk ditemukan.</td>
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
            {selectedPenduduk && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <form onSubmit={handleUpdatePenduduk}>
                                <div className="modal-header">
                                    <h5 className="modal-title">Edit Data Penduduk</h5>
                                    <button type="button" className="btn-close" onClick={() => setSelectedPenduduk(null)}></button>
                                </div>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Nama Lengkap</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={selectedPenduduk.name}
                                                onChange={(e) =>
                                                    setSelectedPenduduk({ ...selectedPenduduk, name: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">NIK</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={selectedPenduduk.nik}
                                                onChange={(e) =>
                                                    setSelectedPenduduk({ ...selectedPenduduk, nik: e.target.value })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Tempat Lahir</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={selectedPenduduk.tempat_lahir}
                                                onChange={(e) =>
                                                    setSelectedPenduduk({ ...selectedPenduduk, tempat_lahir: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Tanggal Lahir</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                value={selectedPenduduk.tanggal_lahir}
                                                onChange={(e) =>
                                                    setSelectedPenduduk({ ...selectedPenduduk, tanggal_lahir: e.target.value })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Jenis Kelamin</label>
                                            <select
                                                className="form-select"
                                                value={selectedPenduduk.jenis_kelamin}
                                                onChange={(e) =>
                                                    setSelectedPenduduk({ ...selectedPenduduk, jenis_kelamin: e.target.value })
                                                }
                                            >
                                                <option value="Laki-laki">Laki-laki</option>
                                                <option value="Perempuan">Perempuan</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Agama</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={selectedPenduduk.agama}
                                                onChange={(e) =>
                                                    setSelectedPenduduk({ ...selectedPenduduk, agama: e.target.value })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Alamat</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={selectedPenduduk.alamat}
                                            onChange={(e) =>
                                                setSelectedPenduduk({ ...selectedPenduduk, alamat: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 mb-3">
                                            <label className="form-label">RT</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={selectedPenduduk.rt}
                                                onChange={(e) =>
                                                    setSelectedPenduduk({ ...selectedPenduduk, rt: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label className="form-label">RW</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={selectedPenduduk.rw}
                                                onChange={(e) =>
                                                    setSelectedPenduduk({ ...selectedPenduduk, rw: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label className="form-label">Dusun</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={selectedPenduduk.dusun}
                                                onChange={(e) =>
                                                    setSelectedPenduduk({ ...selectedPenduduk, dusun: e.target.value })
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={() => setSelectedPenduduk(null)}>Tutup</button>
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
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header bg-info text-white">
                                <h5 className="modal-title"><IconEye className="me-2" /> Detail Penduduk</h5>
                                <button type="button" className="btn-close" onClick={() => setModalLihat(null)}></button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p><strong>NIK:</strong> {modalLihat.nik}</p>
                                        <p><strong>Nama:</strong> {modalLihat.name}</p>
                                        <p><strong>Tempat/Tanggal Lahir:</strong> {modalLihat.tempat_lahir}, {new Date(modalLihat.tanggal_lahir).toLocaleDateString()}</p>
                                        <p><strong>Jenis Kelamin:</strong> {modalLihat.jenis_kelamin}</p>
                                        <p><strong>Agama:</strong> {modalLihat.agama}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p><strong>Alamat:</strong> {modalLihat.alamat}</p>
                                        <p><strong>RT/RW:</strong> {modalLihat.rt}/{modalLihat.rw}</p>
                                        <p><strong>Dusun:</strong> {modalLihat.dusun}</p>
                                        <p><strong>Desa:</strong> {modalLihat.desa}</p>
                                        <p><strong>Kecamatan:</strong> {modalLihat.kecamatan}</p>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <p><strong>Status Perkawinan:</strong> {modalLihat.status_perkawinan}</p>
                                        <p><strong>Pekerjaan:</strong> {modalLihat.pekerjaan}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p><strong>Pendidikan Terakhir:</strong> {modalLihat.pendidikan_terakhir}</p>
                                        <p><strong>Kewarganegaraan:</strong> {modalLihat.kewarganegaraan}</p>
                                    </div>
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

export default Penduduk;