import React, { useState, useRef } from 'react';
import {sambutanList} from '../../data/SambutanList';
import {
    IconEdit,
    IconEye
} from "@tabler/icons-react";

import '../../style/GaleriAdmin.css';

function Profile() {
    // State untuk masing-masing data profile
    const [visimisi, setVisimisi] = useState(visimisiList[0]);
    const [sejarah, setSejarah] = useState(sejarahList[0]);
    const [keunggulan, setKeunggulan] = useState(keunggulanList[0]);
    const [batas, setBatas] = useState(batasList[0]);
    const [sambutan, setSambutan] = useState(sambutanList[0]);
    
    // State untuk modal edit
    const [editMode, setEditMode] = useState(null);
    const [modalData, setModalData] = useState(null);

     const fileInputRef = useRef(null);
    const [previewImage, setPreviewImage] = useState(null);
const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
        
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
                setModalData({
                    ...modalData,
                    foto: file 
                });
            };
            reader.readAsDataURL(file);
        }
    };

    // Fungsi untuk trigger file input
    const triggerFileInput = () => {
        fileInputRef.current.click();
    };
    // Fungsi untuk handle update data
    const handleUpdateProfile = (e) => {
        e.preventDefault();
        
        switch(editMode) {
            case 'visimisi':
                setVisimisi(modalData);
                break;
            case 'sejarah':
                setSejarah(modalData);
                break;
            case 'keunggulan':
                setKeunggulan(modalData);
                break;
            case 'batas':
                setBatas(modalData);
                break;
            case 'sambutan':
                setSambutan(modalData);
                break;
            default:
                break;
        }
        
        setEditMode(null);
        setModalData(null);
    };

    // Fungsi untuk membuka modal edit
    const openEditModal = (mode, currentData) => {
        setEditMode(mode);
        setModalData({...currentData});
    };

    return (
        <div className="container galeri-admin my-4">
            <div className="tabel-galeri card shadow-sm border-0 p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4>Profil Desa Wisata</h4>
                </div>

                {/* Bagian Sambutan Kepala Desa */}
                <div className="card mb-4">
                    <div className="card-header d-flex justify-content-between align-items-center bg-light">
                        <h5 className="mb-0">Sambutan Ketua RT</h5>
                        <button 
                            className="btn btn-sm btn-warning"
                            onClick={() => openEditModal('sambutan', sambutan)}
                        >
                            <IconEdit size={16} className="me-1" /> Edit
                        </button>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3 text-center">
                                <img 
                                    src={sambutan.foto} 
                                    alt={sambutan.nama} 
                                    className="img-fluid rounded-circle mb-3"
                                    style={{width: '150px', height: '150px', objectFit: 'cover'}}
                                />
                                <h5>{sambutan.nama}</h5>
                                <p className="text-muted">{sambutan.jabatan}</p>
                            </div>
                            <div className="col-md-9">
                                <p>{sambutan.sambutan}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Edit */}
            {editMode && modalData && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <form onSubmit={handleUpdateProfile}>
                                <div className="modal-header">
                                    <h5 className="modal-title">Edit {editMode === 'visimisi' ? 'Visi Misi' : 
                                        editMode === 'sejarah' ? 'Sejarah' : 
                                        editMode === 'keunggulan' ? 'Keunggulan' : 
                                        editMode === 'batas' ? 'Batas Wilayah' : 'Sambutan'}</h5>
                                    <button type="button" className="btn-close" onClick={() => {
                                        setEditMode(null);
                                        setModalData(null);
                                    }}></button>
                                </div>
                                <div className="modal-body">
                                    {editMode === 'visimisi' && (
                                        <>
                                            <div className="mb-3">
                                                <label className="form-label">Visi</label>
                                                <textarea
                                                    className="form-control"
                                                    rows="3"
                                                    value={modalData.visi}
                                                    onChange={(e) => setModalData({...modalData, visi: e.target.value})}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Misi</label>
                                                <textarea
                                                    className="form-control"
                                                    rows="5"
                                                    value={modalData.misi}
                                                    onChange={(e) => setModalData({...modalData, misi: e.target.value})}
                                                />
                                            </div>
                                        </>
                                    )}
                                    
                                    {(editMode === 'sejarah' || editMode === 'keunggulan') && (
                                        <div className="mb-3">
                                            <label className="form-label">
                                                {editMode === 'sejarah' ? 'Sejarah Desa' : 'Keunggulan Desa'}
                                            </label>
                                            <textarea
                                                className="form-control"
                                                rows="8"
                                                value={modalData[editMode]}
                                                onChange={(e) => setModalData({[editMode]: e.target.value})}
                                            />
                                        </div>
                                    )}
                                    
                                    {editMode === 'batas' && (
                                        <>
                                            <div className="mb-3">
                                                <label className="form-label">Deskripsi</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={modalData.description}
                                                    onChange={(e) => setModalData({...modalData, description: e.target.value})}
                                                />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <label className="form-label">Batas Barat</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={modalData.batasBarat}
                                                        onChange={(e) => setModalData({...modalData, batasBarat: e.target.value})}
                                                    />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label className="form-label">Batas Selatan</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={modalData.batasSelatan}
                                                        onChange={(e) => setModalData({...modalData, batasSelatan: e.target.value})}
                                                    />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label className="form-label">Batas Timur</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={modalData.batasTimur}
                                                        onChange={(e) => setModalData({...modalData, batasTimur: e.target.value})}
                                                    />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label className="form-label">Batas Utara</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={modalData.batasUtara}
                                                        onChange={(e) => setModalData({...modalData, batasUtara: e.target.value})}
                                                    />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label className="form-label">Luas Desa (m²)</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={modalData.luasDesa}
                                                        onChange={(e) => setModalData({...modalData, luasDesa: e.target.value})}
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    
                                    {editMode === 'sambutan' && (
                                        <>
                                            <div className="mb-3">
                                                <label className="form-label">Nama</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={modalData.nama}
                                                    onChange={(e) => setModalData({...modalData, nama: e.target.value})}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Jabatan</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={modalData.jabatan}
                                                    onChange={(e) => setModalData({...modalData, jabatan: e.target.value})}
                                                />
                                            </div>
                                            <div className="mb-3">
                                            <label className="form-label">Foto</label>
                                            <input
                                                type="file"
                                                ref={fileInputRef}
                                                onChange={handleFileChange}
                                                accept="image/*"
                                                className="d-none"
                                            />
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="border rounded p-2" style={{ width: '150px', height: '150px' }}>
                                                    {previewImage || modalData.foto ? (
                                                        <img 
                                                            src={previewImage || modalData.foto} 
                                                            alt="Preview" 
                                                            className="img-fluid h-100 w-100 object-fit-cover"
                                                        />
                                                    ) : (
                                                        <div className="d-flex justify-content-center align-items-center h-100 text-muted">
                                                            No Image
                                                        </div>
                                                    )}
                                                </div>
                                                <button 
                                                    type="button" 
                                                    className="btn btn-outline-secondary"
                                                    onClick={triggerFileInput}
                                                >
                                                    Pilih Foto
                                                </button>
                                            </div>
                                            <small className="text-muted">Format: JPG, PNG. Maksimal 2MB</small>
                                        </div>
                                            <div className="mb-3">
                                                <label className="form-label">Sambutan</label>
                                                <textarea
                                                    className="form-control"
                                                    rows="5"
                                                    value={modalData.sambutan}
                                                    onChange={(e) => setModalData({...modalData, sambutan: e.target.value})}
                                                />
                                            </div>
                                        </>
                                    )}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={() => {
                                        setEditMode(null);
                                        setModalData(null);
                                    }}>Tutup</button>
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

export default Profile;