import React, { useState } from 'react';
import { IconMessage2 } from '@tabler/icons-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const FloatingAduanModal = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => setShowModal(!showModal);

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={toggleModal}
                className="btn btn-light rounded-circle shadow position-fixed"
                style={{
                    bottom: '30px',
                    right: '30px',
                    zIndex: 1050,
                    opacity: 0.85,
                    width: '60px',
                    height: '60px',
                }}
                title="Laporkan Aduan"
            >
                <IconMessage2 size={30} className="text-primary" />
            </button>

            {/* Modal */}
            {showModal && (
                <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header bg-primary text-white">
                                <h5 className="modal-title">Form Aduan</h5>
                                <button type="button" className="btn-close" onClick={toggleModal}></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="nama" className="form-label">Nama</label>
                                        <input type="text" className="form-control" id="nama" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="jenis" className="form-label">Jenis Aduan</label>
                                        <select className="form-select" id="jenis">
                                            <option>Pilih jenis aduan</option>
                                            <option value="teknis">Teknis</option>
                                            <option value="layanan">Layanan</option>
                                            <option value="lainnya">Lainnya</option>
                                        </select>
                                    </div> 
                                    <div className="mb-3">
                                        <label htmlFor="isi" className="form-label">Isi Aduan</label>
                                        <textarea className="form-control" id="isi" rows="3"></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="foto" className="form-label">Foto (Opsional)</label>
                                        <input type="file" className="form-control" id="foto" />
                                    </div>
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary">Kirim Aduan</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FloatingAduanModal;
