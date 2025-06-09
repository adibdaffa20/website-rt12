import React, { useState } from 'react';
import '../../style/BeritaAdmin.css'
import {
    IconCalendar,
    IconUser,
    IconTextCaption,
    IconFileDescription,
    IconPhoto,
    IconPlus,
    IconEdit,
    IconEye,
    IconTrash,
    IconSearch
} from "@tabler/icons-react";

function Berita() {
    const [showForm, setShowForm] = useState(false);
    const [selectedBerita, setSelectedBerita] = useState(null);

    const toggleForm = () => setShowForm(!showForm);

    const handleEdit = (berita) => setSelectedBerita(berita);
    const handleCloseModal = () => setSelectedBerita(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const [modalLihat, setModalLihat] = useState(null);



    // Filter dan sorting
    const filteredData = beritaList
        .filter((berita) =>
            berita.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleUpdateBerita = (e) => {
        e.preventDefault();
        console.log("Berita diperbarui:", selectedBerita);
        handleCloseModal(); 
    };


    return (
        <div className='container my-4 berita-admin'>
            {/* Accordion for Tambah Berita */}
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" onClick={toggleForm}>
                            {showForm ? 'Tutup Form Tambah Berita' : 'Tambah Berita'}
                        </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${showForm ? 'show' : ''}`}>
                        <div className="accordion-body">
                            {/* Form Tambah Berita */}
                            <form>
                                <div className="mb-3">
                                    <label className="form-label d-flex align-items-center">
                                        <IconTextCaption className="me-2" size={20} />
                                        Judul
                                    </label>
                                    <input type="text" className="form-control" placeholder="Masukkan judul berita" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label d-flex align-items-center">
                                        <IconCalendar className="me-2" size={20} />
                                        Tanggal
                                    </label>
                                    <input type="date" className="form-control" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label d-flex align-items-center">
                                        <IconUser className="me-2" size={20} />
                                        Penulis
                                    </label>
                                    <input type="text" className="form-control" placeholder="Masukkan nama penulis" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label d-flex align-items-center">
                                        <IconFileDescription className="me-2" size={20} />
                                        Deskripsi
                                    </label>
                                    <textarea className="form-control" rows="4" placeholder="Tulis deskripsi berita"></textarea>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label d-flex align-items-center">
                                        <IconPhoto className="me-2" size={20} />
                                        Gambar
                                    </label>
                                    <input type="file" className="form-control" accept="image/*" />
                                </div>

                                <button type="submit" className="btn btn-success d-flex align-items-center">
                                    <IconPlus className="me-2" size={20} />
                                    Simpan
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabel Berita */}
            <div className="tabel-berita mt-4 card p-4 shadow-sm border-0">
                <div className="mb-4 d-flex justify-content-between align-items-center">
                    <h4>Daftar Berita</h4>

                    <div className="input-group w-50">
                        <span className="input-group-text"><IconSearch size={18} /></span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Cari judul berita..."
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setCurrentPage(1);
                            }}
                        />
                    </div>
                </div>


                <table className="table ">
                    <thead className="table">
                        <tr>
                            <th>No</th>
                            <th>Judul</th>
                            <th>Tanggal</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.length > 0 ? (
                            paginatedData.map((berita, index) => (
                                <tr key={berita.id}>
                                    <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                                    <td>{berita.title}</td>
                                    <td>{berita.date}</td>
                                    <td>
                                        <button
                                            className="btn btn-sm btn-warning me-2"
                                            onClick={() => handleEdit(berita)}
                                        >
                                            <IconEdit size={16} className="me-1" /> Edit
                                        </button>
                                        <button
                                            className="btn btn-sm btn-info text-white me-2"
                                            onClick={() => setModalLihat(berita)}
                                        >
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
                                <td colSpan="4" className="text-center text-muted">
                                    Tidak ada berita ditemukan.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                {/* Pagination */}
                <nav className="d-flex justify-content-end">
                    <ul className="pagination pagination-sm mb-0">
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                            <button
                                className="page-link"
                                onClick={() => setCurrentPage(currentPage - 1)}
                            >
                                &laquo;
                            </button>
                        </li>
                        {[...Array(totalPages)].map((_, i) => (
                            <li
                                key={i}
                                className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
                            >
                                <button
                                    className="page-link"
                                    onClick={() => setCurrentPage(i + 1)}
                                >
                                    {i + 1}
                                </button>
                            </li>
                        ))}
                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                            <button
                                className="page-link"
                                onClick={() => setCurrentPage(currentPage + 1)}
                            >
                                &raquo;
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Modal Edit */}
            {selectedBerita && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Berita</h5>
                                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                            </div>
                            <form onSubmit={handleUpdateBerita}>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label className="form-label">Judul</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={selectedBerita.title}
                                            onChange={(e) => setSelectedBerita({ ...selectedBerita, title: e.target.value })}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Tanggal</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            value={selectedBerita.date}
                                            onChange={(e) => setSelectedBerita({ ...selectedBerita, date: e.target.value })}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Deskripsi</label>
                                        <textarea
                                            className="form-control"
                                            rows="4"
                                            value={selectedBerita.desc}
                                            onChange={(e) => setSelectedBerita({ ...selectedBerita, desc: e.target.value })}
                                        ></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Penulis</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={selectedBerita.author}
                                            onChange={(e) => setSelectedBerita({ ...selectedBerita, author: e.target.value })}
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
                                                    setSelectedBerita({ ...selectedBerita, image: imageUrl, imageFile: file });
                                                }
                                            }}
                                        />
                                        {selectedBerita.image && (
                                            <div className="mt-3">
                                                <img src={selectedBerita.image} alt="Preview" className="img-thumbnail" width="200" />
                                            </div>
                                        )}
                                    </div>

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Tutup</button>
                                    <button type="submit" className="btn btn-primary">Simpan Perubahan</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}


            {modalLihat && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content shadow">
                            <div className="modal-header bg-info text-white">
                                <h5 className="modal-title">
                                    <IconEye className="me-2" /> Detail Berita
                                </h5>
                                <button type="button" className="btn-close" onClick={() => setModalLihat(null)}></button>
                            </div>
                            <div className="modal-body">
                                <h4 className="fw-bold">{modalLihat.title}</h4>
                                <p className="text-muted mb-2">
                                    <strong>Tanggal:</strong> {modalLihat.date} <br />
                                    <strong>Penulis:</strong> {modalLihat.author}
                                </p>
                                <hr />
                                <div className="mb-3">
                                    <strong>Deskripsi:</strong>
                                    <p className="mt-1">{modalLihat.desc}</p>
                                </div>
                                {modalLihat.image && (
                                    <div className="text-center">
                                        <img
                                            src={modalLihat.image}
                                            alt="Gambar Berita"
                                            className="img-fluid rounded shadow"
                                            style={{ maxHeight: '300px', objectFit: 'cover' }}
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={() => setModalLihat(null)}>
                                    Tutup
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Berita;
