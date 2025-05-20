import React, { useState } from 'react';
import { beliList } from '../../data/BeliList.jsx'; 
import {
    IconPlus,
    IconEdit,
    IconEye,
    IconTrash,
    IconSearch
} from "@tabler/icons-react";

import '../../style/GaleriAdmin.css';

function ProdukUMKM() {
    const [produkData, setProdukData] = useState(beliList);
    const [selectedProduk, setSelectedProduk] = useState(null);
    const [modalLihat, setModalLihat] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        harga: '',
        description: '',
        kategori: 'sembako',
        jumlah: 0,
        penjual: 'Toko Saya',
        whatsapp: '081234567890',
        image: '/img/default-product.jpg'
    });

    const itemsPerPage = 5;

    const filteredData = produkData.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.kategori.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleAddProduk = (e) => {
        e.preventDefault();
        // Validasi form
        if (!formData.name || !formData.harga || !formData.description || !formData.jumlah) {
            alert("Harap lengkapi semua data yang diperlukan.");
            return;
        }
        
        // Generate ID baru
        const newId = produkData.length > 0 ? Math.max(...produkData.map(p => p.id)) + 1 : 1;
        
        // Tambahkan produk baru
        const newProduk = {
            ...formData,
            id: newId,
            id_penjual: 1 
        };
        
        setProdukData([...produkData, newProduk]);
        setFormData({
            name: '',
            harga: '',
            description: '',
            kategori: 'sembako',
            jumlah: 0,
            penjual: 'Toko Saya',
            whatsapp: '081234567890',
            image: '/img/default-product.jpg'
        });
        setShowForm(false);
    };

    const handleUpdateProduk = (e) => {
        e.preventDefault();
        setProdukData(
            produkData.map((item) =>
                item.id === selectedProduk.id ? selectedProduk : item
            )
        );
        setSelectedProduk(null);
    };

    const handleDeleteProduk = (id) => {
        if (window.confirm("Yakin ingin menghapus produk ini?")) {
            setProdukData(produkData.filter((item) => item.id !== id));
        }
    };

    return (
        <div className="container galeri-admin my-4">
            <div className="tabel-galeri card shadow-sm border-0 p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="nama">
                        <h4>Daftar Produk UMKM</h4>
                        <button className="btn btn-primary btn-sm m-2" onClick={() => setShowForm(!showForm)}>
                            <IconPlus size={16} className="me-1" /> Tambah Produk
                        </button>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <div className="input-group input-group-sm">
                            <span className="input-group-text"><IconSearch size={16} /></span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Cari produk..."
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1);
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Form Tambah Produk */}
                {showForm && (
                    <form onSubmit={handleAddProduk} className="border p-3 rounded mb-4">
                        <h5 className="mb-3">Form Tambah Produk</h5>
                        <div className="row mb-2">
                            <div className="col-md-6 mb-2">
                                <label className="form-label">Nama Produk</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="col-md-6 mb-2">
                                <label className="form-label">Harga (Rp)</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={formData.harga}
                                    onChange={(e) => setFormData({ ...formData, harga: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="col-md-6 mb-2">
                                <label className="form-label">Kategori</label>
                                <select
                                    className="form-select"
                                    value={formData.kategori}
                                    onChange={(e) => setFormData({ ...formData, kategori: e.target.value })}
                                >
                                    <option value="sembako">Sembako</option>
                                    <option value="obat">Obat</option>
                                    <option value="kue">Kue</option>
                                    <option value="minuman">Minuman</option>
                                    <option value="lainnya">Lainnya</option>
                                </select>
                            </div>
                            <div className="col-md-6 mb-2">
                                <label className="form-label">Jumlah Stok</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={formData.jumlah}
                                    onChange={(e) => setFormData({ ...formData, jumlah: parseInt(e.target.value) || 0 })}
                                    required
                                />
                            </div>
                            <div className="col-12 mb-2">
                                <label className="form-label">Deskripsi Produk</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    required
                                ></textarea>
                            </div>
                            <div className="col-md-6 mb-2">
                                <label className="form-label">Nomor WhatsApp</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={formData.whatsapp}
                                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                />
                            </div>
                            <div className="col-md-6 mb-2">
                                <label className="form-label">Gambar Produk (URL)</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={formData.image}
                                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="d-flex justify-content-end gap-2">
                            <button type="button" className="btn btn-secondary btn-sm" onClick={() => setShowForm(false)}>Batal</button>
                            <button type="submit" className="btn btn-success btn-sm">Simpan</button>
                        </div>
                    </form>
                )}

                {/* Tabel Produk */}
                <table className="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Gambar</th>
                            <th>Nama Produk</th>
                            <th>Harga</th>
                            <th>Stok</th>
                            <th>Kategori</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.length > 0 ? (
                            paginatedData.map((produk, index) => (
                                <tr key={produk.id}>
                                    <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                                    <td>
                                        <img 
                                            src={produk.image} 
                                            alt={produk.name} 
                                            style={{width: '50px', height: '50px', objectFit: 'cover'}} 
                                        />
                                    </td>
                                    <td>{produk.name}</td>
                                    <td>Rp {produk.harga}</td>
                                    <td>{produk.jumlah}</td>
                                    <td>{produk.kategori}</td>
                                    <td>
                                        <button className="btn btn-sm btn-warning me-2" onClick={() => setSelectedProduk(produk)}>
                                            <IconEdit size={16} className="me-1" /> Edit
                                        </button>
                                        <button className="btn btn-sm btn-info text-white me-2" onClick={() => setModalLihat(produk)}>
                                            <IconEye size={16} className="me-1" /> Lihat
                                        </button>
                                        <button className="btn btn-sm btn-danger" onClick={() => handleDeleteProduk(produk.id)}>
                                            <IconTrash size={16} className="me-1" /> Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="text-center text-muted">Tidak ada produk ditemukan.</td>
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
            {selectedProduk && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form onSubmit={handleUpdateProduk}>
                                <div className="modal-header">
                                    <h5 className="modal-title">Edit Produk</h5>
                                    <button type="button" className="btn-close" onClick={() => setSelectedProduk(null)}></button>
                                </div>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Nama Produk</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={selectedProduk.name}
                                                onChange={(e) =>
                                                    setSelectedProduk({ ...selectedProduk, name: e.target.value })
                                                }
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Harga (Rp)</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={selectedProduk.harga}
                                                onChange={(e) =>
                                                    setSelectedProduk({ ...selectedProduk, harga: e.target.value })
                                                }
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Kategori</label>
                                            <select
                                                className="form-select"
                                                value={selectedProduk.kategori}
                                                onChange={(e) =>
                                                    setSelectedProduk({ ...selectedProduk, kategori: e.target.value })
                                                }
                                            >
                                                <option value="sembako">Sembako</option>
                                                <option value="obat">Obat</option>
                                                <option value="kue">Kue</option>
                                                <option value="minuman">Minuman</option>
                                                <option value="lainnya">Lainnya</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Jumlah Stok</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={selectedProduk.jumlah}
                                                onChange={(e) =>
                                                    setSelectedProduk({ ...selectedProduk, jumlah: parseInt(e.target.value) || 0 })
                                                }
                                                required
                                            />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label className="form-label">Deskripsi Produk</label>
                                            <textarea
                                                className="form-control"
                                                rows="3"
                                                value={selectedProduk.description}
                                                onChange={(e) =>
                                                    setSelectedProduk({ ...selectedProduk, description: e.target.value })
                                                }
                                                required
                                            ></textarea>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Nomor WhatsApp</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={selectedProduk.whatsapp}
                                                onChange={(e) =>
                                                    setSelectedProduk({ ...selectedProduk, whatsapp: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Gambar Produk (URL)</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={selectedProduk.image}
                                                onChange={(e) =>
                                                    setSelectedProduk({ ...selectedProduk, image: e.target.value })
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={() => setSelectedProduk(null)}>Tutup</button>
                                    <button type="submit" className="btn btn-primary">Simpan Perubahan</button>
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
                                <h5 className="modal-title"><IconEye className="me-2" /> Detail Produk</h5>
                                <button type="button" className="btn-close" onClick={() => setModalLihat(null)}></button>
                            </div>
                            <div className="modal-body">
                                <div className="text-center mb-3">
                                    <img 
                                        src={modalLihat.image} 
                                        alt={modalLihat.name} 
                                        className="img-fluid rounded"
                                        style={{maxHeight: '200px'}}
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p><strong>Nama Produk:</strong> {modalLihat.name}</p>
                                        <p><strong>Harga:</strong> Rp {modalLihat.harga}</p>
                                        <p><strong>Kategori:</strong> {modalLihat.kategori}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p><strong>Stok Tersedia:</strong> {modalLihat.jumlah}</p>
                                        <p><strong>Penjual:</strong> {modalLihat.penjual}</p>
                                        <p><strong>WhatsApp:</strong> {modalLihat.whatsapp}</p>
                                    </div>
                                    <div className="col-12">
                                        <p><strong>Deskripsi:</strong></p>
                                        <p>{modalLihat.description}</p>
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

export default ProdukUMKM;